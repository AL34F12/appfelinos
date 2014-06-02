// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel"  data-display="push"><div class="panel-content" align="center"> <h3>Opciones</h3> <div data-role="controlgroup"> <a data-role="button" href="#principal">Principal</a>  <a data-role="button" href="#page6">Acerca Felinos</a> <a data-role="button" href="#page7">Felinos Extintos</a> <a data-role="button" href="#page8">Clasificacion</a> <a data-role="button" href="#page9">Acerca de</a>';
	
	$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});

$(document).ready(function(e){
	$('#logo img').tap(function(e){
		$.mobile.navigate("#principal");
	});
});

$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(100);
  });
   $('#B_Beep').tap(function(){
    navigator.notification.beep(1);
  });
 },false); //deviceready
}); //document ready
