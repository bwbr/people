import {AtividadesView, MensagemView, View} from '../views/index';
import {Atividade, Atividades} from '../models/index';
import {DB} from '../services/DB';

export class AtividadeController {
      
        private _inputId: JQuery;
        private _inputTitulo: JQuery;
        private _inputDescricao: JQuery;        
        private _inputIdCard: JQuery;
        private _atividades = new Atividades();
        private _atividadesView = new AtividadesView('[data-toDo]');
        private _mensagemView = new MensagemView('#mensagemView');
        private _db = new DB();

        constructor(){
            
            this._inputId = <JQuery>$('#id');
            this._inputTitulo = <JQuery>$('#titulo');
            this._inputDescricao = <JQuery>$('#descricao');
            this._inputIdCard = <JQuery>$('#idCard');
            this._atividadesView.update(this._atividades, '');
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
            this._atividades.salva(atividade);
            this._atividades.adiciona(atividade);
            this._atividadesView.update(this._atividades, '');
            this._mensagemView.update('Atividade adicionada com sucesso!', 'alert-success'); //exibe mensagem ao usuário    
            this.limpa();//limpar campos formulário do cadastro Atividade
        } 

        //EDITA ATIVIDADES

        edita(event: Event): void{
            event.preventDefault();

            const atividade = new Atividade(
                this._inputId.val(),
                this._inputTitulo.val(),
                this._inputDescricao.val(),
                this._inputIdCard.val()
            );         

            //Finaliza para exibição
            this._atividades.edita(atividade);      
            this._mensagemView.update('Atividade alterada com sucesso!', 'alert-success'); //exibe mensagem ao usuário
            this.limpa();//limpar campos formulário do cadastro Atividade
        }

        //LISTAR DADO(S)
        lista(){
            let table = 'Atividades';
            let columns = '*';
            let condition = `ORDER BY id DESC`;

            this._db.conn().transaction(function (tx) {
                tx.executeSql(`SELECT ${columns} FROM ${table} ${condition}`, [], function (tx, results) {

                    var len = results.rows.length, i;
                    const _atividades = new Atividades();
                    const _atividadesViewToDo = new AtividadesView('[data-toDo]');
                    const _atividadesViewInProgress = new AtividadesView('[data-InProgress]');
                    const _atividadesViewDone = new AtividadesView('[data-Done]');

                    console.log(len);
                    for (i = 0; i < len; i++){   


                        const atividade = new Atividade(
                            results.rows.item(i).id,
                            results.rows.item(i).titulo,
                            results.rows.item(i).descricao,
                            results.rows.item(i).idCard
                        )                          
                        _atividades.adiciona(atividade);   
                        switch(atividade.idCard){
                            case 'cardToDo':
                                _atividadesViewToDo.update(_atividades, '');
                                break;
                            case 'cardInProgress':
                                _atividadesViewInProgress.update(_atividades, '');
                                break;
                            case 'cardDone':
                                _atividadesViewDone.update(_atividades, '');
                                break;
                        }
                    }
                }, null);         
            });   
        }

        atualiza(){     
            const controller = new AtividadeController();
            setTimeout(function(){ 
                controller.lista(); 
            }, 1);
        }

        clear_all(){
            let table = 'Atividades';
            this._db.dropTable(table);
        }

}
