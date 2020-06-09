function getCurrentWidth() {
    let progressBarWidth = $('.progress-bar').width();
    let parentWidth = $('.progress-bar').parent().width();
    let percent = progressBarWidth / parentWidth * 100;
    let widthInPercent = Math.round(percent).toFixed(0);
    return parseInt(widthInPercent);
}

function increaseProgress(percentValue) {
    let currentWidth = getCurrentWidth();
    let newWidth;
    if (currentWidth >= 100) {
        newWidth = "100%";
    } else {
        newWidth = getCurrentWidth() + percentValue + '%';
    }
    $('.progress-bar').width(newWidth).text(newWidth);
}

$('#percent1').click(function () { increaseProgress(1); });
$('#percent3').click(function () { increaseProgress(3); });
$('#percent7').click(function () { increaseProgress(7); });