console.log('filler');




$(':input:enabled:not([readonly]):not([type="submit"]):not([type="hidden"])').each(function () {
  console.log($(this).attr("name"));
  
  if($(this).attr("type")=="email"){
    $(this).val("joe"+ (new Date()/1) + "@somenotrealcompany.com");
  }
  
  
});


