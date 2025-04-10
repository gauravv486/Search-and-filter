let searchinput = document.getElementById('search');
let productList = document.querySelectorAll(".product-list");
let productNames = document.querySelectorAll('.product-list .product-name h2');
let productPrices = document.querySelectorAll('.product-list .product-name h3');

let filterbtn = document.querySelector("#Filter-btn");
let mainitem = document.querySelector(".main-item");

let productFilter = document.querySelector(".select-item-product select");
let priceFilter = document.querySelector(".select-item-price select");


function findProduct(word) {
    productNames.forEach((productName, index) => {
        let nameText = productName.textContent.toUpperCase();
        let searchText = word.toUpperCase();

        if (searchText === ""  ||  nameText.includes(searchText)) {
            // productList[index].style.display = "block";
            productList[index].style.display = "flex";

        } else {
            productList[index].style.display = "none";
        }
    });
}

function findfilterproduct(category="" , price=""){
    productNames.forEach((product , index)=>{
        let name = productNames[index].textContent.toUpperCase();
        let pricevalue = productPrices[index].textContent;

        let matchcategory = category === "" || name === category;
        let matchprice = price === "" || pricevalue === price;

        if(matchcategory && matchprice){
            productList[index].style.display = "flex";
        }
        else{
           productList[index].style.display = "none";
        }
    })
}

searchinput.addEventListener("input", () => {
    const value = searchinput.value;
    findProduct(value);
});

// filterbtn.addEventListener("click" , (event)=>{
//     mainitem.style.display = "flex";
// })

filterbtn.addEventListener("click", () => {
    mainitem.style.display = mainitem.style.display === "flex" ? "none" : "flex";
});

window.onload = () => {
    mainitem.style.display = "none";
};

productFilter.addEventListener("change" , (event)=>{
    let value1 = productFilter.value;
    let value2 = priceFilter.value;
    findfilterproduct(value1 , value2)
})

priceFilter.addEventListener("change" , (event)=>{
    findfilterproduct(productFilter.value , priceFilter.value)
})