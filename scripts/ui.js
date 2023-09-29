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

//Views
const gameView = document.getElementById('game-view');
const settingsView = document.getElementById('settings-view');
const achievementsView = document.getElementById('achievements-view');

//Inventory variables
const toggleInvButton = document.getElementById('toggle-inventory-button');
const invBody = document.getElementById('inventory-body');

//Initializes the UI once the window is fully loaded.
window.onload = setupUI();
function setupUI() {
    //Set up views
    gameView.style.display = 'block';
    settingsView.style.display = 'none';
    achievementsView.style.display = 'none';

    //Set up inventory
    invBody.style.display = 'block';
    toggleInvButton.textContent = 'hide';

    //Set up skills tabs
    document.getElementById("default-open").click();

    for (buttonState of buttonStates) {
        if (buttonState.unlocked == true) {
            //----------------------------------------------------------------
            //Only use this part when not loading data from a save!
            switch (buttonState.category) {
                case 'mining':
                    buttonState.timeLeft = miningData.find(data => data.tier == buttonState.tier).baseTime;
                    break;
                case 'woodcutting':
                    buttonState.timeLeft = woodcuttingData.find(data => data.tier == buttonState.tier).baseTime;
                    break;
                case 'fishing':
                    buttonState.timeLeft = fishingData.find(data => data.tier == buttonState.tier).baseTime;
                default: break;
            }
            //-----------------------------------------------------------------
            updateSkillButton(buttonState.id);
        }
    }

    updateUpgradeButtons();
    updateSkillButtonTooltipTexts()
    emptyLog();
}

//Displays and hides the inventory if the according button is clicked.
function toggleInv() {
    if (invBody.style.display === 'none') {
        invBody.style.display = 'block';
        toggleInvButton.textContent = 'hide';
    }
    else {
        invBody.style.display = 'none';
        toggleInvButton.textContent = 'show';
    }
}

function openSettings() {
    gameView.style.display = 'none';
    achievementsView.style.display = 'none';
    settingsView.style.display = 'block';
}
function closeSettings() {
    gameView.style.display = 'block';
    achievementsView.style.display = 'none';
    settingsView.style.display = 'none';
}

function openAchievements() {
    gameView.style.display = 'none';
    achievementsView.style.display = 'block';
    settingsView.style.display = 'none';
}
function closeAchievements() {
    gameView.style.display = 'block';
    achievementsView.style.display = 'none';
    settingsView.style.display = 'none';
}

function openSkill(event, skillName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("skills-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("skills-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(skillName).style.display = "block";
    event.currentTarget.className += " active";
    switch (skillName) {
        case 'mining':
            const miningButtons = buttonStates.filter(button => button.category === 'mining');
            for (button of miningButtons) {
                updateSkillButton(button.id);
            }
            break;
        case 'woodcutting':
            const woodcuttingButtons = buttonStates.filter(button => button.category === 'woodcutting');
            for (button of woodcuttingButtons) {
                updateSkillButton(button.id);
            }
            break;
        case 'fishing':
            const fishingButtons = buttonStates.filter(button => button.category === 'fishing');
            for (button of fishingButtons) {
                updateSkillButton(button.id);
            }
        default: break;
    }
}

function updateSkillButton(id) {
    var progressBar = document.getElementById('progress-bar-' + id);
    var button = document.getElementById('button-' + id);
    var tier = id[id.length - 3];
    var stateData = buttonStates.find(obj => obj.id == id);
    var data;
    switch (stateData.category) {
        case 'mining': 
            data = miningData.find(obj => obj.tier == tier);
            break;
        case 'woodcutting': 
            data = woodcuttingData.find(obj => obj.tier == tier);
            break;
        case 'fishing':
            data = fishingData.find(obj => obj.tier == tier);
            break;
        default: break;
    }
    var progressBarWidth = stateData.timeLeft * progressBar.clientWidth / data.baseTime;
    progressBar.firstElementChild.style.width = progressBarWidth + 'px';
    progressBar.firstElementChild.innerHTML = stateData.timeLeft + 's';
    button.disabled = stateData.active;
}

function updateInventoryText(id) {
    var dataObject = inventory.find(obj => obj.id == id);
    var text = dataObject.name + ': ' + dataObject.amount + '/' + dataObject.maxAmount;
    var textElement = document.getElementById('inv-' + id);
    textElement.innerHTML = text;
}

function updateUpgradeButtons() {
    const elements = document.getElementsByClassName("upgrade");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    updateUpgradeData();

    for (upgrade of upgradeData) {
        if (upgrade.available == true) {
            createUpgradeButton(upgrade);
        }
    }
    updateUpgradeTooltips();
}

function createUpgradeButton(upgrade) {
    const div = document.createElement('div');
    div.className = 'upgrade tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip-text';
    tooltip.id = 'tooltip-text-' + upgrade.id;

    const button = document.createElement('button');
    button.className = 'upgrade-button';
    button.id = upgrade.id;
    button.innerHTML = upgrade.title;
    button.disabled = !upgrade.unlockable;
    button.addEventListener("click", buyUpgrade, false);

    const parent = document.getElementById('upgrades-list');
    div.appendChild(tooltip);
    div.appendChild(button);
    parent.appendChild(div);
}

function updateUpgradeTooltips() {
    updateUpgradeData();
    for (upgrade of upgradeData) {
        if (upgrade.available == true) {
            const tooltip = document.getElementById('tooltip-text-' + upgrade.id);
            var text = '';
            switch (upgrade.category) {
                case "pebbleInvUpgrade":
                    text = upgrade.description + pebbleInvMaxProgression[upgrade.upgradeNumber] + '.<br/>' + '<br/>';
                    break;
                case "miningT1CommonBaseDropUpgrade":
                    text = upgrade.description + '<br/>' + '<br/>';
                    break;
                case "stickInvUpgrade":
                    text = upgrade.description + stickInvMaxProgression[upgrade.upgradeNumber] + '.<br/>' + '<br/>';
                    break;
                case "squarePebbleInvUpgrade":
                    text = upgrade.description + squarePebbleInvMaxProgression[upgrade.upgradeNumber] + '.<br/>' + '<br/>';
                case "baitInvUpgrade":
                    text = upgrade.description + baitInvMaxProgression[upgrade.upgradeNumber] + '.<br/>' + '<br/>';
                default: break;
            }
            for (req of upgrade.requirements) {
                if (req.item.amount >= req.amount) {
                    text += '<div class="enough">' + getItemById(req.item.id).name + ' ' + req.item.amount + '/' + req.amount + '</div>' + '<br/>';
                }
                else {
                    text += '<div class="not-enough">' + getItemById(req.item.id).name +' ' + req.item.amount + '/' + req.amount + '</div>' + '<br/>';
                }
            }
            tooltip.innerHTML = text;
        }
    }
    updateUpgradeButtonStates();
}

function updateUpgradeButtonStates() {
    for (upgrade of upgradeData) {
        if (upgrade.available == true) {
            const button = document.getElementById(upgrade.id);
            button.className = button.className.replace(" not-unlockable", "");
            button.className = button.className.replace(" unlockable", "");
            button.disabled = !upgrade.unlockable;
            if (upgrade.unlockable == true) {
                button.className += " unlockable";
            }
            else {
                button.className += " not-unlockable";
            }
        }
    }
}

function updateLog() {
    const logContent = document.getElementById('log-content');
    logContent.innerHTML = '';
    for (logElem of logBuffer) {
        logContent.innerHTML += logElem + '<br/>';
    }
}

function updateSkillButtonTooltipTexts() {
    for (buttonState of buttonStates) {
        if (buttonState.unlocked == true) {
            const tooltipText = document.getElementById('tooltip-text-' + buttonState.id);
            var text = 'Drops: <br/>';
            for (drop of buttonState.data.drops) {
                var amountText = '';
                amountText += drop.baseDrop;
                if (drop.bonusDropChance > 0) {
                    var max = drop.baseDrop + drop.bonusDrop;
                    amountText += "-" + max
                }
                switch (drop.item.rarity) {
                    case 'common':
                        text += '<div class="common">'
                        break;
                    case 'uncommon':
                        text += '<div class="uncommon">'
                        break;
                    case 'rare':
                        text += '<div class="rare">'
                        break;
                    case 'epic':
                        text += '<div class="epic">'
                        break;
                    case 'legendary':
                        text += '<div class="legendary">'
                        break;
                    default: break;
                }
                text += amountText + ' ' + drop.item.name + ': ' + drop.dropChance + '% </div><br/>';
            }
            tooltipText.innerHTML = text;
        }
    }
}