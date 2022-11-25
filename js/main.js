if ($('#main-body').length > 0) {


	window.onload = function () {
		 modalExit();
	};

	//InputCity

	$('.form__input-city').on('keypress', function () {
	    var that = this;

	    setTimeout(function () {
	        var res = /[^А-Яа-я \-]/g.exec(that.value);
	        if (res !== null) {
	            alert('Введите название города русскими буквами')
	        }


	        that.value = that.value.replace(res, '');
	    }, 0);
	});

	//CheckBox

/* 	let checkboxes = document.querySelectorAll('.custom-checkbox');
	for (let i = 0; i < checkboxes.length; i++) {
		 checkboxes[i].addEventListener('click', function () {
			  if (checkboxes[i].checked) {
					checkboxes[i].classList.remove('validate')
			  }
		 })

	} */


	//ValidateInputs 

	let inputs = document.querySelectorAll('input');
	

	for (let i = 0; i < inputs.length; i++) {
		 inputs[i].addEventListener('change', function () {
			  let activeInput = inputs[i];
			  if (activeInput.classList.contains('form__input-phone')) {
					if (activeInput.value.includes('_')) {
						 return;
					}
					else {
						 activeInput.classList.remove('validate')
					}
			  }
			  if (activeInput.classList.contains('form__input-email')) {
					let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					if (reg.test(activeInput.value) == false) {
						 return;
					}
					else {
						 activeInput.classList.remove('validate');
					}
			  }
			  if (activeInput.classList.contains('form__input-name')) {
					if (activeInput.value == '') {
						 return;
					}
					else {
						 activeInput.classList.remove('validate');
					}
			  }
			  if (activeInput.classList.contains('form__input-city')) {
					if (activeInput.value == '') {
						 return;
					}
					else {
						 activeInput.classList.remove('validate');
					}
			  }
		 })
	}
 


	//Popup

	let presentationBtn = document.querySelectorAll('.top-btn');
	let phoneBtn = document.querySelectorAll('.modal-phone');
	let politicyBtn = document.querySelectorAll('.politicy');

	let popupPresentation = document.querySelector('.popup-franchising');
	let popupPhone = document.querySelector('.popup-phone');
	let popupPoliticy = document.querySelector('.popup-politicy');
	let body = document.querySelector('body');
	
	presentationBtn.forEach(item => {
		item.addEventListener('click', () => {
			presentation();
	  });
	})
	

	function presentation() {
		 let popupPresentation = document.querySelector('.popup-franchising');
		 let body = document.querySelector('body');
		 popupPresentation.classList.add('is-active');
		 bodyLock()
		 if (popupPresentation.classList.contains('is-active')) {
			  body.addEventListener('keydown', function (e) {
					if (e.keyCode === 27) {
						 popupPresentation.classList.remove('is-active');
						 bodyUnlock() 
					}
			  })
		 }
	}

	for (let p = 0; p < politicyBtn.length; p++) {
		 politicyBtn[p].addEventListener('click', function () {
			  popupPoliticy.classList.add('is-active');
			  bodyLock()
			  if (popupPoliticy.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPoliticy.classList.remove('is-active');
							  bodyUnlock() 
						 }
					})
			  }
		 })
	}

	for (let p = 0; p < phoneBtn.length; p++) {
		 phoneBtn[p].addEventListener('click', function () {
			  popupPhone.classList.add('is-active');
			  bodyLock()
			  if (popupPhone.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPhone.classList.remove('is-active');
							  bodyUnlock() 
						 }
					})
			  }
		 })
	}
	function bodyLock() {
		const lockPaddingValue =
		  window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
		body.style.paddingRight = lockPaddingValue;
		body.classList.add("lock");
	 }
	 function bodyUnlock() {
		setTimeout(function () {
		  body.style.paddingRight = "0px";
		  body.classList.remove("lock");
		}, 100);
	 }

	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupPresentation.classList.remove('is-active');
			  popupPoliticy.classList.remove('is-active');
			  popupPhone.classList.remove('is-active');
			  bodyUnlock()
		 }
	})

	newDate()

	//input-phone

	var element = document.getElementsByClassName('form__input-phone');
	var maskOptions = {
		 mask: '+7(000) 000 0000',
		 // +7 (___) ___ ____
		 lazy: false
	}

	$('.form__input-phone').each(function (i, elem) {
		 //let IMask;
		 var mask = new IMask(elem, maskOptions);
	});

}



function phone() {
	let phoneBtn = document.querySelectorAll('.modal-phone');
	let popupPhone = document.querySelector('.popup-phone');

	for (let p = 0; p < phoneBtn.length; p++) {
		 phoneBtn[p].addEventListener('click', function () {
			  popupPhone.classList.add('is-active');
			  bodyLock()
			  if (popupPhone.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPhone.classList.remove('is-active');
							  bodyUnlock()
						 }
					})
			  }
		 })
	}


	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupPhone.classList.remove('is-active');
			  body.classList.remove('no-scroll');
		 }
	})

}

function politicy() {
	let politicyBtn = document.querySelectorAll('.politicy');
	let popupPoliticy = document.querySelector('.popup-politicy');
	let body = document.querySelector('body');

	for (let p = 0; p < politicyBtn.length; p++) {
		 politicyBtn[p].addEventListener('click', function (m) {
			  let targetM = m.target;
			  popupPoliticy.classList.add('is-active');
			  body.classList.add('no-scroll');
			  if (popupPoliticy.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPoliticy.classList.remove('is-active');
							  body.classList.remove('no-scroll');
						 }
					})
			  }
		 })
	}

	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupPoliticy.classList.remove('is-active');
			  body.classList.remove('no-scroll');
		 }
	})
}
function newDate() {
	const dateNow = new Date().getFullYear();
	let dateText = document.querySelectorAll('.date-now')
	dateText.innerHTML = dateNow;
}

//PopupExit

// modalExit();
function modalExit() {
	let popupExit = document.querySelector('.popup-exit');
	let body = document.querySelector('body');
	let count = 0
	$(document).mouseleave(function (e) {
		 if (count > 0) {
			  return
		 }
		 if (e.clientY < 10) {
			  popupExit.classList.add('is-active');
			  bodyLock() 
			  if (popupExit.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupExit.classList.remove('is-active');
							  bodyUnlock() 
						 }
					})
			  }
			  count++;
		 }
	})
	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupExit.classList.remove('is-active');
			  bodyUnlock() 
		 }
	})
}



if ($('#thanks-body').length > 0) {

	let thanksName = document.querySelector('.thanks-name');
	let the_title = document.querySelector("title");
	let nameValue = localStorage.getItem('lpg3746_name');
	let cityName = document.querySelector('.thanks-city');

	if (nameValue == ' ') {
		 thanksName.innerHTML = localStorage.getItem('lpg3746_name');
		 the_title.innerHTML = 'Cпасибо, Ваша заявка принята 👍';
	}
	else {
		 thanksName.innerHTML = localStorage.getItem('lpg3746_name') + ',';
		 the_title.innerHTML = localStorage.getItem('lpg3746_name') + ', спасибо, Ваша заявка принята 👍';
	}



	politicy();
	newDate();

}
if ($('#thanks2-body').length > 0) {


    let nameValue = localStorage.getItem('lpg3746_name');
    let thanksName = document.querySelector('.thanks-name');
    let cityName = document.querySelector('.thanks-city');
    let the_title = document.querySelector("title");

    cityName.innerHTML = localStorage.getItem('lpg3746_city');
	 console.log(cityName);

    if (nameValue == ' ') {
        thanksName.innerHTML = localStorage.getItem('lpg3746_name');
        the_title.innerHTML = 'Cпасибо, Ваша заявка принята 👍';
    }
    else {
        thanksName.innerHTML = localStorage.getItem('lpg3746_name') + ',';
        the_title.innerHTML = localStorage.getItem('lpg3746_name') + ', спасибо, Ваша заявка принята 👍';
    }


    politicy();
    newDate();
}

 // Tab
//  const tabBtn = document.querySelectorAll(".tenth__btn");
//  const tabMap = document.querySelectorAll(".tenth__map");
//  const tabMapContent = document.querySelectorAll(".tenth__content");
//  function tabChanger(item, content, map) {
// 	item.forEach((tab, index) => {
// 	   tab.addEventListener('click', function(){
// 		  content.forEach(content => {
// 			 content.classList.remove('active');
// 		  })
// 		  item.forEach(tab => {
// 			 tab.classList.remove('active');
// 		  })
		
// 		  map.forEach(tab => {
// 			 tab.classList.remove('active');
// 		  })
		
		  
// 		  content[index].classList.add('active');
// 		  item[index].classList.add('active'); 
// 		  map[index].classList.add('active'); 
		 
		  
// 	   })
// 	})
//  }
//  tabChanger(tabBtn, tabMap, tabMapContent);

 const tabItem = document.querySelectorAll(".sixth__tab");
 const tabContent = document.querySelectorAll(".sixth__content");

 function tabChangerAdaptive(item, content) {
	item.forEach((tab, index) => {
		tab.addEventListener('click', function(){
			content[index].classList.toggle('active');
			item[index].classList.toggle('active'); 
		  
		})
	})
}
tabChangerAdaptive(tabItem, tabContent);


// Calculator

const slider01 = document.querySelector(".slider01");
const innerValue = document.querySelector(".result");
const progress = document.querySelector(".point01");
const screenWidth = window.screen.width;

function customSlider() {
	// const num =
	//   (slider01.value * 3900 + slider02.value * 3700 + slider03.value * 3800) * slider04.value * 0.197;
  
	// const result = new Intl.NumberFormat("ru-RU").format(num);
  
	// innerValue.innerHTML = result;
	// innerValue02.innerHTML = result;
  
	if(matchMedia){
	  const matchResult = window.matchMedia("(max-width: 600px)");
	  matchResult.addListener(changes);
	  changes(matchResult);
	  function changes(matchResult) {
		if (matchResult.matches) {
		  if (slider01.value === "0") {
			progress.style.width = slider01.value  + "px";
		  }
		  if (slider01.value === "10") {
			progress.style.width = 40 - slider01.value + "px";
		  }
		  if (slider01.value === "20") {
			progress.style.width = 70 - slider01.value + "px";
		  }
		  if (slider01.value === "30") {
			progress.style.width = 110 - slider01.value + "px";
		  }
		  if (slider01.value === "40") {
			progress.style.width = 150 - slider01.value + "px";
		  }
		  if (slider01.value === "50") {
			progress.style.width = 180 - slider01.value + "px";
		  }
		  if (slider01.value === "60") {
			progress.style.width = 220 - slider01.value + "px";
		  }
		  if (slider01.value === "70") {
			progress.style.width = 260 - slider01.value + "px";
		  }
		  if (slider01.value === "80") {
			progress.style.width = 290 - slider01.value + "px";
		  }
		  if (slider01.value === "90") {
			progress.style.width = 320 - slider01.value + "px";
		  }
		} else{
		  if (slider01.value === "0") {
			progress.style.width = slider01.value + "px";
	  
		  }
		  if (slider01.value === "10") {
			progress.style.width = 60 - slider01.value + "px";
	  
		  }
		  if (slider01.value === "20") {
			progress.style.width = 120 - slider01.value + "px";
		  }
		  if (slider01.value === "30") {
			progress.style.width = 170 - slider01.value + "px";
		  }
		  if (slider01.value === "40") {
			progress.style.width = 230 - slider01.value + "px";
		  }
		  if (slider01.value === "50") {
			progress.style.width = 280 - slider01.value + "px";
		  }
		  if (slider01.value === "60") {
			progress.style.width = 340 - slider01.value + "px";
		  }
		  if (slider01.value === "70") {
			progress.style.width = 400 - slider01.value + "px";
		  }
		  if (slider01.value === "80") {
			progress.style.width = 450 - slider01.value + "px";
		  }
		  if (slider01.value === "90") {
			progress.style.width = 510 - slider01.value + "px";
		  }
		}
	  }
	}
  }
  customSlider();

slider01.addEventListener("input", () => {
  customSlider();
});