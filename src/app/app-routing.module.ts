import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryViewComponent } from './components/categories/category-view/category-view.component';
import { ZonaGamerComponent } from './components/zona-gamer/zona-gamer.component';
import { PersonalizacionComponent } from './components/personalizacion/personalizacion.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'novedades', component: NovedadesComponent},
	{path: 'sobre_nosotros', component: AboutUsComponent},
	{path: 'registro', component: RegistroComponent},
	{path: 'zona_gamer', component: ZonaGamerComponent},
	{path: 'personalizacion', component: PersonalizacionComponent},
	{path: 'user_dashboard', component: UserDashboardComponent},
	{path: 'shopping_cart', component: ShoppingCartComponent},
	{path: 'item_detail', component: ItemDetailComponent},
  
	{ path: 'categoria', component: CategoriesComponent, children: [
		{ path: ':type', component: CategoryViewComponent, pathMatch: 'full'},
	]},
	{path: 'notfound', component: NotfoundComponent},
	{path: '**', redirectTo: '/notfound'}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
