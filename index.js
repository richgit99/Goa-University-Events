const card_1 = document.getElementById("card_1");
const card_2 = document.getElementById("card_2");
const card_3 = document.getElementById("card_3");
const card_4 = document.getElementById("card_4");
const card_5 = document.getElementById("card_5");
const card_6 = document.getElementById("card_6");
const card_7 = document.getElementById("card_7");
const card_8 = document.getElementById("card_8");
const card_9 = document.getElementById("card_9");

const hidden_elements = document.querySelectorAll('.card_container');
const hidden_elements_1 = document.querySelectorAll('.card1');


const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

// Button remove and para adding 

const infofest_button = document.getElementById('infofest_button');
const plat_button = document.getElementById('plat_button');

const card_1_body = document.getElementById('card_1_body');
const card_2_body = document.getElementById('card_2_body');


const para = document.createElement('p');
const para1 = document.createElement('p');

para.innerText = "Sorry, currently no information  available";
para1.innerText = "Sorry, currently no information  available";

para.classList.add('para_text');
para1.classList.add('para_text');


infofest_button.onclick = function () {

    card_2_body.append(para);
    infofest_button.remove();
}

plat_button.onclick = function () {

    card_1_body.append(para1);
    plat_button.remove();

}

// Adding the border to all cards

hidden_elements_1.forEach(e => {
    e.classList.add('rgb');

})

// card flip effect

function turn_card_1() {
    one.style.transform = "rotateY(180deg)";
}

function turnback_card_1() {
    one.style.transform = "rotateY(0deg)";
}

function turn_card_2() {
    two.style.transform = "rotateY(180deg)";
}

function turnback_card_2() {
    two.style.transform = "rotateY(0deg)";
}

function turn_card_3() {
    three.style.transform = "rotateY(180deg)";
}

function turnback_card_3() {
    three.style.transform = "rotateY(0deg)";
}

function turn_card_4() {
    four.style.transform = "rotateY(180deg)";
}

function turnback_card_4() {
    four.style.transform = "rotateY(0deg)";
}

function turn_card_5() {
    five.style.transform = "rotateY(180deg)";
}

function turnback_card_5() {
    five.style.transform = "rotateY(0deg)";
}

function turn_card_6() {
    six.style.transform = "rotateY(180deg)";
}

function turnback_card_6() {
    six.style.transform = "rotateY(0deg)";
}
function turn_card_7() {
    seven.style.transform = "rotateY(180deg)";
}

function turnback_card_7() {
    seven.style.transform = "rotateY(0deg)";
}

function turn_card_8() {
    eight.style.transform = "rotateY(180deg)";
}

function turnback_card_8() {
    eight.style.transform = "rotateY(0deg)";
}

function turn_card_9() {
    nine.style.transform = "rotateY(180deg)";
}

function turnback_card_9() {
    nine.style.transform = "rotateY(0deg)";
}






