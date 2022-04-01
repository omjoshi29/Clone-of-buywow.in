var wowProducts=

[{"name":"Amla Shampoo For Dry & Weak Hair","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/amla-shampoo-bottel_1280x.jpg?v=1628161722"},
{"name":"Amla Hair Conditioner For Weak Hair - No Mineral Oil, Parabens, Silicones, Synthetic Color & PEG - 300 ml","price":"449","ratings":4.8,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/amla-hair-conditioner_1280x.jpg?v=1637773768"},
{"name":"Amla Hair Oil with Comb Applicator - 200 ml","price":"499","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Amla-Hair-Oil-with-comb-100-1_1280x.jpg?v=1632810790"},
{"name":"Amla Hair Oil - 200 ml","price":"499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/amla-hair-oil-bottle_1280x.jpg?v=1628144970"},
{"name":"Amla Hair Mask For Weak Hair - No Mineral Oil, Parabens, Silicones, Synthetic Color & PEG - 200 ml","price":"499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Amla-hair-mask-1_1280x.jpg?v=1626442700"},
{"name":"Amla Hair Oil - Pure Cold Pressed Indian Gooseberry Oil - Intensive Hair Care - with Comb Applicator - Non-Sticky & Non-Greasy - No Mineral Oil, Silicones, Synthetic Fragrance - 100 ml","price":"325","ratings":4.8,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/4_978d2d43-104a-4607-9510-95b6502bf32c_1280x.jpg?v=1625556553"},
{"name":"Amla Hair Care Kit","price":"1199","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/amla_haircarekit_1024_1280x.jpg?v=1626442703"},
{"name":"Amla Ultimate Hair Care Kit","price":"1876","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/amla_1024_1280x.jpg?v=1629782049"}
];

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
                bathProducts.sort(function (a, b) { return a.price - b.price })
                appendProduct(wowProducts)
            }
            else if (sorting == "h2l") {
                bathProducts.sort(function (a, b) { return b.price - a.price })
                appendProduct(bathProducts)
            }
            else if (sorting == "rl2h") {
                bathProducts.sort(function (a, b) { return a.ratings - b.ratings })
                appendProduct(wowProducts)
            }
            else if (sorting == "rh2l") {
                bathProducts.sort(function (a, b) { return b.ratings - a.ratings })
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