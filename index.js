const after = "background-color:#0A3871;color:#fff";
const before = "background-color:#D8DFE8;color:#0A3871";

let botones = document.querySelectorAll("button");
let input = document.querySelector("textarea");
let side = document.getElementById("side");
let side2 = document.getElementById("side2");
let container = document.querySelector("main");
let texto = document.querySelector(".texto");
let copy = document.getElementById("btn");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

let content = (text) => {
    if (input.value !== "") {
        side.style = "display:none;";
        side2.style = "display:flex";
        texto.value = `${text}`;
    }
};
let clic1 = botones[1].addEventListener("click", function (e) {
    e.preventDefault();
    btn.textContent = "copiar";
    btn.style = before;
    if (input.value === "") {
        modal.style.display = "block";
        side.style = "display:flex";
        side2.style = "display:none";
    }
    let dato = decrypt(input.value);
    content(dato);
    input.value = "";
    botones[1].style = after;
    botones[0].style = before;
});
let clic2 = botones[0].addEventListener("click", function (e) {
    e.preventDefault();
    btn.textContent = "copiar";
    btn.style = before;
    if (input.value === "") {
        modal.style.display = "block";
        side.style = "display:flex";
        side2.style = "display:none";
    }
    let dato = crypt(input.value);
    content(dato);
    input.value = "";
    botones[0].style = after;
    botones[1].style = before;
});

let crypt = (text) => {
    let vocal = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };
    return text.replace(/[aeiou]/g, (item) => vocal[item]);
};

let decrypt = (text) => {
    for (let i = 0; i <= text.length; i++) {
        text = text.replace("ai", "a");
        text = text.replace("imes", "i");
        text = text.replace("enter", "e");
        text = text.replace("ober", "o");
        text = text.replace("ufat", "u");
    }
    return text;
};

function copiar(e) {
    texto.select();
    btn.textContent = "Copiado!";
    btn.style = after;
    document.execCommand("copy");
}

btn.addEventListener("click", copiar);

span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


