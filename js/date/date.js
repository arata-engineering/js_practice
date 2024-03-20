document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();
    const formatedDate = `${date.getFullYear()}年
            ${date.getMonth() + 1}月
            ${date.getDate()}日`;
    const element = document.getElementById("date");
    element.textContent = formatedDate;
});