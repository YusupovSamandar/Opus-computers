let products = [];

$(document).ready(function () {
    $.get("http://localhost:4000/products", function(data) {
        products = data;
        buildProductView(products);
    });
});

function buildProductView(elements){
    $("#products").empty();
    elements.forEach(element => {
        let proHtml = '<div class="col-md-4" data-aos="fade-up">' +
        '<div class="card hvr-grow">' +
            '<img class="card-img-top" +  src="' + element.image + '">' +
            '<div class="card-body">' +
                '<h4 class="card-title"><a>' + element.brand + '</a></h4>' +
                '<h3>' + element.price + '.00$</h3>' +
                '<p class="card-text">'  + element.description + '</p>' +
                '<p>' + element.rate + '</p>' +
                '<a href="#img/lenovo4.jpg" class="btn btn-primary">Submit</a>' + 
            '</div>' + 
        '</div>' +
    '</div>';
    $("#products").append(proHtml);
    });
    
}

/* filter */


// let brandName;

for (let i = 0; i < $(".boo").length; i++) {
    $(".boo")[i].addEventListener("click", function () {
        let brandName = this.innerHTML;
        brandFilter(brandName);
    });
}


// Searchbox setup
$("#search-box").on("keyup", function() {
    let searchText = $(this).val();
    let searchProds = products.filter((product)=> {
        let searchArea = JSON.stringify(product).toLowerCase();
        let srch = searchText.toLowerCase();
        if(searchArea.includes(srch)) {
            return true;
        } else {
            return false;
        }
    });
    buildProductView(searchProds);
});




function brandFilter(brandName) {
    let brandPro = [];
    if(brandName ==='All') {
        brandPro = products;
    } else {
        brandPro = products.filter((elem) => {
            if (elem.brand === brandName){
                return true;
            } else {
                return false;
            }
        });
    }

    buildProductView(brandPro);
}

function lowToHigh(){
    let sortLow = products.sort((a,b) => a.price - b.price);
    buildProductView(sortLow)
};
function highToLow(){
    let sortHigh = products.sort((a,b) => b.price - a.price);
    buildProductView(sortHigh)
};


function customerRate() {
    let rating = products.sort((a,b) => b.rate - a.rate);
    buildProductView(rating);
}


function aZ() {
    let sortedList = products.sort((a, b) => (a.brand > b.brand) ? 1 : -1);
    buildProductView(sortedList)
}
function zA() {
    let reversedList = products.sort((a, b) => (b.brand > a.brand) ? 1 : -1);
    buildProductView(reversedList);
}





/*Select js*/ 
let selected = document.querySelector(".selected");
let optionsContainer = document.querySelector(".options-container")

let optionList = document.querySelectorAll(".options")

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active")
});
optionList.forEach((o) => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active")
    });
})
