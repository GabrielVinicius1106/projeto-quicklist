document.querySelector("#add-item").addEventListener("click", () => {

    let item = document.querySelector("#new-item").value
    let itemList = document.querySelector(".items")
    let divItem = document.createElement("div")
    divItem.classList.add("item")

    itemList.appendChild(divItem)
})