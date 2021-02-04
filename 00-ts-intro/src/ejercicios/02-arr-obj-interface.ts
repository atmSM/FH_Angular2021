/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = [];
let arregloConVariosTipos: ( boolean | string | number )[] = [];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: 'Samar',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );