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
 * @fileoverview Blocks for XBot.
 * @author Wei Wu (lazyparser@gmail.com)
 */
'use strict';

goog.provide('Blockly.Blocks.xbot');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.rover.HUE = 160;

Blockly.Blocks['xbot_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Start XBot');
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip('start xbot');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Stop XBot');
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('stop xbot');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};



Blockly.Blocks['xbot_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Shutdown XBot');
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('shutdown xbot');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Move ')
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backward", "backward"]]), "direction")
        .appendField("at")
	.appendField(new Blockly.FieldTextInput("10"), "MOVE_SPEED")
	.appendField("cm/s");;
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('move xbot at a speed');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn ")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "direction")
        .appendField("at ")
	.appendField(new Blockly.FieldTextInput("20"), "TURN_SPEED")
	.appendField("°/s");
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('turn xbot at a speed');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_move_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Move ')
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backward", "backward"]]), "direction")
	.appendField(new Blockly.FieldTextInput("1"), "MOVE_SECS")
        .appendField("seconds at")
	.appendField(new Blockly.FieldTextInput("10"), "MOVE_SPEED")
	.appendField("cm/s");
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('move xbot for some time');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_move_dist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Move ')
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backward", "backward"]]), "direction")
	.appendField(new Blockly.FieldTextInput("30"), "MOVE_DIST")
        .appendField("cm at")
	.appendField(new Blockly.FieldTextInput("10"), "MOVE_SPEED")
	.appendField("cm/s");;
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('move xbot some distance');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};


Blockly.Blocks['xbot_turn_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn ")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "direction")
        .appendField(new Blockly.FieldTextInput("90"), "TURN_ANGLE")
        .appendField("° at ")
	.appendField(new Blockly.FieldTextInput("20"), "TURN_SPEED")
	.appendField("°/s");
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('turn xbot some degrees');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_turn_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn ")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "direction")   
        .appendField(new Blockly.FieldTextInput("1"), "TURN_TIME")
        .appendField("seconds at ")
	.appendField(new Blockly.FieldTextInput("20"), "TURN_SPEED")
	.appendField("°/s");
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('turn xbot for some time');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_start_slam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Start SLAM');
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('start SLAM');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_go_pos_slam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Move to (x:')
	.appendField(new Blockly.FieldTextInput("0.2"), "MOVE_XPOS")
        .appendField(", y:")
	.appendField(new Blockly.FieldTextInput("0"), "MOVE_YPOS")
        .appendField(", yaw:")
	.appendField(new Blockly.FieldTextInput("0"), "MOVE_YAW")
        .appendField(") ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip('move to (xpos, ypos, yaw) in SLAM mode');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_move_slam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Move ')
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backward", "backward"]]), "direction")
	.appendField(new Blockly.FieldTextInput("25"), "MOVE_DIST_SLAM")
	.appendField("cm");
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('move xbot a distance in SLAM mode');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};



Blockly.Blocks['xbot_get_laser'] = {
  init: function() {
    this.appendValueInput("laser")
        .appendField("Get laser");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(255);
    this.setTooltip('read laser data which is a list of distances');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_rplidar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Start laser');
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('start lidar');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};


