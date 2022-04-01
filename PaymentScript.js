const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


document.querySelector("#myformPayment").addEventListener("submit",func);

function func(e)
{
  e.preventDefault();
  let name=document.querySelector("#name").value;
  let email=document.querySelector("#email").value;
  let street=document.querySelector("#autocomplete").value;
  let City=document.querySelector("#inputCity").value;
  let State=document.querySelector("#inputState").value;
  let zip=document.querySelector("#inputZip").value;
  let number=document.querySelector("#number").value;
  var randomorder=Math.ceil(Math.random() *(100000*10));
  var Addressarr=JSON.parse(localStorage.getItem("Address"))||[];
  var obj={
    
    name:name,
    email:email,
    street,
    City,
    State,
    zip,
    number,
    randomorder
  }
  console.log(obj)
  Addressarr.push(obj)

  localStorage.setItem("Address",JSON.stringify(Addressarr))
  window.location.href="./ProccedPayment.html"
}
var cartArr = JSON.parse(localStorage.getItem("cartArr"));
console.log(cartArr)
let dispaly_cart_product=document.querySelector("#dispaly_cart_product")

cartArr.map((ele)=>
{
  let Productsdiv=document.createElement("div")
  Productsdiv.setAttribute("id","Productsdiv")
  let innerProductsdiv=document.createElement("div")
  innerProductsdiv.setAttribute("id","innerProductsdiv")
  var name=document.createElement("p")
  name.innerText=ele.name
  var price=document.createElement("p")
  price.innerText="₹ "+ele.price
  var imgcart=document.createElement("img")
  imgcart.src=ele.image
  imgcart.setAttribute("id","imgcart")
  innerProductsdiv.append(imgcart,price,name)
  
  dispaly_cart_product.append(innerProductsdiv)

})
// dispaly_cart_product.innerHTML="jdfhfhmbj"


