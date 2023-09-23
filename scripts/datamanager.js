const inventory = [
    {
        id: "pebble",
        name: "Pebble",
        rarity: "common",
        unlocked: true,
        amount: 0,
        maxAmount: 10
    }
];

const miningData = [
    {
        id: "miningDataT1",
        tier: 1,
        baseTime: 5,
        drops: [
            {
                item: getItemById("pebble"),
                baseDrop: 1,
                dropChance: 100,
                bonusDrop: 0,
                bonusDropChance: 0
            }
        ]
    }
];

const upgradeData = [
    {
        id: "pebbleInvUpgrade1",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 1",
        upgradeNumber: 1,
        available: true,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade2"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[0]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade2",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 2",
        upgradeNumber: 2,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade3"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[1]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade3",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 3",
        upgradeNumber: 3,
        available: false,
        unlockable: false,
        unlocksUpgrades: [

        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[2]
            }
        ]
    }
]

const buttonStates = [
    {
        id: "mining-t1b1",
        active: false,
        timeLeft: 0,
        category: "mining",
        tier: 1,
        unlocked: true
    },
    {
        id: "mining-t1b2",
        active: false,
        timeLeft: 0,
        category: "mining",
        tier: 1,
        unlocked: false
    }
]