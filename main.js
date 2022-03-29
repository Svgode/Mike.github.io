
calQuantity = (event) => {
    let price = 199.00;
    let vat = 7.5;
    let quantity = document.getElementById("quantity");
    let quantityValue = quantity.value;
    console.log(quantityValue);
    


displayQty = ()=>{
    let cart = document.getElementById('cart');
    cart.innerText = quantityValue;
    console.log(cart)
}
displayQty();


totalPrice = ()=>{
    priceSum = price*quantityValue;
    console.log(priceSum);
    
    let plusVat = 7.5/100 * priceSum;
    console.log(plusVat);

    vatIncl=() =>{
        totalCost = priceSum+plusVat;
        console.log(totalCost);
    }
}
    totalPrice();
    vatIncl();
    
}

function blueIn(x) {
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/shoe.png"
}
function blueOut(x) {
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/shoe.png"
}

function redIn(x) {
    var y = document.getElementsByClassName('hero');
    console.log('Hello world');
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/Redshoe.png"
    
}
function redOut(x) {
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/shoe.png"
}

function purpleIn(x) {
    console.log('Hello world');
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/purpleshoe.png"
}
function purpleOut(x) {
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/shoe.png"
}

function greenIn(x) {
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/greenshoe.png"
    
}
function greenOut(x) {
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/greenshoe.png"
}