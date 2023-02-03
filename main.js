let tb1 = document.querySelector('.tb1');
tb1.addEventListener("click", triple_button1);

let tb2 = document.querySelector('.tb2');
tb2.addEventListener("click", triple_button2);

let tb3 = document.querySelector('.tb3');
tb3.addEventListener("click", triple_button3);

let tb = document.querySelector('tb');

let d1 = document.querySelector('.d1');
let d1c = d1.innerHTML;
let d2 = document.querySelector('.d2');
let d2c = d2.innerHTML;
let d3 = document.querySelector('.d3');
let d3c = d3.innerHTML;

let flag1 = false;
let flag2 = true;
let flag3 = false;

let login = document.getElementById('login');
let wrap = document.getElementById('wrap');

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

function show(state) {
    login.style.visibility = state;
    wrap.style.visibility = state;

    if (state !== 'hidden') {
        body_lock();
        login.style.opacity = '1';
        login.style.top = '0px';
        wrap.style.opacity = '0.6';
    }
    else {
        body_unlock();
        login.style.opacity = '0';
        login.style.top = '-1000px';
        wrap.style.opacity = '0';
    }
}

function body_lock() {
    document.body.style.overflowY = 'hidden';
    wrap.style.overflowY = 'scroll';
}

function body_unlock() {
    document.body.style.overflowY = 'overlay';
    wrap.style.overflowY = 'hidden';
}