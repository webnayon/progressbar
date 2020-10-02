/** * jQuery Line Progressbar * Author: Sharifur Rahman * Author URI : https:devrobin.com * Version: 1.0.0 */ ;
(function($) {
    'use strict';
    $.fn.rProgressbar = function(options) {
        options = $.extend({ percentage: null, ShowProgressCount: true, duration: 1000, fillBackgroundColor: '#ed1c24', backgroundColor: '#EEEEEE', borderRadius: '0px', height: '10px', width: '100%' }, options);
        $.options = options;
        return this.each(function(index, el) {
            $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');
            var lineProgressBarInit = function() {
                var progressFill = $(el).find('.proggress');
                var progressBar = $(el).find('.progressbar');
                progressFill.css({ backgroundColor: options.fillBackgroundColor, height: options.height, borderRadius: options.borderRadius });
                progressBar.css({ width: options.width, backgroundColor: options.backgroundColor, borderRadius: options.borderRadius });
                progressFill.animate({ width: options.percentage + "%" }, { step: function(x) { if (options.ShowProgressCount) { $(el).find(".percentCount").text(Math.round(x) + "%"); } }, duration: options.duration });
            }
            $(this).waypoint(lineProgressBarInit, { offset: '100%', triggerOnce: true });
        });
    }
})(jQuery);




     $('.progressBarD').rProgressbar({
    percentage: 95,
    fillBackgroundColor: '#3C8DF5',
    backgroundColor: '#F9F9F9',
    duration: 2000,
    ShowProgressCount: true,
    borderRadius: '15px',
    height: '15px',
});



  $('.progressBarCSS').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#4461A0',
     backgroundColor: '#F9F9F9',
    duration: 2000,
    ShowProgressCount: true,
    borderRadius: '15px',
    height: '15px',

});

  $('.progressBarBOOTSTRAP').rProgressbar({
    percentage: 87,
    fillBackgroundColor: '#f1c40f',
     backgroundColor: '#F9F9F9',
    duration: 2000,
    ShowProgressCount: true,
    borderRadius: '15px',
    height: '15px',

});
  

  $('.progressBarJAVASCRIPT').rProgressbar({
    percentage: 85,
    fillBackgroundColor: '#293C52',
     backgroundColor: '#F9F9F9',
    duration: 2000,
    ShowProgressCount: true,
    borderRadius: '15px',
    height: '15px',

});

    $('.progressBarJQUERY').rProgressbar({
    percentage: 80,
    fillBackgroundColor: '#CF9E00',
     backgroundColor: '#F9F9F9',
    duration: 2000,
    ShowProgressCount: true,
    borderRadius: '15px',
    height: '15px',

});

        $('.progressBarPHP').rProgressbar({
    percentage: 75,
    fillBackgroundColor: '#9759B3',
     backgroundColor: '#F9F9F9',
    duration: 2000,
    ShowProgressCount: true,
    borderRadius: '15px',
    height: '15px',

});


    $('.WORLDPRESS').rProgressbar({
    percentage: 70,
    fillBackgroundColor: '#EA633C',
     backgroundColor: '#F9F9F9',
    duration: 2000,
    ShowProgressCount: true,
    borderRadius: '15px',
    height: '15px',

});