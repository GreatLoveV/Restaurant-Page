import theCogwheelBrew from './images/coffee1.png';  
import mysticAbyss from './images/coffee2.png';  
import steamShadow from './images/coffee3.png';  

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const headline = document.createElement('h1');
    headline.textContent = 'The Beyonder Menu';
    menu.appendChild(headline)

    const items = [
        {
            name: 'The Cogwheel Brew',
            price: '3$',
            description: 'A smoky black coffee to fuel your next adventure.',
            image: theCogwheelBrew,

        },
        {
            name: 'Mystic Abyss',
            price: '3$',
            description: 'A velvety coffee with dark chocolate and spice.',
            image: mysticAbyss,

        },
        {
            name: 'Steam & Shadow',
            price: '3$',
            description: 'An earthy blend inspired by foggy streets and ancient engines.',
            image: steamShadow,

        }
    ]

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const title = document.createElement('h2');
        title.textContent = item.name;

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const price = document.createElement('span');
        price.textContent = item.price;

        const description = document.createElement('p');
        description.textContent = item.description;
        
        itemDiv.appendChild(title);
        itemDiv.appendChild(img);
        itemDiv.appendChild(price);
        itemDiv.appendChild(description);
        
        menu.appendChild(itemDiv);
        

        
    });

    return menu;
}

export default createMenu;