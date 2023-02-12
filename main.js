let tb1 = document.querySelector('.tb1');
tb1.addEventListener("click", triple_button1);

let tb2 = document.querySelector('.tb2');
tb2.addEventListener("click", triple_button2);

let tb3 = document.querySelector('.tb3');
tb3.addEventListener("click", triple_button3);

let tb = document.querySelector('tb');

let flag1 = false;
let flag2 = true;
let flag3 = false;
let f = 2;

let interval1 = null;
let interval2 = null;
let interval3 = null;
let timeout1 = null;
let timeout2 = null;


let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let d3 = document.querySelector('.d3');

let d1c = d1.innerHTML;
let d2c = d2.innerHTML;
let d3c = d3.innerHTML;

d1.addEventListener("click", choose1);
d3.addEventListener("click", choose3);

d1.addEventListener('mouseover', clear_intervals);
d2.addEventListener('mouseover', clear_intervals);
d3.addEventListener('mouseover', clear_intervals);

d1.addEventListener('mouseout', create_intervals);
d2.addEventListener('mouseout', create_intervals);
d3.addEventListener('mouseout', create_intervals);


let wrap = document.getElementById('wrap');
let login = document.getElementById('login');
let singup = document.getElementById('singup');

function triple_button1() {
    if (!flag1) {
        tb1.style.cssText += 'background: rgba(242, 120, 92, 1)';
        tb2.style.cssText += 'background: rgba(242, 120, 92, 0.5)';
        tb3.style.cssText += 'background: rgba(242, 120, 92, 0.5)';


        d1.innerHTML = d3c;
        d2.innerHTML = d1c;
        d3.innerHTML = d2c;

        d1.style.cssText += "background-image: url('Images/usa.png');";
        d2.style.cssText += "background-image: url('Images/spain.png');";
        d3.style.cssText += "background-image: url('Images/japan.png');";

        flag1 = true;
        flag2 = false;
        flag3 = false;
    }
}

function triple_button2() {
    if (!flag2) {
        tb1.style.cssText += 'background: rgba(242, 120, 92, 0.5)';
        tb2.style.cssText += 'background: rgba(242, 120, 92, 1)';
        tb3.style.cssText += 'background: rgba(242, 120, 92, 0.5)';

        d1.innerHTML = d1c;
        d2.innerHTML = d2c;
        d3.innerHTML = d3c;

        d1.style.cssText += "background-image: url('Images/spain.png');";
        d2.style.cssText += "background-image: url('Images/japan.png');";
        d3.style.cssText += "background-image: url('Images/usa.png');";

        flag1 = false;
        flag2 = true;
        flag3 = false;
    }
}

function triple_button3() {
    if (!flag3) {
        tb1.style.cssText += 'background: rgba(242, 120, 92, 0.5)';
        tb2.style.cssText += 'background: rgba(242, 120, 92, 0.5)';
        tb3.style.cssText += 'background: rgba(242, 120, 92, 1)';

        d1.innerHTML = d2c;
        d2.innerHTML = d3c;
        d3.innerHTML = d1c;

        d1.style.cssText += "background-image: url('Images/japan.png');";
        d2.style.cssText += "background-image: url('Images/usa.png');";
        d3.style.cssText += "background-image: url('Images/spain.png');";

        flag1 = false;
        flag2 = false;
        flag3 = true;
    }
}

window.onload = function () {
    create_intervals();
}

function choose1() {
    if (d1.innerHTML === d1c) triple_button1();
    else if (d1.innerHTML === d2c) triple_button2();
    else triple_button3();
}

function choose3() {
    if (d3.innerHTML === d2c) triple_button2();
    else if (d3.innerHTML === d3c) triple_button3();
    else triple_button1();
}

function create_intervals() {
    if (interval1 === null && interval2 === null && interval3 === null && timeout1 === null && timeout2 === null) {
        interval1 = setInterval(triple_button3, 12000);
        timeout1 = setTimeout(function () { interval2 = setInterval(triple_button1, 12000) }, 4000);
        timeout2 = setTimeout(function () { interval3 = setInterval(triple_button2, 12000) }, 8000);
    }
}

function clear_intervals() {
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    interval1 = null;
    interval2 = null;
    interval3 = null;
    timeout1 = null;
    timeout2 = null;
}

tb1.onmouseover = function () {
    if (!flag1) {
        tb1.style.cssText = 'background: rgba(242, 120, 92, 0.8)';
    }
}
tb1.onmouseout = function () {
    if (!flag1) {
        tb1.style.cssText = 'background: rgba(242, 120, 92, 0.5)';
    }
}

tb2.onmouseover = function () {
    if (!flag2) {
        tb2.style.cssText = 'background: rgba(242, 120, 92, 0.8)';
    }
}
tb2.onmouseout = function () {
    if (!flag2) {
        tb2.style.cssText = 'background: rgba(242, 120, 92, 0.5)';
    }
}

tb3.onmouseover = function () {
    if (!flag3) {
        tb3.style.cssText = 'background: rgba(242, 120, 92, 0.8)';
    }
}
tb3.onmouseout = function () {
    if (!flag3) {
        tb3.style.cssText = 'background: rgba(242, 120, 92, 0.5)';
    }
}

function show(state, pop_up) {
    pop_up.style.visibility = state;
    wrap.style.visibility = state;

    if (state !== 'hidden') {
        body_lock();
        pop_up.style.opacity = '1';
        pop_up.style.top = '0px';
        wrap.style.opacity = '0.6';
    }
    else {
        body_unlock();
        pop_up.style.opacity = '0';
        pop_up.style.top = '-1000px';
        wrap.style.opacity = '0';
    }
}

function body_lock() {
    savedScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = -savedScrollY + "px";
}

function body_unlock() {
    document.body.style.position = "static";
    document.body.style.top = "";
    window.scrollTo(0, savedScrollY);
}

function show_singup() {
    show('hidden', login);
    show('visible', singup);
}

function show_login() {
    show('hidden', singup);
    show('visible', login);
}

function hide_pop() {
    show('hidden', login);
    show('hidden', singup);
}