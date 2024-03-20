window.addEventListener('DOMContentLoaded', () => {
    checkBeforExecute();
    addEventListenerForButton();
});
function checkBeforExecute() {
    const count = window.sessionStorage.getItem('tried_count');
    if (count === null || count === undefined || isNaN(count)) {
        return;
    }
    if (count >= 1) {
        document.getElementById("container").innerHTML = '<b>試験は終了しました。</b>'
        return;
    }
}
function addEventListenerForButton() {
    const buttonElementArr = document.querySelectorAll("button");
    for (let i = 0; i < buttonElementArr.length; i++) {
        buttonElementArr[i].addEventListener('click', () => {
            const count = window.sessionStorage.getItem('tried_count');
            if (count === null || count === undefined || isNaN(count)) {
                window.sessionStorage.setItem('tried_count', 1);
                return;
            }
            if (count >= 1) {
                document.getElementById("container").innerHTML = '<b>試験は終了しました。</b>'
                return;
            }
        });
    }
}