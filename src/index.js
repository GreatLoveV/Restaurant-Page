import './styles.css';
import createContact from './contact';
import createHome from './home'
import createMenu from './menu'


function clearContent() {
    const content = document.getElementById('content')
    content.innerHTML = '';
}

function initializeWebsite() {
    const content = document.getElementById('content')
    content.appendChild(createHome());

    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', () =>{
        clearContent();
        content.appendChild(createHome());
    });

    menuBtn.addEventListener('click', () =>{
        clearContent();
        content.appendChild(createMenu());
    });

    contactBtn.addEventListener('click', () =>{
        clearContent();
        content.appendChild(createContact());
    });
};

document.addEventListener('DOMContentLoaded', initializeWebsite);