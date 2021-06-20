import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {DividerModule} from 'primeng/divider';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {GalleriaModule} from 'primeng/galleria';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CountdownModule} from 'ngx-countdown';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './pages-components/home-page/home-page.component';
import {LoginPageComponent} from './pages-components/login-page/login-page.component';
import {DealCardComponent} from './components/deal-card/deal-card.component';
import {DealGalleryComponent} from './components/deal-gallery/deal-gallery.component';
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './components/main/main.component';
import {FooterComponent} from './components/footer/footer.component';
import {DealPageComponent} from './pages-components/deal-page/deal-page.component';
import {VendorPageComponent} from './pages-components/vendor-page/vendor-page.component';
import {UserProfilePageComponent} from './pages-components/user-profile-page/user-profile-page.component';
import {FavoritesPageComponent} from './pages-components/favorites-page/favorites-page.component';
import {OrderHistoryPageComponent} from './pages-components/order-history-page/order-history-page.component';
import {AuthGuard} from './guards/auth.guard';
import {AUTH_PROVIDERS} from './services/auth.service';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {CategoriesComponent} from './components/categories/categories.component';
import {VendorsComponent} from './components/vendors/vendors.component';
import {LocationDropdownComponent} from './components/location-dropdown/location-dropdown.component';
import {LoggedInGuard} from './guards/logged-in.guard';
import {SidemenuComponent} from './components/sidemenu/sidemenu.component';
import {SortingDropdownComponent} from './components/sorting-dropdown/sorting-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    DealCardComponent,
    DealGalleryComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DealPageComponent,
    VendorPageComponent,
    UserProfilePageComponent,
    FavoritesPageComponent,
    OrderHistoryPageComponent,
    CategoriesComponent,
    VendorsComponent,
    VendorsComponent,
    LocationDropdownComponent,
    SidemenuComponent,
    SortingDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DividerModule,
    ListboxModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    BrowserAnimationsModule,
    CountdownModule,
    TabViewModule,
    ReactiveFormsModule,
    AccordionModule,
    GalleriaModule,
    MenuModule,
    CardModule,
    AvatarModule,
    TableModule,
    MultiSelectModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    AUTH_PROVIDERS,
    AuthGuard,
    LoggedInGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
