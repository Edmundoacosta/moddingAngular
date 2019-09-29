import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ModdingService } from './providers/moddinpc.service';
import { SessionService } from './providers/session.service';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryViewComponent } from './components/categories/category-view/category-view.component';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { ZonaGamerComponent } from './components/zona-gamer/zona-gamer.component';
import { PersonalizacionComponent } from './components/personalizacion/personalizacion.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Checkout1Component } from './components/checkout/checkout1/checkout1.component';
import { Checkout2Component } from './components/checkout/checkout2/checkout2.component';
import { Checkout3Component } from './components/checkout/checkout3/checkout3.component';
import { UsersListComponent } from './components/admin/dashboard/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    FooterComponent,
    NovedadesComponent,
    NotfoundComponent,
    RegistroComponent,
    CategoriesComponent,
    CategoryViewComponent,
    ZonaGamerComponent,
    PersonalizacionComponent,
    UserDashboardComponent,
    ShoppingCartComponent,
    ItemDetailComponent,
    AdminComponent,
    DashboardComponent,
    CheckoutComponent,
    Checkout1Component,
    Checkout2Component,
    Checkout3Component,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule.forRoot(),
    DigitOnlyModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ModdingService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
