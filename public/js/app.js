console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const heading3 = document.querySelector('#weekly');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageTwo.setAttribute('class', '');
    messageThree.setAttribute('class', '');

    const location = search.value
    
    messageOne.setAttribute('class', 'shadow-sm p-3 mb-5 bg-white rounded');
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    messageThree.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location;
                messageTwo.setAttribute('class', 'shadow-lg p-3 mb-5 bg-white rounded');
                messageThree.setAttribute('class', 'shadow-lg p-3 mb-5 bg-white rounded');
                messageTwo.textContent = data.forecast;
                messageThree.textContent = data.summary;
            }
        })
    })
})