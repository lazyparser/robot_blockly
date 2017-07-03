#!/usr/bin/env python
import sys
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler
import os
from rospkg import RosPack

rp = RosPack()
frontend_path = rp.get_path('robot_blockly')
frontend_path += '/frontend'
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
