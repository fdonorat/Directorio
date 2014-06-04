// JavaScript Document
//var idn = getUrlVars()["id"];
var negdet = null;
var i_imagenes;
var o_imagenes;
$(document).on('pageshow', '#detailsPage', function(event) {
	var id = getUrlVars()["id"];
	event.preventDefault();
	//$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
	//negdet = negocios[parseInt(id, 10)-1];
	negdet = setNegdet(id);
	//alert(negdet.nombre);
	//getNegocio(id);
	getNegocioNombre();
	getNegocioDescripcion();
	getNegocioCategorias(id);
	getNegocioImagenes(id);
	getNegocioTelefonos(id);
	getNegocioHorarios(id);
	getNegocioRedes(id);
	
	return false;
});

function setNegdet(idn) {
	for(var i = 0, len = negocios.length; i < len; i++) {
		if (negocios[i].id.toString() == idn) { 
			return negocios[i]; 
		}
	}
	return null;
}

function getNegocioTelefonos(id_negocio){
    console.log("Entering getNegocioTelefonos()");
    $.ajax({
      url : url_raiz_api + "/directorio.negociotelefonos/search/" + id_negocio,
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function(data) {
        console.log("Entering getNegocioTelefonos.success()");
		var tels = data;
		/*var neg = null;
		for(var i = 0, len = negocios.length; i < len; i++) {
			if (negocios[i].id.toString() == id_negocio) {
				neg = negocios[i];
				break;	
			}
		}*/
		//$('#Nombre_completo').text(negdet.nombre);
		$('#detallesList').append('<li data-role="list-divider">Teléfonos</li>');
		$.each(tels, function(index, telefono) {
				$('#detallesList').append('<li>' + telefono.telefono + '</li>');
		});
		$('#detallesList').listview('refresh');
        console.log("Exiting getNegocioTelefonos.success()");
      }  
    });
    console.log("Exiting getNegocioTelefonos()");
  }
  
function getNegocioHorarios(id_negocio){
    console.log("Entering getNegocioHorarios()");
    $.ajax({
      url : url_raiz_api + "/directorio.negociohorarios/search/" + id_negocio,
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function(data) {
        console.log("Entering getNegocioHorarios.success()");
		var hor = data;
		$('#detallesList').append('<li data-role="list-divider">Horarios</li>');
		$.each(hor, function(index, horario) {
				$('#detallesList').append('<li>' + horario.dias + '<br/>' + horario.horaEntrada + ' a <br/>' + horario.horaSalida + '</li>');
		});
		$('#detallesList').listview('refresh');
        console.log("Exiting getNegocioHorarios.success()");
      }  
    });
    console.log("Exiting getNegocioHorarios()");
  }
  
function getNegocioRedes(id_negocio){
    console.log("Entering getNegocioRedes()");
    $.ajax({
      url : url_raiz_api + "/directorio.negocioredes/search/" + id_negocio,
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function(data) {
        console.log("Entering getNegocioRedes.success()");
		var redes = data;
		$('#detallesList').append('<li data-role="list-divider">Redes</li>');
		$.each(redes, function(index, red) {
				$('#detallesList').append('<li><a href="' + red.urlRed + '">' + red.urlRed + '</a></li>');
		});
		$('#detallesList').listview('refresh');
        console.log("Exiting getNegocioRedes.success()");
      }  
    });
    console.log("Exiting getNegocioRedes()");
  }

function getNegocioCategorias(id_negocio) {
	console.log("Entering getNegocioCategorias()");
    $.ajax({
      url : url_raiz_api + "/directorio.negociocategorias/search/" + id_negocio,
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function(data) {
        console.log("Entering getNegocioCategorias.success()");
		var categorias = data;
		$('#detallesList').append('<li data-role="list-divider">Categorías</li>');
		$.each(categorias, function(index, cat) {
				$('#detallesList').append('<li>' + cat.categoriasId.nombre + '</li>');
		});
		$('#detallesList').listview('refresh');
        console.log("Exiting getNegocioCategorias.success()");
      }  
    });
    console.log("Exiting getNegocioCategorias()");
}

function getNegocioImagenes(id_negocio) {
	console.log("Entering getNegocioImagenes()");
    $.ajax({
      url : url_raiz_api + "/directorio.negocioimagenes/search/" + id_negocio,
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function(data) {
        console.log("Entering getNegocioImagenes.success()");
		//var imagenes = data;
		o_imagenes = data
		i_imagenes = o_imagenes.length;
		/*$('#detallesList').append('<li data-role="list-divider">Imágenes</li>');
		$.each(o_imagenes, function(index, img) {
				$('#detallesList').append('<li><img src="' + url_raiz_webapp + "/" + img.urlImgOr + '"></li>');
		});
		$('#detallesList').listview('refresh');*/
		$('#ulGaleria').append('<li><a href="negociogaleriaimagenes2.html">Ver galería<span class="ui-li-count">'+ i_imagenes + '</span></a></li>');
		$('#ulGaleria').listview('refresh');
        console.log("Exiting getNegocioImagenes.success()");
      }  
    });
    console.log("Exiting getNegocioImagenes()");
}

function getNegocioDescripcion() {
		$('#detallesList').append('<li data-role="list-divider">Descripción</li><li><span id="desc"></span></li>');
		$('#desc').text(negdet.descripcion).html();
		$('#detallesList').listview('refresh');
}

function getNegocioNombre() {
	$('#Nombre_completo').text(negdet.nombre);
	$('#detallesList').listview('refresh');	
}

/*function desclen(id_negocio) {
	alert("negdet.descripcion:\n" + negocios[parseInt(id_negocio, 10)].descripcion);
	alert("len = " + negocios[parseInt(id_negocio, 10)].descripcion.length);	
}*/

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}