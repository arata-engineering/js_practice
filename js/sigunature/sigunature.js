// お絵描き
const writeingErea = document.getElementById("signaturePad");
const signaturePad = new SignaturePad(writeingErea, {
    backgroundColor: "rgb(250,250,250)"
});

// 削除
document.getElementById("clearButton").addEventListener("click", clear);
function clear() {
    signaturePad.clear();
}