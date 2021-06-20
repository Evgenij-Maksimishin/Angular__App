import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Deal} from '../../models/deal.model';

@Component({
  selector: 'app-order-history-page',
  templateUrl: './order-history-page.component.html',
  styleUrls: ['./order-history-page.component.scss'],
})
export class OrderHistoryPageComponent implements OnInit {
  deals: Deal[];

  cols: any[];

  noMobile: boolean = true;

  pages: number;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (window.screen.width <= 640) {
      this.noMobile = false;
    }
    this.pages = 1;
    this.cols = [
      // { field: 'id', header: 'Id' },
      {field: 'title', header: 'Title'},
      {field: 'country', header: 'Country'},
      {field: 'city', header: 'City'},
      {field: 'startDate', header: 'Start Date'},
      {field: 'expiryDate', header: 'Expiry Date'},
      {field: 'description', header: 'Description'},
      {field: 'vendor', header: 'Vendor'},
    ];

    this.deals = [
      {
        id: 1,
        title: '15% off for one pizza with a softdrink',
        coverImage:
          'https://thumbs.dreamstime.com/b/slice-pizza-box-can-coca-cola-slice-pizza-box-can-coca-cola-wood-background-117194046.jpg',
        vendor: 'Pizzeria Oregano',
        description: `What’s included: choice of takeaway pizza with a soft drink for one or two. Pizzas available include: margherita Napoletana Giotto quattro formaggi
           quattro stagioni vegetariana fiorentina prosciutto di Parma. Soft drinks available include: Coke Coke Zero Fanta limonata apple juice peach juice iced tea.
            Right now, Oregano’s is offering 2 of your favorite pastas AND a Pizza Cookie of your choosing all for $45.00. This bundle is available for
             takeout only — either pick-up or Doordash delivery — and for a limited time`,
        oldPrice: 52,
        newPrice: 45,
        status: 'Active',
        country: 'Belarus',
        city: 'Minsk',
        startDate: 'Jun 03, 2021',
        expiryDate: 'Jun 19, 2021',
      },
      {
        id: 2,
        title: '15% off for one pizza with a softdrink',
        coverImage:
          'https://thumbs.dreamstime.com/b/slice-pizza-box-can-coca-cola-slice-pizza-box-can-coca-cola-wood-background-117194046.jpg',
        vendor: 'Pizzeria Oregano',
        description: `What’s included: choice of takeaway pizza with a soft drink for one or two. Pizzas available include: margherita Napoletana Giotto quattro formaggi
           quattro stagioni vegetariana fiorentina prosciutto di Parma. Soft drinks available include: Coke Coke Zero Fanta limonata apple juice peach juice iced tea.
            Right now, Oregano’s is offering 2 of your favorite pastas AND a Pizza Cookie of your choosing all for $45.00. This bundle is available for
            takeout only — either pick-up or Doordash delivery — and for a limited time`,
        oldPrice: 52,
        newPrice: 45,
        status: 'Active',
        country: 'Russian',
        city: 'Moscow',
        startDate: 'Jun 05, 2021',
        expiryDate: 'Jun 21, 2021',
      },
      {
        id: 3,
        title: '15% off for one pizza with a softdrink',
        coverImage:
          'https://thumbs.dreamstime.com/b/slice-pizza-box-can-coca-cola-slice-pizza-box-can-coca-cola-wood-background-117194046.jpg',
        vendor: 'Pizzeria Oregano',
        description: `What’s included: choice of takeaway pizza with a soft drink for one or two. Pizzas available include: margherita Napoletana Giotto quattro formaggi
        quattro stagioni vegetariana fiorentina prosciutto di Parma. Soft drinks available include: Coke Coke Zero Fanta limonata apple juice peach juice iced tea.
         Right now, Oregano’s is offering 2 of your favorite pastas AND a Pizza Cookie of your choosing all for $45.00. This bundle is available for
         takeout only — either pick-up or Doordash delivery — and for a limited time`,
        oldPrice: 52,
        newPrice: 45,
        status: 'Active',
        country: 'Ukraine',
        city: 'Kyiv',
        startDate: 'Jun 01, 2021',
        expiryDate: 'Jun 16, 2021',
      },
    ];

    this.deals.sort((b, a) => new Date(b.startDate!).getTime() - new Date(a.startDate!).getTime());
  }
}
