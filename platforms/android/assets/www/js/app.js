// JavaScript Document
var persona;
$(document).ready(function(){
    $("#getContactBtn").click(getContactList);
	$("#clearTableBtn").click(clearTable);
	//$("#postContactBtn").click(postContact);
	//$("#deleteContactBtn").click(deleteContact(this.id));
	//$("#updateContactBtn").click(updateContact);
  });
  function onDeviceReady() {
    console.log("Entering index.html.onDeviceReady");
    getContactList();
    console.log("Exiting index.html.onDeviceReady");
  }
  function getContactList(){
    clearTable();
    console.log("Entering getContactList()");
    $.ajax({
      url : "http://192.168.1.123:8080/WebApplication1/webresources/rest.persona/",
      dataType:"xml",
      cache: false,
      error:function (xhr, ajaxOptions, thrownError){
        debugger;
                alert(xhr.statusText);
                alert(thrownError);
            },
      success : function(xml) {
        console.log("Entering getContactList.success()");
      
        $(xml).find("persona").each(function() {
          var html = '<tr id="persona"><td>' + $(this).find("id").text() 
          + '</td><td id="name_' + $(this).find("id").text() + '">' + $(this).find("nombre").text()
		  + '</td><td><button id="updateContactBtn_' + $(this).find("id").text() + '" onclick="updateContact(this.id);">Editar</button></td>' 
		  + '<td><button id="deleteContactBtn_' + $(this).find("id").text() + '" onclick="deleteContact(this.id);">Borrar</button></td>' + '</tr>';
          $('#contactList').append(html);
        });
        console.log("Exiting getContactList.success()");
      } 
    });
    console.log("Exiting getContactList()");
  }
    
  function clearTable() {
	  $("tr[id=persona]").remove(); 
  }
  
  function getPersona() {
	  
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
			  url : "http://192.168.1.123:8080/WebApplication1/webresources/rest.persona/" + contactId.split("_")[1],
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
      url : "http://192.168.1.123:8080/WebApplication1/webresources/rest.persona/" + contactId.split("_")[1],
	  contentType:"application/xml; charset=utf-8",
      dataType:"xml",
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
      url : "http://192.168.1.123:8080/WebApplication1/webresources/rest.persona/",
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