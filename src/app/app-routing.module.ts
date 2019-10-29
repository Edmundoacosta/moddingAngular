import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryViewComponent } from './components/categories/category-view/category-view.component';
import { ZonaGamerComponent } from './components/zona-gamer/zona-gamer.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UsersListComponent } from './components/admin/dashboard/users-list/users-list.component';
import { ProductsComponent } from './components/admin/dashboard/products/products.component';
import { AddproductsComponent } from './components/admin/dashboard/products/addproducts/addproducts.component';
import { CategoryComponent } from './components/admin/dashboard/category/category.component';
import { NewsComponent } from './components/admin/dashboard/news/news.component';
import { GamerzoneComponent } from './components/admin/dashboard/gamerzone/gamerzone.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Checkout1Component } from './components/checkout/checkout1/checkout1.component';
import { Checkout2Component } from './components/checkout/checkout2/checkout2.component';
import { Checkout3Component } from './components/checkout/checkout3/checkout3.component';
import { Checkout4Component } from './components/checkout/checkout4/checkout4.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ZonaGamerdetailComponent} from './components/zona-gamer/zona-gamerdetail/zona-gamerdetail.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'novedades', component: NovedadesComponent},
	{path: 'sobre_nosotros', component: AboutUsComponent},
	{path: 'registro', component: RegistroComponent},
	{path: 'zona_gamer', component: ZonaGamerComponent},
	{path: 'zona_gamerdetail', component: ZonaGamerdetailComponent},
	{path: 'user_dashboard', component: UserDashboardComponent},
	{path: 'shopping_cart', component: ShoppingCartComponent},
	{path: 'item_detail', component: ItemDetailComponent},
	{path: 'contact_us', component: ContactUsComponent},
  
	{ path: 'categoria', component: CategoriesComponent, children: [
		{ path: ':type', component: CategoryViewComponent, pathMatch: 'full'},
	]},
	{path: 'notfound', component: NotfoundComponent},
	{ path: 'admin', component: AdminComponent, children: [
		{ path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
		{ path: 'dashboard/users', component: UsersListComponent,pathMatch: 'full'},
		{ path: 'dashboard/products', component: ProductsComponent,pathMatch: 'full'},
		{ path: 'dashboard/products/addproducts', component: AddproductsComponent,pathMatch: 'full'},
		{ path: 'dashboard/categories', component: CategoryComponent,pathMatch: 'full'},
		{ path: 'dashboard/news', component: NewsComponent,pathMatch: 'full'},
		{ path: 'dashboard/gamerzone', component: GamerzoneComponent,pathMatch: 'full'}
	]},
	{ path: 'Checkout', component: CheckoutComponent, children: [
		{ path: 'Checkout1', component: Checkout1Component, pathMatch: 'full'},
		{ path: 'Checkout2', component: Checkout2Component, pathMatch: 'full'},
		{ path: 'Checkout3', component: Checkout3Component, pathMatch: 'full'},
		{ path: 'Checkout4', component: Checkout4Component, pathMatch: 'full'}
	]},
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{path: '**', redirectTo: '/notfound'}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
