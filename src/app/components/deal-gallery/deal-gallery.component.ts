import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Deal} from '../../models/deal.model';

@Component({
  selector: 'app-deal-gallery',
  templateUrl: './deal-gallery.component.html',
  styleUrls: ['./deal-gallery.component.scss'],
})
export class DealGalleryComponent {
  constructor(private router: Router) {}

  deals: Deal[] = [
    {
      id: 1,
      title: '15% off for one pizza with a softdrink',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 2,
      title: '15% off for something else tasty',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 3,
      title: '25% off for something even more tasty',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 1,
      title: '15% off for one pizza with a softdrink',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 2,
      title: '15% off for something else tasty',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 3,
      title: '25% off for something even more tasty',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 1,
      title: '15% off for one pizza with a softdrink',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 2,
      title: '15% off for something else tasty',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 3,
      title: '25% off for something even more tasty',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 1,
      title: '15% off for one pizza with a softdrink',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 2,
      title: '15% off for something else tasty',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
    {
      id: 3,
      title: '25% off for something even more tasty',
      description: 'Pizzeria Oregano, Minsk, Belarus',
    },
  ];

  cardClickHandler(event: any) {
    if (event.target.parentNode.nodeName === 'A') {
      this.router.navigateByUrl('deal');
    }
  }
}
