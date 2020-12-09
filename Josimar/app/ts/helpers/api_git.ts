//import moment from 'moment';

let nameUser:string = "josimarsts";

fetch(`https://api.github.com/users/${nameUser}`)
.then(profile => profile.json())
.then(data => {

    $('#avatar_url').append(`<img class="w-100 photo rounded-circle" src="${data.avatar_url}" />`); //carrega a foto do perfil github
    $('#nome').html(`${"<h2>"}${data.name}${"</h2>"}`); //carrega o nome no perfil github
    $('#bio').html(`${"<p>"}${data.bio}${"</p>"}`); //carrega a bio do perfil github

}).catch(error => console.error(error));

fetch(`https://api.github.com/users/${nameUser}/events`)
.then(evento => evento.json())
.then(ev => {

    ev.forEach(function(e:any){ 

        let url_github: string = `https://github.com/`;                         
        let link_commit: string = `${url_github}${e.repo.name}/commit/${e.payload.head}`;// link_commit concatena o link do github para o commit + o numero do commit 
        let link_repo: string = `${url_github}${e.repo.name}`;// link_repo concatena o link do github para o repositório  
        
        //let created: any = moment(e.created_at).locale('pt-br').calendar(); // created recebe a data da criação do evento
        
        let div: Element = document.createElement('div');     
        
        //testar existência de organização e criar campo
        let org: string;

        if(!e.org){
            org = ``;
        }else{

            let link_org = `${url_github}${e.org.login}`;// link_repo concatena o link do github para o repositório   
        
            org = `<span class="col-sm-12 col-md-4">Org:
                    <a href="${link_org}">
                    <img alt="${e.org.login}" width="32" height="32" src="${e.org.avatar_url}" class="icon-org"/> ${e.org.login}
                    </a>
                </span>`;

        }

        div.innerHTML = `
            <div class="list-group-item list-group-item-action flex-column align-items-start justify-content-between">
            <div class="d-flex w-100 text-justify">
                <p class="row w-75 text-left">                      
                ${org}   
                <span class="col-sm-12 col-md-4">Tipo: <a href="${link_commit}">${e.type}</a> </span>
                <span class="col-sm-12 col-md-4">Repositório: <a href="${link_repo}">${e.repo.name}</a> </span>
                </p>
                <small class="w-25 text-muted text-right ml-3 border-left">${"Moment"}</small>
            </div>
            </div>
        `;

        $("#list-atividades").append(div); 
        
    });

}).catch(error => console.error(error));
