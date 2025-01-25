function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';

    const info = document.createElement('div');
    info.classList.add('contact-info');

    const hours = document.createElement('div');
    hours.innerHTML = `
        <h2>Hours</h2>
        <p>
            Monday - Friday: 11:00 AM - 10:00 PM<br>
            Saturday - Sunday: 10:00 AM - 11:00 PM
        </p>
    `;

    const location = document.createElement('div');
    location.innerHTML = `
        <h2>Location</h2>
        <p>
            123 Dining Street<br>
            Restaurant City, RC 12345
        </p>
    `;
    
    const phone =document.createElement('div');
    phone.innerHTML = `
        <h2>Contact</h2>
        <p>
            Phone: (555) 123-4567<br>
            Email: info@restaurant.com
        </p>
    `;

    info.appendChild(hours);
    info.appendChild(location);
    info.appendChild(phone);
    contact.appendChild(headline)
    contact.appendChild(info);
    
    return contact;
};  


export default createContact;