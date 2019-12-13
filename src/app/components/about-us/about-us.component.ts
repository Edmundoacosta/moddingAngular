import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
	public valores:Array<any> = [
		{
			name: 'Creatividad',
			description: 'Buscar en forma permanente, nuevas formas de hacer las cosas, de modo que ellos sea beneficioso para el trabajador, la empresa y la sociedad.'
		},
		{
			name: 'Puntualidad',
			description: 'Cumplir con los compromisos y obligaciones en el tiempo acordado, valorando y respetando el tiempo de los demás.'
		}
		
	];
	public valores2:Array<any> = [
		{
			name: 'Respeto',
			description: 'Desarrollar una conducta que considere en su justo valor los derechos fundamentales de nuestros semejantes y de nosotros mismos. Asimismo aceptar y cumplir las normas sociales y las de la naturaleza.'
		},
		{
			name: 'Calidad de Servicio',
			description: 'Emplear el trabajo como una poderosa fuerza transformadora, para así alcanzar los objetivos de la empresa y hacer que ella logre los más altos niveles de productividad y desarrollo. '
		}
	];
	public valores3:Array<any> = [
		{
			name: 'Honestidad',
			description: 'Obrar con transparencia y clara orientación moral, cumpliendo con las responsabilidades asignadas en el uso de la información, de los recursos materiales y financieros. Mostrar una conducta ejemplar dentro y fuera de la empresa.'
		},
		{
			name: 'Responsabilidad',
			description: 'Asumir las consecuencias de las acciones u omisiones realizadas durante las labores asignadas dentro la empresa y su entorno. Tomar acción cuando sea menester, obrando de manera que se contribuya al logro de los objetivos de la empresa.'
		}
	];
	public principios:Array<any> = [
		{
			name : 'Cultural',
			description : 'Proteger y valorar la diversidad, resguardando la identidad de las comunidades cultivadas a través de sus tradiciones de generación en generación. Reducción de las desigualdades.'
		},
		{
			name : 'Ambiental',
			description : 'Mantener en forma permanente la práctica de preservación y mejora del medio ambiente, recuperar la tierra y promover vida de ecosistemas terrestres.'
		}
	]
	public principios2:Array<any> = [
		{
			name : 'Social',
			description : 'Contempla el bienestar de la población, integrando de modo permanente las actividades de la empresa con su entorno social; participar en las actividades y eventos comunitarios e impulsar el desarrollo sustentable de la sociedad y calidad de vida. Promover su crecimiento y desarrollo profesional y social, estimular su autorrealización.'
		},
		{
			name : 'Económico',
			description : 'Ayudar a las personas y empresas a satisfacer sus necesidades y crecimiento económico. En el caso de las personas: garantizar alimentos, agua limpia y saneamiento, ciudades y comunidades sostenibles, y para las empresas: producción y consumo responsable, alianzas para lograr los objetivos.'
		}
	]
  constructor() { }

  ngOnInit() {
  }
}