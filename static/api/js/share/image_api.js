window._bd_share_main.F.module("share/image_api",function(e,i,a){e("base/tangram").T;var n=e("base/class").Class,t=(e("component/comm_tools"),e("share/api_base"));i.Api=n.create(function(a){var n=this;n._init=function(){var e=n.getView();e.render(),e.init(),e.on("moreover",function(){e._keepBarVisible()})},n._processAction=function(e){var i=n.getView();return a.bdPic=i._getImageSrc(),{data:{type:"imgshare"}}},n._distory=function(){}},t.ApiBase)});