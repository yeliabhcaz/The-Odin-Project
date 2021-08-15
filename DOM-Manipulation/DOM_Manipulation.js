// get container
const container = document.querySelector('#container');

//p element that says Hey I'm red
const red_par = document.createElement('p');
red_par.classList.add('red_par');
red_par.textContent = 'Hey I\'m red';
red_par.style.cssText = 'color: red'
container.appendChild(red_par)

//h3 element that says I'm a blue h3
const blue_h = document.createElement('h3');
blue_h.classList.add('blue_h');
blue_h.textContent = 'I\'m a blue h';
blue_h.style.cssText = 'color: blue';
container.appendChild(blue_h)

//div with black border, pick background, and h1 and p elements
const div = document.createElement('div');
div.style.cssText = 'border: 10px solid black; background-color: pink';
const div_h1 = document.createElement('h1');
const div_p = document.createElement('p');
div_h1.textContent = 'I\'m in a div';
div_p.textContent = 'ME TOO!'
div.appendChild(div_h1);
div.appendChild(div_p);
container.appendChild(div);
