let actividades = [];

function agregaractividades(actividad){
    actividades.push(actividad);
    mostrarActividades();
}

function mostrarActividades(){
    console.log("lista de actividades:");
    actividades.forEach((nuevaActividad, index)=>{
        console.log(`${index +1} . ${nuevaActividad}`);
    });
}

function eliminarActividades(indice){
    if (indice >= 0 && indice < actividades.length){
        actividades.splice(indice, 1);
    }
    mostrarActividades();
}

agregaractividades("HTML");
agregaractividades("JS");
agregaractividades("CSS3");
agregaractividades("PHP");
agregaractividades("BOOOSTRAP");

eliminarActividades(0);