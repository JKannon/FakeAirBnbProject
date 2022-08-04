// Modules
import { Loyalty } from './enums';
import { Price, Country } from './types';

export interface Review {
    name: string; 
    stars: number; 
    loyaltyUser: Loyalty; 
    date: Date;
};

export interface Property {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country;
    };
    contact: [ number, string ];
    isAvailable: boolean;
};
