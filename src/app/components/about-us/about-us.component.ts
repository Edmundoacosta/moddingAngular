import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
	public team:Array<any> = [
		{
			name: 'Joseph Joel Infante Ysla',
			career: 'Desarrollador Frontend'
		},
		{
			name: 'Ricardo Enrique Ysla Sevillano',
			career: 'Arquitecto'
		},

		{
			name: 'Edmundo Enrique Acosta Chalam',
			career: 'Desarrollador FullStack'
		}
	]
	public valores:Array<any> = [
		{
			name: 'Creatividad'
		},
		{
			name: 'Respeto'
		},
		{
			name: 'Honestidad'
		},
		{
			name: 'Puntualidad'
		},
		{
			name: 'Calidad de Servicio'
		},
		{
			name: 'Responsabilidad'
		}
	]
  constructor() { }

  ngOnInit() {
  }

}
