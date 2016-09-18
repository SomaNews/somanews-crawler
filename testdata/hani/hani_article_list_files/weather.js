	var haniWeather				= 0;
	var haniWeatherLen			= 0;
	var	haniWeatherIntervalId	= null;
    
    function weatherMove(idx)
	{
    	if ( !isNaN(idx) )
    	{
    		haniWeather	= idx;
    	}
    	jQuery("#weatherWrap a.on").removeClass("on").css({"height":"0px","overflow":"hidden"});
    	jQuery("#weatherWrap a").eq(haniWeather++).addClass("on").css({"height":"","overflow":""});
    	if ( haniWeather >= haniWeatherLen )
    	{
    		haniWeather = 0;
    	}
	}
    
    function stopWeatherMove()
    {
    	if ( window.haniWeatherIntervalId )
    	{
    		clearInterval(window.haniWeatherIntervalId);
    		window.haniWeatherIntervalId	= null;
    	}
    }
    
    function startWeatherMove()
    {
    	if ( window.haniWeatherIntervalId )
    	{
    		clearInterval(window.haniWeatherIntervalId);
    		window.haniWeatherIntervalId	= null;
    	}
    	window.haniWeatherIntervalId	= setInterval(weatherMove, 2000);
    }
    
    jQuery(document).ready
    (
		function()
		{
			var	obj_a_list	= jQuery("#weatherWrap a").css({"display":"block","height":"0px","overflow":"hidden"}).removeClass("display_off");
			var	nowDate	= new Date();

			haniWeatherLen	= obj_a_list.length;
			for(var i=0;i<haniWeatherLen;i++)
			{
				obj_a_list.eq(i)
				.attr("onfocus", "javascript:weatherMove("+i+");");
			}
			jQuery("#weatherWrap").focusin(stopWeatherMove).focusout(startWeatherMove);
			jQuery(".weather-info .today-date").html(nowDate.getFullYear()+"."+((nowDate.getMonth()<9?"0":"")+(nowDate.getMonth()+1))+"."+((nowDate.getDate()<10?"0":"")+nowDate.getDate()));
		    
			weatherMove();
			window.haniWeatherIntervalId	= setInterval(weatherMove, 2000);
		}
    );