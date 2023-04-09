const button = document.getElementById("button");
const champ = document.querySelectorAll(".champ");
const options = document.querySelectorAll(".value");
const preview = document.querySelector(".preview");

let indicatifs = [...options];
let ind = true;
let zero = true;
let chif = getRandom();
let sep = " ";

function getRandom (){
    return indicatifs[Math.floor(Math.random() * indicatifs.length)].value;
}

preview.innerHTML = `${ind ? "+241" : ""}${ind ? sep : ""}${zero ? "0" : ""}${chif}${sep}78${sep}36${sep}23`;

champ.forEach(inp => {
    inp.addEventListener("input", () => {

        switch (inp.name) {
            case "chif":
                chif = inp.value !== "alea" ? inp.value : getRandom();
                break;

            case "sep":
                sep = inp.value;
                break;
            case "ind":
                ind = inp.checked;
                break;
            case "zero":
                zero = inp.checked;
                break;
        }
        preview.textContent = `${ind ? "+241" : ""}${ind ? sep : ""}${zero ? "0" : ""}${chif}${sep}78${sep}36${sep}23`;

    })
})