import { Component, OnInit } from '@angular/core';
import { ModdingService } from '../../../providers/moddinpc.service';

@Component({
  selector: 'app-checkout1',
  templateUrl: './checkout1.component.html',
  styleUrls: ['./checkout1.component.scss']
})
export class Checkout1Component implements OnInit {
  public user = {
    firstname: '',
    lastname: '',
    email: '',
    addressOne: ''
  };

  public deliveryAddress = {
    name: '',
    postalcode: null,
    department: 'Lima',
    district: ''
  };
	public allDepartments:Array<string> = ['Lima'];
  public allDistricts:Array<string> = ['Ancon','Ate','Barranco','Breña','Carabayllo','Chaclacayo','Chorillos','Cieneguilla','Comas','El agustino','Indenpendencia','Jesus maria','La molina','La victoria','Lima', 'Lince', 'Los olivos', 'Lurigancho', 'Lurin', 'Magdalena del mar', 'Magdalena vieja', 'Miraflores', 'Pachacamac', 'Pucusana', 'Pueblo libre', 'Puente piedra', 'Punta negra', 'Punta hermosa', 'Rimac', 'S. juan de lurigancho', 'S. juan de miraflores', 'San bartolo', 'San borja', 'San isidro', 'San luis', 'San martin de porres', 'San miguel', 'Santa anita', 'Santa maria del mar', 'Santa rosa', 'Santiago de surco', 'Surquillo', 'Villa el salvador', 'Villa maria del triunfo'];

  constructor(
    public _modService: ModdingService
    ) { }

  ngOnInit() {
  	this._modService.getUser()
  		.then((res) =>{
        this.user = res['user'];
        this.user.addressOne = `${this.user['addresses'][0].name} - ${this.user['addresses'][0].district}`;
        this.deliveryAddress.district = this.user['addresses'][0].district;
        console.log(res);
        console.log(this.deliveryAddress);
  		});
  }

  }
