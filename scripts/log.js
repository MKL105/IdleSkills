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

    var logText = '<p>' + getCurrentTime() + '&emsp; Got ' + amount + 'x '+ itemText + ' from ' + source + '.</p>';
    logBuffer.unshift(logText);
    updateLog();
}

function checkLogSize() {
    if (logBuffer.length >= logSize) {
        logBuffer.pop();
    }
}

function emptyLog() {
    logBuffer.length = 0;
    updateLog();
}

function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return hours + ':' + minutes + ':' + seconds;
}



