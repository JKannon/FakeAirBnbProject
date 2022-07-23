// Imports
import { Permissions, Loyalty } from './enums';
import { you } from './index';

// Variables
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const propertyRecsDisplay = document.querySelector('.properties');
const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('.footer');

// Functions
export function showPropRecs(arr){
    // 7/23: refactored the function to create the elements via JS and not Template Literals
    const isLoggedIn = you.isReturning;
    const userPermissions = you.permissions;
    
    arr.forEach((element) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h4 class="title">
                ${element.title}
            </h4>
        `;
        const image = document.createElement('img');
        image.setAttribute('src', element.image);
        card.appendChild(image);
        propertyRecsDisplay.appendChild(card);
        showDetails(userPermissions, card, element.price);
    });
};

export function showReviewTotal(value: number, reviewer: string, isLoyalty: Loyalty) {
    const iconDisplay = (isLoyalty === 'Gold') ? '⭐' : '';
    
    // Line 41 is logic to add an "s" if there are multiple or 0 reviews
    reviewTotalDisplay.innerHTML = `
        ${value.toString()} 
        ${(value > 1 || value === 0) ? 'reviews' : 'review'} 
        | Last reviewed by: ${reviewer} ${iconDisplay}
    `;
    
    // Could also achieve this by utilizing the makeMultiple() function on line 68:
    /*
        reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
    */
};

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back';
    };
    userNameDisplay.innerHTML = userName;
};

export function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div');
       priceDisplay.innerHTML = price.toString() + '/night';
       element.appendChild(priceDisplay);
   };
};

// makeMultiple() Function
/* 
    export function makeMultiple(value: number): string {
        if (value > 1 || value == 0 ) {
            return 's'
        } else return ''
    }
*/

// Footer
let currentTime: string = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
let currentLocation: [string, string, number] = ["Philadephia, PA", currentTime, 88];
footer.innerHTML = `${currentLocation[0]} | ${currentLocation[1]} | ${currentLocation[2]}°F`;
