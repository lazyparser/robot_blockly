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

move_vel = float(move_speed)/100.
if "forward" is dropdown_direction:
 msg.linear.x = move_vel
else:
 msg.linear.x = -move_vel

rate = rospy.Rate(20)

################
##    MOVE    ##
################ 

start = time.time()

flag = True
while not rospy.is_shutdown() and flag:
 sample_time = time.time()
 if ((sample_time - start) * move_vel * 100 > float(centimeters)):  #if Xbot moves more than given distance. 
  flag=False
 pub.publish(msg)
 rate.sleep() 
