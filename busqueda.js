var key = '016310655712335035660:mbeni_8vedk'; // API KEY para poder realizar busquedas
var elemento = document.createElement('script'); // se crea un elemento y se guarda en la variable
elemento.type = 'text/javascript'; 
elemento.async = true;
elemento.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + key; //link para realizar la busqueda
var resultados = document.getElementsByTagName('script')[0]; //obtiene los resutados de la busqueda
resultados.parentNode.insertBefore(elemento, resultados); //muestra los resultados

