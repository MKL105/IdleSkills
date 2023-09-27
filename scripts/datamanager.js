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
        maxAmount: 3
    },
    {
        id: "stick",
        name: "Stick",
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

const woodcuttingData = [
    {
        id: "woodcuttingDataT1",
        tier: 1,
        baseTime: 10,
        drops: [
            {
                item: getItemById("stick"),
                baseDrop: 3,
                dropChance: 100,
                bonusDrop: 2,
                bonusDropChance: 15
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
            "pebbleInvUpgrade4"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[2]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade4",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 4",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 4,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade5"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[3]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade5",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 5",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 5,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade6"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[4]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade6",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 6",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 6,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade7"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[5]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade7",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 7",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 7,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade8"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[6]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade8",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 8",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 8,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade9"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[7]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade9",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 9",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 9,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade10"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[8]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade10",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 10",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 10,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade11"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[9]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade11",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 11",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 11,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade12"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[10]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade12",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 12",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 12,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "pebbleInvUpgrade13"
        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[11]
            }
        ]
    },
    {
        id: "pebbleInvUpgrade13",
        category: "pebbleInvUpgrade",
        title: "Pebble Inventory Upgrade 13",
        description: "Increases the pebble inventory size to ",
        upgradeNumber: 13,
        available: false,
        unlockable: false,
        unlocksUpgrades: [

        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: pebbleInvMaxProgression[12]
            }
        ]
    },
    {
        id: "miningT1CommonBaseDropUpgrade1",
        category: "miningT1CommonBaseDropUpgrade",
        title: "T1 Mining Common Drop Upgrade 1",
        description: "Increases the minimum amount of common items dropped by T1 mining.",
        upgradeNumber: 1,
        available: true,
        unlockable: false,
        unlocksUpgrades: [

        ],
        requirements: [
            {
                item: getItemById("pebble"),
                amount: 100
            },
            {
                item: getItemById("square-pebble"),
                amount: 10
            }
        ]
    },
    {
        id: "stickInvUpgrade1",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 1",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 1,
        available: true,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade2"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[0]
            }
        ]
    },
    {
        id: "stickInvUpgrade2",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 2",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 2,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade3"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[1]
            }
        ]
    },
    {
        id: "stickInvUpgrade3",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 3",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 3,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade4"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[2]
            }
        ]
    },
    {
        id: "stickInvUpgrade4",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 4",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 4,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade5"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[3]
            }
        ]
    },
    {
        id: "stickInvUpgrade5",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 5",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 5,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade6"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[4]
            }
        ]
    },
    {
        id: "stickInvUpgrade6",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 6",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 6,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade7"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[5]
            }
        ]
    },
    {
        id: "stickInvUpgrade7",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 7",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 7,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade8"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[6]
            }
        ]
    },
    {
        id: "stickInvUpgrade8",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 8",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 8,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade9"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[7]
            }
        ]
    },
    {
        id: "stickInvUpgrade9",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 9",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 9,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade10"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[8]
            }
        ]
    },
    {
        id: "stickInvUpgrade10",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 10",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 10,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade11"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[9]
            }
        ]
    },
    {
        id: "stickInvUpgrade11",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 11",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 11,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade12"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[10]
            }
        ]
    },
    {
        id: "stickInvUpgrade12",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 12",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 12,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "stickInvUpgrade13"
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[11]
            }
        ]
    },
    {
        id: "stickInvUpgrade13",
        category: "stickInvUpgrade",
        title: "Stick Inventory Upgrade 13",
        description: "Increases the stick inventory size to ",
        upgradeNumber: 13,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            
        ],
        requirements: [
            {
                item: getItemById("stick"),
                amount: stickInvMaxProgression[12]
            }
        ]
    },
    {
        id: "squarePebbleInvUpgrade1",
        category: "squarePebbleInvUpgrade",
        title: "Square Pebble Inventory Upgrade 1",
        description: "Increases the square pebble inventory size to ",
        upgradeNumber: 1,
        available: true,
        unlockable: false,
        unlocksUpgrades: [
            "squarePebbleInvUpgrade2"
        ],
        requirements: [
            {
                item: getItemById("square-pebble"),
                amount: squarePebbleInvMaxProgression[0]
            }
        ]
    },
    {
        id: "squarePebbleInvUpgrade2",
        category: "squarePebbleInvUpgrade",
        title: "Square Pebble Inventory Upgrade 2",
        description: "Increases the square pebble inventory size to ",
        upgradeNumber: 2,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "squarePebbleInvUpgrade3"
        ],
        requirements: [
            {
                item: getItemById("square-pebble"),
                amount: squarePebbleInvMaxProgression[1]
            }
        ]
    },
    {
        id: "squarePebbleInvUpgrade3",
        category: "squarePebbleInvUpgrade",
        title: "Square Pebble Inventory Upgrade 3",
        description: "Increases the square pebble inventory size to ",
        upgradeNumber: 3,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "squarePebbleInvUpgrade4"
        ],
        requirements: [
            {
                item: getItemById("square-pebble"),
                amount: squarePebbleInvMaxProgression[2]
            }
        ]
    },
    {
        id: "squarePebbleInvUpgrade4",
        category: "squarePebbleInvUpgrade",
        title: "Square Pebble Inventory Upgrade 4",
        description: "Increases the square pebble inventory size to ",
        upgradeNumber: 4,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "squarePebbleInvUpgrade5"
        ],
        requirements: [
            {
                item: getItemById("square-pebble"),
                amount: squarePebbleInvMaxProgression[3]
            }
        ]
    },
    {
        id: "squarePebbleInvUpgrade5",
        category: "squarePebbleInvUpgrade",
        title: "Square Pebble Inventory Upgrade 5",
        description: "Increases the square pebble inventory size to ",
        upgradeNumber: 5,
        available: false,
        unlockable: false,
        unlocksUpgrades: [
            "squarePebbleInvUpgrade6"
        ],
        requirements: [
            {
                item: getItemById("square-pebble"),
                amount: squarePebbleInvMaxProgression[4]
            }
        ]
    },
    {
        id: "squarePebbleInvUpgrade6",
        category: "squarePebbleInvUpgrade",
        title: "Square Pebble Inventory Upgrade 6",
        description: "Increases the square pebble inventory size to ",
        upgradeNumber: 6,
        available: false,
        unlockable: false,
        unlocksUpgrades: [

        ],
        requirements: [
            {
                item: getItemById("square-pebble"),
                amount: squarePebbleInvMaxProgression[5]
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
        id: "woodcutting-t1b1",
        active: false,
        timeLeft: 0,
        category: "woodcutting",
        tier: 1,
        unlocked: true,
        data: woodcuttingData[0]
    }
]