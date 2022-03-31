var wowProducts=

[
{"name":"Himalayan Rose Face Wash - for Cleansing & Toning - Infused with Rose Water & Beetroot Extract - for All Skin Types - No Parabens, Sulphates, Silicones & Color - 100 ml","price":"249","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/rose-face-wash_1280x.jpg?v=1639994975"},
{"name":"Himalayan Rose Foaming Face Wash with Built-in Face Brush - contains Rose Water & Aloe Vera Extract - for Cleansing & Toning - No Parabens, Sulphate, Silicones & Synthetic Color - 100 ml + 50 ml = 150 ml","price":"449","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-FW-150-1_1280x.jpg?v=1635146560"},
{"name":"Himalayan Rose Face & Body Scrub - with Rose Water & Beetroot Extract - 100 ml","price":"299","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/rose-face-scrub_1280x.jpg?v=1642589448"},
{"name":"Himalayan Rose Shampoo with Rose Hydrosol, Coconut Oil, Almond Oil & Argan Oil - For Volumnising Hair, Anti Smelly Scalp - No Parabens, Sulphate, Silicones, Color & PEG - 300 ml","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-Shampoo-1_1280x.jpg?v=1633611312"},
{"name":"Himalayan Rose Body Lotion -Toning & Hydrating - with Rose Water, Beetroot Extract - No Mineral Oil, Silicones & Color - 400 ml","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rosebodylotion1_bd191d4d-5dd6-4e57-b245-0e55bf6d6771_1280x.jpg?v=1626442695"},
{"name":"Himalayan Rose Shampoo with Rose Hydrosol, Coconut Oil, Almond Oil & Argan Oil - For Volumnising Hair, Anti Smelly Scalp - No Parabens, Sulphate, Silicones, Color & PEG - 200 ml","price":"249","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Roseshampoo2001_1280x.jpg?v=1631181027"},
{"name":"Himalayan Rose Conditioner with Rose Hydrosol, Coconut Oil, Almond Oil & Argan Oil - For Volumnising Hair, Anti Smelly Scalp - No Parabens, Mineral Oil, Silicones, Color & PEG - 300 ml","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-Conditioner-1_1280x.jpg?v=1632475674"},
{"name":"Himalayan Rose Body Butter - No Parabens, Silicones, Mineral Oil & Color - 200 ml","price":"499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-Body-Butter-1_1280x.jpg?v=1632718502"},
{"name":"Himalayan Rose Hair Mask with Rose Hydrosol, Coconut Oil, Almond Oil & Argan Oil - For Volumnising Hair, Anti Smelly Scalp - No Parabens, Sulphate, Silicones, Color & PEG - 200 ml","price":"499","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-hair-mask-1_d3274171-eab6-4c66-848f-23182cfa6ad5_1280x.jpg?v=1632477170"},
{"name":"Himalayan Rose Bathing Bar - 75g","price":"125","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-1_43aeb331-ef8b-4ffe-afe7-42a5285e16bf_1280x.jpg?v=1639386970"},
{"name":"Himalayan Rose Bathing Bar - 75g","price":"125","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-1_43aeb331-ef8b-4ffe-afe7-42a5285e16bf_1280x.jpg?v=1639386970"},
{"name":"Himalayan Rose Face Serum - with Rose Water, Rose Essential Oil & beetroot Extract - for Hydrating & Toning Skin - No Mineral Oil, Parabens, Silicones & Synthetic Color - 30mL","price":"599","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/rose-face-serum_1280x.jpg?v=1640844020"},
{"name":"Himalayan Rose Foaming Face Wash Refill Pack - with Rose Water & Aloe Vera Extract - For Extended Use - No Parabens, Sulphate, Silicones & Color - 200 ml","price":"399","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/REFILLRoseFW2_1280x.jpg?v=1631682688"},
{"name":"ROSE Ultimate Kit","price":"1347","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/rose_1024_1280x.jpg?v=1626442702"}
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