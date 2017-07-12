import rospy
import std_msgs.msg
from geometry_msgs.msg import Twist

if 'move_pub' not in locals():
 move_pub = rospy.Publisher('/cmd_vel_mux/input/teleop', Twist, queue_size=100)
 msg = Twist()

move_vel = float(move_speed)/100.
if "forward" is dropdown_direction:
 msg.linear.x = move_vel
else:
 msg.linear.x = -move_vel

move_pub.publish(msg)
rate = rospy.Rate(50)
rate.sleep()
