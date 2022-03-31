function serach() {
    document.getElementById("mySearch").style.width = "100%";
  }
  function openNav() {
    document.getElementById("mySidepanel").style.width = "700px";
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




  //debounce function
function main()
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

function debounce(func, delay)

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


function searchProduct(){
    // console.log("hello");
     var searchText=document.getElementById("searcch_Any_Produ").value.toLowerCase();
        //  console.log(searchText);
     var filterData=bathProducts.filter(function(elem){
        return elem.name.toLowerCase().includes(searchText);
     });
    // console.log(filterData);
    appendProduct(filterData);   
 }




    
