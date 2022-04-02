
let name= JSON.parse(localStorage.getItem("Fullname"));
let address= JSON.parse(localStorage.getItem("address"));


let Addressarr=[];
let final_amount= [];

let information= JSON.parse(localStorage.getItem("Info"));

console.log(name)

document.querySelector("#app1").innerText = name;
document.querySelector("#app2").innerText = address;

document.querySelector("#logo").addEventListener("click",()=>{
    window.location.href= "index.html"
})

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
// const getInfo= ()=>{

//     let name= document.querySelector("#firs").value;

//     let street= document.querySelector("#address").value; 
//     let City = document.querySelector("#city").value;
//     let State=document.querySelector("#istate").value;
//     let zip=document.querySelector("#pin").value;
//     let number=document.querySelector("#call").value;
//     var randomorder=Math.ceil(Math.random() *(100000*10));
    
//     var addobj=
//     {
//       name,
//       City,
//       street,
//       State,
//       zip,
//       number,
//       randomorder
//     }
//     Addressarr.push(addobj)
   
//     localStorage.setItem("Address",JSON.stringify(Addressarr));
// }



document.querySelector("#method1").addEventListener("click",()=>{
 clicked2();
});

const clicked2= ()=>{
 diffForm.innerHTML= null;

 localStorage.setItem("Address",JSON.stringify(information));

}


document.querySelector("#apply").addEventListener("click",()=>{
discount();
})



let value_final= document.querySelector("#finalAmount").innerText;

final_amount.push(value_final);

localStorage.setItem("finalAmount",JSON.stringify(final_amount));

const discount = ()=>{

let coupon= document.querySelector("#voucher").value;


if(coupon == "wow30"){
    let final_amount= [];

    let new_val = Math.ceil(value_final*30/100);
    console.log(new_val)
    document.querySelector("#finalAmount").innerText= value_final - new_val;

    let value_discount= document.querySelector("#finalAmount").innerText;

    final_amount.push(value_discount);

   localStorage.setItem("finalAmount",JSON.stringify(final_amount));
}

}


document.querySelector("#btn").addEventListener("click",()=>{
    window.location.href= "credentials.html"
})


