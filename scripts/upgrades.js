const pebbleInvMaxProgression = [10, 25, 50, 100, 200, 400, 750, 1000, 1500, 2500, 5000, 7500, 10000];
const squarePebbleInvMaxProgression = [3, 5, 10, 20, 35, 60, 100]; 
const stickInvMaxProgression = pebbleInvMaxProgression;

function buyUpgrade(evt) {
    var id = evt.currentTarget.id;
    var upgrade = upgradeData.find(x => x.id == id);
    upgrade.available = false;

    switch (upgrade.category) {
        case "pebbleInvUpgrade":
            inventory.find(x => x.id == "pebble").maxAmount = pebbleInvMaxProgression[upgrade.upgradeNumber];
            break;
        case "miningT1CommonBaseDropUpgrade":
            const commonDrops = miningData.find(x => x.tier == 1).drops.filter(x => x.item.rarity == "common");
            for (drops in commonDrops) {
                drop.baseDrop++;
            }
            break;
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