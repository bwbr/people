System.register([], function (exports_1, context_1) {
    "use strict";
    var ApiGithub;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ApiGithub = class ApiGithub {
                constructor() {
                    this.user = "josimarsts";
                    this.url_user = `https://api.github.com/users/${this.user}`;
                    this.url_github = `https://github.com/`;
                    this.url_events = `https://api.github.com/users/${this.user}/events`;
                }
                github() {
                    this.github_user();
                    this.github_events();
                }
                github_user() {
                    fetch(this.url_user)
                        .then(profile => profile.json())
                        .then(data => {
                        $('#avatar_url').append(`<img class="w-100 photo rounded-circle" src="${data.avatar_url}" />`);
                        $('#nome').html(`${"<h2>"}${data.name}${"</h2>"}`);
                        $('#bio').html(`${"<p>"}${data.bio}${"</p>"}`);
                    }).catch(error => console.error(error));
                }
                github_events() {
                    fetch(this.url_events)
                        .then(evento => evento.json())
                        .then(ev => {
                        ev.forEach(function (e) {
                            let link_commit = `${this.url_github}${e.repo.name}/commit/${e.payload.head}`;
                            let link_repo = `${this.url_github}${e.repo.name}`;
                            let div = document.createElement('div');
                            let org;
                            if (!e.org) {
                                org = ``;
                            }
                            else {
                                let link_org = `${this.url_github}${e.org.login}`;
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
                }
            };
            exports_1("ApiGithub", ApiGithub);
        }
    };
});
