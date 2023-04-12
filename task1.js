"use strict";

function checking(x) {
    let ret;
    if (x) {
        if (isNaN(x)) {
            ret = false;
        }
        else if (x < 0) {
            ret = false;
        }
        else {
            ret = true;
        }
    }
    else {
        ret = false;
    }
    return ret;
}

// --------------------------------- Task-1 ---------------------------------


function Circle(radius) {
    this.radius = radius;

    this.getRadius = function () {
        return this.radius
    };
    
    this.getDiametr = function () {
        return this.radius * 2;
    };

    this.setRadius = function (newRadius) {
        return this.radius = newRadius;
    };

    this.findSquare = function () {
        const square = Math.PI * this.radius * this.radius;
        return square.toFixed(2);
    };

    this.findLength = function () {
        return (2 * Math.PI * this.radius).toFixed(2);
    };
}

buttonTask1.onclick = function () {
    
    let show = "";

    const userRadius = inputTask1.value.replace(/\b(0(?!\b))+/g, "");

    // регулярное выражение, которое например 0.123 сохраняет 0.123
    // а если 00000123 превращает на 123
    // не хочу использовать parseInt тогда будут только целые числа

    const circle = new Circle(userRadius);

    if (checking(userRadius)) {
        show += "<h3>" + "Радиус: " + circle.getRadius() + "</h3>"
            + "<h3>" + "Диаметр: " + circle.getDiametr() + "</h3>"
            + "<h3>" + "Площадь: " + circle.findSquare() + "</h3>"
            + "<h3>" + "Длина: " + circle.findLength() + "</h3>";
    }
    else {
        show += "<h3>" + "Что-то пошло не так, попробуйте еще раз !!" + "<h3>"
    }
    return document.getElementById('result1').innerHTML = show;
}






