/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'Fernando'
}

const pasajero2: Pasajero = {
  nombre: 'Melissa',
  hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void {

  // si no existen los hijos devueve un 0
  const cuantosHijos: number = pasajero.hijos?.length || 0;

  console.log( cuantosHijos );
}

imprimeHijos( pasajero1 );
imprimeHijos( pasajero2 );