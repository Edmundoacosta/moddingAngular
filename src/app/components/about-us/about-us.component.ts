import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
	public team:Array<any> = [
		{
			name: 'Ricardo Enrique Ysla Sevillano',
			career: 'Arquitecto'
		},
		{
			name: 'Joseph Joel Infante Ysla',
			career: 'Desarrollador Frontend'
		},
		{
			name: 'Edmundo Enrique Acosta Chalam',
			career: 'Desarrollador FullStack'
		}
	]
  constructor() { }

  ngOnInit() {
  }

}
