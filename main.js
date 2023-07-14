//Turnero para centro medico
//Matias Martinez JavaScript Preentrega N°3 Comisión 43100

/*
let nombreYApellido; 
let fechaDeNacimiento;
let DNI;
let telefono;
let obraSocial;

//Creo una funcion para solicitar los datos personales
function solicitarDatos (){
    nombreYApellido = prompt ("Ingresa tu nombre y apellido");
    fechaDeNacimiento = prompt ("Ingresa tu fecha de nacimiento (dd/mm/aa"); 
    DNI = prompt ("Ingresa tu numero de documento");
    telefono = prompt ("Ingresa tu numero de telefono");
    obraSocial = prompt ("Ingresa tu obra social");
      
    alert ("Los datos ingresados son: " + "Nombre y apellido: " + nombreYApellido + " Fecha de nacimiento " + fechaDeNacimiento + " DNI "  + DNI + " Telefono " +  telefono  + " Obra social " + obraSocial);
}

//Pedimos al usuario que cree su cuenta
alert ("Bienvenido a Creo, para empezar te pediremos que generes un usuario y contraseña");
const crearUsuario = prompt ("Crea un nombre de usuario")
const crearContrasenia = parseInt ( prompt(" Genera una contraseña de 4 dcaracteres numericos"));
alert ("Cuenta creada con exito");

//Inicio de sesion
let ingreseUsuario = prompt ("Ingresa tu usuario");
let ingreseContrasenia = parseInt ( prompt ("Ingrese su contraña numerica"));

//si usuario y contraseña son correctos inicializamos el programa
if (ingreseUsuario == crearUsuario && ingreseContrasenia == crearContrasenia) {
    alert ("Hola " + crearUsuario + ". A continuacion te pediremos que ingreses tus datos        personales");
    solicitarDatos();
}
//Si usuario y contraseña son incorrectos, le pedimos al usuario que los ingrese nuevamente 
else{
    while  ((ingreseUsuario != usuario &&  ingreseContrasenia != contrasenia)){
        alert ("Lo siento usuario o contraseña incorrectos. Intentalo de nuevo");
        ingreseUsuario = prompt ("Ingresa tu usuario");
        ingreseContrasenia = parseInt ( prompt ("Ingrese su contraña"));
        }    
}

//El usuario puede corroborar sus datos       
let validacion = prompt ("¿Los datos son correctos? s= si  n=No");

//En caso de ser incorrectos puede ingresarlos nuevamente
if (validacion != "s"){
        while  (validacion.toLowerCase != "s"){
        alert ("Ingresa tus datos nuevamente");
        solicitarDatos();
        validacion = prompt ("¿Los datos ingresados son correctos? s= Si  n= No");
        }
}
*/
const Profesionales = [{
  id: 1,
    nombre: "Guillermo Martinez",
    especialidad: "Clinica Medica",
    foto:"https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*",
    duracionConsulta: 60, //minutos
    turnos : [
         
      {
      fecha: "12/07/23",
      hora: "09",
      validacion: false},
      {
      fecha: "12/07/23",
      hora: "10",
      validacion: false},
      {
      fecha: "12/07/23",
      hora: "11",
      validacion: false},
      {
      fecha: "12/07/23",
      hora: "12",
      validacion: false},
    ]
    },
    {
    id:2,
    nombre: "Genaro Araoz Reyes",
    especialidad: "Nutricion",
    duracionConsulta: 60, //minutos
    foto: "https://we-doctor.com/wp-content/uploads/2019/07/medico-2.jpg",
    turnos : [
         
      {
      fecha: "12/07/23",
      hora: "09",
      validacion: false},
      {
      fecha: "12/07/23",
      hora: "10",
      validacion: false},
      {
      fecha: "12/07/23",
      hora: "11",
      validacion: false},
      {
      fecha: "12/07/23",
      hora: "12",
      validacion: false},
    ]
    },
    {  
        id:3,
        nombre: "Miguel Arcuri",
        especialidad: "Cirugia General",
        duracionConsulta: 60, //minutos
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9FaGdmjL-_P-UNqW2Wf7-xGMf0NeJsdatA&usqp=CAU",
        turnos : [
         
          {
          fecha: "12/07/23",
          hora: "09",
          validacion: false},
          {
          fecha: "12/07/23",
          hora: "10",
          validacion: false},
          {
          fecha: "12/07/23",
          hora: "11",
          validacion: false},
          {
          fecha: "12/07/23",
          hora: "12",
          validacion: false},
        ]
        
    },
    {
        id: 4,
        nombre: "Maria Daniela Abdala",
        foto: "https://s3.sa-east-1.amazonaws.com/doctoraliar.com/doctor/7f16c3/7f16c35381e741924bf88eafa849c35c_220_square.jpg",
        especialidad: "Psicologia",
        duracionConsulta: 60, //minutos
        turnos : [
         
          {
          fecha: "12/07/23",
          hora: "09",
          validacion: false},
          {
          fecha: "12/07/23",
          hora: "10",
          validacion: false},
          {
          fecha: "12/07/23",
          hora: "11",
          validacion: false},
          {
          fecha: "12/07/23",
          hora: "12",
          validacion: false},
        ]
    
      }
    ];

let tarjetas = document.getElementById("contenedor");
let section = document.getElementsByClassName("Profesionales");

function cargarTarjetas(Profesionales){
  tarjetas.innerHTML='';
  for(let profesional of Profesionales){
    tarjetas.innerHTML += `
      <div class="card col-sm-3 tarjeta">
        <img class="card-img-top card-img-custom" src=${profesional.foto} alt="Card image cap">
        <div class="card-body">
          <h1 class="card-title">${profesional.nombre}</h1>
          <p class="card-text"> ${profesional.especialidad}</p>
          <button class="btn btn-primary seleccionar">Seleccionar</button>
        </div>
      </div>
    `;
  }

  const botones = document.getElementsByClassName("seleccionar");
  for (const boton of botones) {
    boton.addEventListener("click", (evento) => {
      const profesionalId = evento.target.parentNode.parentNode.querySelector(".card-title").textContent;
      const profesional = Profesionales.find((profesional) => profesional.nombre === profesionalId);
      
      if (profesional) {
        const turnosContainer = document.getElementById("turnosContainer");
        turnosContainer.innerHTML = "";

        for (const turno of profesional.turnos) {
          
          turnosContainer.innerHTML += `
            <p>Fecha: ${turno.fecha} - Hora: ${turno.hora}</p> <button class="btn btn-secondary">Seleccionar Turno</button>
          `;

          console.log("turno: " +`${turno.fecha}` + `${turno.hora}` );
        }

      }
    });
  }
}

cargarTarjetas(Profesionales);
