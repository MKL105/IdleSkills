function getItemById(id) {
    return inventory.find(item => item.id === id);
}

function addItem(id, amount) {
    var target = {};

    target = inventory.find(item => item.id === id);

    if (target.amount == target.maxAmount) {
        logError('fullInventory');
        return false;
    }

    (target.amount + amount >= target.maxAmount) ? target.amount = target.maxAmount : target.amount += amount;
    updateInventoryText(id);
    updateUpgradeTooltips();
    return true;
}

function removeItem(id, amount) {
    var target = inventory.find(item => item.id == id);
    if (target === undefined) {
        return false;
    }
    if (target.amount - amount < 0) {
        return false;
    }
    target.amount -= amount;
    updateInventoryText(id);
    updateUpgradeTooltips();
    return true;
}