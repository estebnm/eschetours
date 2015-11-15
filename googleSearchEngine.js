//funcion que mediante la API de Google Custom Search busca los links e imagenes de la ciudad indicada
  function googleAPI() {

  google.search.cse.element.render({gname:'gsearch', div:'links', tag:'searchresults-only', attributes:{linkTarget:''}});
  	
  var element = google.search.cse.element.getElement('gsearch');

  var sitio = document.getElementById('sitio').value;//se obtiene el valor del sitio para realizar la busqueda con el motor de google
  var ciudad = document.getElementById('txtOrigen').value;
  element.execute(sitio+'_'+ciudad);
}