#!/usr/bin/env python
import time
from autobahn.asyncio.websocket import WebSocketServerProtocol
import trollius as asyncio
from autobahn.asyncio.websocket import WebSocketServerFactory
import rospy
from geometry_msgs.msg import Twist, TransformStamped
from tf2_msgs.msg import TFMessage
import json

message_map = {}
def source_cb(msg):
    global message_map
    global cnt 
    for i in range(len(msg.transforms)):
        header = msg.transforms[i].header
        transform = msg.transforms[i].transform
        a = {'ts': '%d.%d' % (header.stamp.secs, header.stamp.nsecs), 
             'translation': '%f, %f, %f' % (transform.translation.x, 
             transform.translation.y, transform.translation.z),
             'rotation': '%f, %f, %f, %f' % (transform.rotation.x, transform.rotation.y,
             transform.rotation.z, transform.rotation.w)
        }
        message_map[header.frame_id] = json.dumps(a)


class MyServerProtocol(WebSocketServerProtocol):

    def onConnect(self, request):
        print("Client connecting: {}".format(request.peer))

    def onOpen(self):
        print("WebSocket connection open.")

    def onMessage(self, payload, isBinary):
        global message_map
        # echo back message verbatim
        self.sendMessage(json.dumps(message_map), isBinary)
        time.sleep(0.5)
        print(json.dumps(message_map))

    def onClose(self, wasClean, code, reason):
        print("WebSocket connection closed: {}".format(reason))

if __name__ == '__main__':

    factory = WebSocketServerFactory(u"ws://127.0.0.1:10101")
    factory.protocol = MyServerProtocol

    rospy.init_node('publish_human_state')
    pub  = rospy.Subscriber('/tf', TFMessage, source_cb)
    loop = asyncio.get_event_loop()
    coro = loop.create_server(factory, '0.0.0.0', 10101)
    server = loop.run_until_complete(coro)

    try:
        loop.run_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.close()
        loop.close()
