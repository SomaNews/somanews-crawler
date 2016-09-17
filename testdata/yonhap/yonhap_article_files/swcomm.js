function rtnSrnum(r,n){for(var o=0,t=0;t<r.length;t++)o+=Number(r[t]);return sWorsk_idkeychk(Math.floor(Math.random()*o),r,n)}
function sWorsk_idkeychk(n,r,f){for(var i=n,e=0;e<r.length;e++)if(null!=f[e]){if(!(r[e]<=i))return e;i-=r[e]}}
function shuffle(r){for(var f=r.length,n=f;n>0;n--)r[f-1]=r.splice(Math.floor(Math.random()*n),1)[0];return r}
function goSunny(n,o){{var a=n+escape(o);window.open(a,"_blank")}}
function goSunnyD(n){window.open(n,"_blank")}
var Logpath="http://log.sunnyworks.co.kr/",Connpath=Logpath+"?set=ad_counter&viewcount=";