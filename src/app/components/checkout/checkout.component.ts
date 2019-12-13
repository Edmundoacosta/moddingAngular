import { Component, OnInit } from '@angular/core';
import { ModdingService } from '../../providers/moddinpc.service';
import { SessionService } from '../../providers/session.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public user = {
    firstname: '',
    lastname: '',
    id_type:'',
    id_number:'',
    email: '',
    addressOne: '',
    phone:'',
  };

  public deliveryAddress = {
    name: '',
    postalcode: null,
    department: 'Lima',
    district: ''
  };
  public products:Array<any> = [];
	public allDepartments:Array<string> = ['Lima'];
  public allDistricts:Array<string> = ['Ancon','Ate','Barranco','Breña','Carabayllo','Chaclacayo','Chorillos','Cieneguilla','Comas','El agustino','Indenpendencia','Jesus maria','La molina','La victoria','Lima', 'Lince', 'Los olivos', 'Lurigancho', 'Lurin', 'Magdalena del mar', 'Magdalena vieja', 'Miraflores', 'Pachacamac', 'Pucusana', 'Pueblo libre', 'Puente piedra', 'Punta negra', 'Punta hermosa', 'Rimac', 'S. juan de lurigancho', 'S. juan de miraflores', 'San bartolo', 'San borja', 'San isidro', 'San luis', 'San martin de porres', 'San miguel', 'Santa anita', 'Santa maria del mar', 'Santa rosa', 'Santiago de surco', 'Surquillo', 'Villa el salvador', 'Villa maria del triunfo'];

  constructor(
    public _modService: ModdingService,
    public session: SessionService
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
      this.products = JSON.parse(this.session.getItem('inCart'));
      this.totalPrice();
  }
  totalPrice(){
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].price * this.products[i].quantity;
    }
    return total;
  }
  igv(){
    return this.totalPrice()*0.18;
  }
  subtotal(){
    return this.totalPrice()-this.igv();
  }
}