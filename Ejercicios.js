// Ejercicio 1
for(i=1; i<=4; i ++){
    console.log(i)
}
// Ejercicio 2

for(i = 2; i < 6; i +=2){
    console.log('Numero ${i}')
}
// Ejercicio 3
for(i=0; i <= 5; ++i){
    let x = i**2;
    console.log('${x}')
}
//Ejercicio 4
for (let i = 8; i >= 2; i--) {
    let x = (i ** 2) / 2;
    console.log(`${x}`);
}
// EJercicio 5    
for(let i = 1; i <= 12;){   
    console.log(g);
    g *= 2;
}
//Ejercicio 6

let valor = true;

do {
    console.log('Menu:');
    console.log('1. Consultar');
    console.log('2. Actualizar');
    console.log('3. Salir');

    let opcion = Number(prompt('Ingrese la opción:'));

    valor = opcion === 3 ? false : true;
} while (valor);

//EJercicio 7
let check = false;
let saldoCuenta = 30000;

do {
    console.log('Bienvenido, seleccione:');
    console.log('1. Consultar saldo');
    console.log('2. Retirar');
    console.log('3. Salir');

    let opcion = Number(prompt('Ingrese la opción:'));

    switch (opcion) {
        case 1:
            console.log(`Su saldo es: $${saldoCuenta}`);
            break;
        case 2:
            let retiro = Number(prompt('Ingrese el valor a retirar:'));
            if (retiro <= saldoCuenta) {
                saldoCuenta -= retiro;
                console.log(`Su saldo es: $${saldoCuenta}`);
            } else {
                console.log('Saldo insuficiente');
            }
            break;
        case 3:
            check = true;
            break;
        default:
            console.log('Opción no válida');
    }
} while (check != true);