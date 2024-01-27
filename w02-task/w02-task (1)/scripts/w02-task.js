/* W02-Task - Profile Home Page*/

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - VARIABLES */
const myName = 'Olivia Smart';
document.querySelector('#name').textContent = myName;
const currentYear = 2024;
document.querySelector('#year').textContent = currentYear;
const myPicture = 'images/me.jpeg';
document.querySelector('img').setAttribute('src', myPicture);

/* Step 3 - Element Variables */



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ['Pizza', 'Hamburgers', 'Soda'];
document.querySelector('#food').textContent = favoriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFavoriteFood = 'Ice Cream';

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(anotherFavoriteFood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favoriteFoods;

// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFoods;

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFoods;


