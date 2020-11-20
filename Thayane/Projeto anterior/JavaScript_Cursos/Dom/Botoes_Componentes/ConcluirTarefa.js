const BotaoConcluido = () => {
    const botaoConcluido = document.createElement('button');

    botaoConcluido.classList.add('check-botao');
    botaoConcluido.innerText = 'Concluido';
    botaoConcluido.addEventListener('click', concluirTarefa);
    return botaoConcluido;
}

const concluirTarefa = (evento) => {
    const botaoConcluido = evento.target;

    const tarefaCompleta = botaoConcluido.parentElement;

    tarefaCompleta.classList.toggle('feita');
}

export default BotaoConcluido;