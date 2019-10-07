import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public service:Array<any> = [
		{
			name: 'Ensamblaje y',
			name2: 'Mantenimiento de PCs'
		},
		{
			name: 'Diseño de',
      name2: 'Sistemas de Iluminación'
		},
		{
			name: 'Respeto',
			name2: ''
		},
		{
			name: 'Calidad de Servicio',
      name2: ''
		},
		{
      name: 'Honestidad',
      name2: ''
		},
		{
      name: 'Responsabilidad',
      name2: ''
		}
	]
  constructor() { }

  ngOnInit() {
  }

}
