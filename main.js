let consultaEntrada = prompt("Buenas! ¿Eres tutor o invitado?").toLowerCase();

if (consultaEntrada == "tutor") {
  alert("Bienvenido, tutor!");
} else if (consultaEntrada == "invitado") {
  alert("Bienvenido!");
}

while (consultaEntrada != "tutor" && consultaEntrada != "invitado") {
  alert("Por favor, especifique.");
  consultaEntrada = prompt("¿Eres tutor o invitado?").toLowerCase();
  if (consultaEntrada == "tutor") {
    alert("Bienvenido, tutor!");
  } else if (consultaEntrada == "invitado") {
    alert("Bienvenido!");
  }
}

let consultaReserva = prompt("¿Desea reservar?").toLowerCase();
if (consultaReserva == "si") {
  alert("Perfecto!");
} else if (consultaReserva == "no") {
  alert("Qué lastima!");
}

while (consultaReserva != "si" && consultaReserva != "no") {
  alert("Por favor, especifique si o no.");
  consultaReserva = prompt("¿Desea reservar?").toLowerCase();
  if (consultaReserva == "si") {
    alert("Perfecto!");
  } else if (consultaReserva == "no") {
    alert("Qué lastima!");
  }
}

while (consultaReserva == "si") {
  let cantidadFechas = parseInt(prompt("Cuántas noches necesita?"));
  alert("El total es $" + 13500 * cantidadFechas);
  break;
} 

function handleSubmit(e) {
    e.preventDefault();
    let fechaLlegada = element.getElementById("fechallegada").value
    let fechaSalida = element.getElementById("fechasalida").value
    var fechaInicio = new Date(fechaLlegada).getTime();
    var fechaFinal = new Date(fechaSalida).getTime();
    var diff = fechaFinal - fechaInicio;

    console.log(diff/(1000*60*60*24));
  }
