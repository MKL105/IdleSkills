const miningT1 = {
    category: 'mining',
    baseTime: 10,
    dropChanceCommon: 100,
    baseDropsCommon: 1,
    bonusChanceCommon: 0,
    bonusDropsCommon: 1,
    dropCommon: 'Pebble',
    dropChanceUncommon: 0,
    baseDropsUncommon: 1,
    bonusChanceUncommon: 0,
    bonusDropsUncommon: 1,
    dropUncommon: '',
    dropChanceRare: 0,
    baseDropsRare: 1,
    bonusChanceRare: 0,
    bonusDropsRare: 1,
    dropRare: '',
    dropChanceEpic: 0,
    baseDropsEpic: 1,
    bonusChanceEpic: 0,
    bonusDropsEpic: 1,
    dropEpic: '',
    dropChanceLegendary: 0,
    baseDropsLegendary: 1,
    bonusChanceLegendary: 0,
    bonusDropsLegendary: 1,
    dropLegendary: '',
    getDrop: function() {
        let total = 0;
        let roll = 0;
        let bonusRoll = 0;
        let dropAmount = 0;
        total = this.dropChanceCommon + this.dropChanceUncommon + this.dropChanceRare + this.dropChanceEpic + this.dropChanceLegendary;
        roll = Math.floor(Math.random() * total) + 1;
        if (roll <= this.dropChanceCommon) {
            bonusRoll = Math.floor(Math.random() * 100) + 1;
            if (bonusRoll <= this.bonusChanceCommon) {
                dropAmount = this.baseDropsCommon + this.bonusDropsCommon;
            } else {
                dropAmount = this.baseDropsCommon;
            }
            return {drop: this.dropCommon, amount: dropAmount}
        } else if (roll <= this.dropChanceCommon + this.dropChanceUncommon) {
            bonusRoll = Math.floor(Math.random() * 100) + 1;
            if (bonusRoll <= this.bonusChanceUncommon) {
                dropAmount = this.baseDropsUncommon + this.bonusDropsUncommon;
            } else {
                dropAmount = this.baseDropsUncommon;
            }
            return {drop: this.dropUncommon, amount: dropAmount}
        } else if (roll <= this.dropChanceCommon + this.dropChanceUncommon + this.dropChanceRare) {
            bonusRoll = Math.floor(Math.random() * 100) + 1;
            if (bonusRoll <= this.bonusChanceRare) {
                dropAmount = this.baseDropsRare + this.bonusDropsRare;
            } else {
                dropAmount = this.baseDropsRare;
            }
            return {drop: this.dropRare, amount: dropAmount}
        } else if (roll <= this.dropChanceCommon + this.dropChanceUncommon + this.dropChanceRare + this.dropChanceEpic) {
            bonusRoll = Math.floor(Math.random() * 100) + 1;
            if (bonusRoll <= this.bonusChanceEpic) {
                dropAmount = this.baseDropsEpic + this.bonusDropsEpic;
            } else {
                dropAmount = this.baseDropsEpic;
            }
            return {drop: this.dropEpic, amount: dropAmount}
        }
        else {
            bonusRoll = Math.floor(Math.random() * 100) + 1;
            if (bonusRoll <= this.bonusChanceLegendary) {
                dropAmount = this.baseDropsLegendary + this.bonusDropsLegendary;
            } else {
                dropAmount = this.baseDropsLegendary;
            }
            return {drop: this.dropLegendary, amount: dropAmount}
        }
    }
}

const miningButtons = [miningT1];

function startMining(tier, button) {
    var id = 't' + tier + 'b' + button;
    var elem = miningButtons[tier - 1];
    startProgress(id, elem);
}