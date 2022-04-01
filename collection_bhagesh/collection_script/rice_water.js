var wowProducts=[

    {"name":"Rice Water Conditioner with Rice Water, Rice Keratin & Lavender Oil for Damaged, Dry and Frizzy Hair - No Mineral Oil, Parabens, Silicones, Synthetic Color, PEG - 300mL","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/rice-water-conditioner-bottel_1280x.jpg?v=1628579217"},
    {"name":" Rice Hair Mask with Rice Water, Rice Keratin & Lavender Oil for Damaged, Dry and Frizzy Hair - No Mineral Oil, Parabens, Silicones, Synthetic Color, PEG - 200mL","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Ricewaterhairmask1_1280x.jpg?v=1626442700"},
    {"name":"Rice Hair Oil With Rice Husk & Lavender Oil - No Mineral Oil, Silicones & Synthetic Fragrance - 150mL","price":"449","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/rice-hair-oil-bottel_1280x.jpg?v=1628243260"},
    {"name":"Rice Water Ultimate Hair Care Kit","price":"1599","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/1024_5_1280x.jpg?v=1627543938"}
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