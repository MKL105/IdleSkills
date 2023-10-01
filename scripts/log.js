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

const logBuffer = [];
var logSize = 10;

function logDrop(item, amount, source) {
    checkLogSize();
    var itemText = '<div class="';
    switch (item.rarity) {
        case 'common':
            itemText += 'common">' + item.name + '</div>';
            break;
        case 'uncommon':
            itemText += 'uncommon">' + item.name + '</div>';
            break;
        case 'rare':
            itemText += 'rare">' + item.name + '</div>';
            break;
        case 'epic':
            itemText += 'epic">' + item.name + '</div>';
            break;
        case 'legendary':
            itemText += 'legendary">' + item.name + '</div>';
            break;
        default: break;
    }

    var logText = '<p>' + getCurrentTime() + '&emsp;Got ' + amount + 'x '+ itemText + ' from ' + source + '.</p>';
    logBuffer.unshift(logText);
    updateLog();
}

function logError(error) {
    checkLogSize();
    var itemText = "";
    var logText = "";
    switch (error) {
        case 'fullInventory':
            itemText = '<div class="error">Inventory full!</div>';
            logText = '<p>' + getCurrentTime() + '&emsp;' + itemText + '</p>';
            break;
        default: break;
    }
    logBuffer.unshift(logText);
    updateLog();
}

function logLevelUp(category) {
  checkLogSize();
  const categoryText = category.charAt(0).toUpperCase() + category.slice(1);
  const logText = '<p>' + getCurrentTime() + '&emsp;' + categoryText + ' Level Up!</p>';
  logBuffer.unshift(logText);
    updateLog();
}

function checkLogSize() {
    if (logBuffer.length >= logSize) {
        logBuffer.pop();
    }
}

function emptyLog() {
    logBuffer.length = 0;
    updateLog();
}

function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return hours + ':' + minutes + ':' + seconds;
}



