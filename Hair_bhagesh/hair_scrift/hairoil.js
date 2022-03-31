var wowProducts=[

    {"name": "  Onion Hair Oil With Black Seed Oil Extracts Helps Control Hair Fall - 200mL","price": "499","ratings": 5,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-hair-oil-1_375x.jpg?v=1646380369"},
    
    {"name": "Moroccan Argan Hair Oil - WITH COMB APPLICATOR - Cold Pressed - No Mineral Oil & Silicones - 100 ml","price": "349","ratings": 4,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/Amla-Hair-Oil-with-comb-100-1_375x.jpg?v=1632810790"},
    
    {"name": "Bhringraj Hair Oil - for Hair Restoration - with Comb Applicator - for All Hair Types - Non-Sticky & Non-Greasy Hair Oil - No Mineral Oil, Silicones, Synthetic Fragrance - 200 ml","price": "499","ratings": 4.5,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/BringrajHairOilwithComb2001_375x.jpg?v=1632987919"},
    
    {"name": "Cool Mint Hair Oil with Comb Applicator for all Hair Types - 100 ml","price": "325", "ratings": 4.5, "image": "https://cdn.shopify.com/s/files/1/1375/4957/products/Cool-Mint-Hair-Oil-with-comb-100-1_375x.jpg?v=1634031768"},
    
    {"name": "Ginger Hair Oil for Dandruff Removal with Comb Applicator - 200mL", "price": "499", "ratings": 5, "image": "https://cdn.shopify.com/s/files/1/1375/4957/products/GingerHairOilwithComb1001_375x.jpg?v=1632992297"},
    
    { "name": "Rice Hair Oil With Rice Husk & Lavender Oil - No Mineral Oil, Silicones & Synthetic Fragrance - 150mL", "price": "499","ratings": 5, "image": "https://cdn.shopify.com/s/files/1/1375/4957/products/rice-hair-oil-bottel_375x.jpg?v=1628243260"},
    
    {"name": "Bhringraj Hair Oil - for Hair Restoration - for All Hair Types - Non-Sticky & Non-Greasy Hair Oil - 200 ml", "price": "499", "ratings": 5, "image": "https://cdn.shopify.com/s/files/1/1375/4957/products/bhringraj-hair-oil_375x.jpg?v=1642243170"},
    
    {"name": "Cool Mint Hair Oil - Non Sticky & Non Greasy - for All Hair Types - 200 ml","price": "499", "ratings": 4,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/cool-mint-hair-oil_375x.jpg?v=1642398840"},
    
    {"name": "Almond Hair Oil - infused with Almond Oil - with Comb Applicator - Non Sticky & Greasy Hair Oil - 100mL","price": "349", "ratings": 4.5,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/Almond-with-comb-1_375x.jpg?v=1634034663"},
    
    {"name": "Cool Mint Hair Oil - with Comb Applicator - Non Sticky & Non Greasy - for All Hair Types - 200 ml","price": "499", "ratings": 5,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/Cool-Mint-Hair-Oil-with-comb-200-1_375x.jpg?v=1634032014"},
    
    {"name": "Ginger Hair Oil for Dandruff Care with Comb Applicator - 100 ml", "price": "325", "ratings": 4.5, "image": "https://cdn.shopify.com/s/files/1/1375/4957/products/Ginger-wcomb-100-1_375x.jpg?v=1622105921"},
    
    {"name": "Onion Black Seed Hair Oil - with comb applicator - 50 ml","price": "199","ratings": 5,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-Oil-Front_375x.jpg?v=1642485233" },
    
    {"name": "Onion Hair Oil With Black Seed Oil Extracts Helps Control & Hair Fall - 150mL","price": "429","ratings": 5, "image": "https://cdn.shopify.com/s/files/1/1375/4957/products/onionhairoil150d-shape1_375x.jpg?v=1646385252" },
    
    { "name": "Red Onion and Fenugreek Seed Extract Hair Oil By Body Cupid - 200 ml","price": "599","ratings": 5,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/onion_bodycupid_375x.jpg?v=1638950114"},
    
    {"name": "Castor Oil - 100% Pure & Cold Pressed By Body Cupid","price": "499","ratings": 5,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/castor-oil-1_375x.jpg?v=1638949999"},
    
    { "name": "Rice Hair Oil With Rice Husk & Lavender Oil - No Mineral Oil, Silicones & Synthetic Fragrance - 150mL","price": "499","ratings": 4.5,"image": "https://cdn.shopify.com/s/files/1/1375/4957/products/rice-hair-oil-bottel_375x.jpg?v=1628243260"}
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