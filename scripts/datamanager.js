const inventory = [
    {
        id: "pebble",
        name: "Pebble",
        rarity: "common",
        unlocked: true,
        amount: 0,
        maxAmount: 10
    },
    {
        id: "square-pebble",
        name: "Square Pebble",
        rarity: "rare",
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
                baseDrop: 2,
                dropChance: 100,
                bonusDrop: 1,
                bonusDropChance: 20
            },
            {
                item: getItemById("square-pebble"),
                baseDrop: 1,
                dropChance: 10,
                bonusDrop: 1,
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
        description: "Increases the pebble inventory size to ",
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
        description: "Increases the pebble inventory size to ",
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
        description: "Increases the pebble inventory size to ",
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
        unlocked: true,
        data: miningData[0]
    },
    {
        id: "mining-t1b2",
        active: false,
        timeLeft: 0,
        category: "mining",
        tier: 1,
        unlocked: false,
        data: miningData[0]
    }
]