import rospy
import rosnode
import math
from tf.transformations import euler_from_quaternion
from nav_msgs.msg import Odometry
from geometry_msgs.msg import PointStamped, PoseStamped, Quaternion

#check if slam get started
ros_nodes = rosnode.get_node_names()
if ('/gmapping' not in ros_nodes) or ('/move_base' not in ros_nodes):
    print('SLAM not started')

else:
    print('Move in SLAM mode')
    rospy.init_node('xbot_move_slam')
    odom_data = rospy.wait_for_message('/odom',Odometry,timeout=5)
    
    # TODO: 
    # get x_pos, y_pos, and quaternion of new goal
    # x_pos = 
    # y_pos = 
    # yaw =
    
    
    #create goal
    goal = PoseStamped()
    goal.header = odom_data.header
    #cal goal_x, goal_y
    goal.pose.position.x = x_pos
    goal.pose.position.y = y_pos
    goal.pose.position.z = 0.0
    #goal.pose.orientation = euler_to_quaternion()

    #publish goal
    pub = rospy.Publisher('/move_base_simple/goal', PoseStamped, queue_size=1)
    #begin to publish after subscriber connection established, or the subscriber might get lost
    r = rospy.Rate(10)
    while pub.get_num_connections() == 0: #if there's more than 1 connections, pub goal would fail
        r.sleep()
    pub.publish(goal) 
    print(pub.get_num_connections())

    #while moving:
    #    r.sleep()
