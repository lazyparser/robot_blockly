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
  return code;  
};

Blockly.Python['xbot_end'] = function(block) {
  //TODO: ISCASXLAB
  var code = "print 'XBot is Stopped!'\n";
  return code;  
};

Blockly.Python['xbot_forward'] = function(block) {
  var code = "print 'XBot is forwarding...'\n";
  //TODO: ISCASXLAB
  code += "import os\n";
  code += "os.system('rostopic list');\n";
  //code += Blockly.readPythonFile("../blockly/generators/python/scripts/rover/control.py");
  return code;

};
