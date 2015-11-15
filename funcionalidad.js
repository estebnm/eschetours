function viaje(primerLugar,segundoLugar, distancia,tiempo) {
  this.primerLugar = primerLugar;
  this.segundoLugar = segundoLugar;
  this.distancia = distancia;
  this.tiempo = tiempo;
}



//funcion que se encarga de calidad las fechas por su rango y su estructura
function Validar(){
  var fechaInicio = document.getElementById('fechaInicio');
  var fechaFinal= document.getElementById('fechaFinal');
  if (fechaInicio.value=="" || fechaFinal.value==""){
          alert("No pueden haber campos vacios en la fecha");
  }
  else if(ValidarRango(fechaInicio.value,fechaFinal.value)){
      alert("La fecha de inicio no puede ser superior a la fecha final");

  }
  else if(ValidarFecha(fechaInicio.value) && ValidarFecha(fechaFinal.value)) {
    alert("Las fechas han sido validadas");
    CrearPunto();

  }
}

//Funcion que valida la fecha inicial no sea mayor a la final
 function ValidarRango(fechaInicial,fechaFinal){
  valorInicio=fechaInicial.split("/");
  valorFinal=fechaFinal.split("/");

//se crean los objetos tipo fecha para comparar las fechas
  var fInicio=new Date(valorInicio[2],(valorInicio[1]-1),valorInicio[0]);
  var fFinal=new Date(valorFinal[2],(valorFinal[1]-1),valorFinal[0]);
  if(fInicio>fFinal){
    return true;
  }
  return false;
}

//se valida que la fecha cumpla un formato y un rango de dia, mes y año
function ValidarFecha(fecha)
{
    // Composicion de la fecha dd/mmm/aaaa
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if(fecha.value != "") {
      if(regs = fecha.match(re)) {
        // Valo del dia entre 1 y 31
        if(regs[1] < 1 || regs[1] > 31) {
          alert("Campo invalido en dia: " + regs[1]);
          return false;
        }
        // valor del mes entrw 1 y 12
        if(regs[2] < 1 || regs[2] > 12) {
          alert("Campo invalido en mes: " + regs[2]);
          return false;
        }
        // El valor debe comprender entre 1902 y 2100
        if(regs[3] < 1902 || regs[3] > 2100) {
          alert("Campo invalido en año: " + regs[3] + " - must be between 1902 and " + 2100);
          return false;
        }
      } else {
        alert("Fomato de fecha incorrecto (dd/mm/aaaa) " + fecha);
        return false;
      }
    return true;
  }
}