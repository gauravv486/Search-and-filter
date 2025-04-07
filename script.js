let searchinput = document.getElementById('search');
let productList = document.querySelectorAll(".product-list");
let productNames = document.querySelectorAll('.product-list .product-name h2');

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

    if(word === ""){
        window
    }
}

searchinput.addEventListener("input", () => {
    const value = searchinput.value;
    findProduct(value);
});
