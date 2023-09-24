//Views
const gameView = document.getElementById('game-view');
const settingsView = document.getElementById('settings-view');
const achievementsView = document.getElementById('achievements-view');
const statsView = document.getElementById('stats-view');

//Inventory variables
const toggleInvButton = document.getElementById('toggle-inventory-button');
const invBody = document.getElementById('inventory-body');

const invPebble = document.getElementById('inv-pebble');

//Initializes the UI once the window is fully loaded.
window.onload = setupUI();
function setupUI() {
    //Set up views
    gameView.style.display = 'block';
    settingsView.style.display = 'none';
    achievementsView.style.display = 'none';
    statsView.style.display = 'none';

    //Set up inventory
    invBody.style.display = 'block';
    toggleInvButton.textContent = 'hide';
    invPebble.style.display = 'block';

    //Set up skills tabs
    document.getElementById("default-open").click();

    for (buttonState of buttonStates) {
        if (buttonState.unlocked == true) {
            //----------------------------------------------------------------
        //Only use this part when not loading data from a save!
        buttonState.timeLeft = miningData.find(data => data.tier == buttonState.tier).baseTime;
        //-----------------------------------------------------------------

        updateSkillButton(buttonState.id);
        }
    }

    updateUpgradeButtons();
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
    statsView.style.display = 'none';
    settingsView.style.display = 'block';
}
function closeSettings() {
    gameView.style.display = 'block';
    achievementsView.style.display = 'none';
    statsView.style.display = 'none';
    settingsView.style.display = 'none';
}

function openAchievements() {
    gameView.style.display = 'none';
    achievementsView.style.display = 'block';
    statsView.style.display = 'none';
    settingsView.style.display = 'none';
}
function closeAchievements() {
    gameView.style.display = 'block';
    achievementsView.style.display = 'none';
    statsView.style.display = 'none';
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
}

function startProgress(id, obj) {
    var progressBar = document.getElementById('progress-bar-' + id);
    var button = document.getElementById(obj.category + '-' + id);
    var baseTime = obj.baseTime;
    progressBar.firstElementChild.innerHTML = baseTime + 's';
    button.disabled = true;
    progress(baseTime, baseTime, progressBar, obj, id);
}

function progress(timeLeft, timeTotal, progressBar, obj, id) {
    var progressBarWidth = timeLeft * progressBar.clientWidth / timeTotal;
    progressBar.firstElementChild.style.width = progressBarWidth + 'px';
    progressBar.firstElementChild.innerHTML = timeLeft + 's';
    if (timeLeft > 0) {
        setTimeout(function() {
            progress(timeLeft - 1, timeTotal, progressBar, obj, id);
        }, 1000);
    }
    else {
        storeDrop(obj.getDrop());
        progressBar.firstElementChild.style.width = progressBar.clientWidth + 'px';
        progressBar.firstElementChild.innerHTML = obj.baseTime + 's';
        var button = document.getElementById(obj.category + '-' + id);
        button.disabled = false;
    }
}

function updateSkillButton(id) {
    var progressBar = document.getElementById('progress-bar-' + id);
    var button = document.getElementById('button-' + id);
    var tier = id[id.length - 3];
    var data = miningData.find(obj => obj.tier == tier);
    var stateData = buttonStates.find(obj => obj.id == id);
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
}

function createUpgradeButton(upgrade) {
    const div = document.createElement('div');
    div.className = 'upgrade tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip-text';
    var tooltipText = 'Cost: ';
    for (req of upgrade.requirements) {
        tooltipText += '<br />' + req.item.name + ': '+ getItemById(req.item.id).amount  + '/' + req.amount;
    }
    tooltip.innerHTML = tooltipText;

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

function updateLog() {
    const logContent = document.getElementById('log-content');
    logContent.innerHTML = '';
    for (logElem of logBuffer) {
        logContent.innerHTML += logElem + '<br />';
    }
}