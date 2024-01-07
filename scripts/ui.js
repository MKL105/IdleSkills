/* Copyright (C) [2023] [Markus Luethje <mklgamesapps@gmail.com>]
  
  This program is free software; you can redistribute it and/or modify it under the terms of the 
  GNU General Public License as published by the Free Software Foundation; either version 3 of the
  License, or (at your option) any later version.
  
  This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
  without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
  See the GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License along with this program; if
  not, see <https://www.gnu.org/licenses>.
 */

function startUi() {
  document.getElementById("default-open").click();
}

function openArea(event, areaName) {
  var content = document.getElementsByClassName("area-selection-content");
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  var buttons = document.getElementsByClassName("area-selection-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
  }

  document.getElementById(areaName + "-area").style.display = "block";
  event.currentTarget.className += " active";
}