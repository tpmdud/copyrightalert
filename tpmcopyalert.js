/**
* TPMcopyalert Sprint1
* License: MIT
* Contact me: TPMgraber@hotmail.com
* by Timon Graber
*/
(function($){
	$.fn.extend({ 
		tpmcopyalert: function(options) {
			//default Settings
			var defaults = {
				text : 'This media is copyrighted &copy 2014 by the site owner. All rights reserved.',
                mousebutton: 3,
                alertid: "tpmcopyalert",
			}
			return this.each(function() {
				var o = $.extend(defaults, options); //combines defaults and optional Settings
                var id = '#'+o.alertid;
                var alert = '<p id='+o.alertid+' style="display:none">'+o.text+'</p>';
                $('body').append(alert);
                $(this).bind('contextmenu', function(e){ return false; });
                $(this).mousedown(function(e) {
                    if(e.which == o.mousebutton) {
                        var mouseX = e.pageX; 
                        var mouseY = e.pageY-16;
                        $(id).hide().css({'top':mouseY,'left':mouseX}).show();
                    }
                });
                $(document).click(function(event) {
                    if (!$(event.target).closest(id).length) {
                        $(id).hide();
                    }
                });
    		});
    	}
	});
})(jQuery);