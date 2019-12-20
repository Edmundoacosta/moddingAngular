import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UsersListComponent } from './components/admin/dashboard/users-list/users-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/admin/dashboard/products/products.component';
import { NewsComponent } from './components/admin/dashboard/news/news.component';
import { CategoryComponent } from './components/admin/dashboard/category/category.component';
import { AddproductsComponent } from './components/admin/dashboard/products/addproducts/addproducts.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MaterialModule } from './material/material.module';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { RecoveryPassComponent } from './components/modals/recovery-pass/recovery-pass.component';
import { SuccessMComponent } from './components/modals/success-m/success-m.component';
import { TermsComponent } from './components/modals/terms/terms.component';
import { PoliticaComponent } from './components/modals/politica/politica.component';
import { GarantiaComponent } from './components/modals/garantia/garantia.component';
import { MensajeSoporteComponent } from './components/modals/mensaje-soporte/mensaje-soporte.component';
import { MainNavComponent } from './layouts/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PdfComponent } from './components/modals/pdf/pdf.component';
import { SuccessRegisterComponent } from './components/modals/success-register/success-register.component';
import { ListadoComponent } from './components/admin/dashboard/listado/listado.component';
import { DetalleComponent } from './components/admin/dashboard/detalle/detalle.component';
import { DetailComponent } from './components/modals/detail/detail.component';
import { TicketComponent } from './components/modals/ticket/ticket.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ConfirmlogoutComponent } from './components/modals/confirmlogout/confirmlogout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    FooterComponent,
    NovedadesComponent,
    NotfoundComponent,
    RegistroComponent,
    CategoriesComponent,
    CategoryViewComponent,
    UserDashboardComponent,
    ShoppingCartComponent,
    ItemDetailComponent,
    AdminComponent,
    DashboardComponent,
    CheckoutComponent,
    UsersListComponent,
    ContactUsComponent,
    ProductsComponent,
    NewsComponent,
    CategoryComponent,
    AddproductsComponent,
    ForgotPasswordComponent,
    LoginModalComponent,
    RecoveryPassComponent,
    SuccessMComponent,
    TermsComponent,
    PoliticaComponent,
    GarantiaComponent,
    MensajeSoporteComponent,
    MainNavComponent,
    PdfComponent,
    SuccessRegisterComponent,
    ListadoComponent,
    DetalleComponent,
    DetailComponent,
    TicketComponent,
    ConfirmlogoutComponent,
    BienvenidaComponent,
  ],
  entryComponents: [
    LoginModalComponent,
    RecoveryPassComponent,
    SuccessMComponent,
    TermsComponent,
    PoliticaComponent,
    GarantiaComponent,
    MensajeSoporteComponent,
    PdfComponent,
    SuccessRegisterComponent,
    DetailComponent,
    TicketComponent,
    ConfirmlogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule.forRoot(),
    DigitOnlyModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    ModdingService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
