// Modules
import { showReviewTotal, populateUser, showPropRecs, showDetails, getTopTwoReviews } from './utils';
import { Permissions, Loyalty } from './enums';
import { Review, Property } from './interfaces';
import MainProperty from './classes';

// Variables
let isOpen: boolean;
const button = document.querySelector('button');
const mainImageContainer = document.querySelector('.main-image');

// Objects

// Reviews Array

// Could use any[] like:
// const reviews : any[] =[{ array of review objects }]
export const reviews : Review[] = [
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
        date: new Date('27-03-2021'.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")),
        description: 'Great location and convenient parking. The house was spotless and the host was very helpful and responsive.'
    },
];

// ✅ Sort in Ascending order (low to high) by Date
const sortedDateAsc = reviews.sort(
  (a, b) => a.date.getTime() - b.date.getTime(),
);

// ✅ Sort in Descending order (high to low) by Date
const sortedDateDesc = reviews.sort(
  (a, b) => b.date.getTime() - a.date.getTime(),
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

export const isLoggedIn = you.isReturning;
export const userPermissions = you.permissions;

// Array of Properties
const properties : Property[] = [
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
        price: 30,
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
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malia-hotel.jpg',
        title: 'Malaysian Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: '45334',
            country: 'Malaysia',
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
        
    }
];

// Functions Invocations
showReviewTotal(reviews.length, sortedDateDesc[0].name, sortedDateDesc[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

showPropRecs(properties);

let yourMainProperty = new MainProperty(
    'images/italian-villa.jpeg', 
    'Italian Villa', 
    [{
        name: 'Giovonna',
        stars: 5,
        loyaltyUser: Loyalty.SILVER_USER,
        date: new Date('08-05-2022')
    }]
);

// Main Image
mainImageContainer.setAttribute("style", "background-image: url(" + yourMainProperty.src + ");background-repeat: no-repeat;");
