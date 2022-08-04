// Modules
import { showReviewTotal, populateUser, showPropRecs, showDetails, getTopTwoReviews } from './utils';
import { Permissions, Loyalty } from './enums';
import { Price, Country } from './types';
import { Review, Property } from './interfaces';


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

// Functions Invocations
showReviewTotal(reviews.length, sortedDateDesc[0].name, sortedDateDesc[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

showPropRecs(properties);

// Classes

// TS Classes need to add the properties before the constructor
class MainProperty {
    src: string
    title: string
    reviews: Review[]
    constructor(src: string, title: string, reviews: Review[]) {
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}

let yourMainProperty = new MainProperty('https://www.hamstech.com/wp-content/uploads/2017/08/Interior-designing-course.jpeg', 'Italian Villa', getTopTwoReviews(reviews));

// Main Image
mainImageContainer.setAttribute("style", "background-image: url(" + yourMainProperty.src + ");background-repeat: no-repeat;");
