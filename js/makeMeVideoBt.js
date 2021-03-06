jQuery.fn.makeMeVideoBt = function(options){
	var defaults = {
            img:'img/play.png',
            dimension:'coverAll',
            htmlTag:'link'
    },
    $el = jQuery(this),
    options = jQuery.extend(defaults, options);
    var bt_icon = new Image();
   	bt_icon.onload = function (){options.width = this.width,options.height = this.height,setIcon()};
    bt_icon.src = options.img;

    function setIcon(){
		$el.each(function(){	
			var t = jQuery(this),
			w = t.width(),
			h = t.height(),
			div = $('<a/>', {
				href:'#'
			}),
			top = t.position().top + parseInt(t.css('margin-top'),10) + parseInt(t.css('padding-top'),10),
			left = t.position().left + parseInt(t.css('margin-left'),10) + parseInt(t.css('padding-left'),10),
			css_obj = {}
			if(options.htmlTag == 'span'){
				div = $('<span/>')
			}
			if(options.dimension == 'icon' ){				
				css_obj = {
					'position':'absolute',
					'top':top + h*.5 - defaults.height * .5+'px',
					'left':left + w*.5 - defaults.width * .5+'px',
					'background':'url('+options.img+') no-repeat',
					'width':options.width+'px',
					'height':options.height+'px'
				}
			}
			if(options.dimension == 'image' ){				
				css_obj = {
					'position':'absolute',
					'top':top +'px',
					'left':left +'px',
					'background':'url('+options.img+') no-repeat 50% 50%',
					'width':w+'px',
					'height':h+'px'
				}
			}
			div.css(css_obj);
			t.after(div)
		})
	}
}