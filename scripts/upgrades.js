const pebbleInvMaxProgression = [10, 25, 50, 100];

function buyUpgrade(evt) {
    var id = evt.currentTarget.id;
    var upgrade = upgradeData.find(x => x.id == id);
    upgrade.available = false;

    switch (upgrade.category) {
        case "pebbleInvUpgrade":
            inventory.find(x => x.id == "pebble").maxAmount = pebbleInvMaxProgression[upgrade.upgradeNumber];
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