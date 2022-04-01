  // ---- Navbar ----
  import navbar from ".././components/navbar.js";
      // console.log(navbar)
  let header=document.querySelector("#navbarinBody")
  header.innerHTML=navbar();

      //  ---- Footer ----
import footer from'../components/footer.js';
    document.getElementById("footer").innerHTML=footer();

    // ---- main ----

    let skinDiv = document.getElementById("skinDiv");


var cartArr = JSON.parse(localStorage.getItem('cartArr')) || [];

function appendProduct(skinProducts) {
  skinDiv.innerHTML = null;
  skinProducts.forEach(function (elem) {
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
    skinDiv.append(box);
  });
}
appendProduct(skinProducts);


document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
    skinProducts.map(function (elem) {
        var sorting = document.querySelector("#sorter").value;
        // console.log(sorting);
        if (sorting == "l2h") {
            skinProducts.sort(function (a, b) { return a.price - b.price })
            appendProduct(skinProducts)
        }
        else if (sorting == "h2l") {
            skinProducts.sort(function (a, b) { return b.price - a.price })
            appendProduct(skinProducts)
        }
        else if (sorting == "rl2h") {
            skinProducts.sort(function (a, b) { return a.ratings - b.ratings })
            appendProduct(skinProducts)
        }
        else if (sorting == "rh2l") {
            skinProducts.sort(function (a, b) { return b.ratings - a.ratings })
            appendProduct(skinProducts)
        }
        else if (sorting == "a2z") {
            function SortArray(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            var s = skinProducts.sort(SortArray)
            appendProduct(s)
        }
        else if (sorting == "z2a") {
            function SortArray(x, y) {
                if (x.name > y.name) { return -1; }
                if (x.name < y.name) { return 1; }
                return 0;
            }
            var s = skinProducts.sort(SortArray)
            appendProduct(s)
        }
    })
}