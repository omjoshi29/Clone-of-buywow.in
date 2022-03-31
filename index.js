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
    
    let arr2=[
        {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/Sunscreen-35-d-shape-100-1_410x.jpg?v=1612964500",
              title:"Sunscreen Matte Finish - SPF 35 PA++ - Daily Broad Spectrum - UVA..",
              price:"₹375.00",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/UV-Water-Sunscreen-2_410x.jpg?v=1635404415",
              title:"UV Water Transparent Sunscreen Spray SPF 30 - Quick Absorbing - Oil..",
              price:"₹399.00",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/Sunscreenserum353_410x.jpg?v=1631515529",
              title:"Matte Finish Sunscreen Face Serum SPF 35 PA++ With Raspberry, Carrot..",
              price:"₹599.00",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/am2pm_1_410x.jpg?v=1595019662",
              title:"AM2PM SPF50 Water Resistant No Parabens & Mineral Oil Sunscreen",
              price:"₹349.00",
          
          },
    ]
    
    let arr3= [
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
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/Hair_Strengthening_Regime_410x.jpg?v=1575982162",
              title:"Onion Hair Oil Ultimate Hair Care Combo Kit For Hair Fall Control -",
              price:"₹1,299.00 ",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-Hair-Oil-with-Comb-200-1_410x.jpg?v=1646899880",
              title:"Onion Oil For Hair Fall Control With Comb Applicator - 200mL",
              price:"₹499.00",
          
          }
      ];
    
      let arr4=[
    {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/DSC0265_2_410x.jpg?v=1639212076",
              title:"Vitamin C Face Wash In Paper Tube (Eco Friendly Packaging) - No",
              price:"₹249.00",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/vitCFWbrush_410x.jpg?v=1643129922",
              title:"Vitamin C Face Wash With Built-In Foaming Face Brush For Skin",
              price:"₹399.00",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/vitCserum_1_410x.jpg?v=1643130400",
              title:"Vitamin C Face Serum For Skin Whitening - Brightening And",
              price:"₹699.00",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/vitCFWtube_410x.jpg?v=1643130531",
              title:"Brightening Vitamin C Face Wash For Improve Skin's Texture - 100 Ml",
              price:"₹249.00",
          
          }
    ]
    
    let arr5=[
    {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/Ubtan-FW-150-1_410x.jpg?v=1639421804",
              title:"Ubtan Foaming Face Wash With Built-In Face Brush For Tan Removal",
              price:"₹399.00",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/ubtan-face-wash-tube_410x.jpg?v=1639421776",
              title:"Ubtan Face Wash - 100mL",
              price:"₹249.00",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/Ubtan-scrub-1_e38d7e1b-f62f-4a66-87b8-42ef3e57f381_410x.jpg?v=1635142931",
              title:"Ubtan Face & Body Scrub With Chickpea Flour, Almond Shell",
              price:"₹399.00",
          
          },
          {
              img:"https://cdn.shopify.com/s/files/1/1375/4957/products/ubtan-serum-1_0cee3e90-4048-46d6-b838-24e0c755e32d_410x.jpg?v=1634724825",
              title:"Ubtan Face Serum - OIL FREE - For Anti Tanning, Radiance Boosting,",
              price:"₹599.00",
          
          }
    ]
      
    import append from "./scripts_index/appendData.js";
    
    let parent1= document.querySelector("#parent_1");
    append(arr,parent1);
    
    
    let parent2 = document.querySelector("#parent_2")
    append(arr2,parent2);
    
    let parent3= document.querySelector("#parent_3");
    append(arr3,parent3);
    
    let parent4= document.querySelector("#parent_4");
    append(arr4,parent4);
    
    let parent5= document.querySelector("#parent_5");
    append(arr5,parent5);
    
    import {footer} from "./components_index/footer.js";
    
    let bottom= document.querySelector("#bottom");
    
    bottom.innerHTML= footer();
    
    let head= document.querySelector("#head");
    
    import navbar from "./components_head/navbar.js";
    
    head.innerHTML= navbar();
    