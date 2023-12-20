'use strict';
const redCoke = document.querySelector( '.background-color-red-coke' );
const blueCoke = document.querySelector( '.background-color-blue-coke' );
const hidden = document.querySelector( '.hidden' );
const redCokeIcon = document.querySelector( '.red-coke-icon' );
const blueCokeIcon = document.querySelector( '.blue-coke-icon' );
const redCokeIcon2 = document.querySelector( '.red-coke-icon2' );
const blueCokeIcon2 = document.querySelector( '.blue-coke-icon2' );


// const removeAndAdd = addEventListener( 'click', function () {
    
// } );

const firstIcon = function () {
    blueCokeIcon.addEventListener( 'click', function () {
        if ( redCoke === hidden ) {
            redCoke.classList.remove( 'hidden' );
            blueCoke.classList.add( 'hidden' );
        } if (redCoke != hidden) {
            redCoke.classList.add( 'hidden' );
            blueCoke.classList.remove( 'hidden' );
        } 
    })
}
firstIcon();

const secondIcon = function () {
    redCokeIcon2.addEventListener( 'click', function () {
        if ( blueCoke === hidden ) {
            redCoke.classList.remove( 'hidden' );
            blueCoke.classList.add( 'hidden' );
        } if (blueCoke != hidden) {
            redCoke.classList.remove( 'hidden' );
            blueCoke.classList.add( 'hidden' );
        } 
    })
}
secondIcon();



