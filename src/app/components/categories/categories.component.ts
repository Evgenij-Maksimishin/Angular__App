import {Component} from '@angular/core';

interface Category {
  name: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: Category[];

  selectedCategories!: Category[];

  constructor() {
    this.categories = [
      {name: 'Events'},
      {name: 'Food'},
      {name: 'Clothing'},
      {name: 'Computers & Accessories'},
      {name: 'Mobile'},
      {name: 'Other'},
    ];
  }
}
