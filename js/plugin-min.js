$(document).ready(function(){"use strict";$(window).scroll(function(){window.scrollY>=500?$(".totop").show("400"):$(".totop").hide("400")}),$(".totop").find(".btn").on("click",function(){$("html,body").animate({scrollTop:0},500)}),$(".nav-link").on("click",function(n){n.preventDefault(),$("html,body").animate({scrollTop:$($(this).attr("href")).offset().top},1e3)}),$(".dropdown, .subdropdown").hover(function(){$(this).children("a.nav-link").next(".dropdown-menu").slideDown("fast")},function(){$(this).children("a.nav-link").next(".dropdown-menu").slideUp("fast")}),$(".carousel").carousel({interval:!1}),$.prototype.compny=function(){var n=this,o=function(){$(".slideractive").next().addClass("slideractive").siblings().removeClass("slideractive"),$(".slideractive").prevAll().appendTo(".compny .carousel-inner")},e=setInterval(function(){o()},4e3);$(this).find(".carousel-control-next").on("click",function(){o()}),$(this).find(".carousel-control-prev").on("click",function(){$(n).find(".carousel-item").last().addClass("slideractive").siblings().removeClass("slideractive"),$(n).find(".slideractive").prependTo(".compny .carousel-inner")}),$(this).hover(function(){clearInterval(e)},function(){e=setInterval(function(){o()},4e3)})},$(".compny").compny(),$("#knowledgeaccordion a").on("click ",function(){setTimeout(function(){$("#knowledgeaccordion a").prev(".btn").find(".fa").addClass("fa-minus").removeClass("fa-plus"),$("#knowledgeaccordion a.collapsed").prev(".btn").find(".fa").removeClass("fa-minus").addClass("fa-plus")},100)})});