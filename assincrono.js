let randomNuber = 0

/* como o setTimeout é uma função assíncrona, a execução deste
código não vai guardar os dois segundos para executar o que vem depois */

setTimeout(() => {
    randomNuber += 100
    console.log(randomNuber)
}, 2000)

/* por isso primeiro vai aparcer o valor de randomNumber como 0
e só depois de 2 segundos com os 100 acrescidos dentro do setTimeout */

console.log(randomNuber)