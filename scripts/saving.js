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
  localStorage.setItem('achievementData', JSON.stringify(achievementData));
}

function loadDataFromStorage() {
  inventory = JSON.parse(localStorage.getItem('inventory'));
  miningData = JSON.parse(localStorage.getItem('miningData'));
  woodcuttingData = JSON.parse(localStorage.getItem('woodcuttingData'));
  fishingData = JSON.parse(localStorage.getItem('fishingData'));
  upgradeData = JSON.parse(localStorage.getItem('upgradeData'));
  buttonStates = JSON.parse(localStorage.getItem('buttonStates'));
  levelData = JSON.parse(localStorage.getItem('levelData'));
  achievementData = JSON.parse(localStorage.getItem('achievementData'));
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
  localStorage.removeItem('achievementData');
  emptyLog();
  resetAllData();
  setupUI();
}

function downloadSavefile() {
  const link = document.createElement('a');
  var content = "";
  content += JSON.stringify(inventory);
  content += JSON.stringify(miningData);
  content += JSON.stringify(woodcuttingData);
  content += JSON.stringify(fishingData);
  content += JSON.stringify(upgradeData);
  content += JSON.stringify(buttonStates);
  content += JSON.stringify(levelData);
  content += JSON.stringify(achievementData);
  const file = new Blob([content], {type: 'text/plain'});
  link.href = URL.createObjectURL(file);
  link.download = "idleskills_save.isk";
  link.click();
  URL.revokeObjectURL(link.href);
}

function importSavefile() {
  let input = document.createElement('input');
  input.type = 'file';
  input.accept = ".isk";
  input.onchange = e => { 
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = readerEvent => {
      var content = readerEvent.target.result;
      readImportData(content);
    }
  }
  input.click();
}

function readImportData(content) {
  var beginPos = 0;
  var splitPos = content.indexOf('][');
  inventory = JSON.parse(content.substring(beginPos, splitPos + 1));
  content = content.slice(splitPos + 1);
  splitPos = content.indexOf('][');
  miningData = JSON.parse(content.substring(beginPos, splitPos + 1));
  content = content.slice(splitPos + 1);
  splitPos = content.indexOf('][');
  woodcuttingData = JSON.parse(content.substring(beginPos, splitPos + 1));
  content = content.slice(splitPos + 1);
  splitPos = content.indexOf('][');
  fishingData = JSON.parse(content.substring(beginPos, splitPos + 1));
  content = content.slice(splitPos + 1);
  splitPos = content.indexOf('][');
  upgradeData = JSON.parse(content.substring(beginPos, splitPos + 1));
  content = content.slice(splitPos + 1);
  splitPos = content.indexOf('][');
  buttonStates = JSON.parse(content.substring(beginPos, splitPos + 1));
  content = content.slice(splitPos + 1);
  splitPos = content.indexOf('][');
  levelData = JSON.parse(content.substring(beginPos, splitPos + 1));
  content = content.slice(splitPos + 1);
  achievementData = JSON.parse(content);
  console.log(inventory);
  console.log(miningData);
  console.log(woodcuttingData);
  console.log(fishingData);
  console.log(upgradeData);
  console.log(buttonStates);
  console.log(levelData);
  console.log(achievementData);
}