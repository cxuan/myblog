window._bd_share_main.F.module("view/like_view",function(e,t,n){e("like.css");var d=e("base/tangram").T,a=e("base/class").Class,u=e("conf/const"),i=e("view/view_base"),o=e("component/animate"),v="bdlikebutton",m="bdlikebutton-inner",p="bdlikebutton-add",h="bdlikebutton-text",b="bdlikebutton-count";t.View=a.create(function(l){function s(e){return d(e).parent().get(0)}var c=this,r={small:[4,"顶","已顶过"],medium:[6,"顶","您已顶过"],large:[10,"该内容对我有帮助","您已顶过，谢谢！"]};c.render=function(e){var t,n,a,i=(a=l.tag||"",d("."+v).each(function(e,t){(!a||d(t).attr(u.CONFIG_TAG_ATTR)==a)&&c._entities.push(t)}),c._entities),s=v,o=(n=r[(t=l).type],t.likeText=t.likeText?t.likeText.substr(0,n[0]):n[1],t.likedText=t.likedText?t.likedText.substr(0,n[0]):n[2],t);c._actBtnSet.className=m,c._actBtnSet.tagName="div",c._actBtnSet.maxDomDepth=1,d(i).each(function(e,t){var n=o.type,a=[];a.push('<div class="',m,'" ',c._actBtnSet.cmdAttr,'="like">'),a.push('<span class="',p,'">+1</span>'),a.push('<div class="',b,'">加载中</div>'),"small"!=n&&a.push('<div class="',h,'">',o.likeText,"</div>"),a.push("</div>"),d(t).html(a.join("")).addClass(s+"-"+o.color).addClass(s+"-"+o.type).addClass(s+"-"+o.type+"-"+o.color)})},c._init=function(){var i=l,s=i.type;d(c._entities).each(function(e,n){var a=d("."+m,n);a.mouseover(function(e){var t=(e=d.event(e||window.event)).relatedTarget;a.contains(t)||("small"==s&&d("."+b,n).html(i.likeText),d(n).addClass(v+"-"+i.type+"-"+i.color+"-hover"))}).mouseout(function(e){var t=(e=d.event(e||window.event)).relatedTarget;a.contains(t)||("small"==s?d("."+b,n).html(i.count):d("."+h,n).html(i.likeText),d(n).removeClass(v+"-"+i.type+"-"+i.color+"-hover"))})})},c.showDoneState=function(e){var t=l,n=s(e),a=h;"small"==t.type&&(a=b),d("."+a,n).html(t.likedText),d(n).removeClass(n,v+"-"+t.type+"-"+t.color+"-hover")},c.addOne=function(e,t){var n=l,a=s(e),i=d("."+p,a);i.show(),o.animate(i.get(0),{top:"-25px",opacity:"0"},300,function(){i.hide(),i.css({top:"0px",opacity:99})}),c.setNumber(t),d(a).removeClass(v+"-"+n.type+"-"+n.color+"-hover")},c.setNumber=function(n){"number"==d.type(n)&&d(c._entities).each(function(e,t){d("."+b,t).html(n)})}},i.ViewBase)});