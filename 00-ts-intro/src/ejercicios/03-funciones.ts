/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b:number): number => {
  return a + b;
}

// Las funciones primero llevan los parámetros obligatorios, luego los opcionales y por último los que tengan valores por defecto
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
  return numero * base;
}

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHP: () => void;
}

// Si la función no devuelve nada el tipo sería: void
function curar( personaje: PersonajeLOR, curaX: number ): void {
  personaje.pv += curaX;

  console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Samar',
  pv: 50,
  mostrarHP() {
    console.log( 'Puntos de vida: ', this.pv );
  }
}

curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarHP();

// const resultado: number = multiplicar(10, 0, 5);

// console.log(resultado);