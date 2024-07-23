// setTimeout(() => {
//     alert("Olá Mundo!")
// }, 3000);

// setTimeout(() => {
//     console.log("Console Dentro do setTimeout");
// }, 4000);

// console.log("Console depois do setTimeout")

// setInterval(() => {
//     console.log("Executando a cada 2 segundos");
// }, 2000);

const idDoIntervalo = setInterval(() => {
    console.log("Executando a cada 2 segundos")
}, 2000);
console.log(idDoIntervalo)
clearInterval(idDoIntervalo)