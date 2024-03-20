const element = document.getElementById("submit");
element.addEventListener("submit", execute);

function execute(e) {
    const value = element.search.value;
    if (isEmpty(value)) {
        e.preventDefault();
        return;
    }
    const memoElement = document.getElementById("memo");
    const newElement = createMemoElement(value);
    memoElement.appendChild(newElement);
    element.search.value = "";
    e.preventDefault();
}

function createMemoElement(value) {
    const parentElement = document.createElement("div");
    parentElement.setAttribute("class", "memoListBox");

    // 削除ボタン生成
    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.textContent = "Del";
    deleteButtonElement.setAttribute("class", "deleteButton");
    parentElement.appendChild(deleteButtonElement);
    deleteButtonElement.addEventListener("click", deleteElement);

    // 日付の要素生成
    const spanElement = document.createElement("span");
    spanElement.setAttribute("class", "date");
    const date = new Date();
    spanElement.textContent = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    parentElement.appendChild(spanElement);

    // メモ要素生成
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "memoList");
    liElement.textContent = value;
    parentElement.appendChild(liElement);

    return parentElement;
}

function isEmpty(value) {
    return value === null || value === undefined || value === "";
}

function deleteElement() {
    const parentElement = this.parentElement;
    parentElement.remove();
}