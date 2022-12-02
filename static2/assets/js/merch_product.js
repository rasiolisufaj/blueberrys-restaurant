products = [{
    "link": "./MerchandiseProducts/Mproduct1.html",
    "heading": "Ceramic mug",
    "price": "$40.00",
    "image": "../assets/img/merchaindise/M1.jpg"
},
{
    "link": "./MerchandiseProducts/Mproduct2.html",
    "heading": "Ceramic mug",
    "price": "$20.00",
    "image": "../assets/img/merchaindise/M2.jpg"
},
{
    "link": "./MerchandiseProducts/Mproduct3.html",
    "heading": "Ceramic mug",
    "price": "$999.00",
    "image": "../assets/img/merchaindise/M3.jpg"
},
{
    "link": "./MerchandiseProducts/Mproduct4.html",
    "heading": "Ceramic plates",
    "price": "$40.00",
    "image": "../assets/img/merchaindise/M4.jpg"
},
{
    "link": "./MerchandiseProducts/Mproduct5.html",
    "heading": "Gift card",
    "price": "$50.00",
    "image": "../assets/img/merchaindise/M5.jpg"
},
{
    "link": "./MerchandiseProducts/Mproduct6.html",
    "heading": "Gift card",
    "price": "$30.00",
    "image": "../assets/img/merchaindise/M6.jpg"
},
{
    "link": "./MerchandiseProducts/Mproduct7.html",
    "heading": "Glass bottle",
    "price": "$15.00",
    "image": "../assets/img/merchaindise/M7.jpg"
},
{
    "link": "./MerchandiseProducts/Mproduct8.html",
    "heading": "Organizing jars",
    "price": "$75.00",
    "image": "../assets/img/merchaindise/M8.jpg"
},
];
products_backup = products;
function returString(obj){
    return `
    <div class="Mproduct">
    <a href=${obj.link}>
      <img
        src=${obj.image}
        alt=""
        class="img-fluid"
    /></a>
    <div class="MnameAndPriceContainer">
      <div class="MnameOfProduct">
        <a href="./MerchandiseProducts/Mproduct1.html">${obj.heading}</a>
        <img
          src="../assets/img/merchaindise/heart.svg"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="MpriceOfProduct">
        ${obj.price}
        <img
          src="../assets/img/merchaindise/cartButton.svg"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>
  </div>`
}
parent_div = document.getElementsByClassName("merchandiseProductImage")[0];
function renderArray(){
    parent_div.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        parent_div.innerHTML += returString(products[i]);
    }
}
function setQueryParams(foo, bar){
    console.log("setting query", foo, bar);
    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search)
        searchParams.set(foo, bar);
        // var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
        var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString() + window.location.hash;
        history.pushState(null, '', newRelativePathQuery);
    }
}
function categoryFilter(e){
    cat = e.target.value;
    setQueryParams("category", cat);
    products = products_backup;
    if(cat == "all"){
        splitSort({target: {value: document.getElementsByClassName("orderby")[0].value}});
        renderArray();
        return;
    }
    parent_div.innerHTML = "";
    products = products.filter((item)=>{
        return item.heading.toLowerCase().includes(cat.toLowerCase());
    })
    renderArray();
    // for (let i = 0; i < products.length; i++) {
    //     if(products[i].heading.toUpperCase() == cat.toUpperCase()){
    //         parent_div.innerHTML += returString(products[i]);
    //     }
    // }

}
function priceSort(v){
    if(v == "low"){
        products.sort(function(a, b){
            return a.price.split("$")[1] - b.price.split("$")[1];
        })
    }else{
        products.sort(function(a, b){
            return b.price.split("$")[1] - a.price.split("$")[1];
        })
    }
    renderArray();
}
url_params = {
    "price-desc":"price",
    "price":"price",

}
function splitSort(e){
    v = e.target.value;
    console.log("split sort", v);
    // if ('URLSearchParams' in window) {
    //     var searchParams = new URLSearchParams(window.location.search)
    //     searchParams.set(url_params[v], v);
    //     // var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
    //     var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString() + window.location.hash;
    //     history.pushState(null, '', newRelativePathQuery);
    // }
    setQueryParams("sort", v);
    if(v=="price-desc")
        priceSort("high");
    else if(v=="price")
        priceSort("low");
    // else if(v=="name-asc")
    //     nameSort("low");
    // else if(v=="name-desc")
    //     nameSort("high");
}
function searchfxn(e){
    products = products_backup;
    v=document.getElementById("searchbar-input-tag").value;
    console.log(e);
    console.log("searching", v);
    setQueryParams("search", v);
    products = products.filter((item)=>{
        // console.log(item.heading.toLowerCase(), v.toLowerCase(), );
        return item.heading.toLowerCase().includes(v.toLowerCase());
    })
    renderArray();

}
function fillInputs(){
    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search)
        if(searchParams.get("category")){
            document.getElementById("product_cat").value = searchParams.get("category");
            categoryFilter({target:{value:searchParams.get("category")}});
        }
        if(searchParams.get("sort")){
            document.getElementsByClassName("orderby")[0].value = searchParams.get("sort");
            splitSort({target:{value:searchParams.get("sort")}});
        }
        if(searchParams.get("search")){
            document.getElementById("searchbar-input-tag").value = searchParams.get("search");
            searchfxn();
        }
    }
}
document.getElementById("product_cat").addEventListener("change", categoryFilter);
document.getElementsByClassName("orderby")[0].addEventListener("change", splitSort);
document.getElementsByClassName("searchbarImage")[0].addEventListener("click", searchfxn);
renderArray();
fillInputs();