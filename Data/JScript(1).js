var blackOverlay;
function showLightBox(obj) {
    var whiteOverlay = obj.parentNode.nextSibling;
    while (whiteOverlay.nodeType == 3) {
        whiteOverlay = whiteOverlay.nextSibling;
    }
    var l = (screen.width - 670) / 2;
    var t = (screen.height - 450) / 3;
    whiteOverlay.setAttribute('style', 'position:fixed;display:block;left:' + l + 'px;top:' + t + 'px;');
    if (!blackOverlay) {
        blackOverlay = document.createElement('div');
        document.body.appendChild(blackOverlay);
    }
    blackOverlay.setAttribute('class', 'black_overlay');
    blackOverlay.setAttribute('style', 'display:block');
    return false;
}

function closeLightBox(obj) {
    var whiteContent = obj.parentNode;
    while (!whiteContent.getAttribute('class') || whiteContent.getAttribute('class') != 'white_content') {
        whiteContent = whiteContent.parentNode;
    }
    whiteContent.removeAttribute('style');
    blackOverlay.removeAttribute('style');    
}

