var wowProducts=

[{"name":"  Onion Hair Oil Ultimate Hair Care Combo Kit for Hair Fall Control - 800mL","price":"1299","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Hair_Strengthening_Regime_520x.jpg?v=1575982162"},
{"name":"Onion Oil Hair Care Ultimate 4 Kit for Hair Fall(Shampoo + Hair Conditioner + Hair Oil + Hair Mask) - 1000 ml","price":"1499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/B07Z82NTXC.MAIN_520x.jpg?v=1577352359"},
{"name":"Red Onion Black Seed Oil Shampoo & Conditioner Kit With Red Onion Seed Oil Extract, Black Seed Oil & Pro-Vitamin B5 (Shampoo + Conditioner) - 600 ml","price":"799","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/onion_2-min_afb6a195-d0fa-4908-bcb4-d8e27b63c7e5_520x.jpg?v=1594896786"},
{"name":"Apple Cider Vinegar Shampoo - WOWsome Twosome No Parabens & Sulphates Hair Care Package - 600 ml","price":"994","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/WOWsome-1_520x.jpg?v=1633688341"},
{"name":"  Ultimate Green Tea & Tea Tree Anti Dandruff Tree 4 Kit  - Net Vol - 800 ml","price":"1199","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/GT_COMBO_2_520x.jpg?v=1625720622"},
{"name":"  Onion Hair Oil Ultimate Hair Care Combo Kit for Hair Fall Control - 650mL","price":"999","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-kit-650ml-5_d69faaee-48c4-4cbf-bb6b-77a55c540786_520x.jpg?v=1638447307"},
{"name":"  Amla Hair Care Kit","price":"1199","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/amla_haircarekit_1024_520x.jpg?v=1626442703"},
{"name":"  Red Onion Black Seed Oil Shampoo + Conditioner - 500 ml","price":"748","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-kit-500ml-5_12dc966e-8690-4caa-a947-5dcf2cf162b8_520x.jpg?v=1638449324"},
{"name":"  Amla Ultimate Hair Care Kit","price":"1876","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/amla_1024_520x.jpg?v=1629782049"},
{"name":"Macadamia Nut Oil  Hair Care Ultimate 4 Kit  (Shampoo + Conditioner + Hair Oil + Hair Mask) - 950 ml","price":"1896","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Macadamia-Combo-FR_520x.jpg?v=1641365711"},
{"name":"Macadamia Nut Oil Hair Care Ultimate 2 Kit  (Shampoo + Conditioner) - 600 ml","price":"998","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Macadamia-2Combo-FR_520x.jpg?v=1641374277"},
{"name":"Macadamia Nut Oil Hair Care Ultimate 3 Kit  (Shampoo + Conditioner + Hair Oil) - 750 ml","price":"1397","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Macadamia-3Combo-FR_520x.jpg?v=1641374253"}
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