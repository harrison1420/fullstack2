const  form = document.getElementById('saludoForm')
const mensajeDiv = document.getElementById('saludoMensaje')

form.addEventListener('submit',function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;

    const mensaje = `¡Hola , ${nombre}! ¡Bienvenido/a!`

    mensajeDiv.textContent = mensaje
});