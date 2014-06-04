// JavaScript Document

$(document).on('pageshow', '#detailsPage', function(event) {
	var id = getUrlVars()["id"];
	//$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
	getContactDetails(id);
});

    function getContactDetails(id_contact){
    console.log("Entering getContactDetails()");
    $.ajax({
      url : s_URL + "/rest.personatelefonos/search/" + id_contact,
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function(data) {
        console.log("Entering getContactDetails.success()");
		//alert("success");
		//$('#telefonos li').remove();
		var tels = data;
		var cont;
		for(var i = 0, len = contactos.length; i < len; i++) {
			//alert(typeof(contactos[i].id) + " | " + typeof(id_contact));
			if (contactos[i].id.toString() == id_contact) {
				cont = contactos[i];
				break;	
			}
			//else cont = null;
		}
		//alert(cont.nombre);
		$('#Nombre_completo').text(cont.nombre);
		$.each(tels, function(index, telefono) {
			//$.each(this, function (c) {
				//alert("id: " + c.id + " , nombre: " + c.nombre);
				$('#telefonos').append('<li>' + telefono.telefono + '</li>');
			//});
		});
		$('#telefonos').listview('refresh');
        console.log("Exiting getContactDetails.success()");
      }  
    });
    console.log("Exiting getContactDetails()");
  }

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