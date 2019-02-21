$(document).ready(function () {

    $(window).scroll(function () {
        let scroll = $(this).scrollTop();
        $("#moon").css(({ WebkitTransform: 'rotate(' + scroll/50 + 'deg)'}))

    })


});


function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}