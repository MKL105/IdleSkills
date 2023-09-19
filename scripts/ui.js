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
    invPebble.innerHTML = 'Pebble: ' + miningInvT1.pebble + '/' + miningInvT1.pebblemax;
    //Set up skills tabs
    document.getElementById("default-open").click();
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
    console.log(button);
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

function updateInventoryUi() {
    invPebble.innerHTML = 'Pebble: ' + miningInvT1.pebble + '/' + miningInvT1.pebblemax;
}