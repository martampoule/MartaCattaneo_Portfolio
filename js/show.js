jQuery(function () {
    jQuery('.showSingle').click(function () {
        jQuery('.targetDiv').hide();
        jQuery('#div' + $(this).attr('target')).show();
    });
});



function constrain(v, min, max) {
    return Math.max(Math.min(v, max), min);
}

document.getElementById('imageA').onmousemove = function (e) {
    var maxWidth = this.width
    var left = this.getBoundingClientRect().left;
    var x = e.clientX - left;
    var opacity = constrain(x / maxWidth, 0, 0.9999);
    //console.log(left, maxWidth, x, opacity);
    document.getElementById('imageB').style.opacity = opacity;
}