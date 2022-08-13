// console.log('appad elemant')
const friends = document.getElementById('friends');
const li = document.createElement('li');
li.innerText = 'razu';
friends.appendChild(li);

const mainContainer = document.getElementById('main-container');
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1 > Dress section</h1>
<ul>
    <li >T-shirt</li>
    <li >shirt</li>
    <li >gamcha</li>
    <li >pant</li>
    <li >short pant</li>

</ul>

`
mainContainer.appendChild(sectionDress);