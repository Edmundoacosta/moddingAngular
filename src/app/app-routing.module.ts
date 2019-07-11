import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryViewComponent } from './components/categories/category-view/category-view.component';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'sobre_nosotros', component: AboutUsComponent},
	{path: 'novedades', component: NovedadesComponent},
	{path: 'registro', component: RegistroComponent},

	{ path: 'categoria', component: CategoriesComponent, children: [
		{ path: ':type', component: CategoryViewComponent, pathMatch: 'full'},
	]},	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
