// Enum Types mini-challenge
// Replace the value of loyaltyUser to a GOLD_USER, SILVER_USER or BRONZE_USER, making sure to
// use what we learnt about Enums in the previous lesson. Make Sheia GOLD, Andrzej BRONZE 
// and Omar SILVER.
// 2. export the enum
// 3. Fix the function in the utils to show Sheias star as she is a GOLD_USER.

import { showReviewTotal, populateUser, showPropRecs } from './utils';
import { Permissions, Loyalty } from './enums';
const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('.footer');

let isOpen: boolean;

// Reviews Array
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: Loyalty; 
    date: Date
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: Loyalty.GOLD_USER,
        date:  new Date('01-04-2021'.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: Loyalty.BRONZE_USER,
        date: new Date('28-03-2021'.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: Loyalty.SILVER_USER,
        date: new Date('27-03-2021'.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
    },
];

// ✅ Sort in Ascending order (low to high)
const sortedAsc = reviews.sort(
  (objA, objB) => objA.date.getTime() - objB.date.getTime(),
);

// ✅ Sort in Descending order (high to low)
const sortedDesc = reviews.sort(
  (objA, objB) => objB.date.getTime() - objA.date.getTime(),
);

// User Object
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};

// Array of Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [ number, string ];
    isAvailable: boolean;
}[] = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    }
];

// Functions
showReviewTotal(reviews.length, sortedDesc[0].name, sortedDesc[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

showPropRecs(properties);

// use your location, your current time, and the current temperature of your
// location
let currentTime: string = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
let currentLocation: [string, string, number] = ["Philadephia, PA", currentTime, 88];
footer.innerHTML = `${currentLocation[0]} | ${currentLocation[1]} | ${currentLocation[2]}°F`;