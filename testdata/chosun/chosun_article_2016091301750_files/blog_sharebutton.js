(function(global){

    //namespace
    var ns = function(name){
        var namespaces = name.split('.');
        var obj = global;
        while (namespaces.length > 0) {
            var segment = namespaces.pop();
            if(typeof obj[segment] === 'undefined'){
                obj[segment] = {};
            }
            if(typeof obj[segment] !== 'object') {
                // do nothing
                return null;
            }
            obj = obj[segment];
        };
        return obj;
    };
    
    if (!ns('ShareBlog')){
        return;
    }

    // util
    var $ = {
        bind: function(obj, type, fn){
            obj.addEventListener ?
                obj.addEventListener(type, fn, false) :
                obj.attachEvent('on'+type, fn);
        },
        getThisScriptElement: function() {
            // returns caller script element node if it is called in loading
            var scripts = document.getElementsByTagName('script');
            return scripts[scripts.length -1];
        },
        each: function(array, fn) {
            for ( var i = 0, l = array.length; i < l; i++ ) {
                var r = fn(i, array[i], array);
                if (r === false) {return;}
            }
        },
        attr: function(el, obj){
            for (var key in obj) {
                el.setAttribute(key, obj[key]);
            }
        },
        map: function(array, fn){
            var res = [];
            $.each(array, function(i, v, a){
                res.push(fn(i, v, a));
            });
            return res;
        },
        filter: function(array, fn){
            var res = [];
            $.each(array, function(i, v, a){
                if(fn(i, v, a)){res.push(v)};
            });
            return res;
        },
        ready: function(fn){
            $.bind(window, 'load', fn);
        }
        
    };
    
    var blogButton = {
        constant: {
            IMG_BASE_URL: 'http://static.naver.net/blog/share_guide/appicon/',
            ALT: '\uBE14\uB85C\uADF8\uACF5\uC720',
            // width, height
            // IMG_SIZE: {a:[20,20], b:[30,30], c:[40,40] , d:[50,61] , e:[72,22] , f:[81,24]}
			IMG_SIZE: {a:[72,22], b:[20,20], c:[30,30] , d:[40,40] , e:[50,61] , f:[81,24]} ,
			IMG_NAME:{ a: 'Blog_share_KR_72X22_2.png' , b:'Blog_20_2.png' , c: 'Blog_30.png' , d: 'Blog_40.png' , e : 'Blog_share_KR_50X61.png' , f : 'Blog_share_KR_81X24.png'}
        },
                
        properties : function() {
        	return {
        		"img_base_url" : this.constant.IMG_BASE_URL
        	};
        },

        insertButton: function(argOption, scriptParent, script){
            var self = this;
            var option = self.validate(argOption);            
            var s = (script.parentNode === scriptParent) ? script : undefined;
            var elAdded = self.createTag(option);
            scriptParent.insertBefore(elAdded, s);
            return elAdded;
        },

        validate: function(argOption){
            var self = this;
            var pattern = {type: /^(a|b|c|d|e|f)$/,
                           title: /^[\s\S]+$/};
            //default
            var option = {type: 'a', title: null};
            if (!argOption) {
                return option;
            }
            for (var key in option) {
                if (argOption[key]
                    && typeof argOption[key] === 'string'
                    && argOption[key].match(pattern[key])){
                    option[key] = argOption[key];
                }
            }

            option.withUrl = !!argOption.withUrl;
            
            return option;
        },
        
        createTag: function(option){
            var self = this;
            var size = self.constant.IMG_SIZE[option.type];
            
            /*
              <a href="{url}">
              <img src="{img}" alt="{alt}" height="{height}" width="{width}"/>
              </a>
            */
            var a = document.createElement('a');
            $.attr(a, {href: 'javascript:;'}); 
            var img = document.createElement('img');
            $.attr(img,
                   {src: self.createImageUrl(option),
                    width: size[0],
                    height: size[1],
                    alt: self.constant.ALT});
            
            a.appendChild(img);
            
            return a;
        },

        createImageUrl: function(option){
            var self = this;
            var C = self.constant; 
            var size = C.IMG_SIZE[option.type];
            return [this.properties().img_base_url , C.IMG_NAME[option.type]].join('');
        },
               
        handleEvent: function(option) {      	
			var url = document.location.href;
			var title = document.title;

			if (option.title) {
				title = option.title;
			}       	
        	
			window.open("http://blog.naver.com/openapi/share?url=" + url+'&title='+title, "share_blog", "width=410, height=540, resizable=no");
        	return false;
        }
        
    };
    
   

    global.ShareBlog.makeButton = function(option){
        var script = $.getThisScriptElement();
        var scriptParent = script.parentNode;        
       
        if(scriptParent.tagName.toLowerCase() !== 'head'){
            $.ready(function(){
				
                var elAdded = blogButton.insertButton(option, scriptParent, script);
                
                $.bind(elAdded, 'click', function(){
                	blogButton.handleEvent(option);
                	return false; 
                });
            });
        }
    };  
    
})(this);