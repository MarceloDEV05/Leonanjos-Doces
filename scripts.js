const buttonAdd = document.getElementById('btn-add')
const item = document.querySelector('.chosen-sweet')
const products = document.querySelector('.products')

buttonAdd.addEventListener('click', () =>{
  
})


let listaDePedidos = []


//modal de pedidos dos clientes
let modal = document.querySelector('.pedidos')

//botão que abre o modal quando clicado
const clientPedidos = document.querySelector('.client-Pedidos')
clientPedidos.addEventListener('click', () => {
  modal.style.display = 'block'
})

//botão que fecha o modal quando clicado
const closeModal = document.getElementById('close-modal')
closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

