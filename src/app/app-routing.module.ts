import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryViewComponent } from './components/categories/category-view/category-view.component';
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
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ListadoComponent } from './components/admin/dashboard/listado/listado.component';
import { DetalleComponent } from './components/admin/dashboard/detalle/detalle.component';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'novedades', component: NovedadesComponent},
	{path: 'sobre_nosotros', component: AboutUsComponent},
	{path: 'registro', component: RegistroComponent},
	{path: 'user_dashboard', component: UserDashboardComponent},
	{path: 'shopping_cart', component: ShoppingCartComponent},
	{path: 'item_detail/:id', component: ItemDetailComponent},
	{path: 'contact_us', component: ContactUsComponent},
	{ path: 'Checkout', component: CheckoutComponent},
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
		{ path: 'dashboard/listado', component: ListadoComponent,pathMatch: 'full'},
		{ path: 'dashboard/detalle', component: DetalleComponent,pathMatch: 'full'}
	]},
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{path: '**', redirectTo: '/notfound'}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
