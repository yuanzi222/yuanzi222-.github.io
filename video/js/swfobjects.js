var swfobject=function(){var s,c,f,d,l,p,m="undefined",w="object",u="Shockwave Flash",h="application/x-shockwave-flash",v="SWFObjectExprInst",e="onreadystatechange",y=window,g=document,b=navigator,C=!1,n=[function(){C?function(){var t=g.getElementsByTagName("body")[0],a=M(w);a.setAttribute("type",h);var n=t.appendChild(a);if(n){var i=0;!function(){if(typeof n.GetVariable!=m){var e=n.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),N.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(i<10)return i++,setTimeout(arguments.callee,10);t.removeChild(a),n=null,I()}()}else I()}():I()}],E=[],S=[],o=[],i=!1,A=!1,r=!0,N=function(){var e=typeof g.getElementById!=m&&typeof g.getElementsByTagName!=m&&typeof g.createElement!=m,t=b.userAgent.toLowerCase(),a=b.platform.toLowerCase(),n=/win/.test(a||t),i=/mac/.test(a||t),r=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),o=!1,l=[0,0,0],s=null;if(typeof b.plugins!=m&&typeof b.plugins[u]==w)!(s=b.plugins[u].description)||typeof b.mimeTypes!=m&&b.mimeTypes[h]&&!b.mimeTypes[h].enabledPlugin||(o=!(C=!0),s=s.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=parseInt(s.replace(/^(.*)\..*$/,"$1"),10),l[1]=parseInt(s.replace(/^.*\.(.*)\s.*$/,"$1"),10),l[2]=/[a-zA-Z]/.test(s)?parseInt(s.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof y.ActiveXObject!=m)try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");c&&(s=c.GetVariable("$version"))&&(o=!0,s=s.split(" ")[1].split(","),l=[parseInt(s[0],10),parseInt(s[1],10),parseInt(s[2],10)])}catch(e){}return{w3:e,pv:l,wk:r,ie:o,win:n,mac:i}}();function t(){if(!i){try{var e=g.getElementsByTagName("body")[0].appendChild(M("span"));e.parentNode.removeChild(e)}catch(e){return}i=!0;for(var t=n.length,a=0;a<t;a++)n[a]()}}function a(e){i?e():n[n.length]=e}function T(e){if(typeof y.addEventListener!=m)y.addEventListener("load",e,!1);else if(typeof g.addEventListener!=m)g.addEventListener("load",e,!1);else if(typeof y.attachEvent!=m)n=e,(a=y).attachEvent("onload",n),o[o.length]=[a,"onload",n];else if("function"==typeof y.onload){var t=y.onload;y.onload=function(){t(),e()}}else y.onload=e;var a,n}function I(){var e=E.length;if(0<e)for(var t=0;t<e;t++){var a=E[t].id,n=E[t].callbackFn,i={success:!1,id:a};if(0<N.pv[0]){var r=x(a);if(r)if(!V(E[t].swfVersion)||N.wk&&N.wk<312)if(E[t].expressInstall&&k()){var o={};o.data=E[t].expressInstall,o.width=r.getAttribute("width")||"0",o.height=r.getAttribute("height")||"0",r.getAttribute("class")&&(o.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(o.align=r.getAttribute("align"));for(var l={},s=r.getElementsByTagName("param"),c=s.length,f=0;f<c;f++)"movie"!=s[f].getAttribute("name").toLowerCase()&&(l[s[f].getAttribute("name")]=s[f].getAttribute("value"));j(o,l,a,n)}else B(r),n&&n(i);else R(a,!0),n&&(i.success=!0,i.ref=L(a),n(i))}else if(R(a,!0),n){var d=L(a);d&&typeof d.SetVariable!=m&&(i.success=!0,i.ref=d),n(i)}}}function L(e){var t=null,a=x(e);if(a&&"OBJECT"==a.nodeName)if(typeof a.SetVariable!=m)t=a;else{var n=a.getElementsByTagName(w)[0];n&&(t=n)}return t}function k(){return!A&&V("6.0.65")&&(N.win||N.mac)&&!(N.wk&&N.wk<312)}function j(e,t,a,n){f=n||null,d={success:!(A=!0),id:a};var i=x(a);if(i){"OBJECT"==i.nodeName?(s=O(i),c=null):(s=i,c=a),e.id=v,(typeof e.width==m||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==m||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),g.title=g.title.slice(0,47)+" - Flash Player Installation";var r=N.ie&&N.win?"ActiveX":"PlugIn",o="MMredirectURL="+y.location.toString().replace(/&/g,"%26")+"&MMplayerType="+r+"&MMdoctitle="+g.title;if(typeof t.flashvars!=m?t.flashvars+="&"+o:t.flashvars=o,N.ie&&N.win&&4!=i.readyState){var l=M("div");a+="SWFObjectNew",l.setAttribute("id",a),i.parentNode.insertBefore(l,i),i.style.display="none",function(){4==i.readyState?i.parentNode.removeChild(i):setTimeout(arguments.callee,10)}()}F(e,t,a)}}function B(e){if(N.ie&&N.win&&4!=e.readyState){var t=M("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(O(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(O(e),e)}function O(e){var t=M("div");if(N.win&&N.ie)t.innerHTML=e.innerHTML;else{var a=e.getElementsByTagName(w)[0];if(a){var n=a.childNodes;if(n)for(var i=n.length,r=0;r<i;r++)1==n[r].nodeType&&"PARAM"==n[r].nodeName||8==n[r].nodeType||t.appendChild(n[r].cloneNode(!0))}}return t}function F(e,t,a){var n,i,r,o,l,s=x(a);if(N.wk&&N.wk<312)return n;if(s)if(typeof e.id==m&&(e.id=a),N.ie&&N.win){var c="";for(var f in e)e[f]!=Object.prototype[f]&&("data"==f.toLowerCase()?t.movie=e[f]:"styleclass"==f.toLowerCase()?c+=' class="'+e[f]+'"':"classid"!=f.toLowerCase()&&(c+=" "+f+'="'+e[f]+'"'));var d="";for(var p in t)t[p]!=Object.prototype[p]&&(d+='<param name="'+p+'" value="'+t[p]+'" />');s.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+c+">"+d+"</object>",S[S.length]=e.id,n=x(e.id)}else{var u=M(w);for(var v in u.setAttribute("type",h),e)e[v]!=Object.prototype[v]&&("styleclass"==v.toLowerCase()?u.setAttribute("class",e[v]):"classid"!=v.toLowerCase()&&u.setAttribute(v,e[v]));for(var y in t)t[y]!=Object.prototype[y]&&"movie"!=y.toLowerCase()&&(i=u,o=t[r=y],l=void 0,(l=M("param")).setAttribute("name",r),l.setAttribute("value",o),i.appendChild(l));s.parentNode.replaceChild(u,s),n=u}return n}function $(n){var e=x(n);e&&"OBJECT"==e.nodeName&&(N.ie&&N.win?(e.style.display="none",function(){4==e.readyState?function(e){var t=x(n);if(t){for(var a in t)"function"==typeof t[a]&&(t[a]=null);t.parentNode.removeChild(t)}}():setTimeout(arguments.callee,10)}()):e.parentNode.removeChild(e))}function x(e){var t=null;try{t=g.getElementById(e)}catch(e){}return t}function M(e){return g.createElement(e)}function V(e){var t=N.pv,a=e.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,t[0]>a[0]||t[0]==a[0]&&t[1]>a[1]||t[0]==a[0]&&t[1]==a[1]&&t[2]>=a[2]}function P(e,t,a,n){if(!N.ie||!N.mac){var i=g.getElementsByTagName("head")[0];if(i){var r=a&&"string"==typeof a?a:"screen";if(n&&(p=l=null),!l||p!=r){var o=M("style");o.setAttribute("type","text/css"),o.setAttribute("media",r),l=i.appendChild(o),N.ie&&N.win&&typeof g.styleSheets!=m&&0<g.styleSheets.length&&(l=g.styleSheets[g.styleSheets.length-1]),p=r}N.ie&&N.win?l&&typeof l.addRule==w&&l.addRule(e,t):l&&typeof g.createTextNode!=m&&l.appendChild(g.createTextNode(e+" {"+t+"}"))}}}function R(e,t){if(r){var a=t?"visible":"hidden";i&&x(e)?x(e).style.visibility=a:P("#"+e,"visibility:"+a)}}function D(e){return null!=/[\\\"<>\.;]/.exec(e)&&typeof encodeURIComponent!=m?encodeURIComponent(e):e}return N.w3&&((typeof g.readyState!=m&&"complete"==g.readyState||typeof g.readyState==m&&(g.getElementsByTagName("body")[0]||g.body))&&t(),i||(typeof g.addEventListener!=m&&g.addEventListener("DOMContentLoaded",t,!1),N.ie&&N.win&&(g.attachEvent(e,function(){"complete"==g.readyState&&(g.detachEvent(e,arguments.callee),t())}),y==top&&function(){if(!i){try{g.documentElement.doScroll("left")}catch(e){return setTimeout(arguments.callee,0)}t()}}()),N.wk&&function(){i||(/loaded|complete/.test(g.readyState)?t():setTimeout(arguments.callee,0))}(),T(t))),N.ie&&N.win&&window.attachEvent("onunload",function(){for(var e=o.length,t=0;t<e;t++)o[t][0].detachEvent(o[t][1],o[t][2]);for(var a=S.length,n=0;n<a;n++)$(S[n]);for(var i in N)N[i]=null;for(var r in N=null,swfobject)swfobject[r]=null;swfobject=null}),{registerObject:function(e,t,a,n){if(N.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=a,i.callbackFn=n,E[E.length]=i,R(e,!1)}else n&&n({success:!1,id:e})},getObjectById:function(e){if(N.w3)return L(e)},embedSWF:function(o,l,s,c,f,d,p,u,v,y){var h={success:!1,id:l};N.w3&&!(N.wk&&N.wk<312)&&o&&l&&s&&c&&f?(R(l,!1),a(function(){s+="",c+="";var e={};if(v&&typeof v===w)for(var t in v)e[t]=v[t];e.data=o,e.width=s,e.height=c;var a={};if(u&&typeof u===w)for(var n in u)a[n]=u[n];if(p&&typeof p===w)for(var i in p)typeof a.flashvars!=m?a.flashvars+="&"+i+"="+p[i]:a.flashvars=i+"="+p[i];if(V(f)){var r=F(e,a,l);e.id==l&&R(l,!0),h.success=!0,h.ref=r}else{if(d&&k())return e.data=d,void j(e,a,l,y);R(l,!0)}y&&y(h)})):y&&y(h)},switchOffAutoHideShow:function(){r=!1},ua:N,getFlashPlayerVersion:function(){return{major:N.pv[0],minor:N.pv[1],release:N.pv[2]}},hasFlashPlayerVersion:V,createSWF:function(e,t,a){return N.w3?F(e,t,a):void 0},showExpressInstall:function(e,t,a,n){N.w3&&k()&&j(e,t,a,n)},removeSWF:function(e){N.w3&&$(e)},createCSS:function(e,t,a,n){N.w3&&P(e,t,a,n)},addDomLoadEvent:a,addLoadEvent:T,getQueryParamValue:function(e){var t=g.location.search||g.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return D(t);for(var a=t.split("&"),n=0;n<a.length;n++)if(a[n].substring(0,a[n].indexOf("="))==e)return D(a[n].substring(a[n].indexOf("=")+1))}return""},expressInstallCallback:function(){if(A){var e=x(v);e&&s&&(e.parentNode.replaceChild(s,e),c&&(R(c,!0),N.ie&&N.win&&(s.style.display="block")),f&&f(d)),A=!1}}}}();