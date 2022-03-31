

const serach= () =>{
    document.getElementById("mySearch").style.width = "100%";
  }
const openNav = () => {
    document.getElementById("mySidepanel").style.width = "700px";
  }
  const openNav1 = () =>{
    document.getElementById("mySidepanel1").style.width = "200px";
  }

const closeNav = () =>{
    document.getElementById("mySidepanel").style.width = "0";
  }
 const closeNav1= ()=>{
    document.getElementById("mySidepanel1").style.width = "0";
  }

 const closeNavSeach = ()=>{
    document.getElementById("mySearch").style.width = "0";
  }



  //debounce function
const main= ()=>
{
  try{
    
  let data= searchProduct()
   console.log(data)
  
  if(data==undefined)
  {
      return false
  }

  appendProducts(data)
  

}
catch(err)
{
  console.log(err)
}
}

let timerid;

const debounce= (func, delay)=>

{


  console.log(timerid)
 
  if(timerid)
  {
      clearTimeout(timerid);
  }
  
   timerid=setTimeout(function()
  {
      func();
  },delay);
}
let arr=[
  {
            img:"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-hair-oil-1_410x.jpg?v=1646380369",
            title:"Onion Hair Oil With Black Seed Oil Extracts Helps Control Hair Fall -",
            price:"₹499.00",
        
        },
        {
            img:"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-shampoo-1_410x.jpg?v=1646381279",
            title:"Onion Shampoo For Hair Growth And Hair Fall Control - 300mL",
            price:"₹499.00",
         
        },
        {
            img:"https://cdn.shopify.com/s/files/1/1375/4957/products/ACV-FW_410x.jpg?v=1643119836",
            title:"Apple Cider Vinegar Foaming Face Wash With Built-In Foaming Face Brush For Deep Cleansing",
            price:"₹399.00",
          
        }, 
        {
            img:"https://cdn.shopify.com/s/files/1/1375/4957/products/vitCFWbrush_410x.jpg?v=1643129922",
            title:"Vitamin C Face Wash With Built-In Foaming Face Brush For Skin Brightening - 150 Ml",
            price:"₹399.00",
         
        }
  ] 


const searchProduct= () =>{
    // console.log("hello");
     var searchText=document.getElementById("searcch_Any_Produ").value.toLowerCase();
        //  console.log(searchText);
     var filterData= arr.filter((elem)=>{
        return elem.title.toLowerCase().includes(searchText);
     });
    // console.log(filterData);
    return filterData;   
 }
 
 const appendProducts= (info) =>{
  // show.innerHTML="";
  var show= document.querySelector("#show");
 show.innerHTML=null;
console.log(info)
  info.map((ele)=>{
   
  
          let div= document.createElement("div");
          div.setAttribute("id","div");

          let image= document.createElement("img");
          image.src= ele.img;
          image.setAttribute("id","image")

          let name= document.createElement("p");
          name.innerText= ele.title;

          let price= document.createElement("p");
          price.innerText= ele.price;

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

          div.append(image,name,price,keep,btn);
        console.log(div)
          show.append(div);

  })
}

 