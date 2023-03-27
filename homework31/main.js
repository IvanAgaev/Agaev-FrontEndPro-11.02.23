const products = [
    {
        'id': 1,
        'title': 'Airpods 2 Charging Case',
        "description": "Ergonomic and light wireless earphones",
        "price": 120,
        "category": "AirPods",
        "image": "https://jabko.ua/image/cache/catalog/products/2022/05/161448/MV7N2_AV3%20(1)%20(1)-1397x1397.jpg.webp"
    },
    {
        'id': 2,
        'title': 'Airpods 2  Wireless Case',
        "description": "Ergonomic and light wireless earphones with wireless case",
        "price": 140,
        "category": "AirPods",
        "image": "https://jabko.ua/image/cache/catalog/products/2022/05/161448/MV7N2_AV3%20(1)%20(1)-1397x1397.jpg.webp"


    },
    {
        'id': 3,
        'title': 'Iphone 11',
        "description": "Best phone ever",
        "price": 1000,
        "category": "Iphone",
        "image": "https://jabko.ua/image/cache/catalog/products/2022/04/081829/iphone11-green-select-2019%20(1)-1397x1397.jpg.webp"

    },
    {
        'id': 4,
        'title': 'Iphone 12',
        "description": "Best phone ever",
        "price": 1200,
        "category": "Iphone",
        "image": "https://jabko.ua/image/cache/catalog/products/2022/04/081325/iphone-12-blue-select-2020-1397x1397.jpg.webp"
    },
    {
        'id': 5,
        'title': 'Ipad Air',
        "description": "Best tablet ever",
        "price": 800,
        "category": "Ipad",
        "image": "https://jabko.ua/image/cache/catalog/products/2022/03/082328/ipad-air-select-wifi-starlight-2-1397x1397.jpg.webp"
    },
    {
        'id': 6,
        'title': 'Ipad Pro',
        "description": "Best tablet ever",
        "price": 1400,
        "category": "Ipad",
        "image": "https://jabko.ua/image/cache/catalog/products/2022/10/181934/ipad-pro-11-select-wifi-spacegra-1397x1397.jpg.webp"
    },
    {
        'id': 7,
        'title': 'MacBook Air',
        "description": "Best laptop ever",
        "price": 1000,
        "category": "Mac",
        "image": "https://jabko.ua/image/cache/catalog/products/2020/11/111146/3-3%20(3)-1397x1397.jpg.webp"
    },
    {
        "id": 8,
        "title": "MacBook Pro",
        "description": "Best laptop ever",
        "price": 1300,
        "category": "Mac",
        "image": "https://jabko.ua/image/cache/catalog/products/2020/11/111209/5-2-1397x1397.jpg.webp"
    }



];

const productsById = products.reduce((prev, item) => {
    prev[item.id] = item;
    return prev;

}, {});


const productsByCategory = products.reduce((prev, item) => {
    if (!Array.isArray(prev[item.category])) {
        prev[item.category] = [];
    }

    prev[item.category].push(item);
    return prev;

}, {});

const categoriesList = Object.keys(productsByCategory);
let selectedCategory = 0;
let selectedProduct = 0;
const containerCategories = document.querySelector("[data-component=\"categories\"]");
const containerProducts = document.querySelector("[data-component=\"products\"]");
const containerDetails = document.querySelector("[data-component=\"details\"]");

containerCategories.addEventListener("click", handleCategory);
containerProducts.addEventListener("click", handleProduct)
containerDetails.addEventListener("click", handlePurchase);
renderCategories();
renderProducts();
renderDetails();

function renderCategories() {
    containerCategories.innerHTML = "";
    categoriesList.forEach(category => {
        const link = document.createElement('button');
        link.setAttribute("class", "list-group-item list-group-item-action category-item");
        link.setAttribute("data-category", category);
        link.textContent = category;
        if (category === selectedCategory) {
            link.classList.add("active");
        }
        containerCategories.append(link);


    })

};

function renderProducts() {
    containerProducts.innerHTML = "";
    if (selectedCategory !== 0) {
        productsByCategory[selectedCategory].forEach(product => {
            const link2 = document.createElement("button");
            link2.setAttribute("class", "list-group-item list-group-item-action category-item");
            link2.setAttribute("data-product", product.id);
            link2.textContent = product.title;
            if (product.id === selectedProduct) {
                link2.classList.add("active");
            }
            containerProducts.append(link2);

        })
    }
};

function renderDetails() {
    containerDetails.innerHTML = "";
    if (selectedProduct !== 0) {
        const product = productsById[selectedProduct];
   
       
        containerDetails.innerHTML = `
         <div class="card">
             <div class="card-body">
                <img src= "${product.image}" alt="${product.title}"
                                    class="card-img-top">
                <h2 class="card-title">${product.title}</h2>
                 <p class="card-text">${product.description}</p></div>
                               
                <button data-purchase = "${product.id}" type="button" class="btn btn-success">Купити за ${product.price} доларів</button>
                 </div>`;
        

   


    }
};

function handleCategory(event) {
    if (event.target.hasAttribute("data-category")) {
        const candidateCategory = event.target.getAttribute("data-category");

        if (candidateCategory === selectedCategory) {
            return;
        }
        
        if (selectedCategory !== 0) {
            document
                .querySelector(`[data-category="${selectedCategory}"]`)
                .classList
                .remove("active");
        }

        document
            .querySelector(`[data-category="${candidateCategory}"]`)
            .classList
            .add("active");

        selectedCategory = candidateCategory;
        selectedProduct = 0;
        renderProducts();
        renderDetails();
        
        
    }
};

function handleProduct(event) {
    if (event.target.hasAttribute("data-product")) {
        const candidateProduct = event.target.getAttribute("data-product");

        if (candidateProduct === selectedProduct) {
            return;
        }
        if (selectedProduct !== 0) {
            document
                .querySelector(`[data-product="${selectedProduct}"]`)
                .classList
                .remove("active");
        }

        document
            .querySelector(`[data-product="${candidateProduct}"]`)
            .classList
            .add("active");

        selectedProduct = candidateProduct;

        renderDetails();
    }
};

function handlePurchase(event) {
    if (event.target.hasAttribute("data-purchase")) {
        const candidateProduct = event.target.getAttribute("data-purchase");
        selectedProduct = candidateProduct;
        productsByCategory[selectedCategory].forEach(product => {

            if (String(product.id) === selectedProduct) {
                alert(`Дякую за придбання ${product.title} на суму в ${product.price} доларів`);
                
            }
        })
        selectedCategory = 0;
        selectedProduct = 0;
        containerDetails.innerHTML = "";
        containerProducts.innerHTML = "";
        const allNavItems = document.querySelectorAll(".list-group-item");

        allNavItems.forEach(item => {
            item.classList.remove("active");
        })

    }
};









