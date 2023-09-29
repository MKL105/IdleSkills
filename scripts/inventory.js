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

function getItemById(id) {
    return inventory.find(item => item.id === id);
}

function addItem(id, amount) {
    var target = {};

    target = inventory.find(item => item.id === id);

    if (target.amount == target.maxAmount) {
        logError('fullInventory');
        return false;
    }

    (target.amount + amount >= target.maxAmount) ? target.amount = target.maxAmount : target.amount += amount;
    updateInventoryText(id);
    updateUpgradeTooltips();
    return true;
}

function removeItem(id, amount) {
    var target = inventory.find(item => item.id == id);
    if (target === undefined) {
        return false;
    }
    if (target.amount - amount < 0) {
        return false;
    }
    target.amount -= amount;
    updateInventoryText(id);
    updateUpgradeTooltips();
    return true;
}