window.addEventListener("DOMContentLoaded", () => {
    const listTitleElements = document.querySelectorAll("[data-navi]");
    for (const list of listTitleElements) {
        list.addEventListener("mouseover", naviMouseoverExecute);
        list.addEventListener("mouseout", naviMouseoutExecute);
    }
});

function naviMouseoverExecute(e) {
    const listElement = e.target;
    changeColor(listElement, "8px solid #edede3");
}

function naviMouseoutExecute(e) {
    const listElement = e.target;
    changeColor(listElement, "none");
}

function changeColor(listElement, borderStyle) {
    listElement.style.borderBottom = borderStyle;
}
