// - Una función sin parámetros que devuelva siempre "true"
function alwaysTrue(){
   console.log(true)
};

alwaysTrue()

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const myTimeout = setTimeout(myAsync, 5000);

function myAsync(){

    console.log("Hola soy una promesa")
}

// - Una función generadora de índices pares automáticos

function* generaIdPares(){
    let id= 0;
    while (true) {
        yield id 
        id+=2
    } 
}

const gen= generaIdPares();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)