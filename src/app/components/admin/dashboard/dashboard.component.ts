import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public adminViews = [
		{
			icon: 'fa-users',
			name: 'Usuarios',
			link: 'users'
		},
		{
			icon: 'fa-users',
			name: 'Productos',
			link: 'products'
		},
		{
			icon: 'fa-users',
			name: 'Categorias',
			link: 'categories'
		},
		{
			icon: 'fa-users',
			name: 'Novedades',
			link: 'news'
		},
		{
			icon: 'fa-users',
			name: 'Zona Gamer',
			link: 'gamerzone'
		},
		{
			icon: 'fa-users',
			name: 'Transacciones',
			link: 'listado'
		}
		
	]; 

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goTo(link){
  	this.router.navigate(['/admin/dashboard/' + link]);
  	console.log('/admin/dashboard/' + link)
  }

}
