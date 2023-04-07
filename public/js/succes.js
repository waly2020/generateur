const see = document.querySelectorAll(".see");
const liste = document.querySelector(".liste");

see.forEach(btn =>{
    btn.addEventListener("click", () =>{
        liste.classList.toggle("active");
    })
})