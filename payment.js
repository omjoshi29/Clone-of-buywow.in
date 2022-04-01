let arr= JSON.parse(localStorage.getItem("cartArr"));

let appendedCart= document.querySelector("#appendedCart");

const display = (arr)=>{
console.log(arr)
    appendedCart.innerHTML="";
    arr.map((ele)=>{
        let div= document.createElement("div");
        div.setAttribute("id","div");
     
        let image= document.createElement("img");
        image.src= ele.image;
        image.setAttribute("id",image);
     
        let name= document.createElement("p");
        name.innerText= ele.name;
     
        let price= document.createElement("p");
        price.innerText= ele.price;
     
        div.append(image,name,price);
       
        appendedCart.append(div)
     })
    
}

const showTotal= (arr)=>{
     let total_val= arr.reduce((acc,ele)=>{
        return acc+Number(ele.price);
     },0);
     document.querySelector("#total").innerText= total_val;
     let total2 = document.querySelector("#total2").innerText;
     document.querySelector("#finalAmount").innerText= Number(total_val)+ Number(total2);
    }

display(arr);
showTotal(arr);




let diffForm= document.querySelector("#diffForm");

import add from "./components_payment/add.js";

document.querySelector("#method2").addEventListener("click",()=>{
 clicked();
});

const clicked= ()=>{
 diffForm.innerHTML= add();
}
document.querySelector("#method1").addEventListener("click",()=>{
 clicked2();
});

const clicked2= ()=>{
 diffForm.innerHTML= null;
}


document.querySelector("#apply").addEventListener("click",()=>{
discount();
})

let val= document.querySelector("#finalAmount").innerText;

const discount = ()=>{

let coupon= document.querySelector("#voucher").value;

if(coupon == "wow30"){
  
    let new_val = Math.ceil(val *30/100);
    console.log(new_val)
    document.querySelector("#finalAmount").innerText= val - new_val;
}

}

window.reload();