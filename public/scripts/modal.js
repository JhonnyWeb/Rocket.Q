export default function Modal() {


const modalWrapper = document.querySelector('.modal-wrapper') 
const cancelButton = document.querySelector('.button.cancel')


cancelButton.addEventListener("click", close)

    function open(){
        // Atribuir a class active para abrir o modal
        modalWrapper.classList.add("active")
    }
    function close(){
        // Fechar o modal
        modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}