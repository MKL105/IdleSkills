const logBuffer = [];
var logSize = 10;

function logDrop(item, amount, source) {
    checkLogSize();
    var itemText = '<div class="';
    switch (item.rarity) {
        case 'common':
            itemText += 'common">' + item.name + '</div>';
            break;
        default: break;
    }

    var logText = '<p>Got ' + amount + 'x '+ itemText + ' from ' + source + '.</p>';
    logBuffer.unshift(logText);
    updateLog();
}

function logError(errortype, item) {
    
}

function checkLogSize() {
    if (logBuffer.length > logSize) {
        logBuffer.pop();
    }
}

function emptyLog() {
    logBuffer.length = 0;
    updateLog();
}



