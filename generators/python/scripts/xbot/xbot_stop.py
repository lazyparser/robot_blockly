import rospy
import std_msgs.msg
from geometry_msgs.msg import Twist

if 'move_pub' not in locals():
 move_pub = rospy.Publisher('/cmd_vel_mux/input/teleop', Twist, queue_size=100)
 msg = Twist()

msg.linear.x = 0.0
msg.angular.z = 0.0

move_pub.publish(msg)
rate = rospy.Rate(50)
rate.sleep()
