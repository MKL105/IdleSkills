const allUpgrades = [
    {
        id: "miningt1inv1",
        title: "Increase Pebble Inventory",
        reqirements: [{material: 'Pebble', amount: miningInvT1.pebblemax,}],
        available: false,
        unlocked: false,
        tier: 1
    }
];

function generateUpgradeText(upgrade) {
    var text = "";

    text += '<p class="upgrade-title">' + upgrade.title + '</p>';
    upgrade.reqirements.forEach(function (requirement) {
        text += '<p class="upgrade-requirement">' + requirement.material + ':' +  + '</p>';
    });

}