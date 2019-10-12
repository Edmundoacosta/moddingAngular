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
			name: 'Desarrollo de',
			name2: 'Paginas Web'
		}
	]
  constructor() { }

  ngOnInit() {
  }

}
