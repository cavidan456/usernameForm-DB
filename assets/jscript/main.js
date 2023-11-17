//https://dummyjson.com/products

const coursesData = document.getElementById("coursesData");

function dataFetch() {
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then (data => {
        let products = data.products
        // console.log(products);
        products.forEach(item =>{
            let div = document.createElement("div")
            div.innerHTML=`<div class="col-3">
            <img src="${item.thumbnail}">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <button>add to cart</button>
        </div>`
        coursesData.appendChild(div)
        })
    })
}
dataFetch()