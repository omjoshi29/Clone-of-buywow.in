var cartArr = JSON.parse(localStorage.getItem("cartArr"));
// console.log(cartArr);

var cartdiv = document.getElementById("cartdiv");

var emptycart = document.getElementById("emptycart");

var grandtotal = document.getElementById("grandtotal");

var sum = 0;

var grandtotalArr = JSON.parse(localStorage.getItem("grandTotal")) || [];

function appendProduct(cartArr) {
    cartdiv.innerHTML = null;
    if (cartArr.length > 0) {
       
        cartArr.forEach(function (elem, index) {
           
            let image = document.createElement("img");
            image.src = elem.image;

            let name = document.createElement("p");
            name.innerText = elem.name;

            let price = document.createElement("p");
            price.innerText = "₹" + elem.price;

            let control = document.createElement("div");
            control.setAttribute("class", "control");

            let minus = document.createElement("button");
            minus.innerText = "-";
            minus.setAttribute("id", "minus");
            minus.setAttribute("class", "bttn bttn-left");

            let input = document.createElement("input");
            input.type = "number";
            input.setAttribute("id", "input");
            input.setAttribute("class", "input");

            let plus = document.createElement("button");
            plus.innerText = "+";
            plus.setAttribute("id", "plus");
            plus.setAttribute("class", "bttn bttn-right");

            var quantity;

            if (elem.quant === undefined) {
                elem.quant = 1;
                quantity = 1;
                localStorage.setItem("cartArr", JSON.stringify(cartArr));
            }
            else {
                quantity = elem.quant;
            }

            input.value = elem.quant;

            minus.addEventListener('click', function (event) {
                if (quantity > 1) {
                    quantity--;
                    elem.quant = quantity;
                    localStorage.setItem("cartArr", JSON.stringify(cartArr));
                    input.value = elem.quant;
                    location.reload();
                }
            });

            plus.addEventListener('click', function (event) {
                quantity++;
                elem.quant = quantity;
                localStorage.setItem("cartArr", JSON.stringify(cartArr));
                input.value = elem.quant;
                location.reload();
            });

            control.append(minus, input, plus);

            let upprice = document.createElement("p");
            upprice.innerText = "₹" + (+elem.price) * elem.quant;

            sum += (+elem.price) * elem.quant;
            grandtotal.innerText = "GRAND TOTAL: ₹" + sum;
            grandtotalArr = [];
            grandtotalArr.push(sum);
            console.log("arr: " + sum);
            localStorage.setItem("grandTotal", JSON.stringify(grandtotalArr));

            let deletediv = document.createElement("div");
            deletediv.setAttribute("id", "deletediv");
            let i = document.createElement("i");
            i.setAttribute("class", "far far fa-trash-alt");
            deletediv.append(i);

            i.addEventListener("click", function () {
                event.preventDefault();
                cartArr.splice(index, 1);
                localStorage.setItem("cartArr", JSON.stringify(cartArr));
                alert("Product removed from the cart");
                location.reload();
            })

            let box = document.createElement("div");
            box.append(image, name, price, control, upprice, deletediv);
            cartdiv.append(box);
        });
    }
    else if (cartArr.length === 0) {
        emptycart.innerHTML = null;
        document.getElementById("paybutton").style.display = "none";
        document.getElementById("pay").style.display = "none";
        document.getElementById("h1cart").style.display = "none";

        let p1 = document.createElement("p");
        p1.innerText = "Your cart is empty!";

        let p2 = document.createElement("p");
        p2.innerText = "You have no items in your cart!"

        let btn = document.createElement("button");
        btn.innerText = "Check out our offerings!";

        emptycart.append(p1, p2, btn);

    }
}

appendProduct(cartArr);