import {Component} from '@angular/core';

interface Sorting {
  id: string;
  label: string;
}

@Component({
  selector: 'app-sorting-dropdown',
  template: ` <p-dropdown
    [options]="sortingOptions"
    [(ngModel)]="selectedSorting"
    placeholder="Order by..."
    optionLabel="label"
    [showClear]="true"
  >
  </p-dropdown>`,
  styles: [
    `
      :host ::ng-deep .p-dropdown {
        width: 280px;
      }
    `,
  ],
})
export class SortingDropdownComponent {
  sortingOptions: Sorting[];

  selectedSorting: Sorting;

  constructor() {
    this.sortingOptions = [
      {
        id: '',
        label: 'Expiration: closest first',
      },
      {
        id: '',
        label: 'Expiration: latest first',
      },
      {
        id: '',
        label: 'Discount: highest first',
      },
      {
        id: '',
        label: 'Discount: lowest first',
      },
    ];
  }
}
