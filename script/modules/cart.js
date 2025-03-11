
//lägga till i localstorage
function addToCart(dish) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(dish);
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount(cart.length);
}

//notisen uppdateras när mat läggs till
function updateCartCount(count) {
    const cartCountElement = document.querySelector('.cart-count');
    if(cartCountElement) {
        cartCountElement.textContent = count;
    }
}

updateCartCount();

//displaya varukorgen
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items-container');

    const firstLine = cartItemsContainer.querySelector('.line');

    cartItemsContainer.textContent = '';

    cart.forEach(dish => {
        console.log(dish);

        const showDish = document.createElement('div');
        showDish.textContent = dish;
        cartItemsContainer.insertBefore(showDish, firstLine.nextSibling);

    })
}

displayCart();

//räknar ut totalt pris
function totalPriceItem() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    cart.forEach(dish => {
        totalPrice += dish.price;
    });
    return totalPrice;
}

//visa totalt pris
function displayTotalPrice() {
    const totalPrice = totalPriceItem();
    const totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.textContent = `TOTALT: ${totalPrice}`;
}

displayTotalPrice();

//eventlistener på betala-knappen
function paymentButton() {
    document.querySelector('.pay-button').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'http://127.0.0.1:5500/kvitto.html'; //ÄNDRA URL SEN!!!
    });
}