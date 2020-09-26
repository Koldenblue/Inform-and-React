/*---------------------------Tabs--------------------------------*/
    if(jQuery() .tabs) {	 
		$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
		$( "#tabs" ).tabs({ fx: { opacity: 'toggle' } });
	};
/*---------------------------Pretty Photo--------------------------------*/	
	$(function(){
	   $("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast',
			slideshow: 5000,
			autoplay_slideshow: false,
			opacity: 0.80,
			show_title: true,
			allow_resize: true,
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/',
			theme: 'pp_default',
			horizontal_padding: 20,
			hideflash: false,
			wmode: 'opaque',
			autoplay: true,
			modal: false,
			deeplinking: false,
			overlay_gallery: true,
			keyboard_shortcuts: true,
			changepicturecallback: function(){},
			callback: function(){},
			ie6_fallback: true
			});
	});	
/*------------------------Sortable Gallery Hover---------------------------*/
     function hover_overlay() {
        
        jQuery('.hover img.alignleft, .hover img.alignright').hover( function() {
            jQuery(this).stop().animate({opacity : 0.7}, 500);
        }, function() {
            jQuery(this).stop().animate({opacity : 1}, 500);
        });
		
		jQuery('.hover img').hover( function() {
            jQuery(this).stop().animate({opacity : 0.7}, 500);
        }, function() {
            jQuery(this).stop().animate({opacity : 1}, 500);
        });
		
    }
    
    hover_overlay();
/*----------------------------Quicksand (Sortable Gallery)-------------------------------*/    
	var $filterType = $('.portfolio-main li.selected-1 a').attr('class');
	var $holder = $('ul.portfolio-content');
   	
	var $data = $holder.clone();
	jQuery('.portfolio-main li a').click(function(e) {
		$('.portfolio-main li').removeClass('selected-1');
		var $filterType = $(this).attr('class');
		$(this).parent().addClass('selected-1');
		
		if ($filterType == 'all') {
			var $filteredData = $data.find('li');
		} 
		else {
			var $filteredData = $data.find('li[data-type=' + $filterType + ']');
		}
		$holder.quicksand($filteredData, 
			{duration: 800,easing: 'easeInOutQuad'},
		 	function() {
				hover_overlay();
				$("a[rel^='prettyPhoto']").prettyPhoto({
					animation_speed: 'fast',
					slideshow: 5000,
					autoplay_slideshow: false,
					opacity: 0.80,
					show_title: false,
					allow_resize: true,
					default_width: 500,
					default_height: 344,
					counter_separator_label: '/',
					theme: 'pp_default',
					horizontal_padding: 20,
					hideflash: false,
					wmode: 'opaque',
					autoplay: true,
					modal: false,
					deeplinking: false,
					overlay_gallery: true,
					keyboard_shortcuts: true,
					changepicturecallback: function(){},
					callback: function(){},
					ie6_fallback: true
				});
			}		
		);
		return false;
	});
	/*
	(function($) {
        $.fn.sorted = function(customOptions) {
            var options = {
                reversed: false,
                by: function(a) {
                    return a.text();
                }
            };
            $.extend(options, customOptions);

            $data = $(this);
            arr = $data.get();
            arr.sort(function(a, b) {

                var valA = options.by($(a));
                var valB = options.by($(b));
                if (options.reversed) {
                    return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;              
                } else {        
                    return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;  
                }
            });
            return $(arr);
        };

    })(jQuery);

    $(function() {

      var read_button = function(class_names) {
        var r = {
          selected: false,
          type: 0
        };
        for (var i=0; i < class_names.length; i++) {
          if (class_names[i].indexOf('selected-') == 0) {
            r.selected = true;
          }
          if (class_names[i].indexOf('segment-') == 0) {
            r.segment = class_names[i].split('-')[1];
          }
        };
        return r;
      };

      var determine_sort = function($buttons) {
        var $selected = $buttons.parent().filter('[class*="selected-"]');
        return $selected.find('a').attr('data-value');
      };

      var determine_kind = function($buttons) {
        var $selected = $buttons.parent().filter('[class*="selected-"]');
        return $selected.find('a').attr('data-value');
      };

      var $preferences = {
        duration: 800,
        easing: 'easeInOutQuad',
        adjustHeight: false
      };

      var $list = $('#list');
      var $data = $list.clone();

      var $controls = $('ul.splitter ul');

      $controls.each(function(i) {

        var $control = $(this);
        var $buttons = $control.find('a');

        $buttons.bind('click', function(e) {

          var $button = $(this);
          var $button_container = $button.parent();
          var button_properties = read_button($button_container.attr('class').split(' '));      
          var selected = button_properties.selected;
          var button_segment = button_properties.segment;

          if (!selected) {

            $buttons.parent().removeClass('selected-0').removeClass('selected-1').removeClass('selected-2').removeClass('selected-3').removeClass('selected-4').removeClass('selected-5').removeClass('selected-6');
            $button_container.addClass('selected-' + button_segment);

            var sorting_type = determine_sort($controls.eq(1).find('a'));
            var sorting_kind = determine_kind($controls.eq(0).find('a'));

            if (sorting_kind == 'all') {
              var $filtered_data = $data.find('li');
            } else {
              var $filtered_data = $data.find('li.' + sorting_kind);
            }

            if (sorting_type == 'size') {
              var $sorted_data = $filtered_data.sorted({
                by: function(v) {
                  return parseFloat($(v).find('span.colore').text());
                }
              });
            } else {
              var $sorted_data = $filtered_data.sorted({
                by: function(v) {
                  return $(v).find('strong').text().toLowerCase();
                }
              });
            }

            $list.quicksand($sorted_data, $preferences, function(){
						 hover_overlay();
						 $("a[rel^='prettyPhoto']").prettyPhoto();
			});

          }

          e.preventDefault();
        });

      }); 

      var high_performance = true;  
      var $performance_container = $('#performance-toggle');
      var $original_html = $performance_container.html();

      $performance_container.find('a').live('click', function(e) {
        if (high_performance) {
          $preferences.useScaling = false;
          $performance_container.html('CSS3 scaling turned off. Try the demo again. <a href="#toggle">Reverse</a>.');
          high_performance = false;
        } else {
          $preferences.useScaling = true;
          $performance_container.html($original_html);
          high_performance = true;
        }
        e.preventDefault();
      });
    });       */