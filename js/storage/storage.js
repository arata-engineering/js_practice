class Storage {
    setIdifEmpty() {
        const storage = localStorage;
        const id = storage.getItem("id");
        if (!id) {
            const newId = Math.random().toString(36).slice(-8);
            storage.setItem("id", newId);
            console.log(`新しいID:${newId}をセット`);
            return;
        }
        console.log(`セット済み:${id}`);
    }
    removeId() {
        const storage = localStorage;
        storage.removeItem("id");
        console.log("idを削除しました。");
    }
}
document.addEventListener("DOMContentLoaded", executeDomContentLoaded);
function executeDomContentLoaded() {
    const storage = new Storage();
    storage.setIdifEmpty();
}

const element = document.getElementById("clearButton");
element.addEventListener("click", executeClick);
function executeClick() {
    const storage = new Storage();
    storage.removeId();
}