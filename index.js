$('document').ready(function () {
    $('div').on('mouseover', function () {
        var div = document.getElementById('square');
        var left = getRandomInt(0, 1900) + 'px';
        console.log('left', left);
        div.style.left = left;
        
        var top = getRandomInt(0, 900) + 'px';
        console.log('top', top);
        div.style.top = top;
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});