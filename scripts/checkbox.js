const body = document.querySelector('body')

body.addEventListener("click", (event) => {
    
    // Pega o elemento mais próximo que tenha a classe 'checkbox'
    let checkbox = event.target.closest('.checkbox')

    if(checkbox) {
        // Se o elemento mais próximo for um checkbox, adiciona a classe 'checked'
        checkbox.classList.toggle('checked')
    }
    

})