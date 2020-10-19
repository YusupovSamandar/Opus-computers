let selected = document.querySelector(".selected");
let optionsContainer = document.querySelector(".options-container")

let optionList = document.querySelectorAll(".options")

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active")
});
optionList.forEach((o) => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active")
    })
})