import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Deal} from '../../models/deal.model';

@Component({
  selector: 'app-deal-page',
  templateUrl: './deal-page.component.html',
  styleUrls: ['./deal-page.component.scss'],
})
export class DealPageComponent implements OnInit {
  constructor(private router: Router, private location: Location, private http: HttpClient) {}

  deals: Deal[] = [
    {
      id: 1,
      title: '15% off for one pizza with a softdrink',
      coverImage:
        'https://thumbs.dreamstime.com/b/slice-pizza-box-can-coca-cola-slice-pizza-box-can-coca-cola-wood-background-117194046.jpg',
      vendor: 'Pizzeria Oregano',
      description:
        'What’s included: choice of takeaway pizza with a soft drink for one or two. Pizzas available include: margherita Napoletana Giotto quattro formaggi quattro stagioni vegetariana fiorentina prosciutto di Parma. Soft drinks available include: Coke Coke Zero Fanta limonata apple juice peach juice iced tea. Right now, Oregano’s is offering 2 of your favorite pastas AND a Pizza Cookie of your choosing all for $45.00. This bundle is available for takeout only — either pick-up or Doordash delivery — and for a limited time',
      oldPrice: 52,
      newPrice: 45,
      status: 'Active',
      country: 'Ukraine',
      city: 'Kyiv',
      startDate: 'Jun 01, 2021',
      expiryDate: 'Jun 18, 2021',
    },
  ];

  images: any;

  getImages(): Observable<any> {
    const url = 'assets/images.json';
    return this.http.get<any>(url);
  }

  ngOnInit(): void {
    this.getImages().subscribe((data) => {
      console.log(data);
      this.images = data.data;
    });
  }

  goBackHandler() {
    if (window.history.length > 1) {
      this.location.back();
      console.log(this.date);
    } else {
      this.router.navigateByUrl('home');
    }
  }

  expiryDate: any = this.deals[0].expiryDate;

  finalDate: any = new Date(this.expiryDate);

  date: any = this.finalDate - Date.now();

  days: any = Math.floor(this.date / (1000 * 60 * 60 * 24));

  noMoreDaysLeft = this.days < 1;
}
