import BotaoConcluido from "./Botoes_Componentes/ConcluirTarefa.js";
import BotaoDeletar from "./Botoes_Componentes/DeletarTarefa.js";

    const criarTarefa = (evento) => {
        evento.preventDefault();

        const lista = document.querySelector('[data-lista]');
        const entrada = document.querySelector('[data-form-entrada]');
        const valor = entrada.value;
            
        const tarefa = document.createElement('li');
        tarefa.classList.add('tarefa');
        const conteudo = `<p class = "conteudo">${valor}</p>`;
        
        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConcluido());
        tarefa.appendChild(BotaoDeletar());
        lista.appendChild(tarefa);
        entrada.value = " ";
    }
    const novaTarefa = document.querySelector('[data-form-botao]');

    novaTarefa.addEventListener('click', criarTarefa);    