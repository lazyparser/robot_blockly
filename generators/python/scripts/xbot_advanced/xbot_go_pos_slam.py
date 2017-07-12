import rospy
import rosnode
import math
from tf.transformations import quaternion_from_euler
from nav_msgs.msg import Odometry
from geometry_msgs.msg import PointStamped, PoseStamped, Quaternion

#check if slam get started
ros_nodes = rosnode.get_node_names()
if ('/gmapping' not in ros_nodes) or ('/move_base' not in ros_nodes):
    print('SLAM not started')

else:
    print('Move in SLAM mode')
    rospy.init_node('xbot_go_pos_slam')
    odom_data = rospy.wait_for_message('/odom',Odometry,timeout=5)
    
    # TODO: implemented in generators/python/xbot.js blockly
    # get x_pos, y_pos, and quaternion of new goal
    #x_pos = 
    #y_pos = 
    #yaw =
    
    
    #create goal
    goal = PoseStamped()
    goal.header = odom_data.header
    #cal goal_x, goal_y
    goal.pose.position.x = float(x_pos)
    goal.pose.position.y = float(y_pos)
    goal.pose.position.z = 0.0
    #cal quaternion
    quat = quaternion_from_euler(0, 0, float(yaw))
    goal.pose.orientation.x = quat[0]
    goal.pose.orientation.y = quat[1]
    goal.pose.orientation.z = quat[2]
    goal.pose.orientation.w = quat[3]

    #publish goal
    pub = rospy.Publisher('/move_base_simple/goal', PoseStamped, queue_size=1)
    #begin to publish after subscriber connection established, or the subscriber might get lost
    r = rospy.Rate(10)
    while pub.get_num_connections() == 0: #if there's more than 1 connections, pub goal would fail
        r.sleep()
    pub.publish(goal) 
    print(pub.get_num_connections())

   
