function startMining(buttonId) {
    buttonStates.find(button => button.id === buttonId).active = true;
    mineProgress(buttonId);
}

function mineProgress(buttonId) {
    var buttonState = buttonStates.find(button => button.id === buttonId);
    var tier = buttonId[buttonId.length - 3];
    if (buttonState.timeLeft > 0) {
        buttonState.timeLeft--;
        updateSkillButton(buttonId);
        setTimeout(function() {
            mineProgress(buttonId);
        }, 1000);
    }
    else {
        buttonState.active = false;
        buttonState.timeLeft = miningData.find(data => data.tier == tier).baseTime;
        updateSkillButton(buttonId);
        calculateDrops(buttonId);
    }
}

function calculateDrops(buttonId) {
    var tier = buttonId[buttonId.length - 3];
    var dropData = miningData.find(data => data.tier == tier);
    var amount = 0;
    var roll = 0;
    var bonusRoll = 0;

    for (let i = 0; i < dropData.drops.length; i++) {
        roll = Math.floor(Math.random() * 100) + 1;
        bonusRoll = Math.floor(Math.random() * 100) + 1;
        amount = 0;
        if (roll <= dropData.drops[i].dropChance) {
            amount += dropData.drops[i].baseDrop;
            if (bonusRoll <= dropData.drops[i].bonusDropChance) {
                amount += dropData.drops[i].bonusDrop;
            }
        }
        finishMining(dropData.drops[i].item, amount);
    }
}

function finishMining(item, amount) {
    var success = addItem(item.id, amount);
    if (success) {
        logDrop(item, amount, 'mining');
    }
}