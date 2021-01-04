import {AtividadesView, MensagemView} from '../views/index';
import {Atividade, Atividades, Badges, Progressbar, DragAndDrop} from '../models/index';
import {DB} from '../services/DB';

export class AtividadeController {
      
        private _inputId: JQuery;
        private _inputTitulo: JQuery;
        private _inputDescricao: JQuery;        
        private _inputIdCard: JQuery;
        private _atividades = new Atividades();            
        private _badge = new Badges();                        
        private _progressbar = new Progressbar();
        private _mensagemView = new MensagemView('#mensagemView');
        private _todoColumnView = new AtividadesView('[data-ToDo]');
        private _inProgressColumnView = new AtividadesView('[data-InProgress]');
        private _doneColumnView = new AtividadesView('[data-Done]');
        private _db = new DB();

        constructor(){
            
            this._inputId = <JQuery>$('#id');
            this._inputTitulo = <JQuery>$('#titulo');
            this._inputDescricao = <JQuery>$('#descricao');
            this._inputIdCard = <JQuery>$('#idCard');

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
            this._atividades.salva(atividade)
                .then(atividade => {
                   this.lista();
                })
                .then(() => {
                    this._mensagemView.update('Atividade adicionada com sucesso!', 'alert-success'); //mensagem de cadastro 
                });
        } 

        //LISTAR DADO(S)
        lista(){
            let table = 'Atividades';
            let columns = '*';
            let condition = `ORDER BY id DESC`;  

            let conn: Promise<SQLTransaction> = new Promise((resolve, reject) => {
                
                this._db.conn().transaction((tx) => { console.log(tx); resolve(tx); }, (err) => {
                    console.log(err);
                    reject('failed to get transaction');
                });
            })

            conn.then( tx => {
                return new Promise<SQLResultSet>((resolve, reject) => {
                    tx.executeSql(`SELECT ${columns} FROM ${table} ${condition}`, [], (tx, results) => {
                        //console.log(results);
                        resolve(results);
                    }, (tx, err) => {
                        console.log(err);
                        reject(err);
                        return false;
                    })
                })
            })
            .then( results => {
                let atividades: Array<Atividade> = []
                //console.log(`results.rows ${results.rows.length}`)
                for(let i = 0; i < results.rows.length; i++ ) {
                    //console.log(`i = ${i} l=${results.rows.length} ${results.rows.item(i)}`)
                    let v = results.rows.item(i);
                    //console.log(v);
                    atividades.push(new Atividade(
                        v.id, v.titulo, v.descricao, v.idCard
                    ));
                }
                return atividades;
            })
            .then( atividades => {
                console.log(atividades);
                let cardTodo = atividades.filter( a => a.idCard === 'cardToDo').reduce((a, i) => {
                    a.adiciona(i);
                    return a;
                }, new Atividades());
                let cardInProgress = atividades.filter( a => a.idCard === 'cardInProgress').reduce((a, i) => {
                    a.adiciona(i);
                    return a;
                }, new Atividades());
                let cardDone = atividades.filter( a => a.idCard === 'cardDone').reduce((a, i) => {
                    a.adiciona(i);
                    return a;
                }, new Atividades()); 
                this._todoColumnView.update(cardTodo, '');
                this._inProgressColumnView.update(cardInProgress, '');
                this._doneColumnView.update( cardDone, '');
                this._badge.badge();
                this._progressbar.progressbar();
            });
        }
        
        //DELETA ATIVIDADE
        move(id: string, idCard: string){
            setTimeout(() => {
                this._atividades.move(id, idCard);
                this.lista();
            }, 1); 
        }

        //DELETA ATIVIDADE
        deleta(id: string){
            setTimeout(() => {
                this._atividades.deleta(id);
                this.lista();
            }, 1); 
        }

        //APAGA A TABELA DE ATIVIDADES
        clear_all(event: Event): void{
            event.preventDefault();
            setTimeout(() => {                
                let table = 'Atividades';
                this._db.dropTable(table);
            }, 1); 
        }
}
