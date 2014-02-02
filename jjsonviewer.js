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
  		var klass = "object"
  		if ($.isArray(value)) {
  			klass = "array";
  		}
  		if(type == "object") {
  			var object = '<li class="expanded"><span class="key">' + key + ': </span> <span>{</span> <ul class="' + klass + '">';
  			object = object + json2html(value);
  			return object + "</ul><span>}</span></li>";
  		}
  		return '<li><span class="key">' + key + ': </span><span class="'+ type + '">' + value + '</span></li>';
  	}

  	$(document).on("click", '.jjson-container .expanded', function(e){
	    e.preventDefault();
	    e.stopPropagation();
	    $(this).addClass('collapsed').find("ul").slideUp();
	});

  	$(document).on('click', '.jjson-container .expanded.collapsed', function(e){
    	e.preventDefault();
    	e.stopPropagation();
    	$(this).removeClass('collapsed').find("ul").slideDown();
  	});

}(window.jQuery);