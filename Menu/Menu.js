/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

 X Step 1: Write a function that will create a menu component as seen below: 

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument. X

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menuBuilder(item) {
  //Elements
  const menuClass = document.createElement('ul');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  const listItem4 = document.createElement('li');
  const listItem5 = document.createElement('li');
  const listItem6 = document.createElement('li');

  //Classes
  menuClass.classList.add('menu');

  //Text Content
  listItem1.textContent = item[0];
  listItem2.textContent = item[1];
  listItem3.textContent = item[2];
  listItem4.textContent = item[3];
  listItem5.textContent = item[4];
  listItem6.textContent = item[5];

  menuClass.append(list);
  list.append(listItem1);
  list.append(listItem2);
  list.append(listItem3);
  list.append(listItem4);
  list.append(listItem5);
  list.append(listItem6);

  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    menuClass.classList.toggle("menu--open");
  });

  return menuClass;
}


const header = document.querySelector('.header');
const list = document.createElement('li');

header.append(menuBuilder(menuItems));





