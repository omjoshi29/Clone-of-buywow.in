var wowProducts=

[{"name":" Aloe Vera Hydrating Gentle Face Wash - With Aloe leaf Extract, Hyaluronic Acid & Pro Vitamin B5 - For Cleansing, Hydrating Skin - No Parabens, Sulphate, Silicones & Color - 200 ml Aloe Vera Hydrating Gentle Face Wash - With Aloe leaf Extract, Hyaluronic Acid & Pro Vitamin B5 - For Cleansing, Hydrating Skin - No Parabens, Sulphate, Silicones & Color - 200 ml","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Aloe-FW-d-shape-1_d6e5d399-cab1-4d4a-811e-be4dbf16bb39_1280x.jpg?v=1635230209"},
{"name":"Pure Vitamin C Daily Face Gel with Aloe Vera - For Hydrating Skin & Brightening - Non Sticky - Light & Quick Absorbing - No Parabens, Silicones, Synthetic Fragrance & Color - 150 ml","price":"399","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/VitC-Day-Gel-1_1280x.jpg?v=1635416171"},
{"name":"Pure Vitamin C Sleeping Night Gel with Aloe Vera - Night Time Aid to Revive Dry, Dull & Aging Skin - Non Sticky - Light & Quick Absorbing - No Parabens, Silicones & Color - 150 ml","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/VitC-Night-Gel-1_1280x.jpg?v=1635416069"},
{"name":"Aloe Vera Face Wash With Hyaluronic Acid for Acne, Dry & Oily Skin - 100 ml","price":"249","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/aloe-vera-face-wash-benefits_2fbcbebf-c8d8-4d4a-a2ac-6e2f8e84debb_1280x.jpg?v=1626934536"},
{"name":"Foaming Aloe Vera Face Wash With Built-In Face Brush For Deep Cleansing","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Aloe-FW-150-1_1280x.jpg?v=1635146443"},
{"name":"Aloe Vera with Hyaluronic Acid and Pro Vitamin B5 Hydrating Gentle Face Wash Gel with Built-In Face Brush for Gentle Cleansing - No Parabens, Silicones & Color - Tube, 100 - ml","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Aloe-1_1280x.jpg?v=1597057670"},
{"name":"Lift & Firm Aloe Vera Gel infused with Hyaluronic Acid, Vitamin B & E,with Double Roller Massager for firming Cheeks, Neck & Jawline - No Parabens, Silicones, Color & Fragrance - 120 ml","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/aloe-gel_1280x.jpg?v=1596744294"},
{"name":"Aloe Vera Face Cream - Multi-Vitamin - Light Quick Absorbing - For Normal to Oily Skin - No Parabens, Silicones, Color, Mineral Oil & Synthetic Fragrance - 50 ml","price":"599","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Aloe-Vera-Cream-4_1280x.jpg?v=1635398682"},
{"name":"Aloe Vera with Green Tea Extract and Hyaluronic Acid Sleeping Pack - No Parabens, Silicones & Color - 100 ml","price":"349","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/3_1280x.jpg?v=1632722943"},
{"name":"Apple Cider Vinegar Shampoo - 300 ml with 99% Pure Aloe Vera Gel - 130 ml","price":"749","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/img_3_1280x.jpg?v=1595022324"},
{"name":"Aloe Vera Foaming Face Wash With Built-In Face Brush + Aloe Vera Peel Off Gel Mask + Aloe Vera Multi-Vitamin Face Cream","price":"1347","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/aloevera3kit_1280x.jpg?v=1630045981"}
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