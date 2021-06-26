import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")
// Pegar todos botões que existe a class check
const checkButtons = document.querySelectorAll(".action a.check")

checkButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener("click", event => { 

        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Tem certeza que deseja marcar como lida esta pergunta?"

        modal.open()
    })
})


// Botão deletar clicado abre modal
const deleteButtons = document.querySelectorAll(".action a.delete")

deleteButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener("click", event => { 
        modal.open()
    })
})