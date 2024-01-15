/* Copyright (C) [2024] [Markus Luethje <mklgamesapps@gmail.com>]
  
  This program is free software; you can redistribute it and/or modify it under the terms of the 
  GNU General Public License as published by the Free Software Foundation; either version 3 of the
  License, or (at your option) any later version.
  
  This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
  without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
  See the GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License along with this program; if
  not, see <https://www.gnu.org/licenses>.
 */

const progressBarFrameRate = 20; // Defines the interval in milliseconds between progress bar updates.

function startUi() {
  document.getElementById("default-open-area").click();
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

  if (areaName === "skills") {
    document.getElementById("default-open-skill").click();
  }
}

function openSkill(event, skillName) {
  var content = document.getElementsByClassName("skill-selection-content");
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  var buttons = document.getElementsByClassName("skill-selection-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
  }

  document.getElementById(skillName + "-area").style.display = "block";
  event.currentTarget.className += " active";
}

/**
 * Updated the progress bar of a skill.
 * 
 * @param {*} id The id of the progress bar to be updated. Has to be of class "progress-bar-inner".
 * @param {*} totalTime The time the skill needs in milliseconds.
 * @param {*} timePassed The time that has already passed in milliseconds.
 */
function updateProgressBar(id, totalTime, timePassed) {
  const progressBar = document.getElementById(id);
  if (timePassed >= totalTime) {
    //TODO: Finish skill
  }
  else {
    const percentage = (timePassed / totalTime) * 100;
    progressBar.style.width = percentage + "%";
    setTimeout(function() {
      updateProgressBar(id, totalTime, timePassed + progressBarFrameRate);
    }, progressBarFrameRate)
  }
}