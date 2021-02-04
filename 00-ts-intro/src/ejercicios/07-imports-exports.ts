import { Producto, calculaISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompas: Producto[] = [
  {
    desc: 'Telefono 1',
    precio: 100
  },
  {
    desc: 'Telefono 2',
    precio: 150
  }
];

const [ total, isv ] = calculaISV( carritoCompas );

console.log('Total: ', total);
console.log('ISV: ', isv);