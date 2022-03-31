var wowProducts=

[{"name":"Apple Cider Vinegar Foaming Face Wash with Built-In Foaming Face Brush for Deep Cleansing","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/ACV-FW_520x.jpg?v=1643119836"},
{"name":" Apple Cider Vinegar Shampoo for Dandruff, Hair Loss, Hair Fall & Hair Growth - 300 mL","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/ACV-shampoo_1280x.jpg?v=1631651557"},
{"name":"Organic Apple Cider Vinegar - 750mL Organic Apple Cider Vinegar - 750mL  Organic Apple Cider Vinegar - 750mL","price":"499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/apple-cider-vinegar-bottel_1280x.jpg?v=1627897442"},
{"name":"WOW Skin Science Organic Apple Cider Vinegar Face Moisturizer - Oil Free, Quick Absorbing - For Normal/Oily and Acne Prone Skin - No Parabens, Silicones, Mineral Oil, Color - 100 ml - BuyWow Organic Apple Cider Vinegar Face Moisturizer - Oil Free, Quick Absorbing - For Normal/Oily and Acne Prone Skin - No Parabens, Silicones, Mineral Oil, Color - 100 ml","price":"349","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/moisturizer-1_1280x.jpg?v=1577348065"},
{"name":" Apple Cider Vinegar Face Wash - No Parabens, Sulphate, Silicones & Color - 100 ml Apple Cider Vinegar Face Wash - No Parabens, Sulphate, Silicones & Color - 100 ml","price":"249","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/acv_a389a3bb-abdc-4f0a-9679-192e1b74212a_1280x.jpg?v=1639421596"},
{"name":"Apple Cider Vinegar Foaming Face Wash Save Earth Combo Pack- Consist of Foaming Face Wash with Built-In Brush & Refill Pack - Net Vol. 350 ml","price":"699","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/ACV-FW-_-Refill-2_1280x.jpg?v=1634035156"},
{"name":" Ultimate Apple Cider Vinegar Hair & Skin Care Kit (Apple Cider Vinegar Shampoo + Apple Cider Vinegar Body Wash + Apple Cider Vinegar Face Wash with built in brush) Ultimate Apple Cider Vinegar Hair & Skin Care Kit (Apple Cider Vinegar Shampoo + Apple Cider Vinegar Body Wash + Apple Cider Vinegar Face Wash with built in brush)","price":"999","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/ACVHaircare_Skincarekit_1280x.jpg?v=1626182929"},
{"name":" Apple Cider Vinegar Hair Mask with Apple Cider Vinegar & Sweet Almond Oil - 200 ml","price":"499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/apple-cider-vinegar-hair-mask_1280x.jpg?v=1637849265"},
{"name":"Apple Cider Vinegar Capsules 500 mg - 60 Count","price":"599","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/apple-cider-vinegar-capsules-bottel_1280x.jpg?v=1628749384"}
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