console.log("Seja bem vindo(a) ao meu primeiro programa com Javascript");

const nome = "Thayane";
console.log("Meu nome é: " + nome);

const idade = 19;
console.log("Minha idade atual é: " + idade + " anos");

const idadeProxAno = idade + 1;
console.log("E no próximo ano eu terei: " + idadeProxAno + " anos");

const numTeste = "2";
console.log("Meu número favorito é:", 3+parseInt(numTeste));

const apelido = "Thay";
console.log(`E gosto de ser chamada de: ${apelido}`);

const listaDeTarefas = new Array(
	`Formação Iniciante`,
	`Formação FrontEnd`,
	`Formação Angular`,
	`Formação Node.JS`,
	`Formação Spring Framework`,
	`Formação Java e Orientação a Objetos`);
listaDeTarefas.push(`Formação Expert em Orientação a Objetos`);
console.log("As minhas tarefas iniciais são fazer os cursos de: " ,listaDeTarefas);

const jaCompletei = 1; //O para Não e 1 para Sim
if(jaCompletei == 1)
	listaDeTarefas.splice(0,1);

console.log("E falto fazer os cursos de: ", listaDeTarefas);
console.log("Sendo que no momento estou fazendo os cursos de: ", listaDeTarefas[0]);

