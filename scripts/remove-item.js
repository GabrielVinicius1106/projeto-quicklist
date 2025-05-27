const bodyRemove = document.querySelector('body')

bodyRemove.addEventListener("click", (event) => {
    
    const removeItens = document.querySelectorAll('.remove-item')
    const itens = document.querySelectorAll('.item')

    for(let i = 0; i < removeItens.length; i++) {
        removeItens[i].addEventListener("click", () => {
            itens[i].style.display = "none"
            const warning = document.querySelector(".removed-item") 
            warning.style.display = "flex" 
        });
    }

})  