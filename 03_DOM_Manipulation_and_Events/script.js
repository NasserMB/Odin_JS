container = document.querySelector('#container');

// div .content
content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the NEW text content on the page!';

container.appendChild(content);

// p .paraRed
para = document.createElement('p');

para.classList.add('paraRed');
para.style.color = 'red';
para.textContent = "Hey I'm red!";

container.appendChild(para);

// h3 .headThree
headThree = document.createElement('h3');

headThree.classList.add('headThree');
headThree.style.color = 'blue';
headThree.textContent = "I'm a blue h3";

container.appendChild(headThree);

// div .subContainer
subContainer = document.createElement('div');

subContainer.classList.add('subContainer');
subContainer.style.border = '1px solid black';
subContainer.style.backgroundColor = 'pink';

// h1 .subHead
subHead = document.createElement('h1');

subHead.classList.add('subHead');
subHead.textContent = "I'm in a div";

subContainer.appendChild(subHead);

// p .subPara
subPara = document.createElement('p');

subPara.classList.add('subPara');
subPara.textContent = 'ME TOO!'

subContainer.appendChild(subPara);

// add subContainer to container
container.appendChild(subContainer);