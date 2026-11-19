const input = document.getElementById('input');
const text = document.getElementById('text')
const boton = document.getElementById('boton');
boton.addEventListener('click', () => {
    text.innerText = `${input.value}`
})

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

const textSim = document.getElementById('textSim');
const inputSim = document.getElementById('simultaneo');

inputSim.addEventListener('input', (e) => {
    textSim.innerHTML = inputSim.value;
})

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

const form = document.getElementById('form')
const imc = document.getElementById('imc')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');

    let calcIMC = peso.value / (altura.value * altura.value);

    imc.innerText = `${calcIMC}`


})

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

const itemInput = document.getElementById('item');
const agregarBtn = document.getElementById('agregar');
const lista = document.getElementById('lista');

agregarBtn.addEventListener('click', () => {
    lista.innerHTML += `<li>${itemInput.value}</li>`
})



