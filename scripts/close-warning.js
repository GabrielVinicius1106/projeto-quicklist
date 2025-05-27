const closeButton = document.querySelector("#close")

closeButton.addEventListener("click", () => {
    const warningText = document.querySelector(".removed-item")
    warningText.style.display = "none"
})