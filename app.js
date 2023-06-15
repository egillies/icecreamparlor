// SECTION ICE CREAM ARRAY

const iceCreams = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1.25,
    quantity: 0,
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0,
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 1.25,
    quantity: 0,
}]
// SECTION TOPPINGS ARRAY 

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: .25,
    quantity: 0,
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: .25,
    quantity: 0,
}]
// SECTION CONTAINERS ARRAY

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0,
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0,
}]

// create a function that gets "ice cream" out of the ice cream array

function selectCookieDough() {
    console.log('click')
    let cookieDough = iceCreams.find(iceCream => iceCream.name == 'Cookie Dough')
    console.log(cookieDough);
    cookieDough.quantity++
    drawCartIceCreams()
}

function selectVanilla() {
    console.log('click')
    let vanilla = iceCreams.find(iceCream => iceCream.name == 'Vanilla')
    console.log(vanilla)
    vanilla.quantity++
    drawCartIceCreams()
}
// NOTE this refactors the ice cream functions 
function addItemsToCart(iceCreamName) {
    let dish = iceCreams.find(iceCreams => iceCreams.name == iceCreamName)

    dish.quantity++
    console.log(dish);

    drawCartIceCreams()
}

function drawCartIceCreams() {
    let stringOfIceCreamsHTML = ''
    iceCreams.forEach(iceCreams => {
        if (iceCreams.quantity > 0) {
            stringOfIceCreamsHTML += `
            <li>
            <div class="d-flex fs-3 justify-content-between">
            <span>${iceCreams.name} x${iceCreams.quantity}</span>
            <span>$${iceCreams.price.toFixed(2)}</span>
            </div>
            </li>
            `
            console.log(iceCreams);
        }

        console.log(stringOfIceCreamsHTML);
    })
}

// SECTION toppings
drawCartIceCreams()


function drawCartToppings()

letstringOfToppingsHTML = ''
toppings.forEach(toppings => {
    if (toppings.quantity > 0) {
        stringOfToppingsHTML += `
                <li>
                <div class="d-flex fs-3 justify-content-between">
                <span>${toppings.name} * ${toppings.quantity}</span>
                <span>$${iceCreams.price.toFixed(2)}</span>
                </div>
                <li>
                `
        console.log(toppings);
    }
    console.log(stringOfToppingsHTML);
})
const cartElement = document.getElementById('cart')
cartElement.innerHTML = stringOfIceCreamsHTML



