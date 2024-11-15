/**/
/* footer */

fetch('footer.html') 
.then(response => response.text()) 
.then(data => { 
    document.getElementById('footer-placeholder').innerHTML = data; 
});

/* footer medico*/

fetch('footer-medico.html') 
.then(response => response.text()) 
.then(data => { 
    document.getElementById('footer-medico').innerHTML = data; 
});



const element = document.getElementById("btnSubmit");
element.addEventListener("click", validarForm);

function validarForm(){
  event.preventDefault();
  
  var $maillog = document.getElementsByName('mail-log')[0].value;
  var $passlog = document.getElementsByName('pass-log')[0].value;
  
    if($maillog == 'mailejemplo@gmail.com' && $passlog == 'passejemplo'){
        window.location.href="home.html";}
        else {
            alert('Error en los datos de logeo');
        }
  
}


/* Pop up boton cancelar */
   
const abrir = document.getElementById('abrir');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

abrir.addEventListener('click', () => {
  modal_container.classList.add('show');
  alert('prueba');
} );

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
} );


document.querySelector('.nav-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-menu').classList.toggle('active');
});

/* Soporte e-mail*/

/* https://magicloops.dev/es */
function enviarMail(email, nombre, apellido, mensaje) {
  // Por si necesito usar letrs o simbolos raros
  const emailEncoded = encodeURIComponent(email);
  const nombreEncoded = encodeURIComponent(nombre);
  const apellidoEncoded = encodeURIComponent(apellido);
  const mensajeEncoded = encodeURIComponent(mensaje);
//Ahora necesitamos la url de la api junto a los valores codificados
//La api la cree en magicloops.dev y envia el mail a mi casilla personal.
  const url = `https://magicloops.dev/api/loop/793d0c96-2e7f-40f5-9e0d-66ebe10ad36c/run?email=${emailEncoded}&nombre=${nombreEncoded}&apellido=${apellidoEncoded}&mensaje=${mensajeEncoded}`;

  fetch(url)//Envia una peticion a la api
      .then(response => {
          if (!response.ok) {
              throw new Error('Error en la solicitud: ' + response.status);
          }
          return response.json();
      })
      .then(data => {
          console.log('Respuesta del servidor:', data); // Esperemos que sea un mensaje de ok y estatus 200 jaja
          return true;
      })
      .catch(error => {
          console.error('Hubo un error:', error);
          return 0;
      });
}
function enviarCorreo(){
  const email = document.getElementById("email").value;
  const usuario = document.getElementById("nombreUsuario").value;
  const apellido = document.getElementById("apellidoUsuario").value;
   const mensaje = document.getElementById("mensajeUsuario").value;
  console.log(email,usuario,apellido,mensaje);
  enviarMail(email,usuario,apellido,mensaje);
  return false;
}
/* enviarMail('prueba@pruebafacu.com', 'Facu', 'Romero', 'Hola curso, es una prueba'); */
