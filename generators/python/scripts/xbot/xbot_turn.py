import rospy
import std_msgs.msg
from geometry_msgs.msg import Twist
   

################
## INITIALIZE ##
################ 
if 'move_pub' not in locals():
 move_pub = rospy.Publisher('/cmd_vel_mux/input/teleop', Twist, queue_size=100)
 msg = Twist()

turn_vel = float(turn_speed)*3.1416/180
if "left" is dropdown_direction:
 msg.angular.z = turn_vel
else:
 msg.angular.z = -turn_vel

################
##    MOVE    ##
################ 
move_pub.publish(msg)
rate = rospy.Rate(50)
rate.sleep()
