import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Curso } from './curso/curso';
import { NotFound } from './core/not-found/not-found';
import { DetalleCurso } from './curso/detalle-curso/detalle-curso';

// ¡IMPORTA TUS DATOS DE CURSOS AQUÍ!
// Asegúrate de que la ruta a tu archivo 'curso.data.ts' sea correcta.
import { cursos } from './curso/curso.data/curso.data'; 

export const routes: Routes = [
    {
        path: '', 
        component: Inicio
    },
    {
        path: 'inicio', 
        component: Inicio
    },
    {
        path: 'cursos', 
        component: Curso
    },
    {  
        path: 'detalleCurso/:id', 
        component: DetalleCurso,
        // Configuración para el prerrenderizado con parámetros
        data: {
            prerender: true // Esto activa el prerrenderizado para esta ruta
        }
    },
    {
        path: '**', 
        component: NotFound
    }
];