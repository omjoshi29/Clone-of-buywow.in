//store the products array in localstorage as "products"


document.querySelector("#product_form").addEventListener("submit",formfun);
var productsArray=JSON.parse(localStorage.getItem("products"))||[];
function formfun(event)
{
event.preventDefault();

var name=document.querySelector("#name").value
var price=document.querySelector("#price").value
var ratings=document.querySelector("#ratings").value
var image=document.querySelector("#image").value

var nike=
{
    name:name,
    price:price,
    ratings:ratings,
    image:image,
}
// var nikeo=new objfun(name,price,type,image_url)

productsArray.push(nike)

localStorage.setItem("products",JSON.stringify(productsArray))
}
