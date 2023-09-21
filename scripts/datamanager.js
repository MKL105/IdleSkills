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
        baseTime: 7,
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

]

const buttonStates = [
    {
        id: "mining-t1b1",
        active: false,
        timeLeft: 0,
        category: "mining",
        tier: 1
    },
    {
        id: "mining-t1b2",
        active: false,
        timeLeft: 0,
        category: "mining",
        tier: 1
    }
]