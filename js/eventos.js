var empiezaApp = function()
{
	var Entrar = function()
	{
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		var parametros ="opc=validaEntrada"+
						"&usuario"+usuario+
						"&clave"+clave+
						"&id="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "datos/validaEntrada.php",
			data: parametros,
			success: function(response){
				if (response.respuesta == true)
				{
					$(".entradaUsuario").hide("slow");
					$("nav").show("slow");
				}
				else
				{
					$(".entradaUsuario > input").val("");
					$("#txtUsuario").focus();
					alert("Usuario o contraseña incorrectos");
				}
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Error de conexión");
			}
		});
	}
	var Altas = function()
	{
		$("main > div").hide("slow");
		$(".capturaUsuario").show("slow");
	}
	var AltaUsuario = function()
	{
		var parametros = $("#frmCapturaUsuario").serialize()+
							"&opc=AltaUsuario"+
							"&id="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "datos/AltaUsuario.php",
			data: parametros,
			success: function(response)
			{
				
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Error de conexión");
			}
		});
	}
	//Eventos del usuario
	$("#btnEntrar").on("click",Entrar);
	$("#btnAltas").on("click",Altas);
	$("#frmCapturaUsuario").on("submit",AltaUsuario);
}
//inicializamos el JQuery
$(document).on("ready",empiezaApp);