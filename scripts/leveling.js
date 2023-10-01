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

const formulaX = 0.2; //Controlls how much exp is needed per level (lower value -> more exp needed)
const formulaY = 2; //Contolls how big the gap in between levels is (higher value -> larger gap)
const formulaGeneralX = 0.1; //Controlls the leveling progress for the player level
const formulaGeneralY = 2; //Controlls the leveling progress for the player level
const playerLevelMultiplier = 1.5;

function addXp(category, amount) {
  const data = levelData.find(x => x.id == category);
  if (data.xp + amount >= getNeededXp(category)) {
    const overflow = (data.xp + amount) - getNeededXp(category);
    levelUp(category);
    addXp(category, overflow);
  }
  else {
    data.xp += amount;
  }
  updateLevelUi();
}

function levelUp(category) {
  const data = levelData.find(x => x.id == category);
  if (data.maxLevel == undefined) {
    data.xp = 0;
    data.level++;
    logLevelUp(category);
  }
  else if (data.maxLevel > data.level) {
    data.xp = 0;
    data.level++;
    logLevelUp(category);
  }
  
}

function getCurrentXp(category) {
  const data = levelData.find(x => x.id == category);
  return data.xp;
}

function getNeededXp(category) {
  var oldMax = 0;
  var newMax = 0;
  if (category == 'player') {
    newMax = Math.pow((getCurrentLevel(category) + 1) / formulaGeneralX, formulaGeneralY)
    oldMax = Math.pow(getCurrentLevel(category) / formulaGeneralX, formulaGeneralY)
  }
  else {
    newMax = Math.pow((getCurrentLevel(category) + 1) / formulaX, formulaY)
    oldMax = Math.pow(getCurrentLevel(category) / formulaX, formulaY)
  }
  return newMax - oldMax;
}

function getCurrentLevel(category) {
  const data = levelData.find(x => x.id == category);
  return data.level;
}