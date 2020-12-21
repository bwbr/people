function badge() {
    let total_toDo = ('#cardToDo div.activity').length;
    let total_inProgress = $('.in-progress .activity').length;
    let total_done = $('.done .activity').length;
    let total_activities = total_toDo + total_inProgress + total_done;
    $('.badge-to-do').text(this.limitBadge(total_toDo));
    $('.badge-in-progress').text(this.limitBadge(total_inProgress));
    $('.badge-done').text(`${this.limitBadge(total_done)} / ${total_activities}`);
}
function limitBadge(qtd) {
    let limitQtd = "99+";
    if (qtd > 99) {
        return limitQtd;
    }
    else {
        return qtd;
    }
}
