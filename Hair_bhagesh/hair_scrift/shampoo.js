var wowProducts=

[{"name":"  Onion Shampoo for Hair Growth and Hair Fall Control - 300mL","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-shampoo-1_375x.jpg?v=1646381279"},
{"name":"Apple Cider Vinegar Shampoo for Dandruff, Hair Loss, Hair Fall & Hair Growth - 300 mL","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/ACV-shampoo_375x.jpg?v=1631651557"},
{"name":"Hair Loss Control Therapy Shampoo - Increase Thick & Healthy Hair Growth - Contains Ayurvedic & Western Herbal Extracts With Natural Dht Blockers - 300 ml","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/hair-fall-control-shampoo_375x.jpg?v=1647857894"},
{"name":"Coconut Milk Shampoo No Parabens, Sulphate, Silicone, Salt & Color","price":"449","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/coconut-milk-shampoo-bottel_375x.jpg?v=1629193764"},
{"name":"  Moroccan Argan Oil Shampoo (with DHT Blocker) - 300 ml","price":"192","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/argan-oil-shampoo-bottel_375x.jpg?v=1629182936"},
{"name":"  Anti Dandruff Shampoo - 300 ml","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/anti-dandruff-shampoo_375x.jpg?v=1639732783"},{"name":"  Green Tea & Tea Tree Anti Dandruff Shampoo","price":"449","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/GT-Shampoo-300-1_375x.jpg?v=1632726192"},
{"name":"  Active 10 in 1 No Parabens & Sulphate Shampoo - 300 ml","price":"249","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/10in1-shampoo-1_375x.jpg?v=1633680645"},
{"name":"Oud 2-In-1 Shampoo + Body Wash - No Parabens, Sulphate, Silicones & Color - 250 ml","price":"104","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Oudbodywash1_375x.jpg?v=1632294769"},
{"name":"  Hair Strengthening Shampoo - No Parabens, Sulphate & Silicones - 300 ml","price":"449","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/hair-strengthening-shampoo_375x.jpg?v=1641967492"},
{"name":"Himalayan Rose Shampoo with Rose Hydrosol, Coconut Oil, Almond Oil & Argan Oil - For Volumnising Hair, Anti Smelly Scalp - No Parabens, Sulphate, Silicones, Color & PEG - 300 ml","price":"449","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-Shampoo-1_375x.jpg?v=1633611312"},
{"name":"Charcoal 2-In-1 Shampoo + Body Wash - No Parabens, Sulphate, Silicones & Color - 250 ml","price":"104","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/charcoalfacewashformen1_375x.jpg?v=1632294360"},
{"name":"Rice Water Shampoo with Rice Water, Rice Keratin & Lavender Oil for Damaged, Dry and Frizzy Hair","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/rice-water-shampoo-bottel_375x.jpg?v=1628328622"},
{"name":"Frizz Defy Luster Anti Frizz Shampoo - No Parabens, Sulphate & Silicone - 300 ml","price":"399","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/frizz-defy-luster-shampoo_375x.jpg?v=1637770778"},
{"name":"Frizz Defy Luster Anti Frizz Shampoo - No Parabens, Sulphate & Silicone - 300 ml","price":"399","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/frizz-defy-luster-shampoo_375x.jpg?v=1637770778"},
{"name":"Hard Water Defense Shampoo - No Sulphate, Parabens, Silicones, Salt & Colour - 300 ml","price":"499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/hard-water-shampoo_375x.jpg?v=1641980139"},
{"name":"Himalayan Rose Shampoo with Rose Hydrosol, Coconut Oil, Almond Oil & Argan Oil - For Volumnising Hair, Anti Smelly Scalp - No Parabens, Sulphate, Silicones, Color & PEG - 200 ml","price":"249","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Roseshampoo2001_375x.jpg?v=1631181027"},
{"name":"wow-skin-science-activated-charcoal-keratin-shampoo-200-ml-tube","price":"104","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Charcoal_tube200ml_1_375x.jpg?v=1595019631"},
{"name":"Perfect Color Protection Shampoo - No Parabens, Sulphates & Silicones - 300 ml","price":"399","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/color-protection-shampoo_375x.jpg?v=1642140825"},
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
                console.log(sorting)
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