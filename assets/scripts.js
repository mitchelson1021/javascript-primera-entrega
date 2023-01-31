alert("ingresa tu Fecha de Nacimiento");
const dia = parseInt(prompt("ingresa tu día de Nacimiento"))
const mes = (prompt("ingresa tu mes de Nacimiento: enero, febrero, marzo...diciembre"))


function zodiaco () {
        //Aries
    if (dia >= 21 && dia <= 31 &&  mes == "marzo") {
        console.log("Tu sigo Zodiacal es Aries");
    } else if ( dia >= 1 && dia <= 19 &&  mes == "abril" ) {
        console.log("Tu sigo Zodiacal es Aries");
        //Taurus
    } else if ( dia >= 20 && dia <= 30 &&  mes == "abril" ) {
        console.log("Tu sigo Zodiacal es Taurus");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "mayo" ) {
    console.log("Tu sigo Zodiacal es Taurus");
        //Gémini
    } else if ( dia >= 21 && dia <= 31 &&  mes == "mayo" ) {
    console.log("Tu sigo Zodiacal es Gémini");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "junio" ) {
    console.log("Tu sigo Zodiacal es Gémini");
        //Cancer
    } else if ( dia >= 21 && dia <= 30 &&  mes == "junio" ) {
    console.log("Tu sigo Zodiacal es Cáncer");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "julio" ) {
    console.log("Tu sigo Zodiacal es Cáncer");
    //Leo
    } else if ( dia >= 21 && dia <= 31 &&  mes == "julio" ) {
    console.log("Tu sigo Zodiacal es Leo");
    } else if ( dia >= 1 && dia <= 22 &&  mes == "agosto" ) {
    console.log("Tu sigo Zodiacal es Leo");
    //Virgo
    } else if ( dia >= 23 && dia <= 31 &&  mes == "agosto" ) {
    console.log("Tu sigo Zodiacal es Virgo");
    } else if ( dia >= 1 && dia <= 23 &&  mes == "septiembre" ) {
    console.log("Tu sigo Zodiacal es Virgo");
    //Libra
    } else if ( dia >= 24 && dia <= 30 &&  mes == "septiembre" ) {
    console.log("Tu sigo Zodiacal es Libra");
    } else if ( dia >= 1 && dia <= 23 &&  mes == "octubre" ) {
    console.log("Tu sigo Zodiacal es Libra");
    //Escorpio
    } else if ( dia >= 24 && dia <= 31 &&  mes == "octubre" ) {
    console.log("Tu sigo Zodiacal es Escorpio");
    } else if ( dia >= 1 && dia <= 22 &&  mes == "noviembre" ) {
    console.log("Tu sigo Zodiacal es Escorpio");
    //Sagitarius
    } else if ( dia >= 23 && dia <= 30 &&  mes == "novienbre" ) {
    console.log("Tu sigo Zodiacal es Sagitarius");
    } else if ( dia >= 1 && dia <= 22 &&  mes == "diciembre" ) {
    console.log("Tu sigo Zodiacal es Sagitarius");
    //Capricornus
    } else if ( dia >= 23 && dia <= 31 &&  mes == "diciembre" ) {
    console.log("Tu sigo Zodiacal es Capricornus");
    } else if ( dia >= 1 && dia <= 22 &&  mes == "enero" ) {
    console.log("Tu sigo Zodiacal es Capricornus");
    //Aquarius
    } else if ( dia >= 23 && dia <= 31 &&  mes == "enero" ) {
    console.log("Tu sigo Zodiacal es Aquarius");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "febrero" ) {
    console.log("Tu sigo Zodiacal es Acuarius");
    //Piscis
    } else if ( dia >= 21 && dia <= 29 &&  mes == "febrero" ) {
    console.log("Tu sigo Zodiacal es Piscis");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "marzo" ) {
    console.log("Tu sigo Zodiacal es Piscis");
    } 
    else {
        console.log("Revisa los parámetros ingresados, hubo un error")
    }
}
zodiaco()
