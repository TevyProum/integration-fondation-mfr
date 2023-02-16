$(document).ready(function(){
    $(".partnerCarousel").owlCarousel({
        margin:20,
        nav:true,
        dots:false,
        navText:["<div class='prev-slide'></div>","<div class='next-slide'></div>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1024:{
                items:4
            },
            1280:{
                items:5
            }
        }
    });

    $(".numbersCarousel").owlCarousel({
        margin:20,
        responsive:{
            0:{
                items:1
            },
            768:{
                margin:50,
                items:3,
                touchDrag:false,
                mouseDrag:false
            }
        }
    });

    $(".missionsCarousel").owlCarousel({
        margin:20,
        responsive:{
            0:{
                items:1
            },
            768:{
                margin:40,
                items:3,
                touchDrag:false,
                mouseDrag:false
            }
        }
    });

    $(".donationCarousel").owlCarousel({
        margin:0,
        nav:true,
        navText:["<div class='prev-slide'></div>","<div class='next-slide'></div>"],
        dots:false,
        items: 1,
        responsive:{
            1123:{
                margin:-35,
            },
            1400:{
                margin:-20,
            }
        }
    });

    $(".resourcesCarousel").owlCarousel({
        margin:20,
        nav:true,
        navContainer: '#customNav',
        navText:["<div class='prev-slide'></div>","<div class='next-slide'></div>"],
        dots:false,
        items: 1,
        responsive:{
            600:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
});