window._bd_share_main.F.module("trans/trans_weixin",function(i,n){var r,p,c,e="bdshare_weixin_qrcode_dialog",o="",s=0,d={},_=i("base/tangram").T,u=(i("conf/const").URLS,function(i){var e=Math.round(200/i.length),o=['<table style="direction:ltr;border: 0; width:'+(s=(e=e<2?2:e)*i.length)+'px; border-collapse: collapse;background-color:#fff;margin:0 auto;" align="center">'],d="";return _.each(i,function(i,n){o.push("<tr>"),_.each(n,function(i,n){d='<td style="width:'+e+"px;height:"+e+"px;padding:0;margin:0;border:none;background:#"+(n?"000":"FFF")+'"></td>',o.push(d)})}),o.push("</table>"),o.join("")}),h=function(){var i=_(window).scrollTop(),n=r.outerWidth(),e=r.outerHeight(),o=_(window).width(),d=(_(window).height()-e)/2+i,t=(o-n)/2;d=d<0?0:d,t=t<0?0:t,p.width(n).height(e).css({left:t,top:d}),r.css({left:t,top:d})},t=function(){r.hide(),p.hide()};n.run=function(i){o=function(i){i=function(i){var n="10006-weixin-1-52626-6b3bffd01fdde4900130bc5a2751b6d1";if("off"===d.sign)return i;if("normal"!==d.sign)return i.replace(/#.*$/g,"")+"#"+n;var e=i.indexOf("#"),o=i.indexOf("?");return-1==e?i+(-1==o?"?":"&")+n:i.replace("#",(-1==o?"?":"&")+n+"#")}(i);var e=[];return _.each(i,function(i,n){/[^\x00-\xff]/.test(n)?e[i]=encodeURI(n):e[i]=n}),e.join("")}((d=i).url),window._bd_share_main.F.use("weixin_popup.css",function(){var a;window._bd_share_main.F.use("component/pop_dialog",function(i){i.Dialog.hide()}),function(){if(r=_("#"+e),p=_("#"+e+"_bg"),r.length<1){var i=['<div id="'+e+'" class="bd_weixin_popup">','<div class="bd_weixin_popup_head">',"<span>分享到微信朋友圈</span>",'<a href="#" onclick="return false;" class="bd_weixin_popup_close">&times;</a>',"</div>",'<div id="'+e+'_qr" class="bd_weixin_popup_main"></div>','<div class="bd_weixin_popup_foot">打开微信，点击底部的“发现”，<br>使用“扫一扫”即可将网页分享至朋友圈。</div>',"</div>"].join("");p=_('<iframe id="bdshare_weixin_qrcode_dialog_bg" class="bd_weixin_popup_bg"></iframe>').appendTo("body"),(r=_(i).appendTo("body")).find(".bd_weixin_popup_close").click(t),_("body").on("keydown",function(i){27==i.keyCode&&t()}),_(window).resize(function(){h()})}c=r.find("#"+e+"_qr"),r.show(),p.show(),h()}(),r.attr("data-url")!=o&&(c.html("正在加载"),o.length,a=o,window._bd_share_main.F.use("component/qrcode",function(i){var n=new i.QRCode(-1,i.QRErrorCorrectLevel.L);n.addData(a),n.make();var e,o,d,t=u(n.modules);_(t).appendTo(c.empty()),o=(220<(e=s)?e:220)+20,d=_(".bd_weixin_popup_foot").height()+_(".bd_weixin_popup_head").height()+e+30,r.css({width:o,height:d}),h(),r.attr("data-url",a)}))})}});