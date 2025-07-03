import {curso} from "../curso.model/curso.model";

export const cursos: curso[] = [
    {
        id: 1, 
        nombre: 'HTML5', 
        nivel:'Avanzado', 
        descripcion: 'Estructura de los sitios web con lenguaje de etiquetas', 
        imagen: '', 
        precio: 'Q300'
    },
    {
        id: 2, 
        nombre: 'CSS3', 
        nivel: 'Principante', 
        descripcion: 'Aplica estilos a la estructura de los sitios web', 
        imagen: '', 
        precio: 'Gratis'
    },
    {
        id: 3, 
        nombre: 'CSS3', 
        nivel: 'Intermedio', 
        descripcion: 'Aplica estilos a la estructura de los sitios web', 
        imagen: '', 
        precio: 'Q.0'
    },
    {
        id: 4, nombre: 'CSS3', nivel: 'Avanzado', descripcion: 'Aplica estilos a la estructura de los sitios web', imagen: '', precio: ''
    }
    ,
    {
        id: 5, nombre: 'JavaScript', nivel: 'Principante', descripcion: 'Domina los fundamentos de JavaScript', imagen: '', precio: ''
    },
    {
        id: 6, nombre: 'JavaScript', nivel: 'Intermedio', descripcion: 'Agrega funcionalidades dinamicas e interactivas al sitio web manipulando el DOM', imagen: '', precio: ''
    },
    {
        id: 7, nombre: 'JavaScript', nivel: 'Avanzado', descripcion: 'Programación Orientada a objetos', imagen: '', precio: ''
    }
];
