var wowProducts=[

    {"name":" Vitamin C Face Wash In Paper Tube (Eco Friendly Packaging) - No Parabens, Sulphate, Silicones & Color - 100ml Vitamin C Face Wash In Paper Tube (Eco Friendly Packaging) - No Parabens, Sulphate, Silicones & Color - 100ml","price":"249","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/DSC0265_2_1280x.jpg?v=1639212076"},
    {"name":"Vitamin C Face Wash with Built-In Foaming Face Brush for Skin Brightening - 150 ml","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/vitCFWbrush_1280x.jpg?v=1643129922"},
    {"name":"Vitamin C Face Serum for Skin Whitening - Brightening and Hyperpigmentation","price":"699","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/vitCserum_1_1280x.jpg?v=1643130400"},
    {"name":"Brightening Vitamin C Face Wash For improve skin's texture - 100 ml","price":"249","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/vitCFWtube_1280x.jpg?v=1643130531"},
    {"name":"Vitamin C Face Cream For Skin Whitening, Brightening & Hyperpigmentation","price":"599","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Vit-C-Cream-4_fbaccf05-787b-44e7-8152-b0edbda20313_1280x.jpg?v=1635399354"},
    {"name":"Vitamin C Gel Cream By Body Cupid - 50 ml","price":"499","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Vitaminc_1_1280x.jpg?v=1638884158"},
    {"name":"Vitamin C Skin Mist Toner with Lemon Essential Oil, Orange Essential Oil With Hazel & Aloe Vera Extracts - For All Skin Types - No Parabens, Silicones, Mineral Oil & Sulphates - 100 ml","price":"249","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/VitCToner1001_1280x.jpg?v=1631179976"},
    {"name":"Vitamin C Face Pack with Kakadu Plum and Mulberry Extract - Brightening and Anti Aging By Body Cupid - 100 ml","price":"499","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/FacePackVitC_1280x.jpg?v=1638883780"},
    {"name":"Vitamin C Makeup Remover With Built-In Face Brush (MICELLAR) - No Parabens, Sulphate, Silicones, Mineral Oil, Color - 150mL","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/VitCmakeupremoverwithbrush1501_1280x.jpg?v=1627644018"},
    {"name":"WOW Skin Science Brightening Vitamin C Foaming Face Wash - with Lemon & Orange Essential Oils - For Skin Brightening - No Parabens, Sulphate, Silicones & Color - 100 ml","price":"349","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/VitCFWwpump1_1280x.jpg?v=1625291045"}];
    
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