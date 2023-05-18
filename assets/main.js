let i = 30;
var width = 100;


function Random() {
    var n1 = Math.floor(Math.random() * 9);
    var n2 = Math.floor(Math.random() * 9);
    var n3 = Math.floor(Math.random() * 9);
    var n4 = Math.floor(Math.random() * 9);
    var n5 = Math.floor(Math.random() * 9);
    var n6 = Math.floor(Math.random() * 9);
    document.getElementById('kodzik').innerText = n1 + '' + n2 + '' + n3 + ' ' + n4 + '' + n5 + '' + n6;

    setInterval(function () {
        i = 31;
        width = 100;
        var n1 = Math.floor(Math.random() * 9);
        var n2 = Math.floor(Math.random() * 9);
        var n3 = Math.floor(Math.random() * 9);
        var n4 = Math.floor(Math.random() * 9);
        var n5 = Math.floor(Math.random() * 9);
        var n6 = Math.floor(Math.random() * 9);
        document.getElementById('kodzik').innerText = n1 + '' + n2 + '' + n3 + ' ' + n4 + '' + n5 + '' + n6;
    }, 31000)
}

function Licz() {
    i = 30;
    width = 100;
    setInterval(function () {
        i--;
        document.getElementById('sekundy').innerText = i + 's';
    }, 1000)
}


function Pasek() {
    width = 100;
    setInterval(function () {
        if (width < 0) {
            width = 100;
        }
        document.getElementById("bar3").style.width = i * 3.34 + '%';//1.67
        width -= 0.0163;
    }, 10)
}

function Kopia() {
    var copyText = document.getElementById('kodzik').innerText.split(" ").join("");;
    console.log('Skopiowano')
    navigator.clipboard.writeText(copyText);
}

function klik() {
    var kodf = document.getElementById('kodzik');
    var wpisk = document.getElementById('jkpa');

    if (kodf.innerText.split(" ").join("") == wpisk.value) {
        console.log('Poprawny Kod');
        $("#wysk").css("margin-top", "-50px")
        setTimeout(function () {
            $("#wysk").css("z-index", "1")
        }, 1000);
    }
    else {
        console.log('Niepoprawny Kod');
        console.log(kodf.innerText);
        console.log(wpisk.value);
    }
}

function klik2() {
    $("#wysk").css("z-index", "-1")
    setTimeout(function () {
        $("#wysk").css("margin-top", "-500px")
    }, 1000);
    setTimeout(function () {
        $(".entryjed").css("opacity", "0")
        $("#wysk").css("opacity", "0")
    }, 3000);
    setTimeout(function () {
        $(".czk1").css("display", "none")
        $(".czk").css("display", "block")
    }, 5000);
    setTimeout(function () {
        document.getElementById('jkpa').value = '';
        $(".entryjed").css("opacity", "1")
    }, 8000);
}

moveOnMax = function (field, nextFieldID) {
    if (field.value.length == 1) {
        document.getElementById(nextFieldID).focus();
    }
}


window.onload = function start() {
    if (document.getElementById('kodzik').innerText == '') {
        Random();
        Licz();
        Pasek();
    }
}


$(document).ready(function () {
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    $('.banks-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 2000,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            }
        }
    });

    $('.testimonials-carousel').owlCarousel({
        loop: false,
        margin: 0,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    /*---------- Navbar Shrink ----------*/
    var bannerHeight = 80;
    var currentheight = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= bannerHeight) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }

        if (scroll < currentheight) {
            $(".navbar").css("top", "0");
        } else {
            $(".navbar").css("top", "-80px");
        }
        currentheight = scroll;
    });

    /*---------- Navbar Collapse ----------*/

    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });


    /*---------- Video Popup ----------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        }
        else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src", videoSrc);
            }
        }
    });
});