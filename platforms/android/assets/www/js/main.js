// JavaScript Document
var negocios;
var dominio = "192.168.1.81";
var puerto = ":8080";
var raiz_webapp = "/DirectorioWebApp";
var raiz_api = "/webresources";
 var url_raiz_webapp = "http://" + dominio + puerto + raiz_webapp;
var url_raiz_api = url_raiz_webapp + raiz_api;
//var s_URL = "http://192.168.1.80:8080/WebApplication1/webresources";
$(document).ready(function(){
    //$("#getContactBtn").click(getContactList);
	//$("#clearTableBtn").click(clearTable);
	//$("#postContactBtn").click(postContact);
	//$("#deleteContactBtn").click(deleteContact(this.id));
	//$("#updateContactBtn").click(updateContact);
	onDeviceReady();
  });
  
  function onDeviceReady() {
    console.log("Entering index.html.onDeviceReady");
	/*$(function() { FastClick.attach(document.body); });*/
    getNegocios();
    console.log("Exiting index.html.onDeviceReady");
  }
  
  function getNegocios(){
    console.log("Entering getNegocios()");
    $.ajax({
      url : url_raiz_api + "/directorio.negocio/",
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function(data) {
        console.log("Entering getNegocios.success()");
		//alert("success");
		$('#negociosList li').remove();
		negocios = data;
		$.each(negocios, function(index, negocio) {
			//$.each(this, function (c) {
				//alert("id: " + c.id + " , nombre: " + c.nombre);
				$('#negociosList').append('<li><a href="negociodetalle.html?id=' + negocio.id + '">' +
				'<img src="' + url_raiz_webapp + negocio.logoUrl + '">' +
				'<h2>' + negocio.nombre + '</h2>' +
				'</a></li>');
			//});
		});
		$('#negociosList').listview('refresh');
		/*$(xml).find("persona").each(function() {
          var html = '<tr id="persona"><td>' + $(this).find("id").text() 
          + '</td><td id="name_' + $(this).find("id").text() + '">' + $(this).find("nombre").text()
		  + '</td><td><button id="updateContactBtn_' + $(this).find("id").text() + '" onclick="updateContact(this.id);">Editar</button></td>' 
		  + '<td><button id="deleteContactBtn_' + $(this).find("id").text() + '" onclick="deleteContact(this.id);">Borrar</button></td>' + '</tr>';
          $('#contactList').append(html);
		});*/
        console.log("Exiting getNegocios.success()");
      }  
    });
    console.log("Exiting getNegocios()");
  }
    
  
  function getPersona() {
	  /* $(xml).find("persona").each(function() {
          var html = '<tr id="persona"><td>' + $(this).find("id").text() 
          + '</td><td id="name_' + $(this).find("id").text() + '">' + $(this).find("nombre").text()
		  + '</td><td><button id="updateContactBtn_' + $(this).find("id").text() + '" onclick="updateContact(this.id);">Editar</button></td>' 
		  + '<td><button id="deleteContactBtn_' + $(this).find("id").text() + '" onclick="deleteContact(this.id);">Borrar</button></td>' + '</tr>';
          $('#contactList').append(html);
        });*/
  }
  
  function updateContact(contactId) {
	  console.log("Entering updateContact()");
	  var p = $("#name_" + contactId.split("_")[1]).text();
	  var p_json;
	  p = prompt("Editar nombre:", p);
	  if(p != null) {
		  p_json = formToJSON(contactId.split("_")[1], p);
		  $.ajax({
			  type: "PUT",
			  url : s_URL + "/rest.persona/" + contactId.split("_")[1],
			  contentType:"application/json; charset=utf-8",
			  data: p_json,
			  dataType:"json",
			  cache: false,
			  error:function (xhr, ajaxOptions, thrownError){
				debugger;
						alert(xhr.statusText);
						alert(thrownError);
					},
			  success : function() {
				  //alert("Contacto actualizado");
				console.log("Entering updateContact.success()");
				
				console.log("Exiting updateContact.success()");
			  } 
			});
		getContactList();
	  }
	  else alert("No está permitido valor vacío");
    console.log("Exiting updateContact()");
  }
  
  function deleteContact(contactId) {
	  console.log("Entering deleteContact()");
    $.ajax({
	  type: "DELETE",
      url : s_URL + "/rest.persona/" + contactId.split("_")[1],
	  contentType:"application/json; charset=utf-8",
      dataType:"json",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function() {
		  alert("Contacto eliminado");
        console.log("Entering deleteContact.success()");
        console.log("Exiting deleteContact.success()");
      } 
    });
    console.log("Exiting deleteContact()");
    getContactList();
  }
  
  function postContact() {
	  console.log("Entering postContact()");
	  var p = prompt("ingresar nombre:");
	  var p_json;
	  if(p != null) {
		  p_json = formToJSON(null, p);
	  }
    $.ajax({
	  type: "POST",
      url : s_URL + "/rest.persona/",
	  contentType:"application/json; charset=utf-8",
	  data: p_json,
      dataType:"json",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function() {
		  alert("Nuevo contacto agregado");
        console.log("Entering postContact.success()");
		getContactList();
        
        console.log("Exiting postContact.success()");
      } 
    });
    console.log("Exiting postContact()");
  }
  
  // Helper function to serialize all the form fields into a JSON string 
  function formToJSON(id, name) {
	  return JSON.stringify({
		 "id" : id,
		 "nombre" : name
	  });
  }