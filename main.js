//variáveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')


const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}



function IMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

form.onsubmit = function(event) {
  event.preventDefault() //Função para que evite o padrão, no caso evita que o onsubmit fique eviando o formulário e recarregue a página

  //Variáveis criadas dentro da função para ser pego o valor dos inputs
  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  //Ações que serão tomadas após o calculo do IMC
  Modal.message.innerText = message
  Modal.open()
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}