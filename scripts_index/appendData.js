const append= (info,parent) =>{
    parent.innerHTML="";
 
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
 
    div.append(image,name,price);
 
    parent.append(div);
 
    })
 }
 
 export default append;