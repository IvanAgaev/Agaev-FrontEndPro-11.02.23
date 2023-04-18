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
let listOfOrderedProducts = null;
if (!localStorage["listOfOrders"]) {
    listOfOrderedProducts = [];
    console.log(3);
} else {
    listOfOrderedProducts = JSON.parse(localStorage.getItem("listOfOrders"));
}
console.log(listOfOrderedProducts);
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
let selectedCategory = null;
let selectedProduct = null;
const containerCategories = document.querySelector("[data-component=\"categories\"]");
const containerProducts = document.querySelector("[data-component=\"products\"]");
const containerDetails = document.querySelector("[data-component=\"details\"]");
const mainContainer = document.getElementById("main-container");
const cartButton = document.getElementById("cartButton");
mainContainer.addEventListener("click", (event => {
    if (event.target.id === "goToCart") {
        cartButton.innerHTML = "";
        containerCategories.innerHTML = "";
        containerProducts.innerHTML = "";
        containerDetails.innerHTML = "";
        const returnToMainPage = document.createElement("div");
        returnToMainPage.className = "d-flex justify-content-center align-items-center goHomeParent";
        returnToMainPage.insertAdjacentHTML("beforeend", `
        <a class="btn btn-primary goHome" role="button" aria-disabled="true">Вийти з переліку та повернутись на головну</a>
        `);
       
        function renderCartUlInfo() {
            let cartLiParent = document.createElement("ul");
            return cartLiParent;
        }
        function renderCartLiInfo(product, cartLiParent) {
            cartLiParent.className = "list-group";
            cartLiParent.insertAdjacentHTML("beforeend", `    
  <li class="list-group-item list-group-item-action cursor-pointer mainCardOrdered">Інформація про замовлення: Ціна - ${product.priceOfOrder}$ 
    <p> Дата - ${product.minutes}</p>
    <a role = "button" class="btn btn-outline-secondary moreinfo">Дізнатись більше</a>
    
             
  </li>
`);
            return cartLiParent
        };
        function renderProductByIndex(index) {
            const cartParent = document.createElement("div");
            cartParent.className = "d-flex justify-content-center align-items-center flex-column cartparent";
            let cartCardHtml = `
        <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src= ${listOfOrderedProducts[index].image}
                  class="img-fluid rounded-3" alt="Cotton T-shirt">
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">${listOfOrderedProducts[index].title}</p>
                <p><span class="text-muted">Місто доставки: </span>${listOfOrderedProducts[index].city} <span class="text-muted">Номер відділення: </span>${listOfOrderedProducts[index].poshtaNum}</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <input disabled  class="bg-light" type="text" value=" Кількість товарів - ${listOfOrderedProducts[index].numberOfItems}">
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">${listOfOrderedProducts[index].priceOfOrder}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
          <div class = "row parentOrderBtn d-flex justify-content-center align-items-center"> 
          <div class = "col-4 text-center" >
                <a role="button" class="btn btn-secondary hideDetails mb-3">Повернутись до списку замовлень</a>
             </div>
            <div class = "col-4 text-center" >
                <a role="button" class="btn btn-danger deleteOrder mb-3">Видалити замолення</a>
             </div> 
           </div>
           </div>`;
            cartParent.insertAdjacentHTML("afterbegin", cartCardHtml);
            mainContainer.append(cartParent);
        }
    
        let cartLiParent = renderCartUlInfo();
        listOfOrderedProducts.forEach((product, index) => {
            renderCartLiInfo(product, cartLiParent);
          
            
            const btnMoreInfo = document.createElement("a");
            btnMoreInfo.setAttribute("role", "button");
            btnMoreInfo.className = "btn btn-outline-secondary moreinfo";
            btnMoreInfo.innerHTML = "Дізнатись більше";
           
            const cartParents = document.getElementsByClassName("cartparent")
            const deleteAnOrder = document.getElementsByClassName("deleteOrder");
            const mainCardOrdered = document.getElementsByClassName("mainCardOrdered");
            const hideDetails = document.getElementsByClassName("hideDetails");
            const moreInfo = document.getElementsByClassName("moreinfo");
            let saveIndex = null;

            mainContainer.addEventListener("click", (event) => {
                if (event.target === moreInfo[index]) {
                    console.log(index);
                    moreInfo[index].closest(".list-group").remove();
                    renderProductByIndex(index);
                    saveIndex = index;
                    localStorage.setItem("deleteByIndex", JSON.stringify(index));

                } else if (event.target === hideDetails[index]) {
                    cartLiParent = renderCartUlInfo();
                    listOfOrderedProducts.forEach(product => {
                        renderCartLiInfo(product, cartLiParent);
                    });
                    hideDetails[index].closest(".cartparent").remove();
                    mainContainer.append(cartLiParent);
                } else if (event.target === deleteAnOrder[index]) {
                    listOfOrderedProducts.splice(JSON.parse(localStorage.getItem("deleteByIndex")),1);
                    localStorage.setItem("listOfOrders", JSON.stringify(listOfOrderedProducts));
                    cartLiParent = renderCartUlInfo();
                    listOfOrderedProducts.forEach(product => {
                        renderCartLiInfo(product, cartLiParent);
                    });
                    hideDetails[index].closest(".cartparent").remove();
                    mainContainer.append(cartLiParent);  
                } 
            })
        });
    
        mainContainer.append(cartLiParent);
        mainContainer.prepend(returnToMainPage);
        const goHomeParent = document.getElementsByClassName("goHomeParent")[0];
        const goHome = document.getElementsByClassName("goHome")[0];
        goHome.addEventListener("click", (event) => {
            window.location.reload();
        });
    }
}));

containerCategories.addEventListener("click", handleCategory);
containerProducts.addEventListener("click", handleProduct)
containerDetails.addEventListener("click", handlePurchase);
renderCartButton();
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

function renderCartButton() {
    cartButton.innerHTML = `
    <a class="btn btn-primary" id="goToCart" role="button" aria-disabled="true">Мої замовлення</a>`;
}

function renderProducts() {
    containerProducts.innerHTML = "";
    if (selectedCategory !== null) {
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
    if (selectedProduct !== null) {
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

        if (selectedCategory !== null) {
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
        selectedProduct = null;
        renderProducts();
        containerDetails.innerHTML = "";
    }
};

function handleProduct(event) {
    if (event.target.hasAttribute("data-product")) {
        const candidateProduct = event.target.getAttribute("data-product");

        if (candidateProduct === selectedProduct) {
            return;
        }
        if (selectedProduct !== null) {
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
    containerCategories.innerHTML = "";
    if (event.target.hasAttribute("data-purchase")) {
        const candidateProduct = event.target.getAttribute("data-purchase");
        selectedProduct = candidateProduct;
        productsByCategory[selectedCategory].forEach(product => {
            if (String(product.id) === selectedProduct) {
                const htmlForm = `
        <div class="row justify-content-center">
            <div class="col-4">
                <form name="form_registr" class="mb-3 bg-light p-3">
                    <fieldset>
                        <legend>Оформлення замовлення ${product.title}</legend>
                    </fieldset>
                    <div class="mb-3 form-field">
                        <label for="InputName" class="form-label">Введіть своє П.І.Б</label>
                        <input name = "userName" placeholder="Прізвище Ім'я По Батькові" type="text" class="form-control" id="InputName"
                            aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="hometown" class="form-label">Оберіть місто свого проживання</label>
                        <select id="hometown" class="form-select" aria-label="Місто проживання">
                            <option value="Київ">Київ</option>
                            <option value="Харків">Харків</option>
                            <option value="Одесса">Одесса</option>
                        </select>
                    </div>
                    <div class="mb-3 form-field">
                        <label class="form-label" for="NovaPoshta">Введіть номер відділу Нової Пошти</label>
                        <input name = "NovaPoshtaNum" type="text" class="form-control" id="NovaPoshta">
                          <div id="emailHelp" class="form-text"></div>

                    </div>
                    <fieldset class="mb-3 methodOfPayment">
                        <legend>Оберіть спосіб оплати</legend>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                value="option1" checked>
                            <label class="form-check-label" for="inlineRadio1">При отриманні</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input data-component="paymentByCard" class="form-check-input" type="radio"
                                name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2">Карткою</label>
                        </div>
                    </fieldset>
                    <fieldset class="mb-3">
                        <legend>Кількість обраного товару</legend>
                   
                    <div class="parentOfNumberItems">
                        <button class="changeNumber removeItem">&#8722;</button>
                        <input disabled id="numOfItems" class="numberOfItems bg-light" type="text" value="1">
                        <button class="changeNumber addItem" >&#43;</button>
                    </div>
                    </fieldset>
                    <div>
                        <div class="mb-3">
                            <h3>Сума вашого замовлення</h3>
                            <h3 class="priceOfOrder">${product.price}$</h3>
                        </div>
                        <fieldset class="mb-3">
                            <legend>Комментар до замовлення</legend>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                    style="height: 100px"></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                        </fieldset>
                        <div>
                            <button type="submit" class="btn btn-primary submit ">Оформити замовлення</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>`;
                mainContainer.insertAdjacentHTML("beforeend", htmlForm);
                const methodOfPayment = document.querySelector(".methodOfPayment");
                const paymentByCard = document.getElementById("inlineRadio2");
                const paymentAfterReceiving = document.getElementById("inlineRadio1");


                methodOfPayment.addEventListener("change", (event) => {
                    if (event.target === paymentByCard) {
                        const paymentInfoFieldSet = document.createElement("fieldset");
                        paymentInfoFieldSet.className = "paymentRequired";
                        paymentInfoFieldSet.innerHTML = `
            <legend>Введіть номер картки MasterCard або Visa, термін її дії та CVC</legend>
        `;
                        const paymentInfo = document.createElement("div");
                        paymentInfo.className = "row mb-3";
                        paymentInfo.innerHTML = `
            <div class="form-field col-4"> 
                <input type="text" class="form-control pe-3" placeholder="Введіть номер" id="cardnumber">
                  <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="form-field col-4"> 
                <input type="text" class="form-control pe-3" placeholder="Введіть термін дії" id="expirationDate">
                  <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="form-field col-4"> 
                <input type="text" class="form-control pe-3" placeholder="CVC" id="CVC">
                  <div id="emailHelp" class="form-text"></div>
            </div>`;
                        methodOfPayment.after(paymentInfoFieldSet);
                        paymentInfoFieldSet.after(paymentInfo);
                    } else if (event.target === paymentAfterReceiving) {
                        if (methodOfPayment.nextElementSibling.classList.contains("paymentRequired")) {
                            methodOfPayment.nextElementSibling.remove();
                            methodOfPayment.nextElementSibling.remove();
                        }
                    }
                });
                const formRegistr = document.forms.form_registr;
                const addItem = document.querySelector(".addItem");
                const removeItem = document.querySelector(".removeItem");
                const numberOfItems = document.getElementById("numOfItems");
                const parentOfNumber = document.querySelector(".parentOfNumberItems");
                const priceOfOrder = document.querySelector(".priceOfOrder");
                let priceOfOrderText = priceOfOrder.textContent;
                const regEx = new RegExp(/\s?\d+\s?/g);
                let priceOfOrderInitialArray = priceOfOrderText.match(regEx);
                let priceOfOrderInitialNumber = Number(priceOfOrderInitialArray.join(""));
                const homeTown = document.getElementById("hometown");
                const isRequired = value => value === "" ? false : true;
                const isBetween = (length, min, max) => length < min || length > max ? false : true;
                const isCvc = (cvc) => {
                    const threeNumberValue = /\d{3}/;
                    return threeNumberValue.test(cvc);
                };
                const isNumberOfNovaPoshta = (value) => {
                    const re = new RegExp(/\s?\d+\s?/g);
                    return re.test(value);
                };
                const isExpirationDate = (date) => {
                    const re = new RegExp("^((0[1-9])|(1[0-2]))/([0-9]{4})$");
                    return re.test(date);
                };
                const isVisaCardNumber = (cardNum) => {
                    const re = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
                    return re.test(cardNum);
                };
                const isMasterCardNumber = (cardNum) => {
                    const re = new RegExp("^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$");
                    return re.test(cardNum);
                };
                const checkCardNum = () => {
                    if (document.getElementById("inlineRadio2").checked) {
                        const cardNumEl = document.getElementById("cardnumber");
                        const cardNum = cardNumEl.value.trim();
                        let valid = false;
                        if (!isRequired(cardNum)) {
                            showError(cardNumEl, "Поле має бути заповненим");
                        } else if (!isVisaCardNumber(cardNum) && !isMasterCardNumber(cardNum)) {
                            showError(cardNumEl, "Номер картки має бути Visa або MasterCard");
                        } else {
                            valid = true;
                            showSuccess(cardNumEl);
                        }
                        return valid;
                    }
                    return true;
                }

                const checkExpirationDate = () => {
                    if (document.getElementById("inlineRadio2").checked) {
                        const expirationDateEl = document.getElementById("expirationDate");
                        const expirationDate = expirationDateEl.value.trim();
                        let valid = false;
                        if (!isRequired(expirationDate)) {
                            showError(expirationDateEl, "Поле має бути заповненим");
                        } else if (!isExpirationDate(expirationDate)) {
                            showError(expirationDateEl, "Формат запису має бути MM/YYYY");
                        } else {
                            valid = true;
                            showSuccess(expirationDateEl);
                        }
                        return valid;
                    }
                    return true;
                }
                const checkName = () => {
                    let valid = false;
                    const min = 12;
                    const max = 40;
                    const userNameEl = document.getElementById("InputName");
                    const userName = userNameEl.value.trim();
                    if (!isRequired(userName)) {
                        showError(userNameEl, "Поле має бути заповненим");
                    } else if (!isBetween(userName.length, min, max)) {
                        showError(userNameEl, "Поле має містити від 12 до 40 символів");

                    }
                    else {
                        valid = true;
                        showSuccess(userNameEl);
                    }
                    return valid;

                };
                const checkPoshtaNum = () => {
                    let valid = false;
                    const novaPoshtaEl = document.getElementById("NovaPoshta");
                    const novaPoshta = novaPoshtaEl.value.trim();
                    if (!isRequired(novaPoshta)) {
                        showError(novaPoshtaEl, "Поле має бути заповненим");
                    } else if (!isNumberOfNovaPoshta(novaPoshta)) {
                        showError(novaPoshtaEl, "Номер відділу має бути записаний числом");

                    } else {
                        valid = true;
                        showSuccess(novaPoshtaEl);
                    }
                    return valid;

                };
                const checkCVC = () => {
                    if (document.getElementById("inlineRadio2").checked) {
                        const inputCVC = document.getElementById("CVC");
                        const inputCVCValue = inputCVC.value;
                        let valid = false;
                        if (!isRequired(inputCVCValue)) {
                            showError(inputCVC, "Поле має бути заповненим")
                        } else if (!isCvc(inputCVCValue)) {
                            showError(inputCVC, "Код має бути трьохзначним числом");
                        } else {
                            valid = true;
                            showSuccess(inputCVC);
                        }
                        return valid;
                    }
                    return true;

                };

                const showError = (input, message) => {
                    const formField = input.parentElement;
                    input.classList.remove("is-valid");
                    input.classList.add("is-invalid");
                    const error = formField.querySelector("#emailHelp");
                    error.textContent = message;
                    error.style.color = "red";
                };
                const showSuccess = (input) => {
                    // get the form-field element
                    const formField = input.parentElement;
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                    // hide the error message
                    const error = formField.querySelector('#emailHelp');
                    error.textContent = '';
                };


                formRegistr.addEventListener("input", (event) => {
                    switch (event.target.id) {
                        case "InputName":
                            checkName();
                            break;
                        case "NovaPoshta":
                            checkPoshtaNum();
                            break;
                        case "CVC":
                            checkCVC();
                            break;
                        case "expirationDate":
                            checkExpirationDate();
                            break;
                        case "cardnumber":
                            checkCardNum();
                            break;
                    }
                });


                parentOfNumber.addEventListener("click", (event) => {
                    event.preventDefault();
                    let priceOfOrderArray = priceOfOrder.textContent.match(regEx);
                    let priceOfOrderNumber = priceOfOrderArray.join("");

                    if (event.target === addItem) {
                        numberOfItems.value = Number(numberOfItems.value) + 1;
                        priceOfOrder.textContent = priceOfOrderInitialNumber * Number(numberOfItems.value) + "$";

                        if (Number(numberOfItems.value) >= 10) {
                            numberOfItems.style.width = "40px";
                        }

                    } else if (event.target === removeItem) {
                        if (Number(numberOfItems.value) !== 1) {
                            numberOfItems.value = Number(numberOfItems.value) - 1;
                            priceOfOrder.textContent = priceOfOrderNumber - priceOfOrderInitialNumber + "$";

                            if (Number(numberOfItems.value) < 10) {
                                numberOfItems.style.width = "30px";
                            }
                        }
                    }
                });
                formRegistr.addEventListener("submit", (event) => {
                    event.preventDefault();
                    if (!checkName() || !checkPoshtaNum() || !checkExpirationDate() || !checkCardNum() || !checkCVC()) {
                        checkExpirationDate();
                        checkCardNum();
                        checkCVC();
                        checkName();
                        checkPoshtaNum();
                    } else if (checkName() && checkPoshtaNum() && checkExpirationDate() && checkCardNum() && checkCVC()) {
                        const nameOfItem = product.title;
                        const pictureOfItem = product.image;
                        const priceOfItem = product.price;
                        const date = new Date();
                        let day = date.getDate();
                        if (day < 10) {
                            day = "0" + day;
                        }
                        let mon = date.getMonth();
                        let month = mon + 1;
                        if (month < 10) {
                            month = "0" + month;
                        }
                        const year = date.getFullYear();
                        const hour = date.getHours();
                        let min = date.getMinutes();
                        if (min < 10) {
                            min = "0" + min;
                        }
                        const customDate = `${day}/${month}/${year} ${hour}:${min}`
                        product.minutes = customDate;
                        const infoAboutOrder = document.createElement("div");
                        infoAboutOrder.className = "d-flex justify-content-center align-items-center flex-column";
                        const cardHtml = `
        <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src= ${product.image}
                  class="img-fluid rounded-3" alt="Cotton T-shirt">
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">${product.title}</p>
                <p><span class="text-muted">Місто доставки: </span>${homeTown.value} <span class="text-muted">Номер відділення: </span>${formRegistr.querySelector("#NovaPoshta").value}</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <input disabled  class="bg-light" type="text" value=" Кількість товарів - ${numberOfItems.value}">
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">${priceOfOrder.textContent}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
          <div class = "row parentOrderBtn d-flex justify-content-center align-items-center"> 
            <div class = "col-4 text-center" >
                <a href="#" id="confirmOrder" class="btn btn-success mb-3">Підтвердити замовлення</a>
             </div>
             <div class = "col-4 text-center" >
                <a href="#" id="cancelOrder" class="btn btn-danger mb-3">Відмінити замовлення</a>
             </div>
           </div>
           </div>
          `;
                        infoAboutOrder.insertAdjacentHTML("beforeend", cardHtml);
                        mainContainer.lastElementChild.remove();
                        mainContainer.append(infoAboutOrder);
                        const parentOrderBtn = document.querySelector(".parentOrderBtn");
                        const confirmOrder = document.getElementById("confirmOrder");
                        const cancelOrder = document.getElementById("cancelOrder");
                        parentOrderBtn.addEventListener("click", (event) => {
                            if (event.target === confirmOrder) {
                                product.priceOfOrder = product.price * numberOfItems.value;
                                product.city = homeTown.value;
                                product.poshtaNum = formRegistr.querySelector("#NovaPoshta").value;
                                product.numberOfItems = numberOfItems.value;
                                listOfOrderedProducts.push(product);
                                console.log(listOfOrderedProducts);
                                mainContainer.lastElementChild.remove();
                                localStorage.setItem("listOfOrders", JSON.stringify(listOfOrderedProducts));
                                let newListOfOrderedProducts = localStorage.getItem("listOfOrders");
                                renderCartButton();
                                renderCategories();
                            } else if (event.target === cancelOrder) {
                                mainContainer.lastElementChild.remove();
                                console.log(listOfOrderedProducts);
                                renderCartButton();
                                renderCategories();
                            }
                        })
                    }
                });
            }
        });
        selectedCategory = null;
        selectedProduct = null;
        containerDetails.innerHTML = "";
        containerProducts.innerHTML = "";
        cartButton.innerHTML = "";
        const allNavItems = document.querySelectorAll(".list-group-item");
        allNavItems.forEach(item => {
            item.classList.remove("active");
        });
    }
};




