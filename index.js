// ==============================
// EJERCICIO 1: Saludar (click)
// ==============================

const input = document.getElementById('input');
const text = document.getElementById('text')
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    text.innerText = `${input.value}`
})


// ==============================
// EJERCICIO 2: Contador (click)
// ==============================

const cont = document.getElementById('cont')
const añadir = document.getElementById('boton-2');
const reiniciar = document.getElementById('reiniciar');

let contador = 0;

añadir.addEventListener('click', () => {
    contador++;
    cont.innerText = `Cuenta: ${contador}`;

})

reiniciar.addEventListener('click', () => {
    contador = 0;
    cont.innerText = `Cuenta: ${contador}`;

})


// ==============================
// EJERCICIO 3: Texto simultáneo (input)
// ==============================

const textSim = document.getElementById('textSim');
const inputSim = document.getElementById('simultaneo');

inputSim.addEventListener('input', (e) => {
    textSim.innerHTML = inputSim.value;
})


// ==============================
// EJERCICIO 4: Cambiar color (change)
// ==============================

const select = document.getElementById('select')
const card = document.getElementById('card')

select.addEventListener('change', () => {
    switch (select.value) {
        case "1":
            card.style.backgroundColor = "blue"
            break;

        case "2":
            card.style.backgroundColor = "green"
            break;

        case "3":
            card.style.backgroundColor = "yellow"
            break;

        case "4":
            card.style.backgroundColor = "pink"
            break;

        default:
            break;
    }
})


// ==============================
// EJERCICIO 5: Calcular IMC (submit)
// ==============================

const form = document.getElementById('form')
const imc = document.getElementById('imc')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');

    let calcIMC = peso.value / (altura.value * altura.value);

    imc.innerText = `${calcIMC}`

})


// ==============================
// EJERCICIO 7: Validar contraseña (input)
// ==============================

const contraseña = document.getElementById('contraseña');
const ctext = document.getElementById('contraseña-text');

contraseña.addEventListener('input', () => {
    if (contraseña.value.length <= 6) {
        ctext.innerText = "Contraseña muy corta"
        ctext.style.color = "red"

    } else if (contraseña.value.length > 6 && contraseña.value.length <= 9) {
        ctext.innerText = "Contraseña aceptable"
        ctext.style.color = "orange"

    } else if (contraseña.value.length > 9) {
        ctext.innerText = "Contraseña fuerte"
        ctext.style.color = "green"

    }
})


// ==============================
// EJERCICIO 8: Agregar elementos a una lista (click)
// ==============================

const itemInput = document.getElementById('item');
const agregarBtn = document.getElementById('agregar');
const lista = document.getElementById('lista');

agregarBtn.addEventListener('click', () => {
    lista.innerHTML += `<li>${itemInput.value}</li>`
})


// ==============================
// EJERCICIO 9: Tarjeta de perfil
// ==============================

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')
    const correo = document.getElementById('correo')
    const edad = document.getElementById('edad')

    document.getElementById('nombre-tarjeta').innerText = `Nombre: ${name.value}`;
    document.getElementById('correo-tarjeta').innerText = `Correo: ${correo.value}`;
    document.getElementById('edad-tarjeta').innerText = `Edad: ${edad.value}`;

})

// ==============================
// EJERCICIO 10: Semáforo interactivo
// ==============================


const rojo = document.getElementById('rojo');
const amarillo = document.getElementById('amarillo');
const verde = document.getElementById('verde');

rojo.addEventListener('click', () => {
    rojo.style.backgroundColor = "red";
    amarillo.style.backgroundColor = "gray";
    verde.style.backgroundColor = "gray";
})

amarillo.addEventListener('click', () => {
    rojo.style.backgroundColor = "gray";
    amarillo.style.backgroundColor = "yellow";
    verde.style.backgroundColor = "gray";
})

verde.addEventListener('click', () => {
    rojo.style.backgroundColor = "gray";
    amarillo.style.backgroundColor = "gray";
    verde.style.backgroundColor = "green";
})

// ==============================
// EJERCICIO 11: Formulario con validación de campos
// ==============================
const form2 = document.getElementById('form-2')
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name2');
    const email = document.getElementById('email');
    const age = document.getElementById('age');
    if (name.value.trim() == '') {
        const nameInfo = document.getElementById('name-info');
        nameInfo.innerText = 'El nombre es obligatorio';
        nameInfo.style.color = 'red';
    } else if (email.value.trim() == '' || !regex.test(email.value.trim())) {
        const emailInfo = document.getElementById('email-info');
        emailInfo.innerText = 'El correo es obligatorio o no es válido';
        emailInfo.style.color = 'red';
    } else if (age.value.trim() == '') {
        const ageInfo = document.getElementById('age-info');
        ageInfo.innerText = 'La edad es obligatoria';
        ageInfo.style.color = 'red';
    } else {
        alert('Formulario enviado correctamente');
    }
})

// ==============================
// EJERCICIO 12: Generador de tablas de multiplicar
// ==============================

const form3 = document.getElementById('form-3');
const tablaContainer = document.getElementById('contenido');
const number = document.getElementById('number').value;

form3.addEventListener('submit', (e) => {
    e.preventDefault();
    const number = document.getElementById('number').value;


    const valor = Number(number);
    tablaContainer.innerText = "Tabla de multiplicar:\n";

    for (let i = 1; i <= 10; i++) {
        tablaContainer.innerText += `\n${valor} * ${i} = ${valor * i}`;
    }
}); 