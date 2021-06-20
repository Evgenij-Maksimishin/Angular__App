import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {HomePageComponent} from './pages-components/home-page/home-page.component';
import {LoginPageComponent} from './pages-components/login-page/login-page.component';
import {DealPageComponent} from './pages-components/deal-page/deal-page.component';
import {UserProfilePageComponent} from './pages-components/user-profile-page/user-profile-page.component';
import {FavoritesPageComponent} from './pages-components/favorites-page/favorites-page.component';
import {OrderHistoryPageComponent} from './pages-components/order-history-page/order-history-page.component';
import {AuthGuard} from './guards/auth.guard';
import {VendorPageComponent} from './pages-components/vendor-page/vendor-page.component';
import {LoggedInGuard} from './guards/logged-in.guard';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent, canActivate: [LoggedInGuard]},
  {path: '', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: UserProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'favorites', component: FavoritesPageComponent, canActivate: [AuthGuard]},
  {path: 'orders', component: OrderHistoryPageComponent, canActivate: [AuthGuard]},
  {path: 'deal', component: DealPageComponent, canActivate: [AuthGuard]},
  {path: 'vendor/:id', component: VendorPageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
