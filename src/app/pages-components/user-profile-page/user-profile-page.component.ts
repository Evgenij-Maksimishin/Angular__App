import {Component} from '@angular/core';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent {
  user = {
    id: 2,
    firstName: 'Svitlana',
    lastName: 'Shevchenko',
    email: 'svitlana@gmail.com',
    location: {
      country: 'Ukraine',
      city: 'Kyiv',
    },
  };

  url = '../../../assets/images/avatar-placeholder.png';

  selectFile(event: any) {
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev: any) => {
        this.url = ev.target.result;
      };
    }
  }
}
