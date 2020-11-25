//node /c/Users/thaya/Desktop/BlueWolf/Cursos/HTML_e_CSS/02/people/Thayane/JavaScript_Cursos/POO_01/IniciandoPOOemJS.js
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);
conta1.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
conta1.tranferir(valor, conta2);

console.log(conta1);
