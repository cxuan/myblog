define([],function(){var t,s=(t=$(".tips-box"),{show:function(){t.removeClass("hide")},hide:function(){t.addClass("hide")},init:function(){}});return yiliaConfig.isPost&&($(".post-list").addClass("toc-article"),$("#post-nav-button > a:nth-child(2)").click(function(){$("#post-nav-button .fa-bars,#post-nav-button .fa-times").toggle(),$(".post-list").toggle(300),0<$(".toc").length?$("#toc, #tocButton").toggle(200,function(){$(".switch-area").is(":visible")&&($("#toc, .switch-btn, .switch-area").toggle(),$("#tocButton").attr("value",yiliaConfig.toc[0]))}):$(".switch-btn, .switch-area").fadeToggle(300)})),yiliaConfig.jquery_ui[0]&&require([yiliaConfig.jquery_ui[1]],function(){!function(t,e){var o=document.createElement("link");o.rel="stylesheet",o.href=t;var i=document.querySelector("head");i.insertBefore(o,i.childNodes[25])}(yiliaConfig.jquery_ui[2]),$().tooltip&&(navigator.userAgent.match(/(iPhone|iPad|Android|ios|PlayBook|Touch)/i)||($("[title]").tooltip({show:{effect:"blind",delay:250,duration:55}}),$("#scroll").tooltip({show:{effect:"clip",delay:600,duration:50}}),$("#tocButton, #comments").tooltip({show:{delay:1200}}),$(".ds-replybox form").off("tooltip"),$("#post-nav-button").tooltip({show:{effect:"clip",delay:280,duration:65}}),$("#post-nav-button > a:nth-child(2)").tooltip({show:{delay:1500}}),$(".social").tooltip({show:{effect:"scale",delay:350,duration:70}})))}),yiliaConfig.search&&require([yiliaConfig.rootUrl+"js/search.js"],function(){var t=document.querySelector("#local-search-input"),e=$("#toc, #tocButton, .post-list, #post-nav-button a:nth-child(2)"),o=$("#search-form .fa-times"),i=$("#local-search-result"),n=function(){var t=yiliaConfig.rootUrl+"search.xml";searchFunc(t,"local-search-input","local-search-result")},s=t.getAttribute("searchonload");yiliaConfig.search&&"true"===s?n():t.onfocus=function(){n()},t.oninput=function(){e.css("visibility","hidden"),o.show()},t.onkeydown=function(){if(13==event.keyCode)return!1},resetSearch=function(){e.css("visibility","initial"),i.html(""),document.querySelector("#search-form").reset(),o.hide(),$(".no-result").hide()},i.bind("DOMNodeRemoved DOMNodeInserted",function(t){$(t.target).text()?$(".no-result").hide():$(".no-result").show(200)})}),{init:function(){resetTags(),function(){var t=$("#myonoffswitch"),e=$(".second-part"),o=$(".first-part");t.click(function(){t.hasClass("clicked")?(t.removeClass("clicked"),e.removeClass("turn-left"),o.removeClass("turn-left")):(t.addClass("clicked"),e.addClass("turn-left"),o.addClass("turn-left"),resetTags())});var i=!1,n=!1;$(".icon").bind("mouseenter",function(){i=!0,s.show()}).bind("mouseleave",function(){i=!1,setTimeout(function(){n||s.hide()},100)}),$(".tips-box").bind("mouseenter",function(){n=!0,s.show()}).bind("mouseleave",function(){n=!1,setTimeout(function(){i||s.hide()},100)}),$(".tips-inner li").bind("click",function(){var t,e;e=["-webkit-transform: translate(-"+100*(t=$(this).index())+"%, 0);","-moz-transform: translate(-"+100*t+"%, 0);","-o-transform: translate(-"+100*t+"%, 0);","-ms-transform: translate(-"+100*t+"%, 0);","transform: translate(-"+100*t+"%, 0);"],$(".switch-wrap")[0].style.cssText=e.join(""),$(".icon-wrap").addClass("hide"),$(".icon-wrap").eq(t).removeClass("hide"),s.hide()})}(),s.init()}}});