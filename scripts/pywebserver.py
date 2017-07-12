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


commands = [
	    'roslaunch pr2_description upload_pr2.launch && rosrun robot_state_publisher robot_state_publisher',\
	    'rosparam set use_gui true',\
	    'rosparam set source_list "[\'new_joint_status\']"',\
	    'rosrun joint_state_publisher joint_state_publisher',\
	    'rosrun tf2_web_republisher tf2_web_republisher', \
	    'roslaunch rosbridge_server rosbridge_websocket.launch'
]
import time
for command in commands:
       subprocess.Popen(command, stdout=subprocess.PIPE, shell=True)
       time.sleep(5)

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
