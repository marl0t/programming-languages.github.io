window.onload = function () {
    let body = document.getElementsByTagName('body')[0];
    let sunBtn = document.getElementById('sunBtn');
    let moonBtn = document.getElementById('moonBtn');

    document.getElementById('themeToggle').addEventListener('click', function () {
        if (body.classList.contains('dark-theme')) {

            body.classList.add("light-theme");
            body.classList.remove("dark-theme");
            sunBtn.classList.remove("d-none");
            moonBtn.classList.add("d-none");
        }
        else {
            body.classList.add("dark-theme");
            body.classList.remove("light-theme");
            sunBtn.classList.add("d-none");
            moonBtn.classList.remove("d-none");
        }

    });
}
