// Imports
import { Permissions, Loyalty } from './enums';
import { isLoggedIn, userPermissions } from './index';

// Variables
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const propertyRecsDisplay = document.querySelector('.properties');
const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const footer = document.querySelector('.footer');
const button = document.querySelector('button');

// Functions
export function showPropRecs(arr){
    // 7/23: refactored the function to create the elements via JS and not Template Literals
    
    arr.forEach((element) => {
        // Create Card
        const card = document.createElement('div');
        card.classList.add('card');
        // Create Image
        const image = document.createElement('img');
        image.setAttribute('src', element.image);
        // Create Title
        const title = document.createElement('h4');
        title.innerText = element.title;
        title.classList.add('title');
        const cardBreak = document.createElement('div');
        cardBreak.classList.add('break');
        // Appends
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(cardBreak);
        propertyRecsDisplay.appendChild(card);
        showDetails(isLoggedIn, card, element.price);
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
       priceDisplay.innerHTML = `$${price.toString()} /night`;
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

let count = 0

export function addReviews(array: {
    name: string; 
    stars: number; 
    loyaltyUser: Loyalty; 
    date: Date; 
}[]) : void {
    if (!count ) {
        count++;
        const topTwo = getTopTwoReviews(array);
        for (let i = 0; i < topTwo.length; i++) {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('review-card');
            reviewCard.innerHTML = `<strong>${topTwo[i].stars}★</strong> <small>from <strong>${topTwo[i].name}</strong></small>`;
            reviewContainer.appendChild(reviewCard);
        }
        container.removeChild(button) 
    }
    console.log(count);
}

button.addEventListener('click', () => addReviews(reviews))

export function getTopTwoReviews(reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: Loyalty; 
    date: Date; 
}[]): { 
    name: string; 
    stars: number; 
    loyaltyUser: Loyalty; 
    date: Date; 
} {
    // ✅ Sort in Descending order (high to low) by Stars
    const sortedStarsDesc = reviews.sort((a, b) => b.stars - a.stars);
    return sortedStarsDesc.slice(0,2)
}

// Footer
let currentTime: string = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
let currentLocation: [string, string, number] = ["Philadephia, PA", currentTime, 88];
footer.innerHTML = `${currentLocation[0]} | ${currentLocation[1]} | ${currentLocation[2]}°F`;
