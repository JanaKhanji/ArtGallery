import { Component } from '@angular/core';
import { DrawingsService } from '../services/drawing-service';
import { Categories } from '../models/category';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: Categories[];

  constructor(private drawingsService: DrawingsService) {
    this.categories = this.drawingsService.getCategories();
  }
}
