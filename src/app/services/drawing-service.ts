import { Injectable } from '@angular/core';
import { categoriesEnum } from '../models/category.enum';
import { categories, drawings } from '../models/data';
import { Drawing } from '../models/drawing';
import { Categories } from '../models/category';

@Injectable({providedIn: 'root'})
export class DrawingsService {
    constructor() { }

    getCategories(): Categories[] {
        return categories;
    }

    getDrawings(category: categoriesEnum = null): Drawing[] {
        if (category) {
            return drawings.filter(el => el.category === category);
        } return drawings;
    }
}