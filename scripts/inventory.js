const miningInvT1 = {
    drops: ['Pebble'],
    pebble: 0,
    pebblemax: 10,
    addItem: function (item) {
        switch (item.drop) {
            case 'Pebble':
                var newAmount = (this.pebble + item.amount > this.pebblemax) ? this.pebblemax : this.pebble + item.amount;
                this.pebble = newAmount;
                return;
            default: return;
        }
    }
}

const inventories = [miningInvT1];

function storeDrop(drop) {
    for (let i = 0; i < inventories.length; i++) {
        if (inventories[i].drops.includes(drop.drop)) {
            inventories[i].addItem(drop);
            updateInventoryUi();
        }
    }
}