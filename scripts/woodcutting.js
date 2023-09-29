function startWoodcutting(buttonId) {
    buttonStates.find(button => button.id === buttonId).active = true;
    woodcuttingProgress(buttonId);
}

function woodcuttingProgress(buttonId) {
    var buttonState = buttonStates.find(button => button.id === buttonId);
    var tier = buttonId[buttonId.length - 3];
    if (buttonState.timeLeft > 0) {
        buttonState.timeLeft--;
        updateSkillButton(buttonId);
        setTimeout(function() {
            woodcuttingProgress(buttonId);
        }, 1000);
    }
    else {
        buttonState.active = false;
        buttonState.timeLeft = woodcuttingData.find(data => data.tier == tier).baseTime;
        updateSkillButton(buttonId);
        calculateWoodcuttingDrops(buttonId);
    }
}

function calculateWoodcuttingDrops(buttonId) {
    var tier = buttonId[buttonId.length - 3];
    var dropData = woodcuttingData.find(data => data.tier == tier);
    var amount = 0;
    var roll = 0;

    for (let i = 0; i < dropData.drops.length; i++) {
        amount = 0;
        var total = 100;
        var percentage = dropData.drops[i].dropChance;
        while ((percentage < 1) && (percentage > 0)) {
            percentage *= 10;
            total *= 10;
        }
        roll = Math.floor(Math.random() * total) + 1;
        if (roll <= percentage) {
            amount += dropData.drops[i].baseDrop;
            total = 100;
            percentage = dropData.drops[i].bonusDropChance;
            while ((percentage < 1) && (percentage > 0)) {
                percentage *= 10;
                total *= 10;
            }
            roll = Math.floor(Math.random() * total) + 1;
            if (roll <= percentage) {
                amount += Math.floor(Math.random() * dropData.drops[i].bonusDrop) + 1;
            }
        }
        if (amount > 0) {
            finishWoodcutting(dropData.drops[i].item, amount);
        }
    }
}

function finishWoodcutting(item, amount) {
    var success = addItem(item.id, amount);
    if (success) {
        logDrop(item, amount, 'woodcutting');
    }
}