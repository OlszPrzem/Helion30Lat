/* 
	xBe by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    'use strict';

    // Back to top smooth scroll

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });


    // Scroll to top animated button

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });


    // Script for Portfolio Section

    $(document).ready(function() {

        // Slider top 


        $('#myCarousel-one').carousel({
            interval: 9000, //changes the speed
            keyboard: false,
        })


        //Team carousel

        $('#myCarousel-two').carousel({
            interval: 4000, //changes the speed
            keyboard: false,
        })

        //Clients carousel

        $('#myCarousel-three').carousel({
            interval: 4000, //changes the speed
            keyboard: false,
        })

        //Testimonials carousel

        $('#myCarousel-four').carousel({
            interval: 8000, //changes the speed
            keyboard: false,
        })

        // Google Maps

        google.maps.visualRefresh = true;

        var map;

        function initialize() {
            var geocoder = new google.maps.Geocoder();
            var address = $('#map-input').text(); /* change the map-input to your address */
            var mapOptions = {
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            };
            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            if (geocoder) {
                geocoder.geocode({
                    'address': address
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                            map.setCenter(results[0].geometry.location);

                            var infowindow = new google.maps.InfoWindow({
                                content: address,
                                map: map,
                                position: results[0].geometry.location,
                            });

                            var marker = new google.maps.Marker({
                                position: results[0].geometry.location,
                                map: map,
                                title: address
                            });

                        } else {
                            alert("No results found");
                        }
                    }
                });
            }
        }
        google.maps.event.addDomListener(window, 'load', initialize);



    });

    var myVar1; 
    var myVar2; 
    var myVar3;


    var showText1 = function (target, message, index, interval) {   
        
            if (index < message.length) {
                $(target).append(message[index++]);
                 myVar1 = setTimeout(function () { showText1(target, message, index, interval); }, interval);
            }        
      }

    var showText2 = function (target, message, index, interval) {   
        
        if (index < message.length) {
            $(target).append(message[index++]);
             myVar2 = setTimeout(function () { showText2(target, message, index, interval); }, interval);
        }        
    }

    var showText3 = function (target, message, index, interval) {   
        
        if (index < message.length) {
            $(target).append(message[index++]);
             myVar3 = setTimeout(function () { showText3(target, message, index, interval); }, interval);
        }        
    }


    function myStopFunction1() {
        clearTimeout(myVar1);

        document.getElementById("msg1").innerHTML = "";
      }

    function myStopFunction2() {
        clearTimeout(myVar2);

        document.getElementById("msg2").innerHTML = "";
      }

      function myStopFunction3() {
        clearTimeout(myVar3);

        document.getElementById("msg3").innerHTML = "";
      }

      function myStopFunctionSeniorka() {
        clearTimeout(dymekseniorka);
        setTimeout(function(){
            $('#dymek_seniorka').addClass("fadeOutUp");   
        }, 1100);
      }

      function myStopFunctionDorosly() {
        clearTimeout(dymekdorosly);
        setTimeout(function(){
            $('#dymek_dorosly').addClass("fadeOutUp");
        }, 1100);
      }

      function myStopFunctionUczen() {
        clearTimeout(dymekuczen);
        setTimeout(function(){
            $('#dymek_uczen').addClass("fadeOutUp");
        }, 1100);
      }


    let text_show1 = "Kochani Moi!\n Z okazji Waszego święta życzę Wam, \nżeby każda Wasza kolejna książeczka była lepsza od poprzedniej. Sama kilka tytułów już kupiłam i dzięki nim używać komputera się nauczyłam. Niech słoneczko nad Wami nie zachodzi i wszystko Wam się powodzi. Klientów niech nie brakuje, a wena autorów nie próżnuje. \n Dużo zdrówka i słodyczy - tego Wasza czytelniczka \n Bronisława życzy."

    let text_show2 = "Solenizanci! \n Zanim przejdę do składania życzeń, chciałbym Wam podziękować. To dzięki Wam, Waszym kursom i książkom konkurencja na naszym rynku pracy rośnie, a ja nie muszę się przepracowywać. ;\) Kolejni młodzi, dziarscy programiści ruszają w drogę kariery z Waszymi tytułami pod pachą. Życzę Wam, aby kolejne lata obfitowały w liczne bestsellery i aby waszym działaniom towarzyszył nieustanny rozwój. Piszcie,  kodujcie, upgrade-ujcie! Niech Wasze życie będzie snem na JAVIE! \n \n WEB DEV Tomek"

    let text_show3 = "Siema ludzie Helionu! \n Stuknęła Wam trzydziestka, a to okazja do świętowania nie byle jaka. Ja sam nie raz świętowałem dzięki Wam. Gdy kończyło się kieszonkowe, wystarczyło powiedzieć rodzicom, że wychodzi kolejna nowość Helionu, a na koncie pojawiały się dodatkowe sumy. Ale żeby była jasność – książki też kupowałem. Nawet całkiem sporo. Tak czy siak życzę Wam wielu miłych klientów, mnóstwa sprzedanych książek i dobrej atmosfery. \n \n Pozdro, Janek"

    


    var spanWidth = $('#testrrr span').width();
    $('#textrrr').animate( { width: spanWidth }, 1000 );
    // /* Animated Titles of Sections*/

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function() {
        $('.section-heading, .section-subheading').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('animated fadeInUp')
                
            } 
        });
    });

    //seniorka

    $(window).scroll(function() {
        // var y = $(this).scrollTop();
        if ($(this).scrollTop() < 700) {
            $('.scroll2').fadeOut();
            
        } else if ($(this).scrollTop() < 1100){
            $('.scroll2').fadeIn();
            
        } else {
            $('.scroll2').fadeOut();
        }
    });

    //monitor seniorka
    var $myVar = $('#myDiv');
    var $myVar2 = $('#myDiv2');

    function isScrolledIntoView0(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        // var elemTop = 1100;
        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom -500) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    function isScrolledIntoView00(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = 1300;
        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom -500) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    // seniorka

    $(window).scroll(function() {
        $("#seniorka").each(function() {
            if (isScrolledIntoView0("#seniorka") === true) {
                // $("#img1").addClass('animated fadeIn')
                $("#seniorka").fadeIn("slow", function() {
                    $(this).addClass("seniorka").promise();
                });
            } else if (isScrolledIntoView0("#seniorka") === false){
                // $("#img1").addClass('animated fadeOut')
                $("#seniorka").fadeOut("slow", function() {
                    $(this).removeClass("seniorka");
                });
            }
        });
    });

    var check = 0;
    var dymekseniorka;

    $(window).scroll(function() {
        $("#scroll2monitor").each(function() {
            if ((isScrolledIntoView00("#scroll2monitor") === true) && (check ===0)) {

                $("#scroll2monitor").removeClass('fadeOutRight').addClass("fadeInRight");
                $("#monitor_seniorka").removeClass('fadeOutRight').addClass("fadeInRight");

                var el = $('#dymek_seniorka');
                
                setTimeout(function(){
                    el.removeClass("fadeOutUp").promise();
                    el.addClass("fadeInUp");
                    
                }, 1000);

                dymekseniorka = setTimeout(function(){
                    $(function () {
                        showText1("#msg1", text_show1, 0, 50);   
                      });
                }, 1800);
                

                check =1;

            } else if ((isScrolledIntoView00("#scroll2monitor") === false) && (check===1)) {


                $('#scroll2monitor').removeClass('fadeInRight').addClass("fadeOutRight");
                $('#monitor_seniorka').removeClass('fadeInRight').addClass("fadeOutRight");
                $('#dymek_seniorka').removeClass('fadeInUp').addClass("fadeOutUp");

                myStopFunction1();
                myStopFunctionSeniorka();


                check =0;
            }
        });
    });

    // ----------------------------------------------------
    //                  dorosly chlop

    function isScrolledIntoView01(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;

        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom -500) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    function isScrolledIntoView001(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        // var elemTop = 2300;
        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom -500) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    $(window).scroll(function() {
        $("#dorosly").each(function() {
            if (isScrolledIntoView01("#dorosly") === true) {
                $("#dorosly").fadeIn("slow", function() {
                    $(this).addClass("dorosly").promise();
                });
            } else if (isScrolledIntoView01("#dorosly") === false){
                $("#dorosly").fadeOut("slow", function() {
                    $(this).removeClass("dorosly");
                });
            }

        });
    });


    var check2 = 0;
    var dymekdorosly;

    $(window).scroll(function() {
        $("#scroll3monitor").each(function() {
            if ((isScrolledIntoView001("#scroll3monitor") === true) && (check2 ===0)) {

                $("#scroll3monitor").removeClass('fadeOutLeft').addClass("fadeInLeft");
                $("#monitor_dorosly").removeClass('fadeOutLeft').addClass("fadeInLeft");

                var el = $('#dymek_dorosly');
                
                setTimeout(function(){
                    el.removeClass("fadeOutUp").promise();
                    el.addClass("fadeInUp");
                }, 1000);

                dymekdorosly = setTimeout(function(){
                    $(function () {
                        showText2("#msg2", text_show2, 0, 50);   
                      });
                }, 1800);

                check2 =1;

            } else if ((isScrolledIntoView001("#scroll3monitor") === false) && (check2===1)) {


                $('#scroll3monitor').removeClass('fadeInLeft').addClass("fadeOutLeft");
                $('#monitor_dorosly').removeClass('fadeInLeft').addClass("fadeOutLeft");
                $('#dymek_dorosly').removeClass('fadeInUp').addClass("fadeOutUp");

                myStopFunction2();
                myStopFunctionDorosly();
                check2 =0;
            }
        });
    });


    // ----------------------------------------------------
    //                  uczen

    function isScrolledIntoView02(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;


        var elemBottom = elemTop + $(elem).height()

        return (((elemBottom -500) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    function isScrolledIntoView002(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;


        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom -500) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    $(window).scroll(function() {
        $("#uczen").each(function() {
            if (isScrolledIntoView02("#uczen") === true) {
                $("#uczen").fadeIn("slow", function() {
                    $(this).addClass("uczen").promise();
                });
            } else if (isScrolledIntoView02("#uczen") === false){
                $("#uczen").fadeOut("slow", function() {
                    $(this).removeClass("uczen");
                });
            }
        });
    });


    var check3 = 0;
    var dymekuczen;

    $(window).scroll(function() {
        $("#scroll4monitor").each(function() {
            if ((isScrolledIntoView002("#scroll4monitor") === true) && (check3 ===0)) {

                $("#scroll4monitor").removeClass('fadeOutRight').addClass("fadeInRight");
                $("#monitor_uczen").removeClass('fadeOutRight').addClass("fadeInRight");

                var el = $('#dymek_uczen');
                
                setTimeout(function(){
                    el.removeClass("fadeOutUp").promise();
                    el.addClass("fadeInUp");
                }, 1000);

                dymekuczen = setTimeout(function(){
                    $(function () {
                        showText3("#msg3", text_show3, 0, 50);   
                      });
                }, 1800);

                check3 =1;

            } else if ((isScrolledIntoView002("#scroll4monitor") === false) && (check3===1)) {


                $('#scroll4monitor').removeClass('fadeInRight').addClass("fadeOutRight");
                $('#monitor_uczen').removeClass('fadeInRight').addClass("fadeOutRight");
                $('#dymek_uczen').removeClass('fadeInUp').addClass("fadeOutUp");

                myStopFunction3();
                myStopFunctionUczen();


                check3 =0;
            }
        });
    });

    

        

    function isScrolledIntoView1(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        // var elemTop = $(elem).offset().top;
        var elemTop = 2800;
        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom +500) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    

    $(window).scroll(function() {
        $("#img2").each(function() {
            if (isScrolledIntoView1("#img2") === true) {
                // $("#img1").addClass('animated fadeIn')
                $(this).fadeIn("slow", function() {
                    $(this).addClass("img2").promise();
                });
            } else if (isScrolledIntoView1("#img2") === false){
                // $("#img1").addClass('animated fadeOut')
                $("#img2").fadeOut("slow", function() {
                    $(this).removeClass("img2");
                });
            }
        });
    });

    function isScrolledIntoView2(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = 3700;
        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom -500) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    var $myVar = $('#myDiv');
    var $myVar2 = $('#myDiv2');

    $(window).scroll(function() {
        $("#img1").each(function() {
            if (isScrolledIntoView2("#img1") === true) {
                $(this).fadeIn("slow", function() {
                    $(this).addClass("img1").promise();
                });
            } else if (isScrolledIntoView2("#img1") === false){
                $("#img1").fadeOut("slow", function() {
                    $(this).removeClass("img1");
                });
            };
        });
    });

    function isScrolledIntoView2text(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = 3700;
        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom ) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    $(window).scroll(function() {
        $(".text1").each(function() {
            if (isScrolledIntoView2text(".text1") === true) {
                $(this).slideDown("slow", function() {
                    $(this).addClass(".text1").promise();
                });
            } else if (isScrolledIntoView2text(".text1") === false){
                $(".text1").slideUp("slow", function() {
                });
            }
        });
    });

    function isScrolledIntoView3text(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = 3700;
        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom ) <= docViewBottom) && ((elemTop) >= docViewTop));
    }

    $(window).scroll(function() {
        $(".text3").each(function() {
            if (isScrolledIntoView3text(".text3") === true) {
                $(this).slideDown("slow", function() {
                    $(this).addClass(".text3").promise();
                });
            } else if (isScrolledIntoView3text(".text3") === false){
                $(".text3").slideUp("slow", function() {
                });
            }
        });
    });

    

    $(window).scroll(function() {
        if ($(this).scrollTop() < 750) {
            $('.scroll3').slideUp("slow");
        } else if ($(this).scrollTop() < 1050){
            $('.scroll3').slideDown("slow");
            
        } else {
            $('.scroll3').slideUp("slow");
        }
    });


    function isScrolledIntoView0333(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;

        var elemBottom = elemTop + $(elem).height();

        return (((elemBottom -500) <= docViewBottom) && ((elemTop) >= docViewTop));
    }


    var check0333_2 = 0;
    var time1=0;
    var time2=0;

    $(window).scroll(function() {
        $("#baloniki").each(function() {
            var check0333 = isScrolledIntoView0333("#baloniki")
            if ((check0333 === true) && (check0333_2===0)){
                $("#baloniki").fadeIn("slow", function() {
                    $(this).addClass("baloniki").promise();
                });
                
                time1 = setTimeout(function(){
                    $("#tytuly").fadeIn("slow", function() {
                        $(this).addClass("tytuly").promise();
                    });
                }, 1000);
                time2 = setTimeout(function(){
                    $("#tytuly2").fadeIn("slow", function() {
                        $(this).addClass("tytuly2").promise();
                    });
                }, 1500);

                check0333_2 = 1
                
            } else if (check0333 === false){
                $("#tytuly").fadeOut("slow", function() {
                    $(this).removeClass("tytuly");
                });
                $("#tytuly2").fadeOut("slow", function() {
                    $(this).removeClass("tytuly2");
                });
                $("#baloniki").fadeOut("slow", function() {
                    $(this).removeClass("baloniki");
                });
                
                clearTimeout(time1);
                clearTimeout(time2);
                
                check0333_2 = 0
                
            }
        });
    });

    /*  Isotope Filter */

    (function() {
        var winDow = $(window);
        var $container = $('.portfolio-items');
        var $filter = $('.filter');

        try {
            $container.imagesLoaded(function() {
                $container.show();
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
            });
        } catch (err) {}

        winDow.bind('resize', function() {
            var selector = $filter.find('a.active').attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
            } catch (err) {}
            return false;
        });

        $filter.find('a').click(function() {
            var selector = $(this).attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
            } catch (err) {

            }
            return false;
        });


    }());


    /* Header shrink function*/

    $(function() {
        var shrinkHeader = 350;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.navbar').addClass('navbar-shrink');
            } else {
                $('.navbar').removeClass('navbar-shrink');
            }
        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    /* Footer reveal function*/

    $('footer').footerReveal({
        zIndex: -100,
        shadow: true,
        shadowOpacity: 0.6

    });
});


