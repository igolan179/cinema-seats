var chairs = document.querySelectorAll(".chairs");
var sum_price = 0;
var sum_seats = 0;
chairs.forEach((el) => {
    el.addEventListener("click", function () {
        if (el.classList.contains("unav") == false) {
            el.classList.toggle("selected");
            if (el.classList.contains("selected")) {
                sum_seats++;
                sum_price = sum_seats * 15;
            }
            else {
                sum_seats--;
                sum_price = sum_seats * 15;
            }
            document.querySelector(".seats").textContent = sum_seats
            document.querySelector(".price").textContent = sum_price
        }
    });
});

var submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
    chairs.forEach((el) => {
        if (el.classList.contains("selected")) {
            el.classList.remove("selected");
            el.classList.add("unav");

        }
    });
    sum_price = 0;
    sum_seats = 0;
    document.querySelector(".seats").textContent = sum_seats
    document.querySelector(".price").textContent = sum_price
});

var reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
    chairs.forEach((el) => {
        el.classList.remove("selected");
        el.classList.remove("unav");

    });
    sum_price = 0;
    sum_seats = 0;
    document.querySelector(".seats").textContent = sum_seats
    document.querySelector(".price").textContent = sum_price
});