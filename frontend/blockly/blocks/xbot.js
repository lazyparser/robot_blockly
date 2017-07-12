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
        .appendField('Start XBot.');
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip('hello xbot tooltip');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Stop XBot.');
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('hello xbot tooltip');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};

Blockly.Blocks['xbot_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Forwarding XBot!');
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(255);
    this.setTooltip('hello xbot tooltip');
    this.setHelpUrl('www.iscas.ac.cn');
  }
};
