/* Copyright (C) [2023] [Markus Luethje <mklgamesapps@gmail.com>]
 * 
 * This program is free software; you can redistribute it and/or modify it under the terms of the 
 * GNU General Public License as published by the Free Software Foundation; either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with this program; if
 * not, see <https://www.gnu.org/licenses>.
 */
function localStorageDataAvailable() {
  return !(localStorage.getItem('inventory') == null);
}

function saveDataToStorage() {
  localStorage.setItem('inventory', JSON.stringify(inventory));
  localStorage.setItem('miningData', JSON.stringify(miningData));
  localStorage.setItem('woodcuttingData', JSON.stringify(woodcuttingData));
  localStorage.setItem('fishingData', JSON.stringify(fishingData));
  localStorage.setItem('upgradeData', JSON.stringify(upgradeData));
  localStorage.setItem('buttonStates', JSON.stringify(buttonStates));
  localStorage.setItem('levelData', JSON.stringify(levelData));
}

function loadDataFromStorage() {
  inventory = JSON.parse(localStorage.getItem('inventory'));
  miningData = JSON.parse(localStorage.getItem('miningData'));
  woodcuttingData = JSON.parse(localStorage.getItem('woodcuttingData'));
  fishingData = JSON.parse(localStorage.getItem('fishingData'));
  upgradeData = JSON.parse(localStorage.getItem('upgradeData'));
  buttonStates = JSON.parse(localStorage.getItem('buttonStates'));
  levelData = JSON.parse(localStorage.getItem('levelData'));
}

function startAutoSave() {
  setInterval(autoSave, 60*1000);
}

function autoSave() {
  saveDataToStorage()
  logInfo('Autosave complete!');
}

function save() {
  saveDataToStorage()
  logInfo('Saving complete!');
}

function resetData() {
  localStorage.removeItem('inventory');
  localStorage.removeItem('miningData');
  localStorage.removeItem('woodcuttingData');
  localStorage.removeItem('fishingData');
  localStorage.removeItem('upgradeData');
  localStorage.removeItem('buttonStates');
  localStorage.removeItem('levelData');
  emptyLog();
  resetAllData();
  setupUI();
}