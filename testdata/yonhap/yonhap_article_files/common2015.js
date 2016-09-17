/* jQuery carouFredSel 6.2.1*/
;(function($){function sc_setScroll(a,b,c){return"transition"==c.transition&&"swing"==b&&(b="ease"),{anims:[],duration:a,orgDuration:a,easing:b,startTime:getTime()}}function sc_startScroll(a,b){for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e&&e[0][b.transition](e[1],a.duration,a.easing,e[2])}}function sc_stopScroll(a,b){is_boolean(b)||(b=!0),is_object(a.pre)&&sc_stopScroll(a.pre,b);for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e[0].stop(!0),b&&(e[0].css(e[1]),is_function(e[2])&&e[2]())}is_object(a.post)&&sc_stopScroll(a.post,b)}function sc_afterScroll(a,b,c){switch(b&&b.remove(),c.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":a.css("opacity",1),a.css("filter","")}}function sc_fireCallbacks(a,b,c,d,e){if(b[c]&&b[c].call(a,d),e[c].length)for(var f=0,g=e[c].length;g>f;f++)e[c][f].call(a,d);return[]}function sc_fireQueue(a,b,c){return b.length&&(a.trigger(cf_e(b[0][0],c),b[0][1]),b.shift()),b}function sc_hideHiddenItems(a){a.each(function(){var a=$(this);a.data("_cfs_isHidden",a.is(":hidden")).hide()})}function sc_showHiddenItems(a){a&&a.each(function(){var a=$(this);a.data("_cfs_isHidden")||a.show()})}function sc_clearTimers(a){return a.auto&&clearTimeout(a.auto),a.progress&&clearInterval(a.progress),a}function sc_mapCallbackArguments(a,b,c,d,e,f,g){return{width:g.width,height:g.height,items:{old:a,skipped:b,visible:c},scroll:{items:d,direction:e,duration:f}}}function sc_getDuration(a,b,c,d){var e=a.duration;return"none"==a.fx?0:("auto"==e?e=b.scroll.duration/b.scroll.items*c:10>e&&(e=d/e),1>e?0:("fade"==a.fx&&(e/=2),Math.round(e)))}function nv_showNavi(a,b,c){var d=is_number(a.items.minimum)?a.items.minimum:a.items.visible+1;if("show"==b||"hide"==b)var e=b;else if(d>b){debug(c,"Not enough items ("+b+" total, "+d+" needed): Hiding navigation.");var e="hide"}else var e="show";var f="show"==e?"removeClass":"addClass",g=cf_c("hidden",c);a.auto.button&&a.auto.button[e]()[f](g),a.prev.button&&a.prev.button[e]()[f](g),a.next.button&&a.next.button[e]()[f](g),a.pagination.container&&a.pagination.container[e]()[f](g)}function nv_enableNavi(a,b,c){if(!a.circular&&!a.infinite){var d="removeClass"==b||"addClass"==b?b:!1,e=cf_c("disabled",c);if(a.auto.button&&d&&a.auto.button[d](e),a.prev.button){var f=d||0==b?"addClass":"removeClass";a.prev.button[f](e)}if(a.next.button){var f=d||b==a.items.visible?"addClass":"removeClass";a.next.button[f](e)}}}function go_getObject(a,b){return is_function(b)?b=b.call(a):is_undefined(b)&&(b={}),b}function go_getItemsObject(a,b){return b=go_getObject(a,b),is_number(b)?b={visible:b}:"variable"==b?b={visible:b,width:b,height:b}:is_object(b)||(b={}),b}function go_getScrollObject(a,b){return b=go_getObject(a,b),is_number(b)?b=50>=b?{items:b}:{duration:b}:is_string(b)?b={easing:b}:is_object(b)||(b={}),b}function go_getNaviObject(a,b){if(b=go_getObject(a,b),is_string(b)){var c=cf_getKeyCode(b);b=-1==c?$(b):c}return b}function go_getAutoObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_boolean(b)?b={play:b}:is_number(b)&&(b={timeoutDuration:b}),b.progress&&(is_string(b.progress)||is_jquery(b.progress))&&(b.progress={bar:b.progress}),b}function go_complementAutoObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_boolean(b.play)||(b.play=!0),is_number(b.delay)||(b.delay=0),is_undefined(b.pauseOnEvent)&&(b.pauseOnEvent=!0),is_boolean(b.pauseOnResize)||(b.pauseOnResize=!0),is_number(b.timeoutDuration)||(b.timeoutDuration=10>b.duration?2500:5*b.duration),b.progress&&(is_function(b.progress.bar)&&(b.progress.bar=b.progress.bar.call(a)),is_string(b.progress.bar)&&(b.progress.bar=$(b.progress.bar)),b.progress.bar?(is_function(b.progress.updater)||(b.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(b.progress.interval)||(b.progress.interval=50)):b.progress=!1),b}function go_getPrevNextObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_number(b)&&(b={key:b}),b}function go_complementPrevNextObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_string(b.key)&&(b.key=cf_getKeyCode(b.key)),b}function go_getPaginationObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={container:b}:is_boolean(b)&&(b={keys:b}),b}function go_complementPaginationObject(a,b){return is_function(b.container)&&(b.container=b.container.call(a)),is_string(b.container)&&(b.container=$(b.container)),is_number(b.items)||(b.items=!1),is_boolean(b.keys)||(b.keys=!1),is_function(b.anchorBuilder)||is_false(b.anchorBuilder)||(b.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(b.deviation)||(b.deviation=0),b}function go_getSwipeObject(a,b){return is_function(b)&&(b=b.call(a)),is_undefined(b)&&(b={onTouch:!1}),is_true(b)?b={onTouch:b}:is_number(b)&&(b={items:b}),b}function go_complementSwipeObject(a,b){return is_boolean(b.onTouch)||(b.onTouch=!0),is_boolean(b.onMouse)||(b.onMouse=!1),is_object(b.options)||(b.options={}),is_boolean(b.options.triggerOnTouchEnd)||(b.options.triggerOnTouchEnd=!1),b}function go_getMousewheelObject(a,b){return is_function(b)&&(b=b.call(a)),is_true(b)?b={}:is_number(b)?b={items:b}:is_undefined(b)&&(b=!1),b}function go_complementMousewheelObject(a,b){return b}function gn_getItemIndex(a,b,c,d,e){if(is_string(a)&&(a=$(a,e)),is_object(a)&&(a=$(a,e)),is_jquery(a)?(a=e.children().index(a),is_boolean(c)||(c=!1)):is_boolean(c)||(c=!0),is_number(a)||(a=0),is_number(b)||(b=0),c&&(a+=d.first),a+=b,d.total>0){for(;a>=d.total;)a-=d.total;for(;0>a;)a+=d.total}return a}function gn_getVisibleItemsPrev(a,b,c){for(var d=0,e=0,f=c;f>=0;f--){var g=a.eq(f);if(d+=g.is(":visible")?g[b.d.outerWidth](!0):0,d>b.maxDimension)return e;0==f&&(f=a.length),e++}}function gn_getVisibleItemsPrevFilter(a,b,c){return gn_getItemsPrevFilter(a,b.items.filter,b.items.visibleConf.org,c)}function gn_getScrollItemsPrevFilter(a,b,c,d){return gn_getItemsPrevFilter(a,b.items.filter,d,c)}function gn_getItemsPrevFilter(a,b,c,d){for(var e=0,f=0,g=d,h=a.length;g>=0;g--){if(f++,f==h)return f;var i=a.eq(g);if(i.is(b)&&(e++,e==c))return f;0==g&&(g=h)}}function gn_getVisibleOrg(a,b){return b.items.visibleConf.org||a.children().slice(0,b.items.visible).filter(b.items.filter).length}function gn_getVisibleItemsNext(a,b,c){for(var d=0,e=0,f=c,g=a.length-1;g>=f;f++){var h=a.eq(f);if(d+=h.is(":visible")?h[b.d.outerWidth](!0):0,d>b.maxDimension)return e;if(e++,e==g+1)return e;f==g&&(f=-1)}}function gn_getVisibleItemsNextTestCircular(a,b,c,d){var e=gn_getVisibleItemsNext(a,b,c);return b.circular||c+e>d&&(e=d-c),e}function gn_getVisibleItemsNextFilter(a,b,c){return gn_getItemsNextFilter(a,b.items.filter,b.items.visibleConf.org,c,b.circular)}function gn_getScrollItemsNextFilter(a,b,c,d){return gn_getItemsNextFilter(a,b.items.filter,d+1,c,b.circular)-1}function gn_getItemsNextFilter(a,b,c,d){for(var f=0,g=0,h=d,i=a.length-1;i>=h;h++){if(g++,g>=i)return g;var j=a.eq(h);if(j.is(b)&&(f++,f==c))return g;h==i&&(h=-1)}}function gi_getCurrentItems(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsPrev(a,b,c){return a.slice(c,b.items.visibleConf.old+c)}function gi_getNewItemsPrev(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsNext(a,b){return a.slice(0,b.items.visibleConf.old)}function gi_getNewItemsNext(a,b,c){return a.slice(c,b.items.visible+c)}function sz_storeMargin(a,b,c){b.usePadding&&(is_string(c)||(c="_cfs_origCssMargin"),a.each(function(){var a=$(this),d=parseInt(a.css(b.d.marginRight),10);is_number(d)||(d=0),a.data(c,d)}))}function sz_resetMargin(a,b,c){if(b.usePadding){var d=is_boolean(c)?c:!1;is_number(c)||(c=0),sz_storeMargin(a,b,"_cfs_tempCssMargin"),a.each(function(){var a=$(this);a.css(b.d.marginRight,d?a.data("_cfs_tempCssMargin"):c+a.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(a){a.each(function(){var a=$(this);a.data("_cfs_origCss",a.attr("style")||"")})}function sz_restoreOrigCss(a){a.each(function(){var a=$(this);a.attr("style",a.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(a,b){var d=(a.items.visible,a.items[a.d.width]),e=a[a.d.height],f=is_percentage(e);b.each(function(){var b=$(this),c=d-ms_getPaddingBorderMargin(b,a,"Width");b[a.d.width](c),f&&b[a.d.height](ms_getPercentage(c,e))})}function sz_setSizes(a,b){var c=a.parent(),d=a.children(),e=gi_getCurrentItems(d,b),f=cf_mapWrapperSizes(ms_getSizes(e,b,!0),b,!1);if(c.css(f),b.usePadding){var g=b.padding,h=g[b.d[1]];b.align&&0>h&&(h=0);var i=e.last();i.css(b.d.marginRight,i.data("_cfs_origCssMargin")+h),a.css(b.d.top,g[b.d[0]]),a.css(b.d.left,g[b.d[3]])}return a.css(b.d.width,f[b.d.width]+2*ms_getTotalSize(d,b,"width")),a.css(b.d.height,ms_getLargestSize(d,b,"height")),f}function ms_getSizes(a,b,c){return[ms_getTotalSize(a,b,"width",c),ms_getLargestSize(a,b,"height",c)]}function ms_getLargestSize(a,b,c,d){return is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d?b[b.d[c]]:is_number(b.items[b.d[c]])?b.items[b.d[c]]:(c=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",ms_getTrueLargestSize(a,b,c))}function ms_getTrueLargestSize(a,b,c){for(var d=0,e=0,f=a.length;f>e;e++){var g=a.eq(e),h=g.is(":visible")?g[b.d[c]](!0):0;h>d&&(d=h)}return d}function ms_getTotalSize(a,b,c,d){if(is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d)return b[b.d[c]];if(is_number(b.items[b.d[c]]))return b.items[b.d[c]]*a.length;for(var e=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",f=0,g=0,h=a.length;h>g;g++){var i=a.eq(g);f+=i.is(":visible")?i[b.d[e]](!0):0}return f}function ms_getParentSize(a,b,c){var d=a.is(":visible");d&&a.hide();var e=a.parent()[b.d[c]]();return d&&a.show(),e}function ms_getMaxDimension(a,b){return is_number(a[a.d.width])?a[a.d.width]:b}function ms_hasVariableSizes(a,b,c){for(var d=!1,e=!1,f=0,g=a.length;g>f;f++){var h=a.eq(f),i=h.is(":visible")?h[b.d[c]](!0):0;d===!1?d=i:d!=i&&(e=!0),0==d&&(e=!0)}return e}function ms_getPaddingBorderMargin(a,b,c){return a[b.d["outer"+c]](!0)-a[b.d[c.toLowerCase()]]()}function ms_getPercentage(a,b){if(is_percentage(b)){if(b=parseInt(b.slice(0,-1),10),!is_number(b))return a;a*=b/100}return a}function cf_e(a,b,c,d,e){return is_boolean(c)||(c=!0),is_boolean(d)||(d=!0),is_boolean(e)||(e=!1),c&&(a=b.events.prefix+a),d&&(a=a+"."+b.events.namespace),d&&e&&(a+=b.serialNumber),a}function cf_c(a,b){return is_string(b.classnames[a])?b.classnames[a]:a}function cf_mapWrapperSizes(a,b,c){is_boolean(c)||(c=!0);var d=b.usePadding&&c?b.padding:[0,0,0,0],e={};return e[b.d.width]=a[0]+d[1]+d[3],e[b.d.height]=a[1]+d[0]+d[2],e}function cf_sortParams(a,b){for(var c=[],d=0,e=a.length;e>d;d++)for(var f=0,g=b.length;g>f;f++)if(b[f].indexOf(typeof a[d])>-1&&is_undefined(c[f])){c[f]=a[d];break}return c}function cf_getPadding(a){if(is_undefined(a))return[0,0,0,0];if(is_number(a))return[a,a,a,a];if(is_string(a)&&(a=a.split("px").join("").split("em").join("").split(" ")),!is_array(a))return[0,0,0,0];for(var b=0;4>b;b++)a[b]=parseInt(a[b],10);switch(a.length){case 0:return[0,0,0,0];case 1:return[a[0],a[0],a[0],a[0]];case 2:return[a[0],a[1],a[0],a[1]];case 3:return[a[0],a[1],a[2],a[1]];default:return[a[0],a[1],a[2],a[3]]}}function cf_getAlignPadding(a,b){var c=is_number(b[b.d.width])?Math.ceil(b[b.d.width]-ms_getTotalSize(a,b,"width")):0;switch(b.align){case"left":return[0,c];case"right":return[c,0];case"center":default:return[Math.ceil(c/2),Math.floor(c/2)]}}function cf_getDimensions(a){for(var b=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],c=b[0].length,d="right"==a.direction||"left"==a.direction?0:1,e={},f=0;c>f;f++)e[b[0][f]]=b[d][f];return e}function cf_getAdjust(a,b,c,d){var e=a;if(is_function(c))e=c.call(d,e);else if(is_string(c)){var f=c.split("+"),g=c.split("-");if(g.length>f.length)var h=!0,i=g[0],j=g[1];else var h=!1,i=f[0],j=f[1];switch(i){case"even":e=1==a%2?a-1:a;break;case"odd":e=0==a%2?a-1:a;break;default:e=a}j=parseInt(j,10),is_number(j)&&(h&&(j=-j),e+=j)}return(!is_number(e)||1>e)&&(e=1),e}function cf_getItemsAdjust(a,b,c,d){return cf_getItemAdjustMinMax(cf_getAdjust(a,b,c,d),b.items.visibleConf)}function cf_getItemAdjustMinMax(a,b){return is_number(b.min)&&b.min>a&&(a=b.min),is_number(b.max)&&a>b.max&&(a=b.max),1>a&&(a=1),a}function cf_getSynchArr(a){is_array(a)||(a=[[a]]),is_array(a[0])||(a=[a]);for(var b=0,c=a.length;c>b;b++)is_string(a[b][0])&&(a[b][0]=$(a[b][0])),is_boolean(a[b][1])||(a[b][1]=!0),is_boolean(a[b][2])||(a[b][2]=!0),is_number(a[b][3])||(a[b][3]=0);return a}function cf_getKeyCode(a){return"right"==a?39:"left"==a?37:"up"==a?38:"down"==a?40:-1}function cf_setCookie(a,b,c){if(a){var d=b.triggerHandler(cf_e("currentPosition",c));$.fn.carouFredSel.cookie.set(a,d)}}function cf_getCookie(a){var b=$.fn.carouFredSel.cookie.get(a);return""==b?0:b}function in_mapCss(a,b){for(var c={},d=0,e=b.length;e>d;d++)c[b[d]]=a.css(b[d]);return c}function in_complementItems(a,b,c,d){return is_object(a.visibleConf)||(a.visibleConf={}),is_object(a.sizesConf)||(a.sizesConf={}),0==a.start&&is_number(d)&&(a.start=d),is_object(a.visible)?(a.visibleConf.min=a.visible.min,a.visibleConf.max=a.visible.max,a.visible=!1):is_string(a.visible)?("variable"==a.visible?a.visibleConf.variable=!0:a.visibleConf.adjust=a.visible,a.visible=!1):is_function(a.visible)&&(a.visibleConf.adjust=a.visible,a.visible=!1),is_string(a.filter)||(a.filter=c.filter(":hidden").length>0?":visible":"*"),a[b.d.width]||(b.responsive?(debug(!0,"Set a "+b.d.width+" for the items!"),a[b.d.width]=ms_getTrueLargestSize(c,b,"outerWidth")):a[b.d.width]=ms_hasVariableSizes(c,b,"outerWidth")?"variable":c[b.d.outerWidth](!0)),a[b.d.height]||(a[b.d.height]=ms_hasVariableSizes(c,b,"outerHeight")?"variable":c[b.d.outerHeight](!0)),a.sizesConf.width=a.width,a.sizesConf.height=a.height,a}function in_complementVisibleItems(a,b){return"variable"==a.items[a.d.width]&&(a.items.visibleConf.variable=!0),a.items.visibleConf.variable||(is_number(a[a.d.width])?a.items.visible=Math.floor(a[a.d.width]/a.items[a.d.width]):(a.items.visible=Math.floor(b/a.items[a.d.width]),a[a.d.width]=a.items.visible*a.items[a.d.width],a.items.visibleConf.adjust||(a.align=!1)),("Infinity"==a.items.visible||1>a.items.visible)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),a.items.visibleConf.variable=!0)),a}function in_complementPrimarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerWidth")),a}function in_complementSecondarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerHeight")),a||(a=b.items[b.d.height]),a}function in_getAlignPadding(a,b){var c=cf_getAlignPadding(gi_getCurrentItems(b,a),a);return a.padding[a.d[1]]=c[1],a.padding[a.d[3]]=c[0],a}function in_getResponsiveValues(a,b){var d=cf_getItemAdjustMinMax(Math.ceil(a[a.d.width]/a.items[a.d.width]),a.items.visibleConf);d>b.length&&(d=b.length);var e=Math.floor(a[a.d.width]/d);return a.items.visible=d,a.items[a.d.width]=e,a[a.d.width]=d*e,a}function bt_pauseOnHoverConfig(a){if(is_string(a))var b=a.indexOf("immediate")>-1?!0:!1,c=a.indexOf("resume")>-1?!0:!1;else var b=c=!1;return[b,c]}function bt_mousesheelNumber(a){return is_number(a)?a:null}function is_null(a){return null===a}function is_undefined(a){return is_null(a)||a===void 0||""===a||"undefined"===a}function is_array(a){return a instanceof Array}function is_jquery(a){return a instanceof jQuery}function is_object(a){return(a instanceof Object||"object"==typeof a)&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a)}function is_number(a){return(a instanceof Number||"number"==typeof a)&&!isNaN(a)}function is_string(a){return(a instanceof String||"string"==typeof a)&&!is_undefined(a)&&!is_true(a)&&!is_false(a)}function is_function(a){return a instanceof Function||"function"==typeof a}function is_boolean(a){return a instanceof Boolean||"boolean"==typeof a||is_true(a)||is_false(a)}function is_true(a){return a===!0||"true"===a}function is_false(a){return a===!1||"false"===a}function is_percentage(a){return is_string(a)&&"%"==a.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(a,b){debug(!0,a+" is DEPRECATED, support for it will be removed. Use "+b+" instead.")}function debug(a,b){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(a)){var c=" ("+a.selector+")";a=a.debug}else var c="";if(!a)return!1;b=is_string(b)?"carouFredSel"+c+": "+b:["carouFredSel"+c+":",b],window.console.log(b)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={};FN._init=function(a,b,c){a=go_getObject($tt0,a),a.items=go_getItemsObject($tt0,a.items),a.scroll=go_getScrollObject($tt0,a.scroll),a.auto=go_getAutoObject($tt0,a.auto),a.prev=go_getPrevNextObject($tt0,a.prev),a.next=go_getPrevNextObject($tt0,a.next),a.pagination=go_getPaginationObject($tt0,a.pagination),a.swipe=go_getSwipeObject($tt0,a.swipe),a.mousewheel=go_getMousewheelObject($tt0,a.mousewheel),b&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,a)),opts=$.extend(!0,{},$.fn.carouFredSel.defaults,a),opts.d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var d=$cfs.children(),e=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,e),opts.items=in_complementItems(opts.items,opts,d,c),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,d),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,d),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(e,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,e)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=is_number(opts[opts.d.width])?"center":!1),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(d,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(d,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,d,e);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&(opts=in_getAlignPadding(opts,d),opts.usePadding=!0);break;default:opts.align=!1,opts.usePadding=0==opts.padding[0]&&0==opts.padding[1]&&0==opts.padding[2]&&0==opts.padding[3]?!1:!0}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},FN._build=function(){$cfs.data("_cfs_isCarousel",!0);var a=$cfs.children(),b=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),c="relative";switch(b.position){case"absolute":case"fixed":c=b.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(b),$wrp.css({overflow:"hidden",position:c}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",b.zIndex),$cfs.css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(a,opts),sz_storeOrigCss(a),opts.responsive&&sz_setResponsiveSizes(opts,a)},FN._bind_events=function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(a,b){return a.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),b)),!0}),$cfs.bind(cf_e("finish",conf),function(a){return a.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(a,b,c){if(a.stopPropagation(),tmrs=sc_clearTimers(tmrs),b&&crsl.isScrolling){scrl.isStopped=!0;var d=getTime()-scrl.startTime;scrl.duration-=d,scrl.pre&&(scrl.pre.duration-=d),scrl.post&&(scrl.post.duration-=d),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||c&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var e=opts.auto.timeoutDuration-tmrs.timePassed,f=100-Math.ceil(100*e/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,f,e)}return!0}),$cfs.bind(cf_e("play",conf),function(a,b,c,d){a.stopPropagation(),tmrs=sc_clearTimers(tmrs);var e=[b,c,d],f=["string","number","boolean"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],"prev"!=b&&"next"!=b&&(b=crsl.direction),is_number(c)||(c=0),is_boolean(d)||(d=!1),d&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return a.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var h=opts.auto.timeoutDuration+c;return dur2=h-tmrs.timePassed,perc=100-Math.ceil(100*dur2/h),opts.auto.progress&&(tmrs.progress=setInterval(function(){var a=getTime()-tmrs.startTime+tmrs.timePassed,b=Math.ceil(100*a/h);opts.auto.progress.updater.call(opts.auto.progress.bar[0],b)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),b):$cfs.trigger(cf_e(b,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(a){return a.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(a,b,c,d,e){if(a.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return a.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var f=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(f>itms.total)return a.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+f+" needed): Not scrolling.");var g=[b,c,d,e],h=["object","number/string","function","boolean"],i=cf_sortParams(g,h);b=i[0],c=i[1],d=i[2],e=i[3];var j=a.type.slice(conf.events.prefix.length);if(is_object(b)||(b={}),is_function(d)&&(b.onAfter=d),is_boolean(e)&&(b.queue=e),b=$.extend(!0,{},opts[j],b),b.conditions&&!b.conditions.call($tt0,j))return a.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(c)){if("*"!=opts.items.filter)c="visible";else for(var k=[c,b.items,opts[j].items],i=0,l=k.length;l>i;i++)if(is_number(k[i])||"page"==k[i]||"visible"==k[i]){c=k[i];break}switch(c){case"page":return a.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(j+"Page",conf),[b,d]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(c=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]]),a.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(b.duration>0&&crsl.isScrolling)return b.queue&&("last"==b.queue&&(queu=[]),("first"!=b.queue||0==queu.length)&&$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]])),a.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+j,conf),[b,c]),opts.synchronise)for(var m=opts.synchronise,n=[b,c],o=0,l=m.length;l>o;o++){var p=j;m[o][2]||(p="prev"==p?"next":"prev"),m[o][1]||(n[0]=m[o][0].triggerHandler("_cfs_triggerEvent",["configuration",p])),n[1]=c+m[o][3],m[o][0].trigger("_cfs_triggerEvent",["slide_"+p,n])}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if(opts.items.visibleConf.variable)c=gn_getVisibleItemsPrev(d,opts,itms.total-1);else if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsPrevFilter(d,opts,itms.total-1,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}if(opts.circular||itms.total-c<itms.first&&(c=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0);f>=opts.items.visible+c&&itms.total>c&&(c++,f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=f}else if("*"!=opts.items.filter){var f=gn_getVisibleItemsNextFilter(d,opts,itms.total-c);opts.items.visible=cf_getItemsAdjust(f,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items backward."),itms.first+=c;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&b.onEnd&&b.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-c,itms.total).prependTo($cfs),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),g=gi_getOldItemsPrev(d,opts,c),h=gi_getNewItemsPrev(d,opts),i=d.eq(c-1),j=g.last(),k=h.last();sz_resetMargin(d,opts);var l=0,m=0;if(opts.align){var n=cf_getAlignPadding(h,opts);l=n[0],m=n[1]}var o=0>l?opts.padding[opts.d[3]]:0,p=!1,q=$();if(c>opts.items.visible&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,i=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(h,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B={},C={},D=sc_getDuration(b,opts,c,t);switch(b.fx){case"cover":case"cover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visible),opts,"width")}p&&(opts.items[opts.d.width]=r),sz_resetMargin(d,opts,!0),m>=0&&sz_resetMargin(j,opts,opts.padding[opts.d[1]]),l>=0&&sz_resetMargin(i,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=m,opts.padding[opts.d[3]]=l),B[opts.d.left]=-(t-o),C[opts.d.left]=-(v-o),x[opts.d.left]=u[opts.d.width];var E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){},L=function(){},M=function(){},N=function(){},O=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp)}switch(b.fx){case"crossfade":case"uncover":case"uncover-fade":s.children().slice(0,c).remove(),s.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":s.children().slice(opts.items.visible).remove(),s.css(C)}if($cfs.css(B),scrl=sc_setScroll(D,b.easing,conf),w[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(E=function(){$wrp.css(u)},F=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){switch(k.not(i).length&&(y[opts.d.marginRight]=i.data("_cfs_origCssMargin"),0>l?i.css(y):(K=function(){i.css(y)},L=function(){scrl.anims.push([i,y])})),b.fx){case"cover":case"cover-fade":s.children().eq(c-1).css(y)}k.not(j).length&&(z[opts.d.marginRight]=j.data("_cfs_origCssMargin"),G=function(){j.css(z)},H=function(){scrl.anims.push([j,z])}),m>=0&&(A[opts.d.marginRight]=k.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],I=function(){k.css(A)},J=function(){scrl.anims.push([k,A])})}O=function(){$cfs.css(w)};var P=opts.items.visible+c-itms.total;N=function(){if(P>0&&($cfs.children().slice(itms.total).remove(),g=$($cfs.children().slice(itms.total-(opts.items.visible-P)).get().concat($cfs.children().slice(0,P).get()))),sc_showHiddenItems(p),opts.usePadding){var a=$cfs.children().eq(opts.items.visible+c-1);a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var Q=sc_mapCallbackArguments(g,q,h,c,"prev",D,u);switch(M=function(){sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",Q,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",Q,clbk),b.fx){case"none":$cfs.css(w),E(),G(),I(),K(),O(),N(),M();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){E(),G(),I(),K(),O(),N(),scrl=sc_setScroll(D,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},M]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},M]),F(),G(),I(),K(),O(),N();break;case"cover":scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"uncover":scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;default:scrl.anims.push([$cfs,w,function(){N(),M()}]),F(),H(),J(),L()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0
}),$cfs.bind(cf_e("slide_next",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsNextFilter(d,opts,0,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}var f=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable)var g=gn_getVisibleItemsNext(d,opts,c),e=gn_getVisibleItemsPrev(d,opts,f-1);else var g=opts.items.visible,e=opts.items.visible;c+g>f&&(c=f-e)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(var g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-c>=g&&itms.total>c;)c++,g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=g}else if("*"!=opts.items.filter){var g=gn_getVisibleItemsNextFilter(d,opts,c);opts.items.visible=cf_getItemsAdjust(g,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items forward."),itms.first-=c;0>itms.first;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&b.onEnd&&b.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),h=gi_getOldItemsNext(d,opts),i=gi_getNewItemsNext(d,opts,c),j=d.eq(c-1),k=h.last(),l=i.last();sz_resetMargin(d,opts);var m=0,n=0;if(opts.align){var o=cf_getAlignPadding(i,opts);m=o[0],n=o[1]}var p=!1,q=$();if(c>opts.items.visibleConf.old&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,j=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(i,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B=sc_getDuration(b,opts,c,t);switch(b.fx){case"uncover":case"uncover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visibleConf.old),opts,"width")}p&&(opts.items[opts.d.width]=r),opts.align&&0>opts.padding[opts.d[1]]&&(opts.padding[opts.d[1]]=0),sz_resetMargin(d,opts,!0),sz_resetMargin(k,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=n,opts.padding[opts.d[3]]=m),A[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var C=function(){},D=function(){},E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp),s.children().slice(opts.items.visibleConf.old).remove()}switch(b.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),s.css("zIndex",0)}if(scrl=sc_setScroll(B,b.easing,conf),w[opts.d.left]=-t,x[opts.d.left]=-v,0>m&&(w[opts.d.left]+=m),("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(C=function(){$wrp.css(u)},D=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){var L=l.data("_cfs_origCssMargin");n>=0&&(L+=opts.padding[opts.d[1]]),l.css(opts.d.marginRight,L),j.not(k).length&&(z[opts.d.marginRight]=k.data("_cfs_origCssMargin")),E=function(){k.css(z)},F=function(){scrl.anims.push([k,z])};var M=j.data("_cfs_origCssMargin");m>0&&(M+=opts.padding[opts.d[3]]),y[opts.d.marginRight]=M,G=function(){j.css(y)},H=function(){scrl.anims.push([j,y])}}K=function(){$cfs.css(A)};var N=opts.items.visible+c-itms.total;J=function(){N>0&&$cfs.children().slice(itms.total).remove();var a=$cfs.children().slice(0,c).appendTo($cfs).last();if(N>0&&(i=gi_getCurrentItems(d,opts)),sc_showHiddenItems(p),opts.usePadding){if(itms.total<opts.items.visible+c){var b=$cfs.children().eq(opts.items.visible-1);b.css(opts.d.marginRight,b.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var O=sc_mapCallbackArguments(h,q,i,c,"next",B,u);switch(I=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",O,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",O,clbk),b.fx){case"none":$cfs.css(w),C(),E(),G(),K(),J(),I();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){C(),E(),G(),K(),J(),scrl=sc_setScroll(B,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},I]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},I]),D(),E(),G(),K(),J();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"uncover":scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;default:scrl.anims.push([$cfs,w,function(){K(),J(),I()}]),D(),F(),H()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0}),$cfs.bind(cf_e("slideTo",conf),function(a,b,c,d,e,f,g){a.stopPropagation();var h=[b,c,d,e,f,g],i=["string/number/object","number","boolean","object","string","function"],j=cf_sortParams(h,i);return e=j[3],f=j[4],g=j[5],b=gn_getItemIndex(j[0],j[1],j[2],itms,$cfs),0==b?!1:(is_object(e)||(e=!1),"prev"!=f&&"next"!=f&&(f=opts.circular?itms.total/2>=b?"next":"prev":0==itms.first||itms.first>b?"next":"prev"),"prev"==f&&(b=itms.total-b),$cfs.trigger(cf_e(f,conf),[e,b,g]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d-1,b,"prev",c])}),$cfs.bind(cf_e("nextPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d+1,b,"next",c])}),$cfs.bind(cf_e("slideToPage",conf),function(a,b,c,d,e){a.stopPropagation(),is_number(b)||(b=$cfs.triggerHandler(cf_e("currentPage",conf)));var f=opts.pagination.items||opts.items.visible,g=Math.ceil(itms.total/f)-1;return 0>b&&(b=g),b>g&&(b=0),$cfs.triggerHandler(cf_e("slideTo",conf),[b*f,0,!0,c,d,e])}),$cfs.bind(cf_e("jumpToStart",conf),function(a,b){if(a.stopPropagation(),b=b?gn_getItemIndex(b,0,!0,itms,$cfs):0,b+=itms.first,0!=b){if(itms.total>0)for(;b>itms.total;)b-=itms.total;$cfs.prepend($cfs.children().slice(b,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(a,b){if(a.stopPropagation(),b)b=cf_getSynchArr(b);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");b=opts.synchronise}for(var c=$cfs.triggerHandler(cf_e("currentPosition",conf)),d=!0,e=0,f=b.length;f>e;e++)b[e][0].triggerHandler(cf_e("slideTo",conf),[c,b[e][3],!0])||(d=!1);return d}),$cfs.bind(cf_e("queue",conf),function(a,b,c){return a.stopPropagation(),is_function(b)?b.call($tt0,queu):is_array(b)?queu=b:is_undefined(b)||queu.push([b,c]),queu}),$cfs.bind(cf_e("insertItem",conf),function(a,b,c,d,e){a.stopPropagation();var f=[b,c,d,e],g=["string/object","string/number/object","boolean","number"],h=cf_sortParams(f,g);if(b=h[0],c=h[1],d=h[2],e=h[3],is_object(b)&&!is_jquery(b)?b=$(b):is_string(b)&&(b=$(b)),!is_jquery(b)||0==b.length)return debug(conf,"Not a valid object.");is_undefined(c)&&(c="end"),sz_storeMargin(b,opts),sz_storeOrigCss(b);var i=c,j="before";"end"==c?d?(0==itms.first?(c=itms.total-1,j="after"):(c=itms.first,itms.first+=b.length),0>c&&(c=0)):(c=itms.total-1,j="after"):c=gn_getItemIndex(c,e,d,itms,$cfs);var k=$cfs.children().eq(c);return k.length?k[j](b):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(b)),"end"==i||d||itms.first>c&&(itms.first+=b.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(a,b,c,d){a.stopPropagation();var e=[b,c,d],f=["string/number/object","boolean","number"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],b instanceof $&&b.length>1)return i=$(),b.each(function(){var e=$cfs.trigger(cf_e("removeItem",conf),[$(this),c,d]);e&&(i=i.add(e))}),i;if(is_undefined(b)||"end"==b)i=$cfs.children().last();else{b=gn_getItemIndex(b,d,c,itms,$cfs);var i=$cfs.children().eq(b);i.length&&itms.first>b&&(itms.first-=i.length)}return i&&i.length&&(i.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),i}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length);return is_array(b)&&(clbk[c]=b),is_function(b)&&clbk[c].push(b),clbk[c]}),$cfs.bind(cf_e("currentPosition",conf),function(a,b){if(a.stopPropagation(),0==itms.first)var c=0;else var c=itms.total-itms.first;return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("currentPage",conf),function(a,b){a.stopPropagation();var e,c=opts.pagination.items||opts.items.visible,d=Math.ceil(itms.total/c-1);return e=0==itms.first?0:itms.first<itms.total%c?0:itms.first!=c||opts.circular?Math.round((itms.total-itms.first)/c):d,0>e&&(e=0),e>d&&(e=d),is_function(b)&&b.call($tt0,e),e}),$cfs.bind(cf_e("currentVisible",conf),function(a,b){a.stopPropagation();var c=gi_getCurrentItems($cfs.children(),opts);return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("slice",conf),function(a,b,c,d){if(a.stopPropagation(),0==itms.total)return!1;var e=[b,c,d],f=["number","number","function"],g=cf_sortParams(e,f);if(b=is_number(g[0])?g[0]:0,c=is_number(g[1])?g[1]:itms.total,d=g[2],b+=itms.first,c+=itms.first,items.total>0){for(;b>itms.total;)b-=itms.total;for(;c>itms.total;)c-=itms.total;for(;0>b;)b+=itms.total;for(;0>c;)c+=itms.total}var i,h=$cfs.children();return i=c>b?h.slice(b,c):$(h.slice(b,itms.total).get().concat(h.slice(0,c).get())),is_function(d)&&d.call($tt0,i),i}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length),d=crsl[c];return is_function(b)&&b.call($tt0,d),d}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),b!==!1?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),c!==!1?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(a,b,c){return a.stopPropagation(),is_undefined(b)?b=$("body"):is_string(b)&&(b=$(b)),is_jquery(b)&&0!=b.length?(is_string(c)||(c="a.caroufredsel"),b.find(c).each(function(){var a=this.hash||"";a.length>0&&-1!=$cfs.children().index($(a))&&$(this).unbind("click").click(function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),a)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(a,b){if(a.stopPropagation(),opts.pagination.container){var d=opts.pagination.items||opts.items.visible,e=Math.ceil(itms.total/d);b&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var a=0;e>a;a++){var b=$cfs.children().eq(gn_getItemIndex(a*d,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(b[0],a+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[a*d,-opts.pagination.deviation,!0,opts.pagination])})})}));var f=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return f>=e&&(f=0),0>f&&(f=e-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(f).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(){var b=opts.items.visible,c=$cfs.children(),d=ms_getParentSize($wrp,opts,"width");if(itms.total=c.length,crsl.primarySizePercentage?(opts.maxDimension=d,opts[opts.d.width]=ms_getPercentage(d,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,d),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,opts=in_getResponsiveValues(opts,c,d),b=opts.items.visible,sz_setResponsiveSizes(opts,c)):opts.items.visibleConf.variable?b=gn_getVisibleItemsNext(c,opts,0):"*"!=opts.items.filter&&(b=gn_getVisibleItemsNextFilter(c,opts,0)),!opts.circular&&0!=itms.first&&b>itms.first){if(opts.items.visibleConf.variable)var e=gn_getVisibleItemsPrev(c,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)var e=gn_getVisibleItemsPrevFilter(c,opts,itms.first)-itms.first;else var e=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+e+" items backward."),$cfs.trigger(cf_e("prev",conf),e)}opts.items.visible=cf_getItemsAdjust(b,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,c);var f=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,f]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),f}),$cfs.bind(cf_e("destroy",conf),function(a,b){return a.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),b&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(a,b,c){return a.stopPropagation(),$cfs.triggerHandler(cf_e(b,conf),c)})},FN._unbind_events=function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},FN._bind_buttons=function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(a){a.preventDefault();var b=!1,c=null;crsl.isPaused?b="play":opts.auto.pauseOnEvent&&(b="pause",c=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),b&&$cfs.trigger(cf_e(b,conf),c)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b==opts.next.key&&(a.preventDefault(),$cfs.trigger(cf_e("next",conf))),b==opts.prev.key&&(a.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b>=49&&58>b&&(b=(b-49)*opts.items.visible,itms.total>=b&&(a.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[b,0,!0,opts.pagination])))}),$.fn.swipe){var b="ontouchstart"in window;if(b&&opts.swipe.onTouch||!b&&opts.swipe.onMouse){var c=$.extend(!0,{},opts.prev,opts.swipe),d=$.extend(!0,{},opts.next,opts.swipe),e=function(){$cfs.trigger(cf_e("prev",conf),[c])},f=function(){$cfs.trigger(cf_e("next",conf),[d])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=f,opts.swipe.options.swipeDown=e;break;default:opts.swipe.options.swipeLeft=f,opts.swipe.options.swipeRight=e}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var g=$.extend(!0,{},opts.prev,opts.mousewheel),h=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(a,b){a.preventDefault(),b>0?$cfs.trigger(cf_e("prev",conf),[g]):$cfs.trigger(cf_e("next",conf),[h])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var i=function(){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},j=$(window),k=null;if($.debounce&&"debounce"==conf.onWindowResize)k=$.debounce(200,i);else if($.throttle&&"throttle"==conf.onWindowResize)k=$.throttle(300,i);else{var l=0,m=0;k=function(){var a=j.width(),b=j.height();(a!=l||b!=m)&&(i(),l=a,m=b)}}j.bind(cf_e("resize",conf,!1,!0,!0),k)}},FN._unbind_buttons=function(){var b=(cf_e("",conf),cf_e("",conf,!1));ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(b),opts.auto.button&&opts.auto.button.unbind(b),opts.prev.button&&opts.prev.button.unbind(b),opts.next.button&&opts.next.button.unbind(b),opts.pagination.container&&(opts.pagination.container.unbind(b),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)},is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),start_arr.length>0)for(var a=0,l=start_arr.length;l>a;a++){var s=start_arr[a];if(0!=s){if(s===!0){if(s=window.location.hash,1>s.length)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(a){return'<a href="#"><span>'+a+"</span></a>"},$.fn.carouFredSel.progressbarUpdater=function(a){$(this).css("width",a+"%")},$.fn.carouFredSel.cookie={get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0,d=b.length;d>c;c++){for(var e=b[c];" "==e.charAt(0);)e=e.slice(1);if(0==e.indexOf(a))return e.slice(a.length)}return 0},set:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"},remove:function(a){$.fn.carouFredSel.cookie.set(a,"",-1)}},$.extend($.easing,{quadratic:function(a){var b=a*a;return a*(-b*a+4*b-6*a+4)},cubic:function(a){return a*(4*a*a-9*a+6)},elastic:function(a){var b=a*a;return a*(33*b*b-106*b*a+126*b-67*a+15)}}))})(jQuery);
/* TouchSwipe */
;(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);return aR};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));

;(function($){
	/***********************************************
	* 모바일 체크(타블렛 제외) 및 모바일 용 함수 실행
	************************************************/
	var key = "ignoreMobile";
	var mobileUA = [ "iphone", "android", "bada" ];
	var notMobileUA = [ "SHW-M180", "SHW-M380", "SHV-E140", "SHV-E150", "SHV-E230", "Nexus 7" ];
	function checkIgnoreMobile() {
		var isIgnoreMobile;
		var cookie = new RegExp(key + "=Y").test(document.cookie);
		isIgnoreMobile = cookie ? true : false;
		return isIgnoreMobile;
	}
	function checkMobile() {
		var ua = navigator.userAgent.toLowerCase();
		var isMobile = new RegExp( mobileUA.join("|") ).test(ua);
	return isMobile;
	}
	function checkMobileUA() {
		var isMobileUA = new RegExp(notMobileUA.join("|")).test(navigator.userAgent);
		return isMobileUA;
	}

	var isie7=(/msie 7/i).test(navigator.userAgent); //ie 7
	var isie8=(/msie 8/i).test(navigator.userAgent); //ie 8
	var isie9=(/msie 9/i).test(navigator.userAgent); //ie 9

	var isIos=(/(ipod|iphone|ipad)/i).test(navigator.userAgent);  //ios
	var isIphone=(/(iphone)/i).test(navigator.userAgent);  //iphone
	var isIpad=(/(ipad)/i).test(navigator.userAgent);  //ipad
	var isAndroid=(/android/i).test(navigator.userAgent);  //android
	var device;


	/***********************************************
	* 온로드 실행 함수
	************************************************/
	$(function() {
		$body = $('body');

		if (isIphone) {
			$body.addClass('iphone-device');
		}else if(isIpad){
			$body.addClass('ipad-device');
		}else if(isAndroid){
			$body.addClass('android-device');
		}

		if(isie7 || isie8){
			$body.addClass('msie8-lte'); //console.log('ie8 하위');
		}

		/* Fixed Navigation */
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('.hdr2015').outerHeight();
		$('body').addClass('body-static')

		$(window).scroll(function(event){
			didScroll = true;
		});

		setInterval(function() {
			if (didScroll) hasScrolled(); didScroll = false;
		}, 250);

		function hasScrolled() {
			var st = $(this).scrollTop();
			var windowTop = $(window).scrollTop();
			if(windowTop>129){
				$('body').removeClass('body-static')
				//header fixed
				$('.hdr2015').addClass('header-fixed');
				$('.section-story').stop().slideUp('fast');
				$('.nav>li').removeClass('active');
				$('#content').css({ 'padding-top': '193px'});
			}
			else{
				//header
				$('body').addClass('body-static')
				$('.hdr2015').removeClass('header-fixed');
				$('#content').css({ 'padding-top': '0'});
			}

			if(Math.abs(lastScrollTop - st) <= delta) return;

			if(st > lastScrollTop && st > navbarHeight){
				// Scroll Down
				$('.hdr2015').removeClass('nav-up').addClass('nav-down');
				$('body').removeClass('body-up').addClass('body-down');
			}else if(st < 200){
				$('.hdr2015').removeClass('nav-down').removeClass('nav-up');
				$('body').removeClass('body-down').removeClass('body-up').addClass('body-static');
			}else {
				// Scroll Up
				if(st + $(window).height() < $(document).height()) {
					$('.hdr2015').removeClass('nav-down').addClass('nav-up');
					$('body').removeClass('body-down').addClass('body-up');
					if($('.today-news-wrap').length  > 0 ){
						$('#content').css({ 'padding-top': '322px'});
					}
				}
			}
			lastScrollTop = st;
		}

		var gnb_check;
		if($('#wrap').length>0) gnb_check = $('#wrap').attr('class');
		else if($('#popWrap').length>0) gnb_check = "";
		else gnb_check = $("#wrap", parent.document).attr('class');

		if (gnb_check && gnb_check.match('gnb')){
			var gnb_value = gnb_check.split('gnb')[1].split(' ')[0].split('-');
			gnb_cate = gnb_value[1];
			gnb_deps1 = gnb_value[2].substr(0,2);
			gnb_deps2 = gnb_value[2].substr(2,2);
		}

		/* Navigation Active
			클래스 뒤 숫자로 자리수로  depth 구분
			예) gnb-news-07  (1depth), gnb-news-0700 (2depth)  */
		var gnbNaviRenewal = (function(){
			var wrapper = $('#nav'),
			gnb = wrapper.find('>ul'),
			gnb_sub = gnb.find('>li>ul'),
			gnb_1depth = gnb.find('>li>a'),
			gnb_2depth = gnb.find('>li .nav-dep02 li'),
			gnb_timer = null;

			return {
				init: function(){

					//내비게이션 1depth 활성화
					if(gnb_deps1!="") gnb.find(">li").eq(gnb_deps1).addClass("start");
					//내비게이션 2depth 활성화
					if(gnb_deps2!="") {
						gnb.find(">li").eq(gnb_deps1).find(gnb_2depth).eq(gnb_deps2).addClass("start");
						$('body').addClass('snb2015');
					}
					//console.log(gnb_deps2!="");

					//초기화 및 현재메뉴세팅
					//wrapper.find('a.on').addClass('active');
				}
			};
		}());
		gnbNaviRenewal.init();

		 /*if(isAndroid){
			navigationTopM();
		}else {
			navigationTopWeb();
		}*/

		navigationTopWeb();

		/* Navigation Web */
		function navigationTopWeb(){
			$('.nav>li').bind('mouseenter', function(){
				if($(this).hasClass('gnb-wrap')){
					//홈이외
					if($('.nav').hasClass('open')){
						//이미열린상태
						var $self = $(this);
						$('.nav>li').removeClass('active')
						$self.addClass('active');
					}else{
						//처음열릴때 슬라이드
						var $self = $(this);
						//$self.find('.section-story').slideDown('fast');
						$self.addClass('active');
						$self.parent().addClass('open')
					}
				}else{
					//홈, 비주얼
					var $self = $(this);
					//$self.find('.section-story').slideDown('fast');
					$self.addClass('active');
				}
			});
			$('.nav>li>a').bind('focus', function(){
				var $self = $(this).parent();
				//$('.section-story').stop().slideUp('fast');
				$('.nav>li').removeClass('active');
				//$self.find('.section-story').slideDown('fast');
				$self.addClass('active');
				$self.parent().addClass('open')
			});

			$('.nav>li').bind('mouseleave', function(){
				var $self = $(this);
				$self.removeClass('active');
				$self.find('.section-story').css('display','none')
			});
			$('.nav').bind('mouseleave', function(){
				if($(this).hasClass('open')){
					$(this).removeClass('open');
					//$('.section-story').stop().slideUp('fast');
				}
			});
			/* $('.nav>li.visual .nav-dep02 li:last-child a, .nav>li.m16 li:last-child a').bind('focusout', function(){
					$('.nav').removeClass('open');
					$('.section-story').stop().slideUp('fast');
					$('.nav>li').removeClass('active');
			}); */
		}

		/* Navigation Mobile */
		function navigationTopM(){
			$('.nav>li>a').bind('click', function(e){
				e.preventDefault();
				if($(this).parent().hasClass('gnb-wrap')){
					//홈이외
					if($('.nav').hasClass('open')){
						//이미열린상태
						var $self = $(this).parent();
						$('.nav>li').removeClass('active');
						$self.addClass('active');
					}else{
						//처음열릴때 슬라이드
						var $self = $(this).parent();
						//$self.find('.section-story').slideDown('fast');
						$self.addClass('active');
						$self.parent().addClass('open');
					}
				}else{
					//홈, 비주얼
					var $self = $(this).parent();
					//$self.find('.section-story').slideDown('fast');
					$self.addClass('active');
				}
			});
		}

		var winW = $(window).width();
		var $renewalMain = $('body').hasClass('main2015');
		var $renewalSubJuyo = $('.list-type02').hasClass('section-main-news');
		var $renewalSection = $('.section-topnews01');
		var $renewalSnb = $('.snb-wrap');
		var $themeTop = $('body').hasClass('page-theme-top'); //테마 - 톱뉴스
		var $themeHeadline = $('body').hasClass('page-theme-headline'); //테마 - 주요뉴스
		var $themeHot = $('body').hasClass('page-theme-hot'); //테마 - 핫뉴스
		var $themeMost = $('body').hasClass('page-theme-most'); //테마 - 많이본뉴스
		var $themeEmg = $('body').hasClass('page-theme-emergency'); //테마 - 긴급

		if($renewalMain && isIos && winW <= 1024 || $renewalMain &&  isAndroid && winW <= 1024){
			//mobile, tablet device (모바일과 타블렛 디바이스에서는 스크롤 기능을 하지 않는다.)
			setTimeout(function(){
				//이미지 크롭 컨텐츠, 이미지 경로, 제한 width, 제한 height
				Master.imgCropEvt('.major-news01','.img-con img','176','114');
				Master.imgCropEvt('.hot-news-list','.img-con img','78','58');
				Master.imgCropEvt('.exclusive-zone','.img-con img','78','58');
				Master.imgCropEvt('.health-zone','.img-con img','78','58');
				Master.imgCropEvt('.bookreview-zone','.img-con img','78','58');
			},200);
			statsAreaMain(); //메인용 영역별 통계
		}
		else if($renewalMain){
			//web 메인
			setTimeout(function(){
				//이미지 크롭 컨텐츠, 이미지 경로, 제한 width, 제한 height
				Master.imgCropEvt('.major-news01','.img-con img','176','114');
				Master.imgCropEvt('.hot-news-list','.img-con img','78','58');
				Master.imgCropEvt('.exclusive-zone','.img-con img','78','58');
				Master.imgCropEvt('.health-zone','.img-con img','78','58');
				Master.imgCropEvt('.bookreview-zone','.img-con img','78','58');
			},200);

			if($('html').hasClass('msie7') == false){
				onScrollDirection();
				onScrollAdjustEndLine(".scroll-start01",".column-wrap",".scroll-in01");
				onScrollAdjustEndLine(".scroll-start02",".column-wrap",".scroll-in02");
				onScrollAdjustEndLine(".scroll-start03",".column-wrap",".scroll-in03");

				for(i=1;i<4;i++){
					var scrollH = $('.scroll-start'+ 0 + i).innerHeight();
					$('.scroll-start'+ 0 + i).css({ height: scrollH + 50});
					//console.log(scrollH + 50);
					//alert(scrollH);
				}
			}

			//Master.videoMainPlayer(); //메인 비디오 플레이어
			//Master.videoMainScroll(); //메인 비디오 스크롤
			//Master.photoMainSlider();//메인 포토/화보 슬라이드
			if(isie7 || isie8){
				$body.addClass('msie8-lte');    //console.log('ie8 하위');
				//메인 영상/포토무비 슬라이드 - 아이프레임에서 스크립트 실행
				//Master.photoMainSlider('.video-m-script .list', '.vid-paging .current', '.vid-paging .total', '.vid-m-prev', '.vid-m-next', 2);
				//메인 포토/화보 슬라이드
				Master.photoMainSlider('.photo-m-script .list', '.ph-paging .current', '.ph-paging .total', '.ph-m-prev', '.ph-m-next', 4);
			}else{
				Master.videoMainPlayer();    //메인 비디오 플레이어
				setTimeout(function(){
					Master.videoMainScroll();    //메인 비디오 스크롤
				} , 500);
				Master.photoMainSlider('.photo-m-script .list', '.ph-paging .current', '.ph-paging .total', '.ph-m-prev', '.ph-m-next', 4);    //메인 포토/화보 슬라이드
			}

			statsAreaMain(); //메인용 영역별 통계

			middleDotChr('.major-news01>ul>li','.tit-news>a');
			middleDotChr('.major-news02>ul>li','.news-tl>a');
			middleDotChr('.major-news03>ul>li','.news-tl>a');

			middleDotChr('.item-cont01','.tit-con .tit');
			middleDotChr('.item-cont02','.tit-con .tit');

			middleDotChr('.hot-news-list li','.txt');
			middleDotChr('.list-style01 li','.tit');
			middleDotChr('.list-style02 li','a');
			middleDotChr('.list-style13 li','.tit');

		}

		//web 섹션 메인
		if($renewalSubJuyo){
			Master.imgCropEvt('.section-main-news','.img-con img','138','88');
			$('.section-main-news li').each(function(){
				var $self = $(this);
				if($self.find('.img-con img').length > 0 && $self.find('.related-wrap .h-related li').length > 0){
					//var relH = $self.find('.related-wrap').height() - 25; //썸네일과 관련기사 겹치는 높이
					var imgH = $self.find('.img-con img').height();
					var leadH = $self.find('.lead').height(); //썸네일과 발문 겹치는 높이
					//$self.find('.img-con').css('margin-bottom', imgH - leadH);
					$self.find('.img-con').css('margin-bottom', 10);
				}
			});

			middleDotChr('.section-topnews02','.tit>a');
			middleDotChr('.section-main-news li','.tit-news>a');
		}

		//web 섹션 리스트
		if($renewalSection.length == 0){
			middleDotChr('.headline-list li.section02','.news-tl>a');
			middleDotChr('.travel-zone li','.news-tl>a'); //여행/축제, 연예
		}

		//web 섹션 리스트 - 하위 메뉴가 있는 리스트 페이지
		if($renewalSnb.length > 0){
			var rootName = $('.sta-wrap>.lnb strong').text();
			var rootWord = rootName.length;
			var snbActive = $('.snb li>a:contains('+ rootName +')');
			var snbWord = snbActive.text().length;

			if(rootWord == snbWord){
				snbActive.parent().addClass('on');
			}
		}

		//web 기사본문 신규에디터 - 구글 지도 사이즈 확대/축소
		Master.linkMapSize();

		//web 테마별뉴스 섬네일 가운데 정렬
		if($themeHeadline || $themeHot){
			setTimeout(function(){
				Master.imgCropEvt02('.list-theme01 li','.poto img',70,70);
			} , 300);
		}

		if($themeTop || $themeEmg){
			setTimeout(function(){
				Master.imgCropEvt02('.list-theme02 li','.poto img',165,122);
			} , 300);
		}

		if($themeMost){
			setTimeout(function(){
				Master.imgCropEvt02('.list-theme03 li','.poto img',165,122);
			} , 300);
		}

		//칼럼니스트 호출
		if (/\/advisory\/.*/.test(document.location.pathname)) {
			var site = colistNews.getSite(); //console.log(site);
			if (site) colistNews.loadMain();
		};

	});/*온로드 실행 함수 end*/

	/***********************************************
	* 호출 함수
	************************************************/
	Master = {
		/* 이미지 크롭 */
		imgCropEvt : function(conEl,findImg,limitW,limitH) {
			var $cropName = $(conEl); //크롭 컨텐츠 선택자
			var $findImgName = findImg; // 이미지 컨텐츠
			var $limitW = limitW; //제한 width
			var $limitH = limitH; //제한 height
			function imgWidth(){
				$cropName.find($findImgName).each(function(){
					var imgW = $(this).width();
					var imgH = $(this).height();
					var moveL = -(imgW-limitW)/2
					//가로 이미지 일때
					if(imgW >= imgH){
						if(limitH <= imgH){
							//썸네일 사이즈보다 이미지가 클 경우 - 가운데 정렬
							$(this).addClass('colW').css('margin-left',Math.round(moveL));
						}else{
							//썸네일 사이즈보다 이미지가 작을 경우 - 높이 기준 늘림
							$(this).addClass('colW').css('height','100%');
						}
					}
					// 세로 이미지 일때 (넓이 기준 크롭)
					else if(imgW < imgH){
						$(this).addClass('rowH').css('width','100%');
					}
					//console.log(imgW);
				});
			}

			$cropName.find($findImgName).each(function(){
				var $cropW = $(this).width();
				var $cropH = $(this).height();
				if($cropW > $cropH){
					//가로 이미지 일때
					imgWidth();
				}
			});
		},

		imgCropEvt02 : function(conEl,findImg,limitW,limitH) {
			$(conEl).find(findImg).each(function(){
				var imgW = $(this).width();
				var imgH = $(this).height();
				var moveL = -(imgW-limitW)/2
				//console.log(imgW, imgH, moveL);
				//가로 이미지 일때
				if(imgW > limitW){
					//썸네일 사이즈보다 이미지가 클 경우 - 가운데 정렬
					$(this).addClass('colW').css('margin-left',Math.round(moveL));
					//console.log(imgW, imgH, moveL);
				}
			});
		},

		/* 기사본문 신규에디터 - 구글 지도 사이즈 확대/축소 */
		linkMapSize : function() {
			$('.article-wrap').on('click vclick', '.link-map-zone .btn-map-zoomin',function(){
				var $self = $(this);
				if($self.siblings('.map-zone').hasClass('open')){
					$self.removeClass('out').siblings('.map-zone').removeClass('open');
				}else{
					$self.addClass('out').siblings('.map-zone').addClass('open');
				}
			});
		},

		/* 메인 비디오 컨트롤 */
		videoMainPlayer: function() {
			$videoPlayerZone = $('.video-play-zone');
			$videoPlayerTitle = $('.video-play-zone .news-con');
			$videoControl = $('.video-play-zone .vjs-control-bar');

			$videoMainPlayer = videojs('videoMainView');

			$videoMainPlayer.on('play', function() {
				$videoPlayerZone.addClass('v-play v-restart');
				$videoPlayerZone.removeClass('v-pause v-ended v-start');
				setTimeout(function(){
					$videoPlayerZone.removeClass('v-restart');
				} , 5000);
			});
			$videoMainPlayer.on('pause', function() {
				$videoPlayerZone.addClass('v-pause');
				$videoPlayerZone.removeClass('v-play v-ended');
			});
			$videoMainPlayer.on('ended', function() {
				$videoPlayerZone.addClass('v-ended');
				$videoPlayerZone.removeClass('v-play v-pause');
				this.posterImage.show();
			});

			$videoMainPlayer.on('mousemove', function() {
				if($videoPlayerZone.hasClass('v-start') == false ){
					$videoPlayerZone.addClass('v-in');
					$videoPlayerZone.removeClass('v-out v-restart');
				}
			});
			$videoMainPlayer.on('mouseout', function() {
				if($videoPlayerZone.hasClass('v-start') == false ){
					$videoPlayerZone.addClass('v-out');
					$videoPlayerZone.removeClass('v-in v-restart');
				}
			});
		},

		/* 메인 비디오 스크롤 */
		videoMainScroll: function() {
			$videoMainScroll = $('.video-scroll-zone');
			$videoScrollList = $('.video-scroll-zone .vid-list');
			$videoScrollObject = $('.video-scroll-zone .vid-list li');
			$videoScrollTop = $videoMainScroll.find('.inner').scrollTop();

			setTimeout(function(){
				$videoMainScroll.find('li:eq(0) .box-flex').addClass('active');
				$videoMainScroll.find('.inner').animate({scrollTop: 190}, 500);
			} , 100);

			$videoScrollList.on('click vclick', 'li',function(){
				var $self = $(this);
				var video = $('#videoMainView_html5_api');

				$selfNum = $self.index();
				objSum = 0; //초기화

				if($self.find('.box-flex').hasClass('active')){
					$self.find('.box-flex').removeClass('active');
				}else{
					$self.find('.box-flex').addClass('active').parent().siblings('li').find('.box-flex').removeClass('active');
					$('.video-play-zone').addClass('v-restart');
				}

				setTimeout(function(){
					video.get(0).play();
				} , 200);

				$videoScrollObject.each(function(index, val){
					$selfH = $(this).innerHeight();
					objSum += $selfH;
					//console.log('each index num ' + index + ' / click this index num: ' + $selfNum + ' / Sum : ' + objSum + ' / $self Height : ' + $selfH + ' / each scrollTop : ' + $videoScrollTop);
					if($selfNum == index) return false; //index 가 같은 경우 함수 정지
				});

				$videoMainScroll.find('.inner').animate({scrollTop: objSum - $selfH}, 300);
			});
		},

		/* 메인 포토 슬라이드
		메인 영상/포토무비 슬라이드 (IE8 하위) */
		photoMainSlider: function(contName, current, total, btnPrev, btnNext, showItems) {
			$photoMainSlider = $(contName);
			$photoCut = $(current);
			$photoTotal = $(total);

			$photoMainSlider.find('li').each(function(i){
				var $self = $(this);
				$self.attr('data-list',i+1);
			});
			//console.log({'contName' : contName, 'current' : current, 'total' : total, 'showItems' : showItems});

			$photoMainSlider.carouFredSel({
				auto : false,
				circular : true,
				infinite : true,
				direction : 'left',
				width: '100%',
				prev: {button : btnPrev, key:'left',
					onBefore : function(data) {
						$cur = $photoMainSlider.triggerHandler('currentPage') + 1;
						$photoCut.html($cur);
					}
				},
				next: {button : btnNext, key:'right',
					onBefore : function(data) {
						$cur = $photoMainSlider.triggerHandler('currentPage') + 1;
						$photoCut.html($cur);
					}
				},
				pagination : false,
				items : {visible : showItems},
				scroll : {items: showItems,pauseOnHover : true,easing : 'swing' ,duration : 500,timeoutDuration: 5000},
				//mousewheel: true,
				swipe : {onMouse: true, onTouch: true},
				onCreate: function(data) {
					$cur = $photoMainSlider.triggerHandler('currentPage') + 1;
					$photoTotal.html(parseInt($photoMainSlider.find('li').length/showItems));
					$photoCut.html($cur);
				}
			});

			$photoMainSlider.swipe({
				excludedElements : "button, input, select, textarea, .noSwipe",
				swipeLeft : function() { $photoMainSlider.trigger('next', showItems); },
				swipeRight : function() {
					$photoMainSlider.trigger('prev', showItems); //console.log("swipeRight");
				},
				fingers:'all', threshold:30,
				tap : function(event, target) { $(target).find('a').click(); }
			});

		},

		/* 메인 주요뉴스 관련기사 레이아웃 제어 - 사진이 있을때와 없을때 */
		flexRelatedEvt: function(flexEl) {
			var $flexRelatedName = $(flexEl);
			$flexRelatedName.find('.con').each(function(){
				var potoNum = $(this).find('.poto').length;
				if(potoNum == 1){
					$(this).find('.h-related').css({'float' : 'left','width' : '258px'});
				}
			});
		}

	} /* 호출 함수 end*/

})(jQuery);/*end ($)*/


/***********************************************
* 본문 상단 오늘의 연합뉴스(주요뉴스)
***********************************************/
var todayJuyoTop = (function(){
	var tjuyo_data, mphoto_url ='/data/2015_body_juyo.js';
	return {
		loadData : function(pagetype)
		{
			var self = this;
			var rnd = Math.floor(new Date().getTime() / 1000 / 60);
			$.ajax({
				type: "get",
				url: mphoto_url+'?'+rnd,
				dataType: "json",
				success: function (data) {
					tjuyo_data = data.RESULTSET.DATA;
					self.setDataModule();
				},
				error  : function(error){
				}
			});
		},
		setDataModule : function()
		{
			var new_list = "";
			//console.log(tjuyo_data.length);
			for(i=0;i<9;i++){
				//new_list+='';
				new_list+='<li>';
				new_list+='<a href="' + tjuyo_data[i]["TEMPLATE_ARTICLE_URL"] + '">';
				if(tjuyo_data[i]["RELATION_IMG_URL"] == ""){
					//이미지가 데이터가 없을때
				}else {
					new_list+='<div class="img-con">';
					new_list+='<img src="' + tjuyo_data[i]["RELATION_IMG_URL"] + '" alt="'+ replaceHtmlChr(tjuyo_data[i]["TEMPLATE_ARTICLE_TITLE"]) +'">';
					new_list+='</div>';
				}
				new_list+='<div class="news-con">';
				new_list+='<p class="tit-news">'+ replaceHtmlChr(tjuyo_data[i]["TEMPLATE_ARTICLE_TITLE"]) +'</p>';
				new_list+='</div>';
				new_list+='</a>';
				new_list+='</li>';
			}

			$("#todayJuyo").find("ul").append(new_list);
			$slideTodayNews = $('.today-news .list');
			$slideTodayNews.carouFredSel({
				auto: {play: false, pauseOnHover: 'resume'},
				responsive: true,
				circular: true,
				infinite: true,
				width: '100%',
				prev: '.today-prev',
				next: '.today-next',
				items:{height: 'auto',visible : 3},
				scroll: {items: 1,duration : 500,timeoutDuration: 5000},
				transition: true,
				swipe: {onMouse: true,onTouch: true}
			});
			$slideTodayNews.swipe({
				excludedElements: "button, input, select, textarea, .noSwipe",
				swipeLeft: function() { $slideTodayNews.trigger('next', 1); },
				swipeRight: function() {
					$slideTodayNews.trigger('prev', 1); //console.log("swipeRight");
				},
				tap: function(event, target) { $(target).find('a').click(); }
			});

			setTimeout(function(){
				$('.today-news .list li').find('.img-con img').each(function(){
					var imgW = $(this).width();
					var imgH = $(this).height();
					var moveL = -(imgW-90)/2
					//console.log(imgW, imgH, moveL);
					//가로 이미지 일때
					if(imgW > 90){
						//썸네일 사이즈보다 이미지가 클 경우 - 가운데 정렬
						$(this).addClass('colW').css('margin-left',Math.round(moveL));
						//console.log(imgW, imgH, moveL);
					}
				});
			} , 300);

		}
	}
}());


/***********************************************
* 세계 섹션 (특파원 르포) 2016-05-23 추가
***********************************************/
var repo = {
	siteURL : "http://apps.yonhapnews.co.kr/api/site/?domain=2&site=0621010000&count=10&before=30",
	obj: [],
	init: function () {
		if ( $("#reportNews").length > 0 ) {
			$.ajax({
				cache: true,
				url: repo.siteURL + "&callback=repo.callback",
				dataType: 'script'
			});
		}
	},

	callback: function (data) {
		repo.setRepo( data.RESULTSET.DATA );
	},

	setRepo: function (list) {
		var html = '';
		var offset = 0;
		var target = $("#reportNews .zone .list");

		for (var i=0; i<list.length; i++ ) {
			if ( list[i]["INNER_FILE"] != "" && list[i]["THUMBNAIL"] != "" ) {
				list[i]["IMAGE"] = list[i]["INNER_FILE"];
				repo.obj[offset] = list[i];
				offset++;
			} else if ( list[i]["INNER_FILE"] != "" ) {
				list[i]["IMAGE"] = list[i]["INNER_FILE"];
				repo.obj[offset] = list[i];
				offset++;
			} else if ( list[i]["THUMBNAIL"] != "" ) {
				list[i]["IMAGE"] = list[i]["THUMBNAIL"];
				repo.obj[offset] = list[i];
				offset++;
			}

			if ( offset > 1 ) break;
		}

		for (var j=0; j<repo.obj.length; j++) {
			html += '<li>\n';
			html += '	<div class="img-com">\n';
			html += '		<a href="' + repo.obj[j]["URL"] + '"><img src="' + repo.obj[j]["IMAGE"] + '" alt="' + repo.replaceHtml(repo.obj[j]["TITLE"]) + '"></a>\n';
			html += '	</div>\n';
			html += '	<div class="news-com">\n';
			html +=	'		<h3 class="tit"><a href="' + repo.obj[j]["URL"] + '">' + repo.replaceHtml(repo.obj[j]["TITLE"]) + '</a></h3>\n';
			html += '	</div>\n';
			html += '</li>\n';
		}

		target.html(html);
	},

	replaceHtml: function (val) {
		var result = val.replace(/\<르포\>/g, "").replace(/\[르포\]/g, "");
		result = result.replace(/\"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");

		return result;
	}
}


/***********************************************
* 시론/칼럼 메인
***********************************************/
/* 최신 연합시론 (5건) - 시론/칼럼 우측 */
var opinionLatestNews = (function(){
	var siteURL ='http://apps.yonhapnews.co.kr/api/site/?site=2201000000&page=1&count=5';
	return {
		json : {},
		init : function(){
			$.ajax({
				type: "get",
				cache: true,
				url: siteURL,
				dataType: "jsonp",
				jsonpCallback : "opinionLatestNews.callback"
			});
		},

		callback: function (data) {
			opinionLatestNews.json = data["RESULTSET"]["DATA"];
			opinionLatestNews.setDataModule();
		},

		setDataModule : function(){
			var markup = "";
			var data_url = '';
			var data_img = '';
			var data_tit = '';
			var data_lead = '';
			var data_num = opinionLatestNews.json.length

			//기사 5건씩
			for(i=0; i<data_num; i++){
				//markup+='';
				data_url = opinionLatestNews.json[i]["URL"];
				data_tit = opinionLatestNews.json[i]["TITLE"];

				markup+='<li>';
				markup+='<a href="' + data_url + '">'+ opinionLatestNews.replaceHtml(data_tit) +'</a>';
				markup+='</li>';
			}
			//console.log(markup);

			$('.opinion-zone ul').append(markup);
			opinionLatestNews.json = ""; //reset
		},

		replaceHtml: function (val) {
			var result = val.replace(/\<연합시론\>/g, "").replace(/\[연합시론\]/g, "");
			result = result.replace(/\"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
			return result;
		}
	}
}());

/* 최신 칼럼 (2건) - 시론/칼럼 리스트와 본문 하단 */
var columnistLatestNews = (function(){
	var siteURL ='http://apps.yonhapnews.co.kr/api/site/?site=2205010000&size=260&page=1&count=2';
	return {
		json : {},
		init : function(){
			$.ajax({
				type: "get",
				cache: true,
				url: siteURL,
				dataType: "jsonp",
				jsonpCallback : "columnistLatestNews.callback"
			});
		},

		callback: function (data) {
			columnistLatestNews.json = data["RESULTSET"]["DATA"];
			columnistLatestNews.setDataModule();
		},

		setDataModule : function(){
			var markup = "";
			var data_url = '';
			var data_img = '';
			var data_tit = '';
			var data_lead = '';
			var data_dt = '';
			var data_num = columnistLatestNews.json.length
			//console.log(data_num);

			//기사 2건씩
			for(i=0; i<data_num; i++){
				//markup+='';
				data_url = columnistLatestNews.json[i]["URL"];
				data_img = columnistLatestNews.json[i]["INNER_FILE"];
				data_tit = columnistLatestNews.json[i]["TITLE"];
				data_lead = columnistLatestNews.json[i]["BODY"];
				data_dt = columnistLatestNews.json[i]["DATETIME"];
				data_mm = data_dt.substr(4,2);
				data_dd = data_dt.substr(6,2);
				dt_new = replaceDateTime(data_dt).split(' ')[1];
				data_time = data_mm + '-' + data_dd + ' '  + dt_new;
				//console.log(data_lead.length);
				//console.log(data_dt, data_dt.substr(4,2), data_dt.substr(6,2), dt_new);

				//말줄임 처리 및 커스텀 코드제거
				//console.log(data_lead.replace(/\+/g, "").replace(/\'/g, "").replace(/\"/g, "&quot;").replace(/\//g, "").replace(/\</g, "").replace(/\>/g, ""));
				//data_lead = data_lead.replace(/<YNAPHOTO.+\/>\s/gi, "");
				data_lead = columnistLatestNews.removeInnerPh(data_lead);
				data_lead = data_lead.substr(0,110)+'...'; //console.log(data_lead);

				markup+='<li>';
				markup+='<figure class="img-con">';
				markup+='<a href="' + data_url + '">';
				markup+='<img src="' + data_img + '" alt="'+ replaceHtmlChr(data_tit) +'">';
				markup+='</a></figure>';
				markup+='<div class="news-con">';
				markup+='<h3 class="tit"><a href="' + data_url + '">'+ replaceHtmlChr(data_tit) +'</a></h3>';
				markup+='<p class="lead">';
				markup+='<a href="' + data_url + '">'+ data_lead +'</a>';
				markup+='<span class="p-time">'+ data_time +'</span>';
				markup+='</p>';
				markup+='</div>';
				markup+='</li>';
			}
			//console.log(markup);

			$('.latest-column-bottom ul').append(markup);
			columnistLatestNews.json = ""; //reset
		},

		removeInnerPh : function(val){
			var t = val;
			if ( /<YNAPHOTO.+\/>/.test(t) ) {
				t = t.replace(/<YNAPHOTO.+\/>\s/gi, "");
			}
			if ( /<YNAPHOTO.+/.test(t) ) {
				t = t.replace(/<YNAPHOTO.+/gi, "");
			}
			return t;
		}

	}
}());

/* 칼럼니스트 (15명) */
function $query() {
	var s = document.location.search.replace(/^\?/, '');
	var a = s.split(/&+/);
	var b = {};
	for (var n in a) {
		var m = a[n].split(/=/);
		try {
			if (m && m.length == 2) b[m[0]] = decodeURIComponent(m[1])
		} catch (e) {}
	}
	return b
};
var colistNews = {
	json: {},
	query: undefined,
	server: "http://apps.yonhapnews.co.kr/api/site/?site=",
	url: {
		col1: "2205020000", col2: "2205030000", col3: "2205040000", col4: "2205050000",
		col5: "2205060000", col6: "2205070000", col7: "2205080000", col8: "2205090000",
		col9: "2205100000", col10: "2205110000", col11: "2205120000", col12: "2205130000",
		col13: "2205140000", col14: "2205150000", col15: "2205160000"
	},
	cid: undefined,
	getSite: function() {
		var q = $query();
		var a;
		if (/^.*\/([0-9]{10})\.html/i.test(document.location.pathname)) a = document.location.pathname.replace(/^.*\/([0-9]{10})\.html/i, '$1');
		return a;
	},
	load: function(a, b, c) {
		$.ajax({
			url: a + '&before=' + b +'&page=1&count=2&callback=' + c,
			cache: true,
			dataType: 'script'
		})
	},
	loadMain: function() {
		colistNews.load(colistNews.server + colistNews.url.col1, 100, 'colistNews.onLoadCol1'); //김종현
		colistNews.load(colistNews.server + colistNews.url.col2, 100, 'colistNews.onLoadCol2'); //이병로
		colistNews.load(colistNews.server + colistNews.url.col3, 100, 'colistNews.onLoadCol3'); //추왕훈
		colistNews.load(colistNews.server + colistNews.url.col4, 100, 'colistNews.onLoadCol4'); //현경숙
		colistNews.load(colistNews.server + colistNews.url.col5, 100, 'colistNews.onLoadCol5'); //권훈
		colistNews.load(colistNews.server + colistNews.url.col6, 100, 'colistNews.onLoadCol6'); //최재석
		colistNews.load(colistNews.server + colistNews.url.col7, 100, 'colistNews.onLoadCol7'); //권영석
		colistNews.load(colistNews.server + colistNews.url.col8, 100, 'colistNews.onLoadCol8'); //김선한
		colistNews.load(colistNews.server + colistNews.url.col9, 100, 'colistNews.onLoadCol9'); //김성용
		colistNews.load(colistNews.server + colistNews.url.col10, 100, 'colistNews.onLoadCol10'); //황재훈
		colistNews.load(colistNews.server + colistNews.url.col11, 100, 'colistNews.onLoadCol11'); //이희용
		colistNews.load(colistNews.server + colistNews.url.col12, 100, 'colistNews.onLoadCol12'); //김길원
		colistNews.load(colistNews.server + colistNews.url.col13, 100, 'colistNews.onLoadCol13'); //김귀근
		colistNews.load(colistNews.server + colistNews.url.col14, 100, 'colistNews.onLoadCol14'); //윤고은
		colistNews.load(colistNews.server + colistNews.url.col15, 100, 'colistNews.onLoadCol15'); //이은정
	},
	onLoadCol1: function(a) {
		colistNews.json['col1'] = a; //console.log(colistNews.json['col1']);
		var b = $('#kimjh');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<김종현의 풍진세상\>/g, "").replace(/\[김종현의 풍진세상\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol2: function(a) {
		colistNews.json['col2'] = a; //console.log(colistNews.json['col2']);
		var b = $('#leebr');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<이병로 칼럼\>/g, "").replace(/\[이병로 칼럼\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol3: function(a) {
		colistNews.json['col3'] = a; //console.log(colistNews.json['col3']);
		var b = $('#choowh');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<추왕훈의 데자뷔\>/g, "").replace(/\[추왕훈의 데자뷔\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol4: function(a) {
		colistNews.json['col4'] = a; //console.log(colistNews.json['col4']);
		var b = $('#hyungs');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<현경숙의 시각\>/g, "").replace(/\[현경숙의 시각\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol5: function(a) {
		colistNews.json['col5'] = a; //console.log(colistNews.json['col5']);
		var b = $('#kwonh');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<권훈 칼럼\>/g, "").replace(/\[권훈 칼럼\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol6: function(a) {
		colistNews.json['col6'] = a; //console.log(colistNews.json['col6']);
		var b = $('#choijs');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<최재석의 동행\>/g, "").replace(/\[최재석의 동행\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol7: function(a) {
		colistNews.json['col7'] = a; //console.log(colistNews.json['col7']);
		var b = $('#kwonys');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<권영석의 통일시대\>/g, "").replace(/\[권영석의 통일시대\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol8: function(a) {
		colistNews.json['col8'] = a; //console.log(colistNews.json['col8']);
		var b = $('#kimsh');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<스파이열전\>/g, "").replace(/\[스파이열전\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol9: function(a) {
		colistNews.json['col9'] = a; //console.log(colistNews.json['col9']);
		var b = $('#kimsy');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<김성용의 저울달기\>/g, "").replace(/\[김성용의 저울달기\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol10: function(a) {
		colistNews.json['col10'] = a; //console.log(colistNews.json['col10']);
		var b = $('#hwangjh');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<황재훈의 광화문별곡\>/g, "").replace(/\[황재훈의 광화문별곡\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol11: function(a) {
		colistNews.json['col11'] = a; //console.log(colistNews.json['col11']);
		var b = $('#leehy');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<이희용의 글로벌시대\>/g, "").replace(/\[이희용의 글로벌시대\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol12: function(a) {
		colistNews.json['col12'] = a; //console.log(colistNews.json['col12']);
		var b = $('#kimkw');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<김길원의 헬스노트\>/g, "").replace(/\[김길원의 헬스노트\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol13: function(a) {
		colistNews.json['col13'] = a; //console.log(colistNews.json['col13']);
		var b = $('#kimkk');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<김귀근의 병영톡톡\>/g, "").replace(/\[김귀근의 병영톡톡\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol14: function(a) {
		colistNews.json['col14'] = a; //console.log(colistNews.json['col14']);
		var b = $('#younge');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<윤고은의 참새방앗간\>/g, "").replace(/\[윤고은의 참새방앗간\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	onLoadCol15: function(a) {
		colistNews.json['col15'] = a; //console.log(colistNews.json['col15']);
		var b = $('#leeej');
		var c = a['RESULTSET']['DATA'];
		var d = '';
		var e = '<h3><a href="{url}">{title}</a></h3>';
		if(c.length != 0){
			for (var i = 0; i < c.length; i++) {
				d += e.replace(/\{url\}/g, c[i]['URL'])
					.replace(/\{title\}/g, c[i]['TITLE'].replace(/\<이은정의 절대음감\>/g, "").replace(/\[이은정의 절대음감\]/g, ""));
			}
		}
		b.find('.news-item').html(d);
	},
	init: function() {
		colistNews.query = $query();
	}
};

/***********************************************
* 중점 치환(…) - &hellip; / (·) - &middot;
***********************************************/
function middleDotChr(conMid,findMid){
	$(conMid).find(findMid).each(function(){
		$(this).html(
		$(this).html().replace(/…/g, "&middot;&middot;&middot; "));
	});
}

/***********************************************
* 연합시론 치환
***********************************************/
function repeatOpinionHtml(conMid,findMid){
	$(conMid).find(findMid).each(function(){
		$(this).html(
		$(this).html().replace(/&lt;연합시론&gt;/g, ''));
	});
}

/***********************************************
* 칼럼니스트 리스트 제목 치환
***********************************************/
function repeatColumnHtml(conMid,findMid){
	$(conMid).find(findMid).each(function(){
		$(this).html(
		$(this).html().replace(/&lt;/g, '<strong class="slogan">&lt;').replace(/&gt;/g, '&gt;</strong>\n'));
	});
}

/***********************************************
* 르포 치환
***********************************************/
function repeatReportHtml(conMid,findMid){
	$(conMid).find(findMid).each(function(){
		$(this).html(
		$(this).html().replace(/&lt;르포&gt;/g, '').replace(/\[르포\]/g, ''));
	});
}


/***********************************************
* 메달현황 호출 (메달 순위 / 나라별 메달현황)
************************************************/
var medalResult = {
	medal : '',
	siteURL : 'http://www.yonhapnews.co.kr/rio2016/5451000000.json',
	init: function () {
		$.ajax({
			url: medalResult.siteURL,
			cache: true,
			data: { time: Math.floor(new Date().getTime() / 1000 / 60) },
			dataType: 'jsonp',
			jsonpCallback: 'callback',
			success: function(data) {
				medalResult.medal = data;
				medalResult.medalCountry();
			}
		});
	},
	medalCountry: function () {
		var item = medalResult.medal.country; //console.log(item[0]);
		var $medal = $('#countryMedal');

		$medal.find('.ranking span').html(item[0].rank+'위');
		$medal.find('.m-gold .num').html(item[0].gold);
		$medal.find('.m-silver .num').html(item[0].silver);
		$medal.find('.m-bronze .num').html(item[0].bronze);
	}
}

/***********************************************
* 메인용 영역별 통계 - 내비게이션, 로고, 톱기사, 주요기사 1~3
***********************************************/
function statsAreaMain(){
	//GNB (1Depth)
	var tempThisMain = [5542, 5544, 7059, 5545, 5547, 7060, 5548, 5549, 5554, 5552, 5553, 5550, 7061, 5557, 5555, 5558, 5559];
	var tempCurMain = [8250, 8251, 8252, 8253, 8254, 8255, 8256, 8257, 8258, 8259, 8260, 8261, 8262, 8263, 8264, 8265, 8266]; // 메인용

	$('.nav>li>a').each(function(i){
		$(this).attr('href',
		$(this).attr('href').replace("template="+tempThisMain[i],"template="+tempCurMain[i]));
	});

	//GNB (2Depth)
	//전국
	$('.nav>li:eq(7) .nav-dep02>li>a').each(function(){
		$(this).attr('href',
		$(this).attr('href').replace("template="+tempThisMain[7],"template="+tempCurMain[7]));
	});

	//스포츠
	$('.nav>li:eq(10) .nav-dep02>li>a').each(function(){
		$(this).attr('href',
		$(this).attr('href').replace("template="+tempThisMain[10],"template="+tempCurMain[10]));
	});

	//세계
	$('.nav>li:eq(11) .nav-dep02>li>a').each(function(){
		$(this).attr('href',
		$(this).attr('href').replace("template="+tempThisMain[11],"template="+tempCurMain[11]));
	});

	//사람들
	$('.nav>li:eq(13) .nav-dep02>li>a').each(function(){
		$(this).attr('href',
		$(this).attr('href').replace("template="+tempThisMain[13],"template="+tempCurMain[13]));
	});

	//GNB (비주얼뉴스)
	var tempThisVisual = [5559, 5561, 5562, 5569, 5570, 5571]
	var tempCurVisual = [8266, 8267, 8268, 8269, 8270, 8271]

	$('.nav>li:eq(16) .nav-dep02 li a').each(function(i){
		$(this).attr('href',
		$(this).attr('href').replace("template="+tempThisVisual[i],"template="+tempCurVisual[i]));
	});

	//로고
	$('.logo-yna a').each(function(){
		$(this).attr('href',
		$(this).attr('href').replace(".co.kr/",".co.kr/?template=8272"));
	});

	var tempTopNum = [2085, 5565];
	var tempHeadNum = [2087, 5566, 5567];
	var hrefNum = '';

	//톱기사
	$('.top-zone a').each(function(){
		$(this).attr('href',
		$(this).attr('href').replace("template="+hrefNum,"template="+tempTopNum[0]).slice(0,-4));
	});

	//주요기사
	$('.major-news01 ul li a').each(function(){
		$(this).attr('href',
		$(this).attr('href').replace("template="+hrefNum,"template="+tempHeadNum[0]).slice(0,-4));
	});

	$('.major-news02 ul li a').each(function(){
		$(this).attr('href',
		$(this).attr('href').replace("template="+hrefNum,"template="+tempHeadNum[1]).slice(0,-4));
	});

	$('.major-news03 ul li a').each(function(){
		$(this).attr('href',
		$(this).attr('href').replace("template="+hrefNum,"template="+tempHeadNum[2]).slice(0,-4));
	});
}