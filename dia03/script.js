let nome = prompt("Digite seu nome");
let idade = Number(prompt("Digite sua idade"));
let altura = Number(prompt("Digite sua altura"));
let peso =Number(prompt("Digite seu pedo"));

let anoNasc = 2023 - idade;

let imc = peso/(altura*altura);

console.log("Olá ", nome, ", você tem ", idade, " anos, nasceu em ", anoNasc, " , tem ", altura, "de altura, pesa ", peso, "Kg, seu imc é ", imc, "Kg/m2");