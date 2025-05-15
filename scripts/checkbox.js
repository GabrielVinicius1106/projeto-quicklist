const checkboxes = document.querySelectorAll('.checkbox');

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", (event) => {
        checkboxes[i].classList.toggle("checked");
    })
}