/*global $, alert, document, window, console */
$(document).ready(function() {
    "use strict";
    //button to top
    $(window).scroll(function() {
        if(window.scrollY >= 500) {
            $(".totop").show('400');
        } else {
           $(".totop").hide('400'); 
        }
    });
    $(".totop").find('.btn').on("click", function(){
        $("html,body").animate({scrollTop:0},500)
    });
    //nav to section effect
    $(".nav-link").on("click", function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop: $($(this).attr("href")).offset().top},1000)
    }); 
    //navbar dropdown effect
    $(".dropdown, .subdropdown").hover(function() {
            $(this).children('a.nav-link').next(".dropdown-menu").slideDown('fast');
        },
        function() {
            $(this).children('a.nav-link').next(".dropdown-menu").slideUp('fast');
        });
    //stop all carousel effect in bootstrap
    $('.carousel').carousel({
        interval: false
    });
    //script for animat slider in compny section with jquery dom effect
    $.prototype.compny = function() {
        var _this = this,
        	compnynext = function() {
                $(".slideractive").next().addClass('slideractive').siblings().removeClass('slideractive');
                $(".slideractive").prevAll().appendTo('.compny .carousel-inner');
            },
            compnyprev = function() {
                $(_this).find('.carousel-item').last().addClass('slideractive').siblings().removeClass('slideractive');
                $(_this).find(".slideractive").prependTo('.compny .carousel-inner');
            },
            compnyanimt = setInterval(function() { compnynext() }, 4000);
        $(this).find(".carousel-control-next").on("click", function() {
            compnynext();
        });
        $(this).find(".carousel-control-prev").on("click", function() {
            compnyprev();
        });
        $(this).hover(function() {
            clearInterval(compnyanimt);
        }, function() {
            compnyanimt = setInterval(function() { compnynext() }, 4000);
        });
    };
    $(".compny").compny();
    //accordion icon change
    $("#knowledgeaccordion a").on("click ",function() {
        setTimeout(function () {
            $("#knowledgeaccordion a").prev(".btn").find('.fa').addClass('fa-minus').removeClass('fa-plus');
            $("#knowledgeaccordion a.collapsed").prev(".btn").find('.fa').removeClass('fa-minus').addClass('fa-plus');
        },100);
    });
});