const dispControlElement = document.getElementById("dispControl");
dispControlElement.addEventListener("mouseover", {type: "text", handleEvent: typeChange});
dispControlElement.addEventListener("mouseout", {type: "password", handleEvent: typeChange});

function typeChange() {
    const passwordFormElement = document.querySelector("[name=password]");
    passwordFormElement.setAttribute("type", this.type);
}