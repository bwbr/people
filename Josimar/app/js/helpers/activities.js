let activity = document.querySelectorAll('.activity');
let card_body = document.querySelectorAll('.activities');
let draggedActivity = null;
badge();
for (let i = 0; i < activity.length; i++) {
    let a = activity[i];
    a.addEventListener('dragstart', function () {
        draggedActivity = this;
        this.classList.remove("show");
        this.classList.add("hide");
    });
    a.addEventListener('dragend', function () {
        draggedActivity.classList.remove("hide");
        draggedActivity.classList.add("show");
        draggedActivity = null;
    });
    for (let j = 0; j < card_body.length; j++) {
        const cb = card_body[j];
        cb.addEventListener('dragstart', function () {
        });
        cb.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        cb.addEventListener('dragenter', function (e) {
            e.preventDefault();
        });
        cb.addEventListener('drop', function (e) {
            e.preventDefault();
            this.appendChild(draggedActivity);
            badge();
        });
    }
}
function badge() {
    setTimeout(function () {
        let total_toDo = document.querySelectorAll("#cardToDo .activity").length;
        let total_inProgress = document.querySelectorAll("#cardInProgress .activity").length;
        let total_done = document.querySelectorAll("#cardDone .activity").length;
        let total_activities = total_toDo + total_inProgress + total_done;
        $('.badge-to-do').text(limitBadge(total_toDo));
        $('.badge-in-progress').text(limitBadge(total_inProgress));
        $('.badge-done').text(`${limitBadge(total_done)} / ${total_activities}`);
        let percent_toDo = percent(total_toDo, total_activities);
        let percent_inProgress = percent(total_inProgress, total_activities);
        let percent_done = percent(total_done, total_activities);
        $("#progress-to-do").css("width", `${(percent_toDo)}%`);
        $("#progress-in-progress").css("width", `${(percent_inProgress)}%`);
        $("#progress-done").css("width", `${(percent_done)}%`);
        $(".percent-to-do").text(`${(percent_toDo).toFixed()}%`);
        $(".percent-in-progress").text(`${(percent_inProgress).toFixed()}%`);
        $(".percent-done").text(`${(percent_done).toFixed()}%`);
        colorBgProgress(percent_toDo, document.querySelector("#progress-to-do"));
        colorBgProgress(percent_inProgress, document.querySelector("#progress-in-progress"));
        colorBgProgress(percent_done, document.querySelector("#progress-done"));
        console.log("Total:   ", total_activities);
        console.log("Fazer:   ", total_toDo);
        console.log("Fazendo: ", total_inProgress);
        console.log("Feito:   ", total_done);
        console.log("Fazer:   ", percent_toDo);
        console.log("Fazendo: ", percent_inProgress);
        console.log("Feito:   ", percent_done);
    }, 1);
}
function limitBadge(qtd) {
    let limitQtd;
    if (qtd > 99) {
        return limitQtd = "99+";
    }
    else {
        return qtd;
    }
}
function percent(n, total) {
    let p = (n / total) * 100;
    return p;
}
function colorBgProgress(percent_name, progress_name) {
    if (parseFloat(percent_name) == 100) {
        progress_name.classList.remove('progress-bar-blue');
        progress_name.classList.add('progress-bar-success');
    }
    else {
        progress_name.classList.remove('progress-bar-success');
        progress_name.classList.add('progress-bar-blue');
    }
}
