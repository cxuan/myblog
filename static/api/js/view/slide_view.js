window._bd_share_main.F.module("view/slide_view",function(i,e,s){var b=i("base/tangram").T,n=i("base/class").Class,t=(i("conf/const"),i("view/view_base")),u="bdshare-slide-button";e.View=n.create(function(a){function i(){s||(o.html()||window._bd_share_main.F.use("component/partners",function(i){var e,s,n,t;partnerSort=i.partnerSort,partners=i.partners,e=partnerSort,s=partners,n=a.bdMiniList||e.slice(0,8*c),t=[],b.each(n,function(i,e){/(iPhone | iPad | Android)/i.test(navigator.userAgent)&&"weixin"===e||(t[i]='<li><a href="#" onclick="return false;" class="slide-'+e+'" data-cmd="'+e+'">'+s[e].name+"</a></li>")}),o.html(t.join(""))}),window._bd_share_main.F.use("component/animate",function(i){d.show(),i.animate(n[0],{width:h},300,function(){s=!0},function(i){d.width(i*h)})}))}function e(){s&&window._bd_share_main.F.use("component/animate",function(i){i.animate(n[0],{width:0},300,function(){s=!1,d.hide()},function(i){d.width((1-i)*h)})})}var n,t,d,o,r,l=this,s=!1;l._buttonType=1;var c=a.bdMini||2,h=110*c+6;a=b.extend({},a),l.render=function(){var i=['<div class="bdshare-slide-button-box bdshare-slide-style-'+("right"==a.bdPos?"r":"l")+a.bdImg+'" style="display:none;">','<a href="#" onclick="return false;" class="bdshare-slide-button"></a>','<div class="bdshare-slide-list-box">','<div class="bdshare-slide-top">分享到</div>','<div class="bdshare-slide-list">','<ul class="bdshare-slide-list-ul"></ul>',"</div>",'<div class="bdshare-slide-bottom">','<a href="#" onclick="return false;" class="slide-more"  data-cmd="more">更多...</a>',"</div>","</div>","</div>"].join("");if(n=b(i).appendTo("body"),t=n.find("."+u),d=n.find(".bdshare-slide-list-box"),o=n.find(".bdshare-slide-list-ul"),n.find(".bdshare-slide-list"),r=n.find(".bdshare-slide-bottom"),window._bd_share_main.F.use("slide_share.css",function(){var i=t.width()||24;t.css("right"==a.bdPos?"left":"right",-i),n&&n.css({top:0|a.bdTop,width:0,"z-index":99999}).css(a.bdPos,0).show(),d.width(0).hide(),o.width(h),r.width(h)}),l._entities.push(n),6==b.browser.ie){n.css("position","absolute");var s=parseInt(n.css("top"));setInterval(function(){var e=(0|a.bdTop)+b(window).scrollTop();s!=e&&window._bd_share_main.F.use("component/animate",function(i){i.animate(n[0],{top:e},300)})},1e3)}},l._init=function(){t.on("mouseenter click",i),n.on("mouseleave click",e),b("body").click(function(i){n.contains(i.target)||e()})},l._distory=function(){n.remove()}},t.ViewBase)});