var wowProducts=

[{"name":"Onion Hair Oil With Black Seed Oil Extracts Helps Control Hair Fall - 200mL","price":"499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-hair-oil-1_1280x.jpg?v=1646380369"},
{"name":"Onion Shampoo for Hair Growth and Hair Fall Control - 300mL","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-shampoo-1_1280x.jpg?v=1646381279"},
{"name":"Onion Hair Oil Ultimate Hair Care Combo Kit for Hair Fall Control - 800mL","price":"1299","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Hair_Strengthening_Regime_1280x.jpg?v=1575982162"},
{"name":"Onion Oil for Hair Fall Control with Comb Applicator - 200mL","price":"449","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-Hair-Oil-with-Comb-200-1_1280x.jpg?v=1646899880"},
{"name":"Onion Hair Conditioner - 300mL","price":"449","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-conditioner-1_1280x.jpg?v=1632475507"},
{"name":"Onion Hair Mask With Red Onion Seed Oil Extract And Black Seed Oil","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/onion-hair-mask_1280x.jpg?v=1637825217"},
{"name":"Onion Oil for Hair Fall Control - 100mL","price":"349","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-100-1_1280x.jpg?v=1595022388"},
{"name":"Onion Oil Hair Care Ultimate 4 Kit for Hair Fall(Shampoo + Hair Conditioner + Hair Oil + Hair Mask) - 1000 ml","price":"1499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/B07Z82NTXC.MAIN_1280x.jpg?v=1577352359"},
{"name":"Stimulating Scalp Massager Brush","price":"499","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/4-_1_1280x.jpg?v=1633670781"},
{"name":"Onion Hair Oil Ultimate Hair Care Combo Kit for Hair Fall Control - 650mL","price":"999","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-kit-650ml-5_d69faaee-48c4-4cbf-bb6b-77a55c540786_1280x.jpg?v=1638447307"},
{"name":"Red Onion and Fenugreek Hair mask By Body Cupid - 200 ml","price":"499","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion_fenugreekhairmask4_1280x.jpg?v=1638884573"},
{"name":"Red Onion and Fenugreek Seed Extract Hair Oil By Body Cupid - 200 ml","price":"599","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/onion_bodycupid_1280x.jpg?v=1638950114"}
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