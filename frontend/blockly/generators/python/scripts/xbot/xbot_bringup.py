#import roslaunch

#package = 'xbot_bringup'
#executable = 'xbot_rplidar.launch'
#node = roslaunch.core.Node(package, executable)

#launch = roslaunch.scriptapi.ROSLaunch()
#launch.start()

#process = launch.launch(node)
#print process.is_alive()
#process.stop()


#use bash instead of ROS python
import sys
import time
import rospy
import std_msgs.msg
from geometry_msgs.msg import Twist
import os
os.system('roslaunch xbot_bringup xbot.launch &')
os.system('sleep 4')
