/**/
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

/* registrarse */

 