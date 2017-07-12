print('xbot begin to move')
import sys
import time
import rospy
import std_msgs.msg
from geometry_msgs.msg import Twist
   

################
## INITIALIZE ##
################ 
pub = rospy.Publisher('/cmd_vel_mux/input/teleop', Twist, queue_size=100)

msg = Twist()
turn_vel = float(turn_speed)*3.1416/180
if "left" is dropdown_direction:
 msg.angular.z = turn_vel
else:
 msg.angular.z = -turn_vel

rate = rospy.Rate(20)

################
##    MOVE    ##
################ 

turn_time = float(turn_time)+0.1 ##manual time calibration

start = time.time()

flag = True
while not rospy.is_shutdown() and flag:
 sample_time = time.time()
 if ((sample_time - start) > turn_time):
  flag=False
 pub.publish(msg)
 rate.sleep() 
