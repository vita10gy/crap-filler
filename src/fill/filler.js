console.log('filler');
var CrapFiller = function() {
    $('input:enabled:not([readonly])').each(function () {
      console.log($(this).attr("name"));
    });
  }

