/* 
	any questions? ask bjh! 
*/
var Redirect = {
	cid : /^.*([A-Z]{3}[0-9]{17}).*$/.test(document.location.toString()) ? document.location.toString().replace(/^.*([A-Z]{3}[0-9]{17}).*$/, '$1') : '',
	issue : /^.*(IC[0-9]{8}).*$/.test(document.location.toString()) ? document.location.toString().replace(/^.*(IC[0-9]{8}).*$/, '$1') : '',
	param : document.location.search.replace(/[^\?&=]+=(IC[0-9]{8}|[A-Z]{3}[0-9]{17})/g, '').replace(/^[\?&]+|&*$/g,''),
	notMobile: /.*(SHW-M180|SHW-M380|SHV-E140|SHV-E150|SHV-E230|Nexus 7).*/,
	mobileAgent: /.*(iphone|bada|android).*/i,
	isMobile: function(ua)
	{
		var ua = ua || window.navigator.userAgent;
		return Redirect.mobileAgent.test(ua) && !Redirect.notMobile.test(ua) && !Redirect.isIgnore();
	}, 
	mobileStat: function(param,ua)
	{
		if (!param)
			return;
			
		if (Redirect.isMobile(ua))
		{	
			param = param.replace('{cid}', Redirect.cid).replace('{issue}', Redirect.issue).replace('{param}', Redirect.param);
			param += '&' + (new Date().getTime());
			var url = 'http://m.yna.co.kr/kr/stat.html?' + param.replace(/&+/g, '&');
			(new Image()).src = url;
		}
	},
	check: function(url,ua)
	{
		if (!url)
			return;
		if (!/^http.*/.test(url))
			url = 'http://' + url;			
		Redirect.checkIgnore();
		if (Redirect.isMobile(ua))
		{
			url = url.replace('{cid}', Redirect.cid).replace('{issue}', Redirect.issue).replace('{param}', Redirect.param);
			if (url.indexOf('?') < 0)
				url += '?mobile';
			else
				url += (/.*\?$/.test(url) ? 'mobile' : '&mobile');
			url = url.replace(/&+/g, '&');
			document.location.replace(url);
		}
	},
	checkIgnore:function()
	{
		if ((document.location.search.split(/[\?&]/).join('^') + '^').indexOf('^m^') >= 0)
			Redirect.setIgnore('Y');
	},
	removeIgnore: function()
	{
		var d = new Date();
		d.setDate(d.getDate()-1);
		Redirect.setIgnore('N', d.toGMTString());
	},
	setIgnore: function(flag,expires)
	{
		var cook = "ignoreRedirect=" + (flag ? flag : "Y") + "; path=/; domain=" + document.location.host.replace(/^.*\.(yonhapnews.co.kr|yna.co.kr)$/, '$1') + ";";
		if (expires)
			cook += " expires=" + expires;
		console.log(cook);
		document.cookie = cook;
	},
	isIgnore: function()
	{
		return document.cookie.indexOf("ignoreRedirect=Y") >= 0;
	}
}
