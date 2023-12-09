// Seleção de id e class
const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('#iniciar');
const parar = document.querySelector('#parar');
const resetar = document.querySelector('#resetar');

// Function Utilizadas no código

function mostrarHora(segundos) {
    let data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'
    })
}

let segundos = 0;
let timer;

function iniciarCronometro() {
     timer = setInterval(function() {
        segundos++
        relogio.innerHTML = mostrarHora(segundos)
    }, 1000)
}

// Eventos de click

iniciar.addEventListener('click',function(e) {
    clearInterval(timer)
    iniciarCronometro()
    relogio.style.color = '#000';
})
parar.addEventListener('click',function(e) {
    clearInterval(timer)
    relogio.style.color = '#f00';
})
resetar.addEventListener('click',function(e) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.style.color = '#000';
})