import {AtividadesView, MensagemView, View} from '../views/index';
import {Atividade, Atividades} from '../models/index';

export class AtividadeController {
      
        private _inputId: JQuery;
        private _inputTitulo: JQuery;
        private _inputDescricao: JQuery;        
        private _inputIdCard: JQuery;
        private _atividades = new Atividades();
        private _atividadesView = new AtividadesView('[data-toDo]');
        private _mensagemView = new MensagemView('#mensagemView');

        constructor(){
            
            this._inputId = <JQuery>$('#id');
            this._inputTitulo = <JQuery>$('#titulo');
            this._inputDescricao = <JQuery>$('#descricao');
            this._inputIdCard = <JQuery>$('#idCard');
            this._atividadesView.update(this._atividades);
        }

        //LIMPA FORMULÁRIO
        limpa(): void{
            this._inputId.val(''),
            this._inputTitulo.val(''),
            this._inputDescricao.val(''),
            this._inputIdCard.val('')
        }

        //ADICIONA ATIVIDADES
        adiciona(event: Event): void{
            event.preventDefault();

            const atividade = new Atividade(
                this._inputId.val(),
                this._inputTitulo.val(),
                this._inputDescricao.val(),
                this._inputIdCard.val()
            );         

            //Finaliza para exibição
            this._atividades.adiciona(atividade);
            this._atividadesView.update(this._atividades);         
            this._mensagemView.update('Atividade adicionada com sucesso!'); //exibe mensagem ao usuário
            this.limpa();//limpar campos formulário do cadastro Atividade
        } 

}
