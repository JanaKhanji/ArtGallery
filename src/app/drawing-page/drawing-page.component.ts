import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrawingsService } from '../services/drawing-service';
import { categoriesEnum } from '../models/category.enum';
import { Drawing } from '../models/drawing';

@Component({
  selector: 'app-drawing-page',
  templateUrl: './drawing-page.component.html',
  styleUrls: ['./drawing-page.component.css'],
  standalone: false,
})
export class DrawingPageComponent implements OnInit {
  category: categoriesEnum | null = null;
  drawings: Drawing[] = [];

  constructor(
    private route: ActivatedRoute,
    private drawingsService: DrawingsService,
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category') as
      | categoriesEnum
      | null;
    this.drawings = this.drawingsService.getDrawings(this.category);
  }
}
