!function($){

	"use strict";

  $.fn.jJsonViewer = function (jjson) {
    return this.each(function () {
      var self = $(this), 
          json = self.data('jjson');
      if (!json) {
        if (typeof jjson == 'string') {
          json = jjson;
          self.data('jjson', jjson);
        } 
        else {
          self.data('jjson', '');
        }
      }
      new JJsonViewer(self);
    });
	};

	function JJsonViewer(self) {
		var json = $.parseJSON(self.data('jjson'));
  	self.html('<ul class="jjson-container"></ul>');
  	self.find(".jjson-container").append(json2html([json]));
	}


	function json2html(json) {
		var html = "";
		for(var key in json) {
			if (!json.hasOwnProperty(key)) {
				continue;
			}

			var value = json[key],
				  type = typeof json[key];

			html = html + createElement(key, value, type);
		}
		return html;
	}

	function createElement(key, value, type) {
		var klass = "object",
        open = "{",
        close = "}";  
		if ($.isArray(value)) {
			klass = "array";
      open = "[";
      close = "]";
		}
		if(type == "object") {
			var object = '<li><span class="expanded"></span><span class="key">' + key + ': </span> <span class="open">' + open + '</span> <ul class="' + klass + '">';
			object = object + json2html(value);
			return object + '</ul><span class="close">' + close + '</span></li>';
		}
		return '<li><span class="key">' + key + ': </span><span class="'+ type + '">' + value + '</span></li>';
	}

	$(document).on("click", '.jjson-container .expanded', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).addClass('collapsed').parent().find(">ul").slideUp(100);
  });

	$(document).on('click', '.jjson-container .expanded.collapsed', function(event) {
  	event.preventDefault();
  	event.stopPropagation();
  	$(this).removeClass('collapsed').parent().find(">ul").slideDown(100);
	});

}(window.jQuery);