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

/**
 * Search the inventory for an item with the id passed as the parameter. Returns
 * the item if found.
 *
 * @param {*} id The id of the item to search.
 * @return {*} The item if found, otherwise returns undefined.
 */
function getItemById(id) {
  return inventory.find((item) => item.id === id);
}

/**
 * Tries to add the specified amount of the item to the inventory.
 * If the maximum capacity is reached, only adds a part of the amount.
 *
 * @param {*} id The id of the item to add.
 * @param {*} amount The amount to be added.
 * @return {boolean} True if the amount could be (partially) added, false
 *                   otherwise.
 */
function addItem(id, amount) {
  const item = getItemById(id);
  if (item !== undefined) {
    item.amount += amount;
    if (item.amount > item.maxAmount) {
      item.amount = item.maxAmount;
    }
    return true;
  } else {
    return false;
  }
}

/**
 * Tries to remove the specified amount of the item from the inventory.
 * If not possible because there are not enough items in the inventory,
 * doesn't remove anything.
 *
 * @param {*} id The id of the item to remove.
 * @param {*} amount The amount to be removed.
 * @return {boolean} True if the amount was successfully removed, false
 *                   otherwise.
 */
function removeItem(id, amount) {
  const item = getItemById(id);
  if (item !== undefined && item.amount >= amount) {
    item.amount -= amount;
    return true;
  } else {
    return false;
  }
}
