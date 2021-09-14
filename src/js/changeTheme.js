'use strict';

const body = document.getElementById('body');
const main = document.getElementById('main-content');
const hiddenDescription = document.getElementById('hidden-description');

// Create button for changing theme
let button = document.createElement('button');
button.id = 'toggle-theme';
button.innerHTML = 'Byt tema';
main.appendChild(button);

button.addEventListener( 'click', function() {
    if(body.className == 'theme-stars') {
        body.className = 'theme-diagonal';
    } else {
        body.className = 'theme-stars';
    }

    if(hiddenDescription.className == 'theme-stars-description') {
        hiddenDescription.innerHTML = 'In the background of this page there is diagonal color blocks moving back and forth.';
    } else {
        hiddenDescription.innerHTML = 'In the background of this page there is a background animation of a starry sky with moving and twinkling stars.';
    }
});