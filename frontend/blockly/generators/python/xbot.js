/**
 * @license
 *
 * Copyright 2015 Erle Robotics
 * http://erlerobotics.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for Erle-Spider.
 * @author inigo@erlerobot.com (Iñigo Muguruza Goenaga)
 */
'use strict';

goog.provide('Blockly.Python.xbot');
goog.require('Blockly.Python');



Blockly.Python['xbot_start'] = function(block) {
  //TODO: ISCASXLAB
  var code = "print 'XBot is started!'\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_bringup.py");
  return code;  
};

Blockly.Python['xbot_stop'] = function(block) {
  //TODO: ISCASXLAB
  var code = "print 'Stop Xbot!'\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_stop.py");
  return code;  
};


Blockly.Python['xbot_end'] = function(block) {
  //TODO: ISCASXLAB
  var code = "print 'XBot is Stopped!'\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_shutdown.py");
  return code;  
};

Blockly.Python['xbot_move'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  //var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);
  var move_speed = block.getFieldValue('MOVE_SPEED');
  var code = "";
  code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
  code += "move_speed = \"" + move_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_move.py");
  return code;
};

Blockly.Python['xbot_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  //var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);
  var turn_speed = block.getFieldValue('TURN_SPEED');
  var code = "";
  code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
  code += "turn_speed = \"" + turn_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_turn.py");
  return code;
};

Blockly.Python['xbot_move_time'] = function(block) {
  var seconds = block.getFieldValue('MOVE_SECS');
  var dropdown_direction = block.getFieldValue('direction');
  //var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);
  var move_speed = block.getFieldValue('MOVE_SPEED');
  var code = "";
  code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
  code += "seconds = \"" + seconds.toString() + "\"\n";
  code += "move_speed = \"" + move_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_move_time.py");

  return code;

};

Blockly.Python['xbot_move_dist'] = function(block) {
  var distance = block.getFieldValue('MOVE_DIST');
  var dropdown_direction = block.getFieldValue('direction');
  //var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);
  var move_speed = block.getFieldValue('MOVE_SPEED');
  var code = "";
  code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
  code += "centimeters = \"" + distance.toString() + "\"\n";
  code += "move_speed = \"" + move_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_move_dist.py");
  return code;
};

Blockly.Python['xbot_turn_angle'] = function(block) {
  var turn_degrees = block.getFieldValue('TURN_ANGLE');
  var dropdown_direction = block.getFieldValue('direction');
  //var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);
  var turn_speed = block.getFieldValue('TURN_SPEED');
  var code = "";
  code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
  code += "turn_degrees = \"" + turn_degrees.toString() + "\"\n";
  code += "turn_speed = \"" + turn_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_turn_angle.py");
  return code;
};

Blockly.Python['xbot_turn_time'] = function(block) {
  var turn_time = block.getFieldValue('TURN_TIME');
  var dropdown_direction = block.getFieldValue('direction');
  //var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);
  var turn_speed = block.getFieldValue('TURN_SPEED');
  var code = "";
  code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
  code += "turn_time = \"" + turn_time.toString() + "\"\n";
  code += "turn_speed = \"" + turn_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_turn_time.py");
  return code;
};




Blockly.Python['xbot_start_slam'] = function(block) {
  var code = "print 'XBot is started!'\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_advanced/xbot_start_slam.py");
  return code;  
};



Blockly.Python['xbot_go_pos_slam'] = function(block) {
  var x_pos = block.getFieldValue('MOVE_XPOS');
  var y_pos = block.getFieldValue('MOVE_YPOS');
  var yaw = block.getFieldValue('MOVE_YAW');
  var code = "";
  code += "x_pos = \"" + x_pos.toString() + "\"\n";
  code += "y_pos = \"" + y_pos.toString() + "\"\n";
  code += "yaw = \"" + yaw.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_advanced/xbot_go_pos_slam.py");

  return code;

};

Blockly.Python['xbot_move_slam'] = function(block) {
  var distance = block.getFieldValue('MOVE_DIST_SLAM');
  var dropdown_direction = block.getFieldValue('direction');
  var code = "";
  code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
  code += "centimeters = \"" + distance.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_advanced/xbot_move_slam.py");
  return code;
};

Blockly.Python['xbot_rplidar'] = function(block) {
  var code = "print 'Rplidar is started!'\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/xbot_rplidar.py");
  return code;  
};

Blockly.Python['xbot_get_laser'] = function(block) {
    var varName = Blockly.Python.valueToCode(block, 'laser', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot/get_laser.py");
    return code + varName + " = msg_laser.range\n"
};
