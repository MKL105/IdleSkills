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
    var total = 0;
    var tier = buttonId[buttonId.length - 3];
    var dropData = miningData.find(data => data.tier == tier);

    for (drop of dropData.drops) {
        total += drop.dropChance;
    }

    var roll = Math.floor(Math.random() * total) + 1;
    var bonusRoll = Math.floor(Math.random() * 100) + 1;
    var sum = 0;

    for (let i = 0; i < dropData.drops.length; i++) {
        sum += dropData.drops[i].dropChance;
        if (roll <= sum) {
            var amount = 0;
            if (bonusRoll <= dropData.drops[i].bonusDropChance) {
                amount = dropData.drops[i].baseDrop + dropData.drops[i].bonusDrop;
            }
            else {
                amount = dropData.drops[i].baseDrop;
            }
            finishMining(dropData.drops[i].item, amount);
            break;
        }
    }
}

function finishMining(item, amount) {
    if (addItem(item.id, amount)) {
        return;
    }
    else {
        console.warn('Could not add'+ item.name +'to inventory.');
    }
}