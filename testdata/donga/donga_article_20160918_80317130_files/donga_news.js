/*! automatically generated; DO NOT CHANGE : 00:13:32 GMT+0900 (JST) !*/
var _pop=_pop||[];var _popIn5_config={};(function(){var g=function(m){var i=m.container;var s=PopIn5.$F.oneSelector(i,"._popIn_recommend_header");s.innerHTML="<strong>당신이 좋아할만한</strong> 콘텐츠"};var j={};j["collect.pc"]="#_popIn_recommend {         display : none ;     }     ._popIn_recommend_container {         display : none ;     }     .css_selector {         css_attribute : value ;     } ";j["standard.new.pc"]="._popIn_recommend_container {         padding : 0px 0px 15px 0px ;         margin-left : 14px ;         margin-right : 14px ;         position : relative ;         clear : both ;         overflow : hidden ;     }     ._popIn_recommend_header {         margin-top : 5px ;         color : #000 ;         font-size : 1.3em ;         letter-spacing : -1px ;         font-weight : bold ;         margin-bottom : 15px ;     }     ._popIn_recommend_header strong {         color : #F13708 ;     }     ._popIn_recommend_articles {     }     ._popIn_recommend_article {         display : inline-block ;         width : 24% ;         margin-bottom : 10px ;         position : relative ;         vertical-align : top ;     }     ._popIn_idx2,._popIn_idx6 {         margin : 0px 1.333% 10px 1.333% ;     }     ._popIn_idx3,._popIn_idx7 {         margin : 0px 1.333% 10px 0px ;     }     ._popIn_recommend_art_img {         width : 100% ;         padding-top : 66.6667% ;         position : relative ;     }     ._popIn_recommend_art_img a {         position : absolute ;         top : 0px ;         left : 0px ;         margin : 0px ;         width : 158px ;         height : 101px ;         display : inline-block ;         overflow : hidden ;         background-color : #f3f3f3 ;         background-position : center center ;         background-size : contain ;         background-repeat : no-repeat ;         opacity : 0 ;         transition  : opacity 500ms ;         -moz-transition  : opacity 500ms ;         -o-transition  : opacity 500ms ;         -webkit-transition  : opacity 500ms ;     }     ._popIn_recommend_art_img a img {     }     ._popIn_recommend_art_title {         margin-top : 5px ;         height : 56px ;         font-size : 14px ;         line-height : 18px ;         overflow : hidden ;     }     ._popIn_recommend_art_title a {         letter-spacing : -1px ;         font-size : 13px ;         line-height : 1.2 ;         height : 56px ;         text-decoration : none ;     }     ._popIn_recommend_article:hover > ._popIn_recommend_art_title a {         text-decoration : none ;     }     ._popIn_noimage a {         background : url(//api.popin.cc/images/noimg.png) no-repeat center ;     }     ._popIn_noimage a img {         display : none ;     }     ._popIn_recommend_art_category {         display : none ;     }     ._popIn_recommend_art_date {         display : none ;     }     ._popIn_recommend_no_img {     }     ._popIn_recommend_art_media {         color : #999 ;         font-size : 10px ;         line-height : 12px ;         font-weight : normal ;     }     ._popIn_recommend_credit:hover {         opacity : 1 ;     }     ._popIn_recommend_credit {         position : absolute ;         right : 5px ;         font-size : 10px ;         opacity : 0.6 ;         bottom : 10px ;     }     ._popIn_recommend_credit_image {         display : inline-block ;         width : 40px ;         height : 10px ;         margin : 1px 0 0 4px ;         background-image : url(//api.popin.cc/images/logo.png) ;         background-repeat : no-repeat ;         background-position : 0px 0px ;         background-size : 40px 20px ;         vertical-align : text-top ;     }     ._popIn_recommend_container:hover ._popIn_recommend_credit_image {         background-position : 0px -10px ;     } ";var k={};k.default_pc=["pattern",["rand","ad",6],["rand","ad_reserved",2],["rand","e_ranking",10],["rand","related",10],["rand","hot","pop","recommend",100],[["related_img","pop_img","hot_img","recommend_img"],["ad","e_ranking_img","pop_img","related_img","recommend_img"],["recommend_img","hot_img","pop_img","related_img"],["ad_reserved","related_img","pop_img","hot_img","recommend_img"],["e_ranking_img","pop_img","hot_img","recommend_img"],["hot_img","pop_img","related_img","recommend_img"],["related_img","hot_img","pop_img","related_img"],["ad","e_ranking_img","hot_img","recommend_img","related_img"]]];k.e_ranking_only=["pattern",["rand","ad",6],["rand","ad_reserved",2],["rand","e_ranking",10],["rand","hot","pop","related","recommend",100],[["e_ranking_img"],["e_ranking_img"],["e_ranking_img"],["e_ranking_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"]]];k.hot_only=["pattern",["rand","ad",6],["rand","ad_reserved",2],["rand","e_ranking",10],["rand","hot","pop","related","recommend",100],[["hot_img"],["hot_img"],["hot_img"],["ad_reserved","hot_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"]]];k.pop_only=["pattern",["rand","ad",6],["rand","ad_reserved",2],["rand","e_ranking",10],["rand","hot","pop","related","recommend",100],[["pop_img"],["pop_img"],["pop_img"],["ad_reserved","pop_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"]]];k.recommend_only=["pattern",["rand","ad",6],["rand","ad_reserved",2],["rand","e_ranking",10],["rand","recommend","hot","pop",100],[["recommend_img","recommend"],["recommend_img","recommend"],["recommend_img","recommend"],["ad_reserved","recommend_img","recommend"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"]]];k.related_only=["pattern",["rand","ad",6],["rand","ad_reserved",2],["rand","e_ranking",10],["rand","related","recommend","hot","pop",100],[["related_img","related"],["related_img","related"],["related_img","related"],["ad_reserved","related_img","related"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"],["ad","(related|pop|hot|recommend)_img"]]];var h={};if(typeof h.pc==="undefined"){h.pc={}}h.pc["Read"]={mainNode:"#articleBody",readArticle:true};if(typeof h.mobile==="undefined"){h.mobile={}}h.mobile["Read"]={mainNode:".news_content",readArticle:true};if(typeof h.pc==="undefined"){h.pc={}}h.pc["Discovery"]={adVideo:false,adEnable:true,load:"fast",agency:"amazingsoft",templates:[{credit:"Recommended by",selector:"#_popIn_recommend",position:"AfterBegin",title:"",css:j["collect.pc"],type:["rand","related",0]},{abtestName:"standard",dateFormat:"(Y年M月D日)",delWord:"",delImage:"367a2f523235dc6ec0c27ef099e0bda6",mediaFormat:"AD（$MEDIA）",plugins:["Imageback"],afterRender:g,css:j["standard.new.pc"],imageInView:true,imageSize:"160",position:"AfterBegin",selector:"#_popIn_recommend",credit:"Recommended by",title:"당신이 좋아할만한 콘텐츠",infiniteSize:8,infinitePages:1,type:k.default_pc}],apiUrlAdd:"&r_category=all&country=kr&redirect=true",debugLog:true,apiUrl:"http://kr.popin.cc/popin_discovery/recommend?mode=new&url=%target"};if(typeof h.mobile==="undefined"){h.mobile={}}h.mobile["Discovery"]={adVideo:false,adEnable:true,load:"fast",agency:"amazingsoft",templates:[{abtestName:"standard",dateFormat:"(Y年M月D日)",delWord:"",delImage:"367a2f523235dc6ec0c27ef099e0bda6",afterRender:g,css:j["standard.new.pc"],imageSize:"160",imageInView:true,infiniteSize:8,infinitePages:1,plugins:["clickall","infinite"],position:"AfterBegin",selector:"#_popIn_recommend",credit:"Recommended by",title:"당신이 좋아할만한 콘텐츠",type:k.default_pc,mediaFormat:"AD（$MEDIA）"}],apiUrlAdd:"&r_category=all&country=kr&redirect=true",debugLog:true,apiUrl:"http://kr.popin.cc/popin_discovery/recommend?mode=new&url=%target"};if(typeof h["pc-test"]==="undefined"){h["pc-test"]={}}h["pc-test"]["Discovery"]={adVideo:false,adEnable:true,load:"fast",agency:"amazingsoft",templates:[{abtestName:"standard_test_img",dateFormat:"(Y年M月D日)",delWord:"",delImage:"367a2f523235dc6ec0c27ef099e0bda6",mediaFormat:"AD（$MEDIA）",plugins:["Imageback"],afterRender:g,css:j["standard.new.pc"],imageInView:true,imageSize:"160",position:"AfterBegin",selector:"#_popIn_recommend",credit:"Recommended by",title:"당신이 좋아할만한 기사들",infiniteSize:8,infinitePages:1,type:k.default_pc},{abtestName:"e_ranking_only",dateFormat:"(Y年M月D日)",delWord:"",delImage:"367a2f523235dc6ec0c27ef099e0bda6",afterRender:g,css:j["standard.new.pc"],imageSize:"160",imageInView:true,infiniteSize:8,infinitePages:1,plugins:["Infinite"],position:"AfterBegin",selector:"#_popIn_recommend",credit:"Recommended by",title:"당신이 좋아할만한 기사들",type:k.e_ranking_only,mediaFormat:"AD（$MEDIA）"},{abtestName:"hot_only",dateFormat:"(Y年M月D日)",delWord:"",delImage:"367a2f523235dc6ec0c27ef099e0bda6",mediaFormat:"AD（$MEDIA）",plugins:["Imageback"],afterRender:g,css:j["standard.new.pc"],imageInView:true,imageSize:"160",position:"AfterBegin",selector:"#_popIn_recommend",credit:"Recommended by",title:"당신이 좋아할만한 기사들",infiniteSize:8,infinitePages:1,type:k.hot_only},{abtestName:"pop_only",dateFormat:"(Y年M月D日)",delWord:"",delImage:"367a2f523235dc6ec0c27ef099e0bda6",mediaFormat:"AD（$MEDIA）",plugins:["Imageback"],afterRender:g,css:j["standard.new.pc"],imageInView:true,imageSize:"160",position:"AfterBegin",selector:"#_popIn_recommend",credit:"Recommended by",title:"당신이 좋아할만한 기사들",infiniteSize:8,infinitePages:1,type:k.pop_only},{abtestName:"recommend_only",dateFormat:"(Y年M月D日)",delWord:"",delImage:"367a2f523235dc6ec0c27ef099e0bda6",mediaFormat:"AD（$MEDIA）",plugins:["Imageback"],afterRender:g,css:j["standard.new.pc"],imageInView:true,imageSize:"160",position:"AfterBegin",selector:"#_popIn_recommend",credit:"Recommended by",title:"당신이 좋아할만한 기사들",infiniteSize:8,infinitePages:1,type:k.recommend_only},{abtestName:"related_only",dateFormat:"(Y年M月D日)",delWord:"",delImage:"367a2f523235dc6ec0c27ef099e0bda6",mediaFormat:"AD（$MEDIA）",plugins:["Imageback"],afterRender:g,css:j["standard.new.pc"],imageInView:true,imageSize:"160",position:"AfterBegin",selector:"#_popIn_recommend",credit:"Recommended by",title:"당신이 좋아할만한 기사들",infiniteSize:8,infinitePages:1,type:k.related_only}],apiUrlAdd:"&r_category=all&country=kr&redirect=true",debugLog:true,apiUrl:"http://kr.popin.cc/popin_discovery/recommend?mode=new&url=%target"};if(!Object.keys){Object.keys=(function(){var s=Object.prototype.hasOwnProperty,x=!({toString:null}).propertyIsEnumerable("toString"),m=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],i=m.length;return function(A){if(typeof A!=="object"&&typeof A!=="function"||A===null){throw new TypeError("Object.keys called on non-object")}var y=[];for(var B in A){if(s.call(A,B)){y.push(B)}}if(x){for(var z=0;z<i;z++){if(s.call(A,m[z])){y.push(m[z])}}}return y}})()}var u=function(y){var x={planeObject:[]};for(var s=0,z=y.length;s<z;s++){var m=y[s];if(typeof m.abtestName!=="undefined"&&m.abtestName!==""){if(typeof x[m.abtestName]==="undefined"){x[m.abtestName]=[]}x[m.abtestName].push(m)}else{x.planeObject.push(m)}}return x};if(typeof h!=="undefined"){var w=["all","all-test","pc","pc-test","mobile","mobile-test"];for(var t=0,d=w.length;t<d;t++){var r=w[t];if(typeof h[r]!=="undefined"&&typeof h[r].Discovery!=="undefined"){var b=[].concat(h[r].Discovery.templates);var f=u(b);var c=[].concat(f.planeObject);delete f.planeObject;var n=Object.keys(f);if(n.length>0){var p=n[Math.floor(Math.random()*n.length)];var e=/popinpattern=([^?#&]+)/.test(location.href);if(e){var q=RegExp.$1;p=(typeof f[q]!=="undefined")?q:p}h[r].Discovery.templates=[].concat(c,f[p]);h[r].Discovery.segmentData={abtest:p}}}}}var o={pid:"donga_news",urlReplace:[{"[?#].*":""},{"http://rss.donga.com/":"http://m.donga.com/"},{"http://dkbnews.donga.com/":"http://m.donga.com/"},{"http://car.donga.com/":"http://m.donga.com/"},{"http://economy.donga.com/":"http://m.donga.com/"}]};var v=function(s){var m=[];m.push("all-test");var y=PopIn5.$F.isMobileDevice()?"mobile":"pc";if(location.href.indexOf("popintest=true")>0){m.push(y+"-test")}m.push(y);m.push("all");for(var x=0;x<m.length;x++){var z=m[x];if(PopIn5.$F.notEmpty(h[z])&&PopIn5.$F.notEmpty(h[z][s])){return h[z][s]}}return false};if(typeof _popIn5_config["*"]==="undefined"){_popIn5_config["*"]=o}if(typeof _popIn5_config.Discovery==="undefined"){_popIn5_config.Discovery=function(){return v("Discovery")}}if(typeof _popIn5_config.Read==="undefined"){_popIn5_config.Read=function(){return v("Read")}}var a=document.createElement("script");a.type="text/javascript";a.charset="utf-8";a.async=true;a.src=window.location.protocol+"//api.popin.cc/popin_discovery5-min.js";var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(a,l)})();