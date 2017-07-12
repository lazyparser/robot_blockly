import rospy
import subprocess
import rosnode
import rospkg
from sensor_msgs.msg import LaserScan
ros_nodes = rosnode.get_node_names()
#if not '/rplidarNode' in ros_nodes:
#  rospack = rospkg.RosPack()
#  command = rospack.get_path('rplidar_ros').replace('share', 'lib') + '/lrm30'
#  process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
msg_laser = rospy.wait_for_message('/scan', LaserScan, timeout=1)
