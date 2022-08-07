import { Review } from './interfaces';

// TS Classes need to add the properties before the constructor
export default class MainProperty {
    src: string;
    title: string;
    reviews: Review[];
    constructor(src: string, title: string, reviews: Review[]) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    };
};
