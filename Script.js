
type="module" 

function serach() {
    document.getElementById("mySearch").style.width = "100%";
  }
  function openNav() {
    document.getElementById("mySidepanel").style.width = "800px";
  }
  function openNav1() {
    document.getElementById("mySidepanel1").style.width = "200px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  function closeNav1() {
    document.getElementById("mySidepanel1").style.width = "0";
  }

  function closeNavSeach() {
    document.getElementById("mySearch").style.width = "0";
  }




//   //debounce function
// function main()
// {
//   try{
    
//   let data= searchProduct()
//   // console.log(data)
  
//   if(data==undefined)
//   {
//       return false
//   }

//   appendVideo(data)
  

// }
// catch(err)
// {
//   console.log(err)
// }
// }

// let timerid;

// function debounce(func, delay)

// {


//   console.log(timerid)
 
//   if(timerid)
//   {
//       clearTimeout(timerid);
//   }
  
//    timerid=setTimeout(function()
//   {
//       func();
//   },delay);
// }


// function searchProduct(){
//     // console.log("hello");
//      var searchText=document.getElementById("searcch_Any_Produ").value.toLowerCase();
//         //  console.log(searchText);
//      var filterData=bathProducts.filter(function(elem){
//         return elem.name.toLowerCase().includes(searchText);
//      });
//     // console.log(filterData);
//     appendProduct(filterData);   
//  }

var cartArr = JSON.parse(localStorage.getItem("cartArr"));
console.log(cartArr);

var cartdiv1 = document.getElementById("cartdiv1");
 cartdiv1.innerText=""
var emptycart1 = document.getElementById("emptycart1");

var grandtotal1 = document.getElementById("grandtotal1");

var sum = 0;

function appendProduct(cartArr) {
    if (cartArr.length > 0) {
        cartdiv1.innerHTML = null;
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
            grandtotal1.innerText = "GRAND TOTAL: ₹" + sum;

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
            cartdiv1.append(box);
        });
    }
    else if (cartArr.length === 0) {
        emptycart1.innerHTML = null;

        document.getElementById("h1cart1").style.display = "none";

        let p1 = document.createElement("p");
        p1.innerText = "Your cart is empty!";

        let p2 = document.createElement("p");
        p2.innerText = "You have no items in your cart!"

        let btn = document.createElement("button");
        btn.innerText = "Check out our offerings!";

        emptycart1.append(p1, p2, btn);
    }
}

appendProduct(cartArr);




    
