!window._bd_share_is_recently_loaded&&window._bd_share_main.F.module("trans/trans",function(e,n){var a=e("component/comm_tools"),r=e("conf/const").URLS,t=function(n){var e,t,i=(new Date).getTime()+3e3,r={click:1,url:(e=n,t=e.bdUrl||a.getPageUrl(),t=t.replace(/\'/g,"%27").replace(/\"/g,"%22")),uid:n.bdUid||"0",to:n.__cmd,type:"text",pic:n.bdPic||"",title:(n.bdText||document.title).substr(0,300),key:(n.bdSnsKey||{})[n.__cmd]||"",desc:n.bdDesc||"",comment:n.bdComment||"",relateUid:n.bdWbuid||"",searchPic:n.bdSearchPic||0,sign:n.bdSign||"on",l:window._bd_share_main.n1.toString(32)+window._bd_share_main.n2.toString(32)+i.toString(32),linkid:a.getLinkId(),firstime:d("bdshare_firstime")||""};switch(n.__cmd){case"copy":s(r);break;case"print":_();break;case"bdxc":m();break;case"bdysc":u(r);break;case"weixin":b(r);break;default:o(n,r)}window._bd_share_main.F.use("trans/logger",function(e){e.commit(n,r)})},o=function(e,n){var t=r.jumpUrl;"mshare"==e.__cmd?t=r.mshareUrl:"mail"==e.__cmd&&(t=r.emailUrl);var i=t+"?"+c(n);window.open(i)},d=function(e){if(e){var n=new RegExp("(^| )"+e+"=([^;]*)(;|$)").exec(document.cookie);if(n)return decodeURIComponent(n[2]||null)}},c=function(e){var n=[];for(var t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&").replace(/%20/g,"+")},s=function(n){window._bd_share_main.F.use("base/tangram",function(e){e.T.browser.ie?(window.clipboardData.setData("text",document.title+" "+(n.bdUrl||a.getPageUrl())),alert("标题和链接复制成功，您可以推荐给QQ/MSN上的好友了！")):window.prompt("您使用的是非IE核心浏览器，请按下 Ctrl+C 复制代码到剪贴板",document.title+" "+(n.bdUrl||a.getPageUrl()))})},_=function(){window.print()},m=function(){window._bd_share_main.F.use("trans/trans_bdxc",function(e){e&&e.run()})},u=function(n){window._bd_share_main.F.use("trans/trans_bdysc",function(e){e&&e.run(n)})},b=function(n){window._bd_share_main.F.use("trans/trans_weixin",function(e){e&&e.run(n)})};n.run=function(e){t(e)},window._bd_share_main.F.use("base/tangram",function(e){var n=e.T;null==n.cookie.get("bdshare_firstime")&&n.cookie.set("bdshare_firstime",1*new Date,{path:"/",expires:(new Date).setFullYear(2022)-new Date})})});