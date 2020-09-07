import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drawing-page',
  templateUrl: './drawing-page.component.html',
  styleUrls: ['./drawing-page.component.css']
})
export class DrawingPageComponent implements OnInit {
  name: string;
  private sub: any;
  drawings: any;

  constructor(private ApiCaller: HttpClient, private route: ActivatedRoute) {
    this.getDrawings();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
    });
  }
  getDrawings() {
    this.ApiCaller
      .get("https://jana-art-server.herokuapp.com/drawings")
      .subscribe(
        x => {
          this.drawings = x;
          if (this.name.toLowerCase() == "hands") {
            this.drawings = this.drawings.filter(drawing => drawing.category == "hands");
          }
          else if (this.name.toLowerCase() == "fanarts") {
            this.drawings = this.drawings.filter(drawing => drawing.category == "fanarts");
          }
          else if (this.name.toLowerCase() == "originals") {
            this.drawings = this.drawings.filter(drawing => drawing.category == "originals");
          }
          else if (this.name.toLowerCase() == "sketches") {
            this.drawings = this.drawings.filter(drawing => drawing.category == "sketches");
          }
          else if (this.name.toLowerCase() == "challenges") {
            this.drawings = this.drawings.filter(drawing => drawing.category == "challenges");
          }
        });
  };
}