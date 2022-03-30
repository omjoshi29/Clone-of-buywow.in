var bathProducts=[{"name":"Hair Vanish Sensitive No Parabens And Moneral Oil -100Ml","price":"399","ratings":"169 Reviews","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Hair-Vanish-Sensitive-1_845b49a6-0ac7-4781-9a61-1b688f44bae0_520x.jpg?v=1633325689"},
 {"name":"Hair Vanish For Women No Parabens And Moneral Oil -100Ml","price":"399","ratings":"24 Reviews","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Hair-Vanish-Women-1_7e162f7d-aadb-4903-b9c5-41850fcce4b9_520x.jpg?v=1633325633"},
 {"name":"Hair Vanish For Men No Parabens And Moneral Oil -100Ml","price":"399","ratings":"8Reviews","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Hair-Vanish-Men-1_cfb19fdf-9749-4766-a53e-12ea64566b8a_520x.jpg?v=1633325742"}];

    var bathDiv = document.getElementById("bathDiv");

    function appendProduct(bathProducts) {
        bathDiv.innerHTML = null;
        bathProducts.forEach(function (elem) {
            let image = document.createElement("img");
            image.src = elem.image;

            let name = document.createElement("p");
            name.innerText = elem.name;

            let price = document.createElement("p");
            price.innerText = "₹" + elem.price;

            // let ratings = document.createElement("p");
            // ratings.innerText = elem.ratings;

            let cartbtn = document.createElement("button");
            cartbtn.innerText = "Add to cart";
            cartbtn.setAttribute("id", "cartbtn");

            let box = document.createElement("div");
            box.append(image, name, price,  cartbtn);
            bathDiv.append(box);
        })
    }
    appendProduct(bathProducts);

    document.querySelector("#sorter").addEventListener("click", sortByPrice);
    function sortByPrice() {
        bathProducts.map(function (elem) {
            var sorting = document.querySelector("#sorter").value;
            console.log(sorting);
            if (sorting == "l2h") {
                bathProducts.sort(function (a, b) { return a.price - b.price })
                appendProduct(bathProducts)
            }
            else if (sorting == "h2l") {
                bathProducts.sort(function (a, b) { return b.price - a.price })
                appendProduct(bathProducts)
            }
            else if (sorting == "rl2h") {
                bathProducts.sort(function (a, b) { return a.ratings - b.ratings })
                appendProduct(bathProducts)
            }
            else if (sorting == "rh2l") {
                bathProducts.sort(function (a, b) { return b.ratings - a.ratings })
                appendProduct(bathProducts)
            }
            else if (sorting == "a2z") {
                function SortArray(x, y) {
                    if (x.name < y.name) { return -1; }
                    if (x.name > y.name) { return 1; }
                    return 0;
                }
                var s = bathProducts.sort(SortArray)
                appendProduct(s)
            }
            else if (sorting == "z2a") {
                function SortArray(x, y) {
                    if (x.name > y.name) { return -1; }
                    if (x.name < y.name) { return 1; }
                    return 0;
                }
                var s = bathProducts.sort(SortArray)
                appendProduct(s)
            }
        })
    }
// 
import footer from'./components/footer.js';
    document.getElementById("footer").innerHTML=footer();