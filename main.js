/////////////////////////////////////////////////////
// CHECKBOX
/////////////////////////////////////////////////////
function foo1() {
    let chebox = document.getElementById('cbox');
    let d12 = document.getElementById('d12');
    if (chebox.checked) {
        d12.innerHTML = 'CHECKED';
    } else {
        d12.innerHTML = '';
    }
}
/////////////////////////////////////////////////////
// RADIOBUTTON
/////////////////////////////////////////////////////
function foo2() {
    let rb = document.getElementsByName('r1');
    let d22 = document.getElementById('d22');
    for (let i = 0; i < rb.length; i++) {
        if (rb[i].checked)
            d22.innerHTML = 'checked ' + rb[i].value;
    }
}
/////////////////////////////////////////////////////
// SELECT
/////////////////////////////////////////////////////
function foo3() {
    let sel = document.getElementById('mySelect').selectedIndex;
    let opt = document.getElementById('mySelect').options;
    let d32 = document.getElementById('d32');
    d32.innerHTML = opt[sel].text;
}
/////////////////////////////////////////////////////
// RANGE
/////////////////////////////////////////////////////
function foo4() {
    let rng = document.getElementById('myRange');
    let s42 = document.getElementById('s42');
    s42.innerHTML = rng.value;
    let lineRange = document.getElementById('line');
    lineRange.style.width = rng.value + '%';
}
/////////////////////////////////////////////////////
// CSS generator
/////////////////////////////////////////////////////
function foo5() {
    let wid = document.getElementById('width');
    let hei = document.getElementById('height');
    let rect = document.getElementById('rect');
    rect.style.width = wid.value + 'px';
    rect.style.height = hei.value + 'px';
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbr = document.getElementById('rbr').value;
    let rbl = document.getElementById('rbl').value;
    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbr = document.getElementById('tbr');
    let tbl = document.getElementById('tbl');
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    rect.style.borderRadius = rtl+'px '+rtr+'px '+rbr+'px '+rbl+'px';
}
/////////////////////////////////////////////////////
// выпадающее меню
/////////////////////////////////////////////////////
let menu = document.getElementById('nav');
let submenu = document.getElementsByClassName('submenu');
// отслеживать нахождение мыши внутри блока навигации
menu.onmouseover = function(event) {
// выясним где был произведен клик мыши
    let target = event.target;
// выясним, что мышь находиться на блоком с .menu-item
// если это так, то необходимо получить блок с .submenu внутри него
    if (target.className == 'menu-item') {
        let sub = target.getElementsByClassName('submenu');
        // и далее закрывать меню
        closeMenu();
        // в результате в переменной sub находиться массив из одного элемента, который содержит submenu
        sub[0].style.display = 'block';
    }
}
// отслеживать, чтобы нужные menu и submenu были открыты
document.onmouseover = function(event) {
    let target = event.target;
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}
function closeMenu() {
    for (let i = 0; i < submenu.length; i++) {
        submenu[i].style.display = 'none';
    }
}
/////////////////////////////////////////////////////
// табы
/////////////////////////////////////////////////////
let tab, tabContent;
window.onload = function() {
    // поличили массивы tab и tabContent
    tab = document.getElementsByClassName('tab');
    tabContent = document.getElementsByClassName('tabContent');
    // скроем ненужные 
    hideTabsContent(1);
}
function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}
document.getElementById('tabs').onclick = function(event) {
    let target = event.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}
function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}
/////////////////////////////////////////////////////
// модальное окно
/////////////////////////////////////////////////////
let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];
btn.onclick = function() {
    modal.style.display = 'block';
}
span.onclick = function() {
    modal.style.display = 'none';
}
/////////////////////////////////////////////////////
// анимация
/////////////////////////////////////////////////////
function myMove() {
	let area = document.getElementById('myContainer');
	let ball = document.getElementById('myAnimation');
	let pos = 0;
	let id = setInterval(frame, 10);
	function frame() {
		// если шарик достиг дна (pos == 350)
		if (pos == 400 - 50) {
			clearInterval(id);
		} else {
			pos++;
			ball.style.top = pos + 'px';
			ball.style.left = pos + 'px';
		}
	}
}
/////////////////////////////////////////////////////
// слайдер
/////////////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	let slides = document.getElementsByClassName('mySlides');
	let dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (let j = 0; j < dots.length; j++) {
		dots[j].className = dots[j].className.replace('active','');
	}
	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].className += ' active';
}
/////////////////////////////////////////////////////
// фильтрация 
/////////////////////////////////////////////////////
function funSearch() {
	let input = document.getElementById("inputSearch");
	let filter = input.value.toUpperCase();
	let ul = document.getElementById("myUl");
	let li = ul.getElementsByTagName("li");
	for (let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
			li[i].style.display = "";
		} else {
			li[i].style.display = 'none';
		}
	}
}
/////////////////////////////////////////////////////
// работа с API googlemap
/////////////////////////////////////////////////////
function initMap() {
	var myLatLng = {lat: 68.963, lng: 33.097};
	var map = new google.maps.Map(document.getElementById('map'), {center: myLatLng, zoom: 16});
}


