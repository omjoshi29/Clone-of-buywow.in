  // ---- Navbar ----
  import navbar from ".././components/navbar.js";
      // console.log(navbar)
  let header=document.querySelector("#navbarinBody")
  header.innerHTML=navbar();

      //  ---- Footer ----
import footer from'../components/footer.js';
    document.getElementById("footer").innerHTML=footer();

    // ---- main ----

    let skinDiv = document.getElementById("skinDiv");

    const skinProducts =[
        {
          name: "Apple Cider Vinegar Foaming Face Wash with Built-In Foaming Face Brush for Deep Cleansing",
          price: "399",
          ratings: "4.0",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/ACV-FW_375x.jpg?v=1643119836"
        },
        {
          name: "Vitamin C Face Wash with Built-In Foaming Face Brush for Skin Brightening - 150 ml",
          price: "399",
          ratings: "3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/vitCFWbrush_375x.jpg?v=1643129922"
        },
        {
          name: "Caffeine Face Serum - Quick Absorbing - OIL FREE - Anti-Aging, Anti-Wrinkles & Acne; Refresh, Revive & Restore Skin - 30 ml",
          price: "599",
          ratings: "4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/caffeine-serum-3_33e4b96e-0b75-4ea4-9ee9-9062d3e9f434_375x.jpg?v=1634729074"
        },
        {
          name: "Vitamin C Face Serum for Skin Whitening - Brightening and Hyperpigmentation",
          price: "699",
          ratings: "4.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/vitCserum_1_1280x.jpg?v=1643130400"
        },
        {
          name: "Ubtan Foaming Face Wash with Built-In Face Brush for Tan Removal & Facial Cleansing - 150 ml",
          price: "399",
          ratings:"4.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Ubtan-FW-150-1_375x.jpg?v=1639421804"
        },
        {
          name: "Vitamin C Face Cream For Skin Whitening, Brightening & Hyperpigmentation",
          price: "599",
          ratings: "4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Vit-C-Cream-4_fbaccf05-787b-44e7-8152-b0edbda20313_375x.jpg?v=1635399354"
        },
        {
          name: "Ubtan Face Wash - 100mL 115 revi",
          price: "249",
          ratings: "4.0",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/ubtan-face-wash-tube_375x.jpg?v=1639421776"
        },
        {
          name: "Aloe Vera Gel for Skin and Hair",
          price: "299",
          ratings:"4.2",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/aloe-vera-gel-bottle_375x.jpg?v=1626425687"
        },
        {
          name: "Charcoal Foaming Face Wash with Built-In Face Brush for Deep Cleansing - 150 ml",
          price: "399",
          ratings: "4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Charcoal-FW-150-1_375x.jpg?v=1639421687"
        },
        {
          name: "Activated Charcoal Peel Off Mask - 100 ml",
          price: "399",
          ratings:"3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/peeloff_1_1280x.jpg?v=1643121694"
        },
        {
          name: "Sunscreen Matte Finish - SPF 35 PA++ - Daily Broad Spectrum - UVA &UVB Protection - Quick Absorb - for All Skin Types - No Parabens, Silicones, Mineral Oil, Oxide, Color & Benzophenone",
          price: "375",
          ratings:"4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Sunscreen-35-d-shape-100-1_1280x.jpg?v=1612964500"
        },
        {
          name: "Activated Charcoal Face Wash for Blackheads, Pimples & Oily Skin - 100 ml",
          price: "249",
          ratings: "3.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/charcoal-face-wash_1280x.jpg?v=1639475935"
        },
        {
          name: "Green Tea Face Moisturizer for Acne Oily Skin - 100 ml",
          price: "349",
          ratings:"4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/GTMoisturizer1_1280x.jpg?v=1603367225"
        },
        {
          name: "Aloe Vera Face Wash With Hyaluronic Acid for Acne, Dry & Oily Skin - 100 ml",
          price: "249",
          ratings: "4.0",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/aloe-vera-face-wash-tube_1280x.jpg?v=1626934537"
        },
        {
          name: "Anti Aging Night Cream - 50 ml",
          price: "699",
          ratings: "4.0",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/anti-aging-night-cream_1280x.jpg?v=1640932739"
        },
        {
          name: "Foaming Aloe Vera Face Wash With Built-In Face Brush For Deep Cleansing Foaming Aloe Vera Face Wash With Built-In Face Brush For Deep Cleansing Foaming Aloe Vera Face Wash With Built-In Face Brush For Deep Cleansing Foaming Aloe Vera Face Wash With Built-In Face Brush For Deep Cleansing Foaming Aloe Vera Face Wash With Built-In Face Brush For Deep Cleansing",
          price: "139",
          ratings:"4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Aloe-FW-150-1_1280x.jpg?v=1635146443"
        },
        {
          name: " Sunscreen Matte Finish - SPF 55 PA+++ - Very High Broad Spectrum - UVA &UVB Protection - Quick Absorb - No Parabens, Silicones, Mineral Oil, Oxide, Color & Benzophenone - 100 ml Sunscreen Matte Finish - SPF 55 PA+++ - Very High Broad Spectrum - UVA &UVB Protection - Quick Absorb - No Parabens, Silicones, Mineral Oil, Oxide, Color & Benzophenone - 100 ml Sunscreen Matte Finish - SPF 55 PA+++ - Very High Broad Spectrum - UVA &UVB Protection - Quick Absorb - No Parabens, Silicones, Mineral Oil, Oxide, Color & Benzophenone - 100 ml Sunscreen Matte Finish - SPF 55 PA+++ - Very High Broad Spectrum - UVA &UVB Protection - Quick Absorb - No Parabens, Silicones, Mineral Oil, Oxide, Color & Benzophenone - 100 ml Sunscreen Matte Finish - SPF 55 PA+++ - Very High Broad Spectrum - UVA &UVB Protection - Quick Absorb - No Parabens, Silicones, Mineral Oil, Oxide, Color & Benzophenone - 100 ml Sunscreen Matte Finish - SPF 55 PA+++ - Very High Broad Spectrum - UVA &UVB Protection - Quick Absorb - No Parabens, Silicones, Mineral Oil, Oxide, Color & Benzophenone - 100 ml Sunscreen Matte Finish - SPF 55 PA+++ - Very High Broad Spectrum - UVA &UVB Protection - Quick Absorb - No Parabens, Silicones, Mineral Oil, Oxide, Color & Benzophenone - 100 ml",
          price: "499",
          ratings: "4.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Sunscreen-55-d-shape-100-1_1280x.jpg?v=1612964678"
        },
        {
          name: "Ubtan Face & Body Scrub with Chickpea Flour, Almond Shell Powder, Safron & Turmeric Extracts, Rose Water & Sandalwood Oil Scrub - 200 ml",
          price: "399",
          ratings:"4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Ubtan-scrub-1_e38d7e1b-f62f-4a66-87b8-42ef3e57f381_1280x.jpg?v=1635142931"
        },
        {
          name: "Vitamin C Skin Mist Toner with Lemon Essential Oil, Orange Essential Oil Witch Hazel & Aloe Vera Extracts - For All Skin Types - No Parabens, Silicones, Mineral Oil & Sulphates Vitamin C Skin Mist Toner with Lemon Essential Oil, Orange Essential Oil Witch Hazel & Aloe Vera Extracts - For All Skin Types - No Parabens, Silicones, Mineral Oil & Sulphates Vitamin C Skin Mist Toner with Lemon Essential Oil, Orange Essential Oil Witch Hazel & Aloe Vera Extracts - For All Skin Types - No Parabens, Silicones, Mineral Oil & Sulphates Vitamin C Skin Mist Toner with Lemon Essential Oil, Orange Essential Oil Witch Hazel & Aloe Vera Extracts - For All Skin Types - No Parabens, Silicones, Mineral Oil & Sulphates Vitamin C Skin Mist Toner with Lemon Essential Oil, Orange Essential Oil Witch Hazel & Aloe Vera Extracts - For All Skin Types - No Parabens, Silicones, Mineral Oil & Sulphates Vitamin C Skin Mist Toner with Lemon Essential Oil, Orange Essential Oil Witch Hazel & Aloe Vera Extracts - For All Skin Types - No Parabens, Silicones, Mineral Oil & Sulphates Vitamin C Skin Mist Toner with Lemon Essential Oil, Orange Essential Oil Witch Hazel & Aloe Vera Extracts - For All Skin Types - No Parabens, Silicones, Mineral Oil & Sulphates",
          price: "399",
          ratings:"4.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/VitC-Toner-200-1_1280x.jpg?v=1635404642"
        },
        {
          name: "Anti Acne Face Wash - Oil Free - No Parabens, Sulphate, Silicones & Color - 100 ml",
          price: "249",
          ratings: "4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/anti-acne_375x.jpg?v=1595012729"
        },
        {
          name: "Activated Charcoal Face Scrub - No Parabens & Mineral Oil - 100 ml",
          price: "375",
          ratings: "3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/charcoal-face-scrub_1280x.jpg?v=1640165154"
        },
        {
          name: "Retinol Face Serum - OIL FREE - Skin Plumping, Boost Collagen, Anti Acne, Anti Aging, Restoration - No Parabens, Silicones & Mineral Oil - 30 ml",
          price: "599",
          ratings:"4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/retinol-serum-3_1280x.jpg?v=1634725264"
        },
        {
          name: "99% Pure Aloe Vera Gel - 250 ml",
          price: "399",
          ratings: "3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/AloeVeraGel2501_1280x.jpg?v=1618823965"
        },
        {
          name: "Ubtan Face Serum - OIL FREE - For Anti Tanning, Radiance Boosting, Rejuvenating Skin - No Parabens, Silicones - 30 ml",
          price: "599",
          ratings: "4.2",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/ubtan-serum-1_0cee3e90-4048-46d6-b838-24e0c755e32d_1280x.jpg?v=1634724825"
        },
        {
          name: "WOW Skin Science Organic Apple Cider Vinegar Face Moisturizer - Oil Free, Quick Absorbing - For Normal/Oily and Acne Prone Skin - No Parabens, Silicones, Mineral Oil, Color - 100 ml - BuyWow WOW Skin Science Organic Apple Cider Vinegar Face Moisturizer - Oil Free, Quick Absorbing - For Normal/Oily and Acne Prone Skin - No Parabens, Silicones, Mineral Oil, Color - 100 ml - BuyWow Organic Apple Cider Vinegar Face Moisturizer - Oil Free, Quick Absorbing - For Normal/Oily and Acne Prone Skin - No Parabens, Silicones, Mineral Oil, Color - 100 ml",
          price: "349",
          ratings:"3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/moisturizer-1_1280x.jpg?v=1577348065"
        },
        {
          name: "Brightening Vitamin C Face Wash - with Mulberry & Liquorice Extracts, Lemon & Orange Essential Oils - For Brightening Skin Tone - No Parabens, Sulphate, Silicones & Color - 200 ml",
          price: "399",
          ratings: "4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/VitCFWD-shape1_1280x.jpg?v=1618827223"
        },
        {
          name: "Anti Acne Face Serum - Natural Neem Leaf Oil, Tea Tree Oil, Caviar Lime Fruit Extract - Spot Therapy - No Parabens, Silicones & Fragrance - 30 ml",
          price: "599",
          ratings: "3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/anti-acne-1_1280x.jpg?v=1595183853"
        },
        {
          name: "Vitamin C Hand & Nail Cream - Moisturizing & Refreshing - Lightweight & Non-Greasy - Quick Absorb - for All Skin Types - 50 ml Vitamin C Hand & Nail Cream - Moisturizing & Refreshing - Lightweight & Non-Greasy - Quick Absorb - for All Skin Types - 50 ml",
          price: "122",
          ratings: "4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/VitC-hand_nail-cream-1_1280x.jpg?v=1634023075"
        },
        {
          name: "Himalayan Rose Foaming Face Wash with Built-in Face Brush - contains Rose Water & Aloe Vera Extract - for Cleansing & Toning - No Parabens, Sulphate, Silicones & Synthetic Color - 100 ml + 50 ml = 150 ml",
          price: "157",
          ratings:"5.0",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Rose-FW-150-1_1280x.jpg?v=1635146560"
        },
        {
          name: "Vitamin C+(Plus) Face Serum - Vitamin C 20%, Ferulic Acid 1% - Brightening, Anti-Aging Skin Repair, Decrease formation of Fine Lines, Wrinkles & Brown Spots - Glass Bottle - 30 ml",
          price: "699",
          ratings: "4.0",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/VitC_-serum-3_1280x.jpg?v=1634723128"
        },
        {
          name: "Vitamin C Clay Face Mask with Lemon & Orange Essential Oils, Jojoba Oil & Bentonite Clay - For Skin Brightening - 200 ml",
          price: "599",
          ratings: "4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/vitamin-c-face-pack_1280x.jpg?v=1639635772"
        },
        {
          name: "Apple Cider Vinegar Face Wash - No Parabens, Sulphate, Silicones & Color - 100 ml",
          price: "249",
          ratings: "4.2",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/acv_a389a3bb-abdc-4f0a-9679-192e1b74212a_1280x.jpg?v=1639421596"
        },
        {
          name: "Coconut Hydrating Face Wash with Coconut Water, Aloe Leaf Extract - For Clarifying, Softening & Brightening Skin - For Dry/Normal Skin - No Parabens, Sulphate, Silicones & Color - 100 ml",
          price: "87",
          ratings:"4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/coconut_6ae9c23e-f7da-494d-9840-d1e16e902421_1280x.jpg?v=1595014339"
        },
        {
          name: "Activated Charcoal Face Wash Gel with Built-In Face Brush for Removing Impurities - No Parabens, Sulphate, Silicones & Color - Tube, 100 ml",
          price: "199",
          ratings:"4.2",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Untitled-1_1280x.jpg?v=1602147351"
        },
        {
          name: "Aloe Vera with Hyaluronic Acid and Pro Vitamin B5 Hydrating Gentle Face Wash Gel with Built-In Face Brush for Gentle Cleansing - No Parabens, Silicones & Color - Tube, 100 - ml",
          price: "139",
          ratings: "4.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Aloe-1_1280x.jpg?v=1597057670"
        },
        {
          name: "Anti Acne Face Wash - with Tea Tree Essential Oil, Neem Leaf Extracts - For Controlling Acne, Blackheads & Spots - No Parabens, Sulphate, Silicones & Color - 200 ml Anti Acne Face Wash - with Tea Tree Essential Oil, Neem Leaf Extracts - For Controlling Acne, Blackheads & Spots - No Parabens, Sulphate, Silicones & Color - 200 ml",
          price: "399",
          ratings: "4.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/AA-Face-Wash-D-shape-1_1280x.jpg?v=1635230963"
        },
        {
          name: "UV Water Transparent Sunscreen Spray SPF 30 - Quick Absorbing - Oil Free - with Raspberry Extract, Carrot Seed Extract, Avocado Oil - No Parabens, Silicones, Mineral Oil, Oxide, Color & Benzophenone - 100 ml",
          price: "399",
          ratings: "4.0",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/UV-Water-Sunscreen-2_1280x.jpg?v=1635404415"
        },
        {
          name: "Lift & Firm Aloe Vera Gel infused with Hyaluronic Acid, Vitamin B & E,with Double Roller Massager for firming Cheeks, Neck & Jawline - No Parabens, Silicones, Color & Fragrance - 120 ml",
          price: "209",
          ratings: "3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/aloe-gel_1280x.jpg?v=1596744294"
        },
        {
          name: "Vitamin C Face Wash In Paper Tube (Eco Friendly Packaging) - No Parabens, Sulphate, Silicones & Color - 100ml",
          price: "249",
          ratings: "3.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/DSC0265_2_1280x.jpg?v=1639212076"
        },
        {
          name: " Green Tea Face Wash Gel - contains Green Tea, Aloe Leaf Extracts, Pro-Vitamin B5 & Vitamin E - for Purifying Skin - No Parabens, Sulphate, Silicones & Color - 100 ml Green Tea Face Wash Gel - contains Green Tea, Aloe Leaf Extracts, Pro-Vitamin B5 & Vitamin E - for Purifying Skin - No Parabens, Sulphate, Silicones & Color - 100 ml",
          price: "249",
          ratings:"4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/GT-Face-Wash-tube-1_1280x.jpg?v=1603446208"
        },
        {
          name: "Gold Clay Face Mask for Hydrating Skin & Restoring Radiance - No Parabens, Sulphate, Mineral Oil & Color - 200 ml",
          price: "499",
          ratings: "3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Gold-Face-Mask-1_c5f1c6da-0bb0-4618-9c57-edf122f5197b_1280x.jpg?v=1635329478"
        },
        {
          name: "Activated Charcoal Face Wash - with Activated Charcoal & Tea Tree Oil Beads - Removes Pollutants & Dirt - No Parabens, Sulphate, Silicones & Color - 200 ml",
          price: "399",
          ratings: "4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/charcoal-FW-d-shape-1_1280x.jpg?v=1635230334"
        },
        {
          name: "Ubtan Foaming Face Wash for Deep Cleansing - with Chickpea Flour, Turmeric, Saffron & Almond Extracts - No Parabens, Sulphate, Silicones & Color - 100 ml",
          price: "349",
          ratings: "3.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Ubtan-FW-wpump-1_1280x.jpg?v=1606418368"
        },
        {
          name: "Moroccan Argan Oil Foaming Face Wash with Built-in Brush - 150 ml",
          price: "139",
          ratings: "3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/argan-oil-face-wash_1280x.jpg?v=1638956457"
        },
        {
          name: "Blemish Care Serum - OIL FREE - Anti Acne, Spot Reducing - No Parabens, Silicones, Synthetic Fragrance & Color - 50 ml",
          price: "499",
          ratings:"4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Blemish-Care-serum-3_1280x.jpg?v=1634729247"
        },
        {
          name: "Lavender & Rose No Parabens & Sulphate Skin Mist Toner - 200 ml",
          price: "174",
          ratings:"4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Lavender-_-Rose-Toner-1_1280x.jpg?v=1646306708"
        },
        {
          name: "Retinol Face Cream - Oil Free, Quick Absorbing - For All Skin Types - No Parabens, Silicones, Color, Mineral Oil & Synthetic Fragrance - 50 ml",
          price: "599",
          ratings: "3.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/retinol-face-cream_1280x.jpg?v=1639561124"
        },
        {
          name: "Anti-Acne Neem & Tea Tree Clay Face Mask for Refreshing & Refining Acne Prone Skin - For All Skin Types - 200 ml",
          price: "174",
          ratings: "3.0",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/anti-acne-neem-face-pack_1280x.jpg?v=1641031398"
        },
        {
          name: "Apple Cider Vinegar Foaming Face Wash Refill Pack - with Organic Certified Himalayan Apple Cider Vinegar - For Extended Use - No Parabens, Sulphate, Silicones & Color - 200 ml",
          price: "299",
          ratings: "4.4",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/ACV-Refill-1_1280x.jpg?v=1634907571"
        },
        {
          name: "Brightening Vitamin C Foaming Face Wash Combo Pack - FOREVER FRESH FACE - Total 350 ml",
          price: "699",
          ratings: "4.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/VitC-box-3_1280x.jpg?v=1634023397"
        },
        {
          name: "Aloe Vera Face Cream - Multi-Vitamin - Light Quick Absorbing - For Normal to Oily Skin - No Parabens, Silicones, Color, Mineral Oil & Synthetic Fragrance - 50 ml",
          price: "209",
          ratings: "3.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Aloe-Vera-Cream-4_1280x.jpg?v=1635398682"
        },
        {
          name: "Ubtan Face Wash - 200 ml",
          price: "399",
          ratings: "4.7",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/UbtanFWD-shape1_1280x.jpg?v=1618826902"
        },
        {
          name: "Brightening Vitamin C Foaming Face Wash Refill Pack - with Natural Actives - For Skin Brightening and Smooth Skin - 200 ml",
          price: "399",
          ratings: "3.3",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/VitC-REfill-FW-1_594c50a1-f037-43ae-8d5c-3e27433b6113_1280x.jpg?v=1634020002"
        },
        {
          name: "Aloe Vera with Green Tea Extract and Hyaluronic Acid Sleeping Pack - No Parabens, Silicones & Color - 100 ml",
          price: "122",
          ratings: "5.0",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/Aloe-Vera-Sleepinh-Pack-1_1280x.jpg?v=1635328479"
        },
        {
          name: "Hyaluronic Acid Face Serum - Soothing & Repairing Dry and Aging Skin - For All Skin Types - No Parabens, Silicones & Mineral Oil - 30 ml Hyaluronic Acid Face Serum - Soothing & Repairing Dry and Aging Skin - For All Skin Types - No Parabens, Silicones & Mineral Oil - 30 ml Hyaluronic Acid Face Serum - Soothing & Repairing Dry and Aging Skin - For All Skin Types - No Parabens, Silicones & Mineral Oil - 30 ml",
          price: "699",
          ratings: "4.5",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/hyaluronic-face-serum_1280x.jpg?v=1640771619"
        },
        {
          name: "Anti Aging Night Face Serum - OIL FREE - Anti Wrinkle, Anti Dullness, Reviving - No Parabens, Silicones & Color - 50 ml",
          price: "599",
          ratings: "4.8",
          image: "https://cdn.shopify.com/s/files/1/1375/4957/products/AA-serum-1_1280x.jpg?v=1634729695"
        }
      ];
      
      
var cartArr = JSON.parse(localStorage.getItem('cartArr')) || [];

function appendProduct(skinProducts) {
  skinDiv.innerHTML = null;
  skinProducts.forEach(function (elem) {
    let image = document.createElement("img");
    image.src = elem.image;

    let name = document.createElement("p");
    name.innerText = elem.name;

    let price = document.createElement("p");
    price.innerText = "₹" + elem.price;

    let ratings = document.createElement("p");
    ratings.innerText = elem.ratings;

    var div1 = document.createElement("div");
    div1.setAttribute("class", "Stars");
    div1.style = `--rating: ${elem.ratings};`;

    var ratingdiv = document.createElement("div");
    ratingdiv.setAttribute("id", "ratingdiv");
    ratingdiv.append(ratings, div1);

    let cartbtn = document.createElement("button");
    cartbtn.innerText = "Add to cart";
    cartbtn.setAttribute("id", "cartbtn");

    cartbtn.addEventListener("click", function (event) {
      event.preventDefault();
      cartArr.push(elem);
      localStorage.setItem("cartArr", JSON.stringify(cartArr));
      console.log(cartArr);
      alert("Product added to the cart!");
    })

    let box = document.createElement("div");
    box.append(image, name, price, ratingdiv, cartbtn);
    skinDiv.append(box);
  });
}
appendProduct(skinProducts);


document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
    skinProducts.map(function (elem) {
        var sorting = document.querySelector("#sorter").value;
        // console.log(sorting);
        if (sorting == "l2h") {
            skinProducts.sort(function (a, b) { return a.price - b.price })
            appendProduct(skinProducts)
        }
        else if (sorting == "h2l") {
            skinProducts.sort(function (a, b) { return b.price - a.price })
            appendProduct(skinProducts)
        }
        else if (sorting == "rl2h") {
            skinProducts.sort(function (a, b) { return a.ratings - b.ratings })
            appendProduct(skinProducts)
        }
        else if (sorting == "rh2l") {
            skinProducts.sort(function (a, b) { return b.ratings - a.ratings })
            appendProduct(skinProducts)
        }
        else if (sorting == "a2z") {
            function SortArray(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            var s = skinProducts.sort(SortArray)
            appendProduct(s)
        }
        else if (sorting == "z2a") {
            function SortArray(x, y) {
                if (x.name > y.name) { return -1; }
                if (x.name < y.name) { return 1; }
                return 0;
            }
            var s = skinProducts.sort(SortArray)
            appendProduct(s)
        }
    })
}