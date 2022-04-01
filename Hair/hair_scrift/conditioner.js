var wowProducts=

[{"name":"Green Tea & Tea Tree Anti-Dandruff Conditioner - NO Mineral Oil, Parabens, Silicones, Color & PEG - 300 ml","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/green_tea_conditioner_1024X1024_ce47bac0-6080-45ac-bead-dbb14a326b29_1280x.jpg?v=1595752516"},
{"name":" Himalayan Rose Conditioner with Rose Hydrosol, Coconut Oil, Almond Oil & Argan Oil - For Volumnising Hair, Anti Smelly Scalp - No Parabens, Mineral Oil, Silicones, Color & PEG - 300 ml","price":"399","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-Conditioner-1_1280x.jpg?v=1632475674"},
{"name":"Amla Hair Conditioner For Weak Hair - No Mineral Oil, Parabens, Silicones, Synthetic Color & PEG - 300 ml","price":"449","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/amla-hair-conditioner_1280x.jpg?v=1637773768"},
{"name":" Rice Water Conditioner with Rice Water, Rice Keratin & Lavender Oil for Damaged, Dry and Frizzy Hair - No Mineral Oil, Parabens, Silicones, Synthetic Color, PEG - 300mL","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/rice-water-conditioner-bottel_1280x.jpg?v=1628579217"},
{"name":"Green Tea & Tea Tree Anti-Dandruff Conditioner - No Mineral Oil, Parabens, Silicones, Color & PEG - 100 ml","price":"130","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/GTConditioner100D-shape1_375x.jpg?v=1631181300"},
{"name":"Moroccan Argan Oil Conditioner - 500 ml","price":"209","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/ArganConditioner5001_1280x.jpg?v=1632122741"},
{"name":"Coconut Milk Conditioner - 500 ml Coconut Milk Conditioner - 500 ml","price":"599","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/CoconutConditioner5001_375x.jpg?v=1632122743"},
{"name":"Mango Conditioner For Healthy Hair - No Mineral Oil, Parabens, Silicones, Synthetic Color, PEG - 300mL","price":"449","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Mangoconditioner1_1280x.jpg?v=1626442703"},
{"name":"Macadamia Nut Oil Conditioner  - Deeply Rejuvenating - Softening & Smoothening Care - No Mineral Oil, Parabens, Silicones & Color - 300ml","price":"449","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Macadamia-Nut-Hair-Oil-Conditioner-1_1280x.jpg?v=1639465286"},
{"name":"Onion Hair Conditioner - 250 ml","price":"374","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-conditioner-1_abe5971e-e531-43ff-80e8-59741802a9d8_375x.jpg?v=1638516086"},
{"name":"Onion Hair Conditioner - 250 ml","price":"374","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-conditioner-1_abe5971e-e531-43ff-80e8-59741802a9d8_375x.jpg?v=1638516086"},
{"name":"Sugarcane Conditioner - for Softening & Hydrating Care - 300 ml","price":"449","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Sugarcane-Conditioner-300-1_1280x.jpg?v=1645441845"}
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