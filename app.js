// JUEGO ADIVINA EL NUMERO SECRETO

/*
//ejer1
// para imprimir info
alert("Buenas noches como estamos");
// captura de info y almacenar en var
let  numeroUsuario = prompt("Me indicas un numero");
// tipos var: var, cost, let
// imprime
alert("el numero que guardaste es:" + numeroUsuario);
*/

/*
//ejer2
let numeroUsuario = prompt("Dame un numero");
let numeroSecreto = 6;
//imprime x consola
console.log(numeroUsuario);
// condi if si es igual 
if(numeroUsuario == numeroSecreto);{
    alert("Acertaste el numero");
}
*/

/*
//ejer3 y 4
//var
let numeroSecreto = 6;
let numeroUsuario = 8;
//contador de intentos, fuera del while
let intentos = 1; 
//bucle while: compara si es diferente o igual
// hasta que no se acierte
while(numeroUsuario != numeroSecreto){
numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor");

    console.log(numeroUsuario);

    //cond
    if(numeroUsuario == numeroSecreto){
        //si acertamos, concatenamos el valor acertado: 
        alert(`Acertaste, el numero es: ${numeroUsuario} y lo lograste en ${intentos} intentos`);
    }
    //de lo contrario
    else{
        //condiciones dentro de else.
        if(numeroUsuario > numeroSecreto)
        //ayudas
        alert('el numero secreto es menor');
        else{
            alert("el numero secreto es mayor");
        }
        //intentos +1 cuando no acierte
        intentos = intentos + 1; 
        
        //cond: intentos menor a igual a 3
        if(intentos > 3 ){
            alert("Llegaste al maximo de intentos");
            //corta el proceso al completar 3 intentos.
            break;
        }
    }
}

*/

//ejer5
//var
let numeroMaximoPosible = 10;
// elije numero ramdo utilizando Math.floor(Math.random())
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 8;
//contador de intentos, fuera del while
let intentos = 1; 

//bucle while: compara si es diferente o igual
// hasta que no se acierte
while(numeroUsuario != numeroSecreto){
    //convierte el dato capturado a un entero con ParseInt
numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor`));

    console.log(typeof(numeroUsuario));

    //cond
    if(numeroUsuario == numeroSecreto){
        //si acertamos, concatenamos el valor acertado: 
        alert(`Acertaste, el numero es: ${numeroUsuario} y lo lograste en ${intentos} intentos`);
    }
    //de lo contrario
    else{
        //condiciones dentro de else.
        if(numeroUsuario > numeroSecreto)
        //ayudas
        alert('el numero secreto es menor');
        else{
            alert("el numero secreto es mayor");
        }
        //intentos +1 cuando no acierte
        intentos = intentos + 1; 
        
        //cond: intentos menor a igual a 3
        if(intentos > 3 ){
            alert("Llegaste al maximo de intentos");
            //corta el proceso al completar 3 intentos.
            break;
        }
    }
}


