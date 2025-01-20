import coffeeShop from './images/coffeeshop.png';

function createHome(){
    const home = document.createElement('div');
        home.classList.add('home')
}

const headLine = document.createElement('h1');
headline.textContent = 'Welcome to Beyonder Café';

const image = document.createElement('img');
image.src = coffeeShop;
image.alt = 'coffee shop interior';

const description = document.createElement('p');
description.textContent = 'Beyonder Café invites you to a world of mystery and wonder, where rich, dark brews meet the charm of steam and medieval elegance. Step inside and let each sip transport you to an extraordinary era.';

home.appendChild(headline);
home.appendChild(image);
home.appendChild(description);

return home;

export default createHome;