// const magicBtn = document.querySelector('.js-magic-btn');
// const navEL = document.querySelector('.site-nav');
// console.log('navEL', navEL);

// const navLinkEL = document.querySelectorAll('.site-nav__link');
// console.log('navLinkEL', navLinkEL);

// const navEL = document.querySelector('.site-nav');
// console.log('navEL', navEL);

// const navLinkEL = document.querySelectorAll('.site-nav__link');
// console.log('navLinkEL', navLinkEL);
///////////////////////////////////////////// заміна фото по кнопці //////////////////////////////////////
// magicBtn.addEventListener('click', () => {
//   const imagesEl = document.querySelector('.photo');
//   console.log(imagesEl);
//   console.log(imagesEl.src);
//   imagesEl.src = './image/img-1-1.jpg';
// });
/////////////////////////////////////////////// dataset /////////////////////////////////
// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions[0].dataset.action);

// magicBtn.addEventListener('click', () => {
//   const inputEl = document.querySelector('.js-input');
//   console.log(inputEl.value);
// });

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// navEl.classList.add('super-cool');
// navEl.classList.remove('super-cool');

// magicBtn.addEventListener('click', () => {
//   navEl.classList.toggle('addclas');
// });

// const currentPageUrl = '/conta';
// // const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"] `);
// // console.log(linkEl);

// magicBtn.addEventListener('click', () => {
//   const currentPageUrl = '/portfolio';
//   const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"] `);
//   console.log(linkEl);
//   linkEl.classList.toggle('site-nav__item--curent');
// });

// const contactEl = document.querySelector(`.site-nav__link,[href="${}"]`);

// const listEl = document.querySelector('.site-nav');

// const newEl = listEl.children;
// console.log(newEl);
////////////////////////////////////////////////////// СТВОРЕННЯ ЕЛЕМЕНТІВ.....................................
// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Це заголовок сторінки';
// console.log(titleEl);

// document.body.appendChild(titleEl);

// const imagEl = document.createElement('img');
// console.log(imagEl);
// imagEl.classList.add('img-photo');

// imagEl.src =
//   'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960';
// imagEl.alt = 'Фото котика';
// imagEl.width = 300;
// document.body.appendChild(imagEl);
// console.log(imagEl);

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('XXXXXXX');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Це посилання на сторінку';
// navLinkEl.href = '/profile';

// navItemEl.appendChild(navLinkEl);

// const navEl = document.querySelector('.site-nav');

// navEl.insertBefore(navItemEl, navEl.children[0]);

// console.log(navEl);

// const heroEl = document.querySelector('.hero');

// // heroEl.appendChild(titleEl);
// // heroEl.appendChild(imagEl);

// //правильно додаємо дукілька елементів
// heroEl.append(titleEl, imagEl);

////////////////////////////////////////////	СТВOРЕННЯ КОЛЕКЦІЙ ЕЛЕМЕНТУ  //////////////////////////////////////////

//6 модуль 1 заняття 1:40хв

// const colorPickerOption = [
//   { label: 'red', color: '#F44336' },
//   { label: 'grean', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '3F51B5' },
// ];
// const colorPickerContaineeOption = document.querySelector('.js-color-picker');

// const makeColorPickerOption = options => {
//   return options.map(option => {
//     const btnEl = document.createElement('button');
//     btnEl.type = 'button';
//     btnEl.classList.add('color-picker__option');
//     btnEl.textContent = option.label;
//     btnEl.style.backgroundColor = option.color;

//     return btnEl;
//   });
// };

// const element = makeColorPickerOption(colorPickerOption);

// colorPickerContaineeOption.append(...element);

//////////////////////////////////////////////
// import products from './products.js';
// console.log(products);

// const a = document.querySelector('.js-products');

// const makeProductCard = ({ name, description, price }) => {
//   const artEl = document.createElement('article');
//   artEl.classList.add('products');

//   const titlEl = document.createElement('h2');
//   titlEl.classList.add('products__name');
//   titlEl.textContent = name;

//   const textEl = document.createElement('p');
//   textEl.classList.add('product__descr');
//   textEl.textContent = description;

//   const textTwoEl = document.createElement('p');
//   textTwoEl.classList.add('product__price');
//   textTwoEl.textContent = `Ціна: ${price}`;

//   artEl.append(titlEl, textEl, textTwoEl);

//   return artEl;
// };

// const element = products.map(makeProductCard);
// console.log(element);

// a.append(...element);

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const galeryEl = document.querySelector('.gallery');

// const element = images
//   .map(el => {
//     return `<li class="gallery-item"><img class="gallery-img" src="${el.url}" alt="${el.alt}"></li>`;
//   })
//   .join('');

// galeryEl.insertAdjacentHTML('beforeend', element);

// const galleriEl = document.querySelector('.gallery');

// const markup = images
//   .map(image => {
//     return `<li class="gsllety-item"><img class="gallery-img" src="${image.url}" alt="${image.alt}"/></li>`;
//   })
//   .join('');
// console.log(markup);

// galleriEl.insertAdjacentHTML('beforeend', markup);

const a = '5';

console.log(a);
const b = Number(a);
console.log(Number(`${b}`));
