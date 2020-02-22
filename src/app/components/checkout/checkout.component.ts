import { Component, OnInit } from '@angular/core';
import { ModdingService } from '../../providers/moddinpc.service';
import { SessionService } from '../../providers/session.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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
    district: {
      price: 0,
      name: ''
    },
    country: 'Perú'
  };
  public paymenType:string = 'credit-card';

  public transaction; 
  public products:Array<any> = [];
	public allDepartments:Array<string> = ['Lima'];
  public allDistricts:Array<any> = [
    { name:'Ancon',price: 50},{ name:'Ate',price: 40},{ name:'Barranco',price: 19},
    { name:'Breña',price: 9},{ name:'Carabayllo',price: 50},{ name:'Chaclacayo',price: 50},
    { name:'Chorillos',price: 29},{ name:'Cieneguilla',price: 50},{ name:'Comas',price: 29},
    { name:'El agustino',price: 19},{ name:'Indenpendencia',price: 19},{ name:'Jesus maria',price: 15},
    { name:'La molina',price: 29},{ name:'La victoria',price: 9},{ name:'Lima',price: 9},
    { name:'Lince',price: 9},{ name:'Los olivos',price: 29},{ name:'Lurigancho',price: 50},
    { name:'Lurin',price: 29},{ name:'Magdalena del mar',price: 15},{ name:'Magdalena vieja',price: 15},
    { name:'Miraflores',price: 9},{ name:'Pachacamac',price: 50},{ name:'Pucusana',price: 29},
    { name:'Pueblo libre',price: 9},{ name:'Puente piedra',price: 50},{ name:'Punta negra',price: 50},
    { name:'Punta hermosa',price: 29},{ name:'Rimac',price: 19},{ name:'S. juan de lurigancho',price: 29},
    { name:'S. juan de miraflores',price: 29},{ name:'San bartolo',price: 50},{ name:'San borja',price: 15},
    { name:'San isidro',price: 9},{ name:'San luis',price: 15},{ name:'San martin de porres',price: 19},
    { name:'San miguel',price: 19},{ name:'Santa anita',price: 29},{ name:'Santa maria del mar',price: 50},
    { name:'Santa rosa',price: 50},{ name:'Santiago de surco',price: 15},{ name:'Surquillo',price: 15},
    { name:'Villa el salvador',price: 40},{ name:'Villa maria del triunfo',price: 40}];
  
    

  constructor(
    public _modService: ModdingService,
    public session: SessionService,
    public router: Router,
    public toastr: ToastrService,
    ) { }

  ngOnInit() {
  	this._modService.getUser()
  		.then((res) =>{
        this.user = res['user'];
        console.log(res);
        this.user.addressOne = `${this.user['addresses'][this.user['addresses'].length-1].name} - ${this.user['addresses'][this.user['addresses'].length-1].district}`;
        this.deliveryAddress.district = this.allDistricts.filter(place => place.name == this.user['addresses'][this.user['addresses'].length-1].district)[0];
        this.deliveryAddress.postalcode = this.user['addresses'][this.user['addresses'].length-1].postalCode;
        this.deliveryAddress.name = `${this.user['addresses'][this.user['addresses'].length-1].name}`;
      });
      this.products = JSON.parse(this.session.getItem('inCart'));
      this.totalPrice();
      
  }
  onSubmit() {
    this.transaction = {
      products: this.products,
      addresses: this.deliveryAddress,
      status: '',
      paymentMethod: '',
      ticket: '',
    }
  }
  payment(type){
    this.paymenType = type;
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
  totalOrden(){
    return this.totalPrice()+this.deliveryAddress.district.price;
  }
  comisionTarjeta() {
    return this.totalOrden() * 0.042; 
  }
  totalTarjeta() {
    return this.totalOrden() + this.comisionTarjeta();
  }
  comisionPos() {
    return this.totalOrden() * 0.04071;
  }
  totalPos() {
    return this.totalOrden() + this.comisionPos();
  }

  proceed(){
    this.transaction = {
      products: this.products,
      addresses: {
        name: this.user.addressOne,
        postalCode: this.deliveryAddress.postalcode,
        department: this.deliveryAddress.department,
        district: this.deliveryAddress.district.name,
        country: 'Perú'
      },
      status: 'pending',
      deliveryprice: this.deliveryAddress.district.price,
      paymentMethod: this.paymenType
    };
    this._modService.createTransaction(this.transaction).then((res) => {
      console.log(res);
    });
    this.toastr.success('Compra exitosa!','', {
      timeOut: 1000
    });
  }

  close(){
    this.router.navigate(['/home']);
  }

}