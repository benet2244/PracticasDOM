let actividades = [];

document.addEventListener("DOMContentLoaded", () => {
    const btnAgregar = document.querySelector("button");
    btnAgregar.addEventListener("click", agregarActividad);
});

function agregarActividad(){
    const inputNuevaActividad = document.getElementById("nuevaActividad");
    const nuevaActividad = inputNuevaActividad.value;

    if(nuevaActividad){
        actividades.push(nuevaActividad);
        inputNuevaActividad.value = "";
        mostrarActividades();
    }
}

function mostrarActividades(){
    const listaActividades = document.getElementById("listaActividades");
    listaActividades.innerHTML = "";

    actividades.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${tarea}`;

        const btnEliminar = document.createElement("button")
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => eliminarActividad(index));

        li.appendChild(btnEliminar);
        listaActividades.appendChild(li);
    });
}

function eliminarActividad(index){
    if (index >= 0 && index < actividades.length){
        actividades.splice (index, 1);
        mostrarActividades();
    }
}