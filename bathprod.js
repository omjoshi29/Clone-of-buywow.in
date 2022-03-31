var cartArr = JSON.parse(localStorage.getItem('cartArr')) || [];

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

    cartbtn.addEventListener("click", function () {
      event.preventDefault();
      cartArr.push(elem);
      localStorage.setItem("cartArr", JSON.stringify(cartArr));
      console.log(cartArr);
      // alert("Product added to the cart!");
      window.location.href="./cart.html"
    })

    let box = document.createElement("div");
    box.append(image, name, price, ratingdiv, cartbtn);
    bathDiv.append(box);
  });
}

export default appendProduct;