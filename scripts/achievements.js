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

function unlockedAchievementCount() {
  return (achievementData.filter(ach => ach.unlocked == true)).length;
}

function totalAchievementCount() {
  return achievementData.length;
}

function checkAchievements() {
  const locked = achievementData.filter(ach => ach.unlocked == false);

  for (achievement of locked) {
    switch (achievement.id) {
      case 'pebble-collector-1':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      case 'pebble-collector-2':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      case 'pebble-collector-3':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      case 'pebble-collector-4':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      case 'pebble-collector-5':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      case 'stick-collector-1':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      case 'stick-collector-2':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      case 'stick-collector-3':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      case 'stick-collector-4':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      case 'stick-collector-5':
        if (achievement.progress >= achievement.goal) {
          achievement.unlocked = true;
          logAchievement(achievement.description);
        }
        break;
      default: break;
    }
  }
  updateAchievements();
}

function progressCollection(collection, amount) {
  console.log(typeof(achievementData.category));
  const collections = achievementData.filter(achievement => achievement.category == 'collection');
  const searchPrompt = collection + '-collector';
  const filteredCollection = collections.filter(achievement => achievement.id.includes(searchPrompt));
  for (element of filteredCollection) {
    element.progress += amount;
  }
  checkAchievements();
}