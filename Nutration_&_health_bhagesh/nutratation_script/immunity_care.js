var wowProducts=

[{"name":"Immunity Booster Capsules - Support Healthy Immune System - 60 Veg Capsules","price":"699","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/immunity-booster-capsules_1280x.jpg?v=1639722786"},
{"name":"Multivitamin for Women - with Vitamin A, Lutein & Lycopene - 60 Veg Capsules Multivitamin for Women - with Vitamin A, Lutein & Lycopene - 60 Veg Capsules","price":"699","ratings":"","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/multivitamin-capsules-for-women_375x.jpg?v=1638428329"},
{"name":"Organic Apple Cider Vinegar - 750mL","price":"499","ratings":4,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/apple-cider-vinegar-bottel_1280x.jpg?v=1627897442"},
{"name":" extra virgin coconut oil 1 extra virgin coconut oil 2 Extra Virgin Coconut Oil (Cold Pressed) For Skin & Hair - 400 ml","price":"499","ratings":3.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/extra-virgin-coconut-oil-bottel_375x.jpg?v=1629268984"},
{"name":" Probiotics 20 Billion CFU (14 Probiotic Strains) 500 mg - 60 Vegetarian Capsules","price":"999","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/probiotics-capsules_1280x.jpg?v=1638521199"},
{"name":"Glutathione with Milk Thistle Extract 500 mg - 30 Vegetarian Capsules","price":"599","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/glutathione-capsules_1280x.jpg?v=1639203726"},
{"name":"Vegetarian Wheatgrass Capsules 800mg - 60 Capsules","price":"599","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/wheatgrass-capsules_375x.jpg?v=1639388352"},
{"name":"Korean Ginseng Root Extract 60 Capsules Korean Ginseng Root Extract 60 Capsules","price":"799","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Ginseng1_1280x.jpg?v=1618808050"},
{"name":"Super Green Capsules - with Moringa, Wheatgrass, Spirulina, ACV, Beetroot, Chlorophyll & Pumpkin Seed - 550mg - 60 Veg Capsules","price":"699","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Supergreen1_1_375x.jpg?v=1618383267"},
{"name":" Immunity Booster Capsules + Super Green Capsules - Net Vol - 120 Veg Capsules","price":"1398","ratings":4.5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/combo_4_1280x.jpg?v=1614065848"},
{"name":"Immunity Booster Capsules - Support Healthy Immune System - 30 Veg Capsules","price":"399","ratings":5,"image":"https://cdn.shopify.com/s/files/1/1375/4957/products/ImmunityBooster30N1_1280x.jpg?v=1631180303"}
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
