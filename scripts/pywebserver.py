#!/usr/bin/env python
import sys
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler
import os
from rospkg import RosPack

rp = RosPack()
frontend_path = rp.get_path('robot_blockly')
frontend_path += '/frontend'
print("Changing serve path to: " + frontend_path)
import subprocess


commands = ['rosrun interactive_marker_tutorials basic_controls', \
	    'rosrun interactive_marker_proxy proxy topic_ns:=/basic_controls target_frame:=/rotating_frame',\
	    'rosrun tf2_web_republisher tf2_web_republisher',\
	    'roslaunch rosbridge_server rosbridge_websocket.launch']

'''
commands = ['roslaunch pr2_description upload_pr2.launch',\
	    'rosrun robot_state_publisher robot_state_publisher',\
	    'rosparam set use_gui true',\
	    'rosrun joint_state_publisher joint_state_publisher',\
	    'rosrun tf2_web_republisher tf2_web_republisher', \
	    'roslaunch rosbridge_server rosbridge_websocket.launch']
'''

for command in commands:
       subprocess.Popen(command, stdout=subprocess.PIPE, shell=True)
os.chdir(frontend_path)


HandlerClass = SimpleHTTPRequestHandler
ServerClass  = BaseHTTPServer.HTTPServer
Protocol     = "HTTP/1.0"
port         = 1036
server_address = ('127.0.0.1', port)
HandlerClass.protocol_version = Protocol
httpd = ServerClass(server_address, HandlerClass)
 
sa = httpd.socket.getsockname()
print "Serving HTTP on", sa[0], "port", sa[1], "..."
httpd.serve_forever()
