var wowProducts=

[{"name":" 10-in-1 Active Hair Revitalizer - 200 ml","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/hair-spray-1_375x.jpg?v=1632724755"},
{"name":"Multi Repairing & Nutrition Water Hair Spray - Restores Hydration, Reduces Hair Breakage, Conditions Scalp & Hair - No Sulphate, Silicones, Parabens & Mineral Oil - 100 ml","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/10in1HairRevitalizer1_e3f14295-d831-45ce-b6f5-75b1def6e2f5_375x.jpg?v=1632900990"},
]

    var hairDiv = document.getElementById("hairDiv");

    var cartArr = JSON.parse(localStorage.getItem('cartArr')) || [];

    function appendProduct(wowProducts) {
      hairDiv.innerHTML = null;
      wowProducts.forEach(function (elem) {
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

          window.location.href="./../cart.html"
        })
    
        let box = document.createElement("div");
        box.append(image, name, price, ratingdiv, cartbtn);
        hairDiv.append(box);
      });
    }
    appendProduct(wowProducts);

    document.querySelector("#sorter").addEventListener("click", sortByPrice);
    function sortByPrice() {
        wowProducts.map(function (elem) {
            var sorting = document.querySelector("#sorter").value;
            console.log(sorting);
            if (sorting == "l2h") {
                wowProducts.sort(function (a, b) { return a.price - b.price })
                appendProduct(wowProducts)
            }
            else if (sorting == "h2l") {
                wowProducts.sort(function (a, b) { return b.price - a.price })
                appendProduct(wowProducts)
            }
            else if (sorting == "rl2h") {
                wowProducts.sort(function (a, b) { return a.ratings - b.ratings })
                appendProduct(wowProducts)
            }
            else if (sorting == "rh2l") {
                wowProducts.sort(function (a, b) { return b.ratings - a.ratings })
                appendProduct(wowProducts)
            }
            else if (sorting == "a2z") {
                function SortArray(x, y) {
                    if (x.name < y.name) { return -1; }
                    if (x.name > y.name) { return 1; }
                    return 0;
                }
                var s = wowProducts.sort(SortArray)
                appendProduct(s)
            }
            else if (sorting == "z2a") {
                function SortArray(x, y) {
                    if (x.name > y.name) { return -1; }
                    if (x.name < y.name) { return 1; }
                    return 0;
                }
                var sort = wowProducts.sort(SortArray)
                appendProduct(sort)
            }
        })
    }