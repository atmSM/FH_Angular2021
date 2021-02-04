/*
    ===== Código de TypeScript =====
*/

// usamos la T para especificar que se trata de un tipo Genérico
function queTipoSoy<T>( argumento: T ) {
  return argumento;
}

let soyString = queTipoSoy( 'Hola Mundo' );
let soyNumero = queTipoSoy( 100 );
let soyArray  = queTipoSoy( [1,2,3] );

let soyExplicito  = queTipoSoy<number>( 150 );