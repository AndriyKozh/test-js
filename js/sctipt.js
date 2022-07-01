// const youName = "Кожевнік";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false


	// if (youName.endsWith("ік")) {
	
	// 	console.log('Українець')

	// } else if (youName.endsWith("ов")){
	// 	console.log('Москаль')
	// }
	// 	else {
	// 	console.log('Невідомий')
	// }


// const a = nation(youName)
// console.log(a)

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// // console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll("portfolio", '.min.js');
// console.log(minifiedCssFileNames); // "styles.min.c
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ФОРМУЛА Math.random!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Math.random() * (max - min) + min
// const max =  30
// const min = 10
// const result =Math.round(Math.random() * (max - min) + min)

// console.log(result)


// // let pleaseNumb = prompt('Давай число');
// // pleaseNumb = Number(pleaseNumb)
// // console.log(pleaseNumb)
// // 2
// // let power = prompt('давай степінь')
// // power = Number(power)
// // console.log(power)

// // 2
// // console.log(Math.pow(pleaseNumb, power))




// const icons = document.querySelectorAll('.icon');
// icons.forEach (icon => {
//   icon.addEventListener('click', (event) => {
//     icon.classList.toggle("open");
//   });
// });



// // Product
// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//      change.target.classList.add('element-show');
//     }
//   });
// }

// let options = {
//   threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.element-animation');

// for (let elm of elements) {
//   observer.observe(elm);
// }





// let menuBtn = document.querySelector('.products__button');
// let menu = document.querySelector('.menu');

// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// })



// Робоче



// // Block
// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//      change.target.classList.add('element-show');
//     }
//   });
// }

// let options = {
//   threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.element-animation');

// for (let elm of elements) {
//   observer.observe(elm);
// }




// //Batoon & menu


// let menuBtn = document.querySelector('.products__button');
// let menu = document.querySelector('.menu');
// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// })

// let menuBtnB = document.querySelector('.products__btn');
// let menuB = document.querySelector('.menuB');
// menuBtnB.addEventListener('click', function(){
// 	menuBtnB.classList.toggle('activeB');
// 	menuB.classList.toggle('activeB');
// })

// let menuBtnC = document.querySelector('.products__but');
// let menuC= document.querySelector('.menuC');
// menuBtnC.addEventListener('click', function(){
// 	menuBtnC.classList.toggle('activeC');
// 	menuC.classList.toggle('activeC');
// })
// Change code below this line
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

// return `"You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price."`

//   // Change code above this line
// }
// makeOrderMessage(2, 100, 50)
// makeOrderMessage(4, 300, 100)
// makeOrderMessage(10, 70, 200)
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if(ordered = 0){
  message ="There are no products in the order!"
}
else if(ordered >= available){
  message = "Your order is too large, there are not enough items in stock!"
}else{
  message = "The order is accepted, our manager will contact you"
}
  // Change code above this line
  return message;
}
checkStorage(100, 50)
checkStorage(100, 130)
checkStorage(70, 0)
checkStorage(200, 20)
checkStorage(200, 250)
checkStorage(150, 0)