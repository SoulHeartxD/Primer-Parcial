$("#btn_contacto").click(function(){
	let objeto = {};
	$(".form-control").each(function(){
		$(this).parent().removeClass("has-error");
		

		if($(this).val() == ""){
			$(this).parent().addClass("has-error");
		}else{
			objeto[$(this).attr("name")] = $(this).val();
		}

		

	});
	
	$.post( "includes/login.php",objeto, function( data ) {
  	//$("#respuesta").html(data);
	});


});

$(".form-control").keypress(function(){
	$(this).parent().removeClass("has-error");
});