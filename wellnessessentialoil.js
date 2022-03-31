import footer from'./components/footer.js';
document.getElementById("footer").innerHTML=footer();


import navbar from "./components/navbar.js";
// console.log(navbar)
let header=document.querySelector("#navbarinBody")
header.innerHTML=navbar();
var bathProducts=[{"name":"Peppermint Essential Oil -15Ml","price":"499","ratings":"","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/pepperming_520x.jpg?v=1595019587"},{"name":"Rose Otto Essential Oil -15Ml","price":"499","ratings":"","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Roseotto_520x.jpg?v=1595019588"},{"name":"Bergamot Essential Oil -15Ml","price":"499","ratings":"","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/bergamot_520x.jpg?v=1595019582"},{"name":"Jasmine Essential Oil -15Ml","price":"499","ratings":"","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Jasmine_520x.jpg?v=1595019594"}]

var bathProducts=[{"name":"Peppermint Essential Oil -15Ml","price":"499","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/pepperming_520x.jpg?v=1595019587"},{"name":"Rose Otto Essential Oil -15Ml","price":"499","ratings":4.9,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Roseotto_520x.jpg?v=1595019588"},{"name":"Bergamot Essential Oil -15Ml","price":"499","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/bergamot_520x.jpg?v=1595019582"},{"name":"Jasmine Essential Oil -15Ml","price":"499","ratings":4.1,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Jasmine_520x.jpg?v=1595019594"}]
var cartArr = JSON.parse(localStorage.getItem('cartArr')) || [];


var bathDiv = document.getElementById("bathDiv");

function appendProduct(bathProducts) {
bathDiv.innerHTML = null;
bathProducts.forEach(function (elem) {
    let image = document.createElement("img");
    image.src = elem.image;

    let name = document.createElement("p");
    name.innerText = elem.name;

    let price = document.createElement("p");
    price.innerText = "₹" + elem.price;

    
    let ratings = document.createElement("p");
            ratings.innerText = elem.ratings;
        
            var div1 = document.createElement("div");
            div1.setAttribute("class", "Stars");
            div1.style = `--rating: ${elem.ratings};`;
        
            var ratingdiv = document.createElement("div");
            ratingdiv.setAttribute("id", "ratingdiv");
            ratingdiv.append(ratings, div1);
        
            let cartbtn = document.createElement("button");
            cartbtn.innerText = "Add to cart";
            cartbtn.setAttribute("id", "cartbtn");
        
            cartbtn.addEventListener("click", function (event) {
              event.preventDefault();
              cartArr.push(elem);
              localStorage.setItem("cartArr", JSON.stringify(cartArr));
              console.log(cartArr);
              alert("Product added to the cart!");
            })
        
            let box = document.createElement("div");
            box.append(image, name, price, ratingdiv, cartbtn);
            bathDiv.append(box);
        




        })
    }


appendProduct(bathProducts);

document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
bathProducts.map(function (elem) {
    var sorting = document.querySelector("#sorter").value;
    console.log(sorting);
    if (sorting == "l2h") {
        bathProducts.sort(function (a, b) { return a.price - b.price })
        appendProduct(bathProducts)
    }
    else if (sorting == "h2l") {
        bathProducts.sort(function (a, b) { return b.price - a.price })
        appendProduct(bathProducts)
    }
    else if (sorting == "rl2h") {
        bathProducts.sort(function (a, b) { return a.ratings - b.ratings })
        appendProduct(bathProducts)
    }
    else if (sorting == "rh2l") {
        bathProducts.sort(function (a, b) { return b.ratings - a.ratings })
        appendProduct(bathProducts)
    }
    else if (sorting == "a2z") {
        function SortArray(x, y) {
            if (x.name < y.name) { return -1; }
            if (x.name > y.name) { return 1; }
            return 0;
        }
        var s = bathProducts.sort(SortArray)
        appendProduct(s)
    }
    else if (sorting == "z2a") {
        function SortArray(x, y) {
            if (x.name > y.name) { return -1; }
            if (x.name < y.name) { return 1; }
            return 0;
        }
        var s = bathProducts.sort(SortArray)
        appendProduct(s)
    }
})
}
