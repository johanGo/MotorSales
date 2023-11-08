//---------------------------------------------------
//------Ejercicios taller creación de algoritmos-----
//---------------------------------------------------

// // Primer ejercicio
// let nombre= prompt('digite su nombre');
// alert('hola ' + nombre);


// // Segundo ejercicio
// let altura = Number(prompt('digite la altura'));
// let base = Number(prompt('digite la base'));
// let perimetro = (altura+base)*2;
// let resultadoArea = base*altura;
// alert(`El perimetro es: ${perimetro} \nEl area es: ${resultadoArea}`);


// // Tercero ejercicio
// let catetoA = Number(prompt('digite altura'));
// let catetoO = Number(prompt('digite la base'));
// let hipotenusa = (Math.pow(catetoA,2) + Math.pow(catetoO,2));
// let resultado = Math.sqrt(hipotenusa);
// alert(`La hipotenusa es ${resultado}`);


// // Cuarto ejercicio
// let numero1= Number(prompt('digite el primer numero'));
// let numero2= Number(prompt('digite el segundo numero'));
// alert(`La suma de los numeros es: ${numero1+numero2}\nLa resta es: ${numero1-numero2}\nLa multiplicacion es: ${numero1*numero2}\nLa division es: ${numero1/numero2}\n`);


// // Quinto ejercicio
// let n = Number(prompt('Digite el numero de veces'));
// let myArray=[];
// for(let i=1; i<=n;i++){
//     let pro=Number(prompt('Digite el numero'+i));
//     myArray.push(pro); 
//     console.log(myArray)
// }
// let suma = myArray.reduce((a,b) => a+b);
// let promedio = suma/n;
// alert(`El promedio es: ${promedio}`);


// // Sexto ejercicio
// let calificacion1=Number(prompt('Digite la primera calificacion'));
// let calificacion2=Number(prompt('Digite la segunda calificacion'));
// let calificacion3=Number(prompt('Digite la tercera calificacion'));
// let suma=calificacion1+calificacion2+calificacion3;
// let promedio=suma/3;
// console.log(promedio);
// let resultadocalificacion1=(promedio*55/100);
// alert(`El resultado de la primera nota es: ${resultadocalificacion1}`);
// let calificacionExamenFinal=Number(prompt('Digite calificacion del examen final'));
// let resultadoExamenFinal=calificacionExamenFinal*30/100;
// alert(`El resultado de la segunda nota es: ${resultadoExamenFinal}`);
// let trabajoFinal=Number(prompt('Digite la calificacion del trabajo final'));
// let resultadoTrabajoFinal=trabajoFinal*15/100;
// alert(`El resultado de la tercera nota es: ${resultadoTrabajoFinal}`);


// // Septimo ejercicio
// let velocidad1=Number(prompt('Digite la velocidad del vehiculo que va adelante en km/h'))
// let velocidad2=Number(prompt('Digite la velocidad del vehiculo que va atras km/h'))
// if(velocidad1<velocidad2){
//     let distancia=Number(prompt('Digite la distancia entre los dos vehiculos en km'))
// let velocidadFinal=velocidad2-velocidad1
// let tiempo=distancia/velocidadFinal
// let tiempoFinal=tiempo*60
// alert(`El tiempo en el que el vehiculo mas rapido alcanzo al otro: ${tiempoFinal} Minutos`)
// }else{
//     alert('El primer valor tiene que ser menor al segundo valor')
// }



//---------------------------------------------------
//------Ejercicios taller estructuras de control-----
//---------------------------------------------------


// // Primer ejercicio
// for(let i=0; i<10;i++){
//     let numero=Number(prompt('Digite un numero'))
//     if(numero%2 == 0){
//         alert(`El numero digitado es par`)
//     }else
//     alert(`El numero digitado es impar`)
// }
// // if ternario para el anterior ejercicio
// let numero=Number(prompt('Digite un numero'));
// let result= (numero%2 == 0) ?'El numero digitado es par':'El numero digitado es impar';
// alert(result);


// // Segundo ejercicio
// let edad = Number(prompt('Escriba la edad'));
// let resultado= (edad >= 18) ? 'La persona es mayor de edad' : 'La persona no es mayor de edad';
// alert(resultado);


// // Tercero ejercicio
// let numero1= Number(prompt('Escriba el primer numero'));
// let numero2= Number(prompt('Escriba el segundo numero'));
// if(numero1>numero2){
//     alert(`El numero ${numero1} es mayor que ${numero2}`)
// }else if(numero1==numero2){
//     alert(`El numero ${numero1} es igual que ${numero2}`)
// }else{
//     alert(`El numero ${numero2} es mayor que ${numero1}`)
// };


// // Cuarto ejercicio
// let numero=Number(prompt('Inserte un numero'));
// switch (Math.sign(numero)) {
//     case -1:
//         alert('El numero es negativo');
//         break;
//     case 0:
//         alert('El numero es 0');
//         break;
//     case 1:
//         alert('El numero es positivo');
//         break;
//     default:
//         alert('Inserte un numero')
//         break;
// }


// // Quinto ejercicio
// let numero1 = Number(prompt('Ingrese un numero para dividir'));
// let numero2 = Number(prompt('Ingrese otro numero para dividir'));
// let result = (numero2==0) ? 'No se puede dividi entre cero' : `El resultado de la división es ${numero1/numero2}`
// alert(result);


// // Sexto ejercicio
// let numeroDia = Number(prompt('Escriba el numero del dia de la semana de 1 a 7'));
// switch(numeroDia){
//     case 1:
//         alert('El dia es Lunes')
//         break;
//     case 2:
//         alert('El dia es Martes')
//         break;
//     case 3:
//         alert('El dia es Miercoles')
//         break;
//     case 4:
//         alert('El dia es Jueves')
//         break;
//     case 5:
//         alert('El dia es Viernes')
//         break;
//     case 6:
//         alert('El dia es Sabado')
//         break;
//     case 7:
//         alert('El dia es Domingo')
//         break;
//     default:
//         alert('Escriba un numero entre 1 y 7')
// }


// // Septimo ejercicio
// let mes = Number(prompt('Escriba el numero del mes de 1 a 12'));
// switch(mes){
//     case 1:
//         alert('El mes de Enero tiene 31 dias')
//         break;
//     case 2:
//         alert('El mes de Febrero tiene 28 dias')
//         break;
//     case 3:
//         alert('El mes de Marzo tiene 31 dias')
//         break;
//     case 4:
//         alert('El mes de Abril tiene 30 dias')
//         break;
//     case 5:
//         alert('El mes de Mayo tiene 31 dias')
//         break;
//     case 6:
//         alert('El mes de Junio tiene 30 dias')
//         break;
//     case 7:
//         alert('El mes de Julio tiene 31 dias')
//         break;
//     case 8:
//         alert('El mes de Agosto tiene 31 dias')
//         break;
//     case 9:
//         alert('El mes de Septiembre tiene 30 dias')
//         break;
//     case 10:
//         alert('El mes de Octubre tiene 31 dias')
//         break;
//     case 11:
//         alert('El mes de Noviembre tiene 30 dias')
//         break;
//     case 12:
//         alert('El mes de Diciembre tiene 31 dias')
//         break;
//     default:
//         alert('Escriba un numero entre 1 y 12')
// }


// // Octavo ejercicio
// let numAlumnos = Number(prompt('Ingrese el numero de alumnos que van a ir a la escursión'))
// if(numAlumnos>=100){
//     alert(`El alquiler del bus sale en ${numAlumnos*65} euros y cada alumno debe pagar 65 euros`)
// }else if(numAlumnos>=50){
//     alert(`El alquiler del bus sale en ${numAlumnos*70} euros y cada alumno debe pagar 70 euros`)
// }else if(numAlumnos>=30){
//     alert(`El alquiler del bus sale en ${numAlumnos*95} euros y cada alumno debe pagar 95 euros`)
// }else if(numAlumnos>=1){
//     alert(`El alquiler del bus sale en 4000 sin importar la cantidad de alumnos `)
// }else{
//     alert('Escriba un numero mayor a cero')
// }


//---------------------------------------------------
//----------------Ejercicios de Ciclos---------------
//---------------------------------------------------

// // Primer ejercicio
// let numFactorial = Number(prompt('Ingrese el numero para calcular el factorial'));
// let val = numFactorial;
// for(let i=val; i>1; i--){
//     val = val * (i-1);
// }
// alert(`El numero factorial de ${numFactorial} es ${val}`);


// // Segundo ejercicio
// let myArray = [];
// while (true) {
//     let numeros = Number(prompt('inserte numero'));
//     myArray.push(numeros)
//     if(numeros==0){
//         break;
//     }
// }
// myArray.pop();
// let suma = myArray.reduce((a,b)=>a+b)
// let longitud = myArray.length;
// let promedio = suma/longitud;
// alert(`El promedo es ${promedio}`)


// // Tercer ejercicio
// let numero1 = Number(prompt('ingrese un numero'));
// let numero2 = Number(prompt('ingrese otro numero'));
// let myArray = [numero1, numero2];
// for(let i=0; i<myArray.length; i++){
//     if(myArray[i] % 2 == 0){
//         console.log(`El numero ${myArray[i]} es par`)
//     }else{
//         console.log(`El numero ${myArray[i]} no es par`)
//     }
// }


// // Cuarto ejercicio
// let numMult = Number(prompt('Ingrese un numero para mostrar la multiplicaion'));
// for(let i=0; i<=10; i++){
//     console.log(`${i}x${numMult}=${i*numMult}`)
// };


// // Quinto ejercicio



// // Sexto ejercicio
// for(let h = 23; h >= 0; h--){
//     for(let m = 59; m >= 0; m--){
//         for(let s = 59; s >= 0; s--){
//             console.log(`${h}:${m}:${s}`)
//         }
//     }    
// }



//---------------------------------------------------
//--------------Ejercicios de Funciones--------------
//---------------------------------------------------

// // Primer ejercicio function EsMultiplo(numero1, numero2){
//     let division = numero1/numero2;
//     if(division == Math.floor(division)){
//         console.log(`El numero ${numero1} es multiplo del numero ${numero2}`)
//     }else{
//         console.log('Los numeros no son multiplos')
//     }
// EsMultiplo(8,2)


// // Segundo ejercicio
// function AreaYPerimetro(radio){
//     const pi= 3.14;
//     let perimetro = 2*pi*radio;
//     let area = pi*Math.pow(radio,2)
//     console.log(`El perimetro de la circunferencia es de ${perimetro}cm\ny el area es de ${area}cm^2`)
// }
// AreaYPerimetro(9)


// // Tercer ejercicio
// function MCD(numero1, numero2){
//     if(numero1>numero2){
//         console.log(`El MCD de los numeros ${numero1} y ${numero2} es ${numero1%numero2}`)
//     }else{
//         console.log(`El MCD de los numeros ${numero2} y ${numero1} es ${numero2%numero1}`)
//     }
// }
// MCD(15,20)


// // Cuarto ejercicio
// function factorial(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*factorial(n-1)
//     }
// }
// let numero = 6;
// factorial(numero)
// console.log(`El factorial del numero ${numero} es ${factorial(numero)}`)


// Quinto ejercicio

