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
  // console.log(data)
  
  if(data==undefined)
  {
      return false
  }

  appendVideo(data)
  

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


const searchProduct= ()=>{
    // console.log("hello");
     var searchText=document.getElementById("searcch_Any_Produ").value.toLowerCase();
        //  console.log(searchText);
     var filterData= bathproduct.filter(function(elem){
        return elem.name.toLowerCase().includes(searchText);
     });
    // console.log(filterData);
    appendProduct(filterData);   
 }

 