// 1. Algoritmo que realice la suma entre dos numeros dados por el usuario
function suma(){
    // Pedimos los numero al usuario
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    console.log(`La suma es ${numero1 + numero2}`);
    alert(`La suma es ${numero1 + numero2}`);
}

// 2. Algoritmo que determina la suma, resta, multiplicacion y division de dos numeros datos por el usuario
function operacionMatematica(){
    // Se piden los valores al usurio
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));

    // Hacemos las respectivas operaciones
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    // Se muestran los resultados por pantalla
    console.log(`La suma es = ${suma}, la resta es = ${resta}, la multiplicacion es = ${multiplicacion}, la division es = ${division}`);
    alert(`La suma es = ${suma}, la resta es = ${resta}, la multiplicacion es = ${multiplicacion}, la division es = ${division}`);
}

// 3. Algoritmo que calcula el cuadrado de un numero dado por el usuario
function cuadrado() {
    let numero = prompt("Ingrese un número para calcular su cuadrado:");

    // Validación para asegurarse de que el usuario ingrese un número válido
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return; // Sale de la función si el valor ingresado no es un número
    }

    numero = parseFloat(numero); // Convierte el valor a número

    // Verificación para no permitir números negativos
    if (numero < 0) {
        alert("El número no puede ser negativo para calcular su cuadrado.");
        return; // Sale de la función si el número es negativo
    }

    let resultado = Math.pow(numero, 2); // Calcula el cuadrado del número

    // Muestra el resultado al usuario de una manera amigable
    alert(`El cuadrado de ${numero} es: ${resultado}`);
}


// 4. Algoritmo que determine el area de un triagunlo a partir de la base y la altura ingresada por el usuario
function areaTriangulo() {
    // Solicitar base y altura
    let base = prompt("Ingrese la base del triángulo:");

    // Validación para asegurarse de que la base sea un número válido
    if (isNaN(base) || base <= 0) {
        alert("Por favor, ingrese un valor numérico positivo para la base.");
        return; // Sale de la función si la base no es válida
    }

    base = parseFloat(base); // Convierte el valor a número

    let altura = prompt("Ingrese la altura del triángulo:");

    // Validación para asegurarse de que la altura sea un número válido
    if (isNaN(altura) || altura <= 0) {
        alert("Por favor, ingrese un valor numérico positivo para la altura.");
        return; // Sale de la función si la altura no es válida
    }

    altura = parseFloat(altura); // Convierte el valor a número

    // Calcular el área del triángulo
    let area = (base * altura) / 2;

    // Mostrar el resultado de forma clara y amigable
    alert(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);
}


// 5. Algoritmo que determine la conversion en kilometros, pulgadas y metros de un valor dado en centuimetros por el usuario

function convertirCentimetros() {
    // Solicitar al usuario el valor en centímetros
    let centimetros = prompt("Ingrese el valor en centímetros para convertirlo a kilómetros, metros y pulgadas:");

    // Validación para asegurarse de que el valor ingresado sea un número válido y positivo
    if (isNaN(centimetros) || centimetros <= 0) {
        alert("Por favor, ingrese un número válido y positivo en centímetros.");
        return; // Sale de la función si el valor no es válido
    }

    centimetros = parseFloat(centimetros); // Convertir el valor ingresado a un número

    // Realizar las conversiones
    let kilometros = centimetros / 100000; // 1 kilómetro = 100,000 centímetros
    let metros = centimetros / 100; // 1 metro = 100 centímetros
    let pulgadas = centimetros / 2.54; // 1 pulgada = 2.54 centímetros

    // Mostrar los resultados de forma clara y amigable
    alert(`${centimetros} centímetros equivalen a:\n` +
          `${kilometros} kilómetros\n` +
          `${metros} metros\n` +
          `${pulgadas} pulgadas`);
}


// 6. Algoritmo que determine el numero mayor entre dos numeros dados por el usuario
function numeroMayor() {
    // Solicitar el primer número al usuario
    let num1 = prompt("Ingrese el primer número:");

    // Validación para asegurarse de que el primer valor ingresado sea un número válido
    if (isNaN(num1)) {
        alert("Por favor, ingrese un valor numérico válido para el primer número.");
        return; // Sale de la función si el valor no es un número
    }

    num1 = parseFloat(num1); // Convertir el valor a número

    // Solicitar el segundo número al usuario
    let num2 = prompt("Ingrese el segundo número:");

    // Validación para asegurarse de que el segundo valor ingresado sea un número válido
    if (isNaN(num2)) {
        alert("Por favor, ingrese un valor numérico válido para el segundo número.");
        return; // Sale de la función si el valor no es un número
    }

    num2 = parseFloat(num2); // Convertir el valor a número

    // Comparar los dos números y determinar el mayor
    let mayor = (num1 > num2) ? num1 : (num1 < num2) ? num2 : "Ambos números son iguales";

    // Mostrar el resultado al usuario de manera amigable
    if (mayor === "Ambos números son iguales") {
        alert(`Ambos números son iguales: ${num1}`);
    } else {
        alert(`El número mayor es: ${mayor}`);
    }
}


// 7. Algoritmo que determina el numero mayor entre 3 numeros ingresados por el usuario

function NumMenorTres() {
    // Solicitar números al usuario y validarlos
    let numero1 = parseFloat(prompt('Ingrese el primer número:'));
    let numero2 = parseFloat(prompt('Ingrese el segundo número:'));
    let numero3 = parseFloat(prompt('Ingrese el tercer número:'));

    // Validación de si los valores ingresados son números
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return; // Sale de la función si no se ingresan números válidos
    }

    // Encontrar el número menor usando Math.min() para simplificar la comparación
    let menor = Math.min(numero1, numero2, numero3);

    // Mostrar el resultado en la consola y en una alerta
    alert(`El número menor es: ${menor}`);
    console.log(`El número menor es: ${menor}`);
}


// 8. Algoritmo que solicite al estudiante su nombre, la materia y 8 calificaciones de la misma, las calificaciones tienen un valor entre 1 y 10. Con la informacion proporcionada por el usuario y determinar si este aprovo la materia o no, teniendo en cuenta que se aprueba con 6.2
function aprovarNotas() {
    const numeroNotas = 8; // Número de notas que se deben ingresar
    
    // Solicitar el nombre y la materia del usuario
    let nombre = prompt('Ingrese su nombre:');
    let materia = prompt('Ingrese el nombre de la materia:');
    
    // Inicializar el acumulador del promedio
    let sumaNotas = 0;

    // Solicitar las notas e ir sumándolas
    for (let i = 0; i < numeroNotas; i++) {
        let nota;
        
        // Validar que la nota esté en un rango adecuado
        do {
            nota = parseFloat(prompt(`Ingrese la nota ${i + 1} (0-10):`));
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("Por favor ingrese una nota válida entre 0 y 10.");
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);

        sumaNotas += nota; // Acumulamos la nota
    }

    // Calcular el promedio
    let promedio = sumaNotas / numeroNotas;

    // Determinar si aprobó o no
    let mensaje = `${nombre}, tu promedio fue de ${promedio.toFixed(2)}. `; // Redondear el promedio a 2 decimales
    if (promedio < 6.2) {
        mensaje += `No aprobaste la materia ${materia}.`;
    } else {
        mensaje += `¡Felicidades! Aprobaste la materia ${materia}.`;
    }

    // Mostrar el resultado con un mensaje claro
    alert(mensaje);
}


// 9. Algoritmo que determina si un numero ingresado por un usuario es par o impar
function parImpar(){
    // Le pedimos el numero al usuario
    let numero = parseInt(prompt('Ingresa un número para saber si es par o impar:'));

    // Se hace la verificacion y se imprime el mensaje correspondiente
    if (numero % 2 != 0){
        alert('El numero es impar.');
    }
    else{
        alert('El numero es par');
    }
}

// 10. Algoritmo para un individuo que desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numeros de años teniendo encuenta que pagan un interes mensual del 0,7%

function calcularInversion(){
    // Se le piden los datos al usuario
    let capitalInicial = parseFloat(prompt('Ingresa el capital que quieres invertir: $'));
    let anos = parseInt(prompt('Ingrese la cantidad de años que quiere invertir el capital: '));

    // Se calcula la cantidad de meses que va a estar invertido el dinero
    let meses = anos * 12;

    let interes = capitalInicial * 0.7;
    console.log(interes);
    // Se calcula el beneficio y el capital final
    let beneficio = interes * meses;
    let capitalFinal = capitalInicial + beneficio

    alert(`El capital final despues de ${anos} años de inversion(${meses} meses), es de \$${capitalFinal}. Por ende el beneficio es de \$${beneficio}`);
}

// 11. Algorimo que muestre los numero intermedios entre el rango de 2 numeros dados por el usuario

function rangoNumero() {
    let numero1 = parseInt(prompt('Ingrese el primer número: '));
    let numero2 = parseInt(prompt('Ingrese el segundo número: '));

    // Verifica que el segundo número sea mayor que el primero
    if (numero2 <= numero1) {
        alert('El segundo número debe ser mayor que el primero.');
        return;
    }

    let numeros = "";

    // Empieza el bucle desde el primer número + 1 hasta el segundo número - 1
    for (let numero = numero1 + 1; numero < numero2; numero++) {
        numeros += `${numero}, `;
    }

    // Si la cadena no está vacía, eliminamos la última coma y espacio
    if (numeros.length > 0) {
        numeros = numeros.slice(0, -2); // Eliminar la última coma y espacio
    }

    // Muestra la alerta con los números intermedios
    alert(`Los números intermedios son: ${numeros}`);
}

//12. Algoritmo para calcular el factorial de un número

function calcularFactorial() {
    // Pedimos el número al usuario
    let numero = parseInt(prompt('Ingresa un número para calcular su factorial:'));

    // Verificamos que el número sea positivo
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingresa un número entero no negativo.");
        return; // Si no es válido, salimos de la función
    }

    // Inicializamos el resultado en 1
    let factorial = 1;

    // Calculamos el factorial mediante un ciclo
    for (let i = 1; i <= numero; i++) {
        factorial *= i; // Multiplicamos por cada número desde 1 hasta el número ingresado
    }

    // Mostramos el resultado
    alert(`El factorial de ${numero} es: ${factorial}`);
}

//13. Algoritmo que determina si un número es primo

function esPrimo() {
    // Pedimos el número al usuario
    let numero = parseInt(prompt('Ingresa un número para saber si es primo:'));

    // Verificamos que el número sea mayor que 1
    if (isNaN(numero) || numero <= 1) {
        alert("Por favor, ingresa un número mayor que 1.");
        return; // Si no es válido, salimos de la función
    }

    // Verificamos si el número es primo
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false; // Si es divisible por cualquier número diferente de 1 y él mismo, no es primo
            break;
        }
    }

    // Mostramos el resultado
    if (esPrimo) {
        alert(`El número ${numero} es primo.`);
    } else {
        alert(`El número ${numero} no es primo.`);
    }
}

