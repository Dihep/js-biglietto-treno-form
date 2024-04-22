const km = document.getElementById("distance");
const age = document.getElementById("age");
const mathButton = document.getElementById("math_button");
function calcPrice() {
    let price = parseInt(km.value)*0.21;
    if (age.value<18) {
        price *= 0.8
    }
    else if (age.value>=65) {
        price *= 0.6
    }
    console.log(price);
    document.querySelector(`h1`).innerHTML = price;
};
