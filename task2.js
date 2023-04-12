"use strict";

// --------------------------------- Task-2 ---------------------------------


function CssClass(name, fontSize, fontWeight, color, textAlign) {

    this.name = name;
    this.styles = [];

    this.styles.fontSize = fontSize;
    this.styles.fontWeight = fontWeight;
    this.styles.color = color;
    this.styles.textAlign = textAlign;

    this.deleteStyle = function (style) {
        for (let temp of this.styles) {
            if (temp === style) delete this.styles[temp]
        };
    };

    this.setStyle = function (style, value) {
        this.styles[style] = value
    };

    this.getCss = function () {
        let res = "";
        let lit = "";
        let result = "";

        for (let tempOne in this.styles)
            res += tempOne + ": " + this.styles[tempOne] + "; ";
          
        for (let tempTwo in res)
            if (res[tempTwo] >= "A" && res[tempTwo] <= "Z") {
                lit = "-" + res[tempTwo].toLowerCase();
                result += lit;
            }
            else {
                lit = res[tempTwo];
                result += lit;
            };
        return result;
    };
};

let inner = "";

// ---------- "Стили по умолчанию" ----------

const cssClass = new CssClass('smallText', '16px', '400', 'black', 'left');
inner += "<h4>" + "Стили по умолчанию" + " \" " + cssClass.name + " \" " + "</h4>"
inner += "<p style=\"" + cssClass.getCss() + "\">«Осуществляйте свои мечты, или кто-то наймет вас для осуществления своих»</p>"

// ---------- "Изменения с помощью функции CSS стилей" ----------

cssClass.deleteStyle('name');
cssClass.deleteStyle('fontSize');
cssClass.deleteStyle('fontWeight');
cssClass.deleteStyle('color');
cssClass.deleteStyle('textAlign');

cssClass.name = 'boldText'
cssClass.setStyle('fontSize', '26px');
cssClass.setStyle('fontWeight', '600');
cssClass.setStyle('color', 'grey');
cssClass.setStyle('textAlign', 'center');

inner += "<h4>" + "Изменения с помощью функции CSS стилей" + " \" " +  cssClass.name + " \" " + "</h4>"
inner += "<p style=\"" + cssClass.getCss() + "\">«Осуществляйте свои мечты, или кто-то наймет вас для осуществления своих»</p>"

console.log(cssClass)

document.getElementById('task2').innerHTML = inner;

