const form = document.getElementById('agregarForm');
const tareasListas = document.getElementById('tareasLista');
const eliminarCompletadas = document.getElementById('eliminarCompletadas');


form.addEventListener('submit',function(event){
    event.preventDefault();

    const nuevaTarea = document.getElementById('tarea').value;

    const nuevatareaLi = document.createElement('li')
    nuevatareaLi.innerText = nuevaTarea;

    nuevatareaLi.addEventListener('click',function(){

        nuevatareaLi.classList.toggle('completada');

    })
    
    tareasListas.appendChild(nuevatareaLi);

    document.getElementById('tarea').value = ' ';

    eliminarCompletadas.addEventListener('click', function(){
        const tareaCompletadas = document.querySelectorAll('completadas')
    
        tareaCompletadas.forEach(function(tareaCompletada){
            tareaCompletada.remove();
        });
    });


})


