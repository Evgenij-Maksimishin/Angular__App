import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;

  items: MenuItem[];

  user = {
    id: 2,
    firstName: 'Svitlana',
    lastName: 'Shevchenko',
    email: 'svitlana@gmail.com',
    profilePicture: '../../../assets/images/avatar-placeholder.png',
    location: {
      country: 'Ukraine',
      city: 'Kyiv',
    },
  };

  constructor(public authService: AuthService, private router: Router) {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.items = [
      {label: 'My profile', icon: 'pi pi-fw pi-id-card', routerLink: '/profile'},
      {label: 'My favorites', icon: 'pi pi-fw pi-heart', routerLink: '/favorites'},
      {label: 'My coupon history', icon: 'pi pi-fw pi-book', routerLink: '/orders'},
      {
        label: 'Sign out',
        icon: 'pi pi-fw pi-sign-out',
        command: () => {
          this.signOut();
        },
      },
    ];
  }

  signOut(): any {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
