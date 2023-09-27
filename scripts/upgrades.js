const pebbleInvMaxProgression = [10, 25, 50, 100, 200, 400, 750, 1000, 1500, 2500, 5000, 7500, 10000];
const squarePebbleInvMaxProgression = [3, 5, 10, 20, 35, 60, 100]; 
const stickInvMaxProgression = pebbleInvMaxProgression;
const baitInvMaxProgression = pebbleInvMaxProgression;

function buyUpgrade(evt) {
    var id = evt.currentTarget.id;
    var upgrade = upgradeData.find(x => x.id == id);
    upgrade.available = false;

    switch (upgrade.category) {
        case "pebbleInvUpgrade":
            inventory.find(x => x.id == "pebble").maxAmount = pebbleInvMaxProgression[upgrade.upgradeNumber];
            break;
        case "miningT1CommonBaseDropUpgrade":
            for (data of miningData) {
                if (data.tier == 1) {
                    for (drop of data.drops) {
                        if (drop.item.rarity == "common") {
                            drop.baseDrop++;
                        }
                    }
                }
            }
            console.log(miningData);
            updateSkillButtonTooltipTexts();
            break;
        case "stickInvUpgrade":
            inventory.find(x => x.id == "stick").maxAmount = stickInvMaxProgression[upgrade.upgradeNumber];
            break;
        case "squarePebbleInvUpgrade":
            inventory.find(x => x.id == "square-pebble").maxAmount = squarePebbleInvMaxProgression[upgrade.upgradeNumber];
            break;
        case "baitInvUpgrade":
            inventory.find(x => x.id == "bait").maxAmount = baitInvMaxProgression[upgrade.upgradeNumber];
        default:
            break;
    }

    for (req of upgrade.requirements) {
        removeItem(req.item.id, req.amount);
    }

    for (unlock of upgrade.unlocksUpgrades) {
        upgradeData.find(x => x.id == unlock).available = true;
    }
    updateUpgradeButtons();
    updateUpgradeData();
}

function updateUpgradeData() {
    for (upgrade of upgradeData) {
        if (upgrade.available == true) {
            var unlock = true;
            for (req of upgrade.requirements) {
                if (req.item.amount < req.amount) {
                    unlock = false;
                }
            }
            upgrade.unlockable = unlock;
        }
    }
}