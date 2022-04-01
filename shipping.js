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



let item2= document.querySelector("#item2");

import add from "./components_payment/add.js";

item2.innerHTML= add();


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

let contact=[];
let contact2= [];
let Addressarr=[];

document.querySelector("#btn").addEventListener("click",()=>{

    let first= document.querySelector("#firs").value;
    let last = document.querySelector("#las").value;
    let address= document.querySelector("#address").value; 
    
    
    let fullName= first+last;
    console.log(fullName)
    
    contact.push(fullName);
    
    contact2.push(address);
    
    localStorage.setItem("Fullname",JSON.stringify(contact));
    
    localStorage.setItem("address",JSON.stringify(contact2));


    let name= document.querySelector("#firs").value;

    let street= document.querySelector("#address").value; 
    let City = document.querySelector("#city").value;
    let State=document.querySelector("#istate").value;
    let zip=document.querySelector("#pin").value;
    let number=document.querySelector("#call").value;
    var randomorder=Math.ceil(Math.random() *(100000*10));
    
    var addobj=
    {
      name,
      City,
      street,
      State,
      zip,
      number,
      randomorder
    }
    Addressarr.push(addobj)
   
    localStorage.setItem("Info",JSON.stringify(Addressarr));

    window.location.href= "payment.html"

});









