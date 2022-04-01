
let cartArr= JSON.parse(localStorage.getItem("cartArr")) || [];

const append= (info,parent) =>{
    parent.innerHTML="";
 
    info.map((ele)=>{
    
     let div= document.createElement("div");
     div.setAttribute("id","div");
 
     let image= document.createElement("img");
     image.src= ele.image;
     image.setAttribute("id","image")
 
     let name= document.createElement("p");
     name.innerText= ele.name;
     name.setAttribute("id","det")
 
     let price= document.createElement("p");
     price.innerText= "₹"+ ele.price;
 
    let random= Math.floor(Math.random()*3000)+1000;

    let rating= document.createElement("p");
    rating.innerText= random + " " + "reviews";
    rating.setAttribute("id","rating");

     let star= document.createElement("img");
     star.src= "https://media.istockphoto.com/vectors/five-stars-rating-vector-id925469766?k=20&m=925469766&s=170667a&w=0&h=Z-e1FuriS6-RmQ4YRuZbPxaWFEWm41D9fiTaNCQIGy4=";
    star.setAttribute("id","star");

    let keep =  document.createElement("div");
    keep.setAttribute("id","keep");

    keep.append(star,rating);

    let btn= document.createElement("button");
    btn.innerText= "Add To Cart";
    btn.setAttribute("id","cartbtn")
    btn.addEventListener("click",()=>{
        goToCart(ele);
        location.reload();
    })

    div.append(image,name,price,keep,btn);
 
    parent.append(div);
 
    })
 }


 const goToCart= (ele)=>{
      cartArr.push(ele);
      localStorage.setItem("cartArr",JSON.stringify(cartArr));
    
 }




 
 export default append;