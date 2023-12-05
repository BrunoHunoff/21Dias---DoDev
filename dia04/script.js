let fome = prompt('Está com fome?');
let dinheiro = prompt('Tem dinheiro?');
let aberto = prompt("Restaurante está aberto?");

if (fome != 'sim' || dinheiro != 'sim'){
    console.log("Hoje a janta será em casa!");
}
else if (aberto != 'sim'){
    console.log("Peça um delivery!");
}
else {
    console.log("Hoje o jantar será no seu restaurante preferido!");
}