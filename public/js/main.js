const button = document.getElementById("button");
const champ = document.querySelectorAll(".champ");
const preview = document.querySelector(".preview");

let ind = true;
let zero = true;
let chif = "76";
let sep = " ";

preview.textContent = `${ind ? "+241" : ""}${ind ? sep : ""}${zero ? "0" : ""}${chif}${sep}93${sep}76${sep}21`;

champ.forEach(inp => {
    inp.addEventListener("input", () => {

        switch (inp.name) {
            case "chif":
                chif = inp.value;
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
        preview.textContent = `${ind ? "+241" : ""}${ind ? sep : ""}${zero ? "0" : ""}${chif}${sep}93${sep}76${sep}21`;

    })
})