import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories :any;
  constructor(private ApiCaller: HttpClient) {
    this.getCategories()
   }

  ngOnInit(): void {
  }
  getCategories() {
    this.ApiCaller
      .get("https://jana-art-server.herokuapp.com/categories")
      .subscribe(
        x => { this.categories=x;
        });
  };
}
