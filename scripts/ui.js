/* Copyright (C) [2024] [Markus Luethje <mklgamesapps@gmail.com>]

  This program is free software; you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation; either version 3 of the License, or (at your option) any later
  version.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  this program; if not, see <https://www.gnu.org/licenses>.
 */

// Defines the interval in milliseconds between progress bar updates.
const progressBarFrameRate = 20;

/**
 * Is responsible for initially setting up the UI when the game is started.
 */
function startUi() {
  document.getElementById('default-open-area').click();
}

/**
 * Switches to the according content if a area tab is clicked.
 *
 * @param {*} event Event passed by the click.
 * @param {*} areaName The area to be opened.
 */
function openArea(event, areaName) {
  const content = document.getElementsByClassName('area-selection-content');
  for (let i = 0; i < content.length; i++) {
    content[i].style.display = 'none';
  }

  const buttons = document.getElementsByClassName('area-selection-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(' active', '');
  }

  document.getElementById(areaName + '-area').style.display = 'block';
  event.currentTarget.className += ' active';

  switch (areaName) {
    case 'skills':
      document.getElementById('default-open-skill').click();
      break;
    case 'inventory':
      createInventoryGridUI();
      break;
  }
}

/**
 * Switches to the according content if a area tab is clicked.
 *
 * @param {*} event Event passed by the click.
 * @param {*} skillName The skill to be opened.
 */
function openSkill(event, skillName) {
  const content = document.getElementsByClassName('skill-selection-content');
  for (let i = 0; i < content.length; i++) {
    content[i].style.display = 'none';
  }

  const buttons = document.getElementsByClassName('skill-selection-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(' active', '');
  }

  document.getElementById(skillName + '-area').style.display = 'block';
  event.currentTarget.className += ' active';
}

/**
 * Updated the progress bar of a skill.
 *
 * @param {*} id The id of the progress bar to be updated. Has to be of class
 *               "progress-bar-inner".
 * @param {*} totalTime The time the skill needs in milliseconds.
 * @param {*} timePassed The time that has already passed in milliseconds.
 */
function updateProgressBar(id, totalTime, timePassed) {
  const progressBar = document.getElementById(id);
  if (timePassed >= totalTime) {
    // TODO: Finish skill
  } else {
    const percentage = (timePassed / totalTime) * 100;
    progressBar.style.width = percentage + '%';
    setTimeout(function() {
      updateProgressBar(id, totalTime, timePassed + progressBarFrameRate);
    }, progressBarFrameRate);
  }
}

/**
 * Creates the grid UI for the inventory, taking into account only the items
 * that have an amount of at least 1.
 */
function createInventoryGridUI() {
  const items = getAllOwnedItems();
  const parent = document.getElementsByClassName('inventory-grid').item(0);
  const imageFolderPath = '../assets/images/';

  parent.innerHTML = '';

  for (item of items) {
    const container = document.createElement('div');
    container.className = 'inventory-grid-item';
    const amountText = document.createElement('div');
    amountText.className = 'inventory-item-amount';
    const text = item.amount + '/' + item.maxAmount;
    amountText.innerHTML = text;
    const image = document.createElement('img');
    image.src = imageFolderPath + item.imageName;

    container.appendChild(amountText);
    container.appendChild(image);
    parent.appendChild(container);
  }
}
