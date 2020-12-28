function layout() {
    setTimeout(function () {
        let docWidth = document.body.clientWidth;
        if (docWidth <= 760) {
            if (document.querySelector("#nav-tabContent").classList.contains("tab-content") == false) {
                addClasses();
            }
        }
        else {
            if (document.querySelector("#nav-tabContent").classList.contains("tab-content") == true) {
                removeClasses();
            }
        }
        console.log(document.body.clientWidth, $("#nav-tabContent").hasClass("tab-content"));
    }, 1);
}
function addClasses() {
    document.querySelector('#nav-tabContent').classList.add('tab-content');
    document.querySelector('#nav-to-do').classList.add('tab-pane');
    document.querySelector('#nav-in-progress').classList.add('tab-pane');
    document.querySelector('#nav-done').classList.add('tab-pane');
    document.querySelector('.card-to-do .card-header div').classList.add('w-100');
    document.querySelector('.card-in-progress .card-header div').classList.add('w-100');
    document.querySelector('.card-done .card-header div').classList.add('w-100');
}
function removeClasses() {
    document.querySelector('#nav-tabContent').classList.remove('tab-content');
    document.querySelector('#nav-to-do').classList.remove('tab-pane');
    document.querySelector('#nav-in-progress').classList.remove('tab-pane');
    document.querySelector('#nav-done').classList.remove('tab-pane');
    document.querySelector('.card-to-do .card-header div').classList.remove('w-100');
    document.querySelector('.card-in-progress .card-header div').classList.remove('w-100');
    document.querySelector('.card-done .card-header div').classList.remove('w-100');
}
