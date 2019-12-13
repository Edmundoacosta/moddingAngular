import { Component, OnInit } from '@angular/core';
import { ModdingService } from '../../providers/moddinpc.service';
import { MatDialog } from '@angular/material';
import { TicketComponent } from '../modals/ticket/ticket.component';
import { DetailComponent } from '../modals/detail/detail.component';

@Component({
  selector   : 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls  : ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public user = {
    firstname: '',
    lastname: '', 
    email: '',
    addressOne: '',
    phone:'',
    password:'',
    password2:''
  };

  public deliveryAddress = {
    name: '',
    postalCode: null,
    department: 'Lima',
    district: ''
  };
	public allDepartments:Array<string> = ['Lima'];
  public allDistricts:Array<string> = ['Ancon','Ate','Barranco','Breña','Carabayllo','Chaclacayo','Chorillos','Cieneguilla','Comas','El agustino','Indenpendencia','Jesus maria','La molina','La victoria','Lima', 'Lince', 'Los olivos', 'Lurigancho', 'Lurin', 'Magdalena del mar', 'Magdalena vieja', 'Miraflores', 'Pachacamac', 'Pucusana', 'Pueblo libre', 'Puente piedra', 'Punta negra', 'Punta hermosa', 'Rimac', 'S. juan de lurigancho', 'S. juan de miraflores', 'San bartolo', 'San borja', 'San isidro', 'San luis', 'San martin de porres', 'San miguel', 'Santa anita', 'Santa maria del mar', 'Santa rosa', 'Santiago de surco', 'Surquillo', 'Villa el salvador', 'Villa maria del triunfo'];

  constructor(
    public _modService: ModdingService,
    public dialog: MatDialog,
    ) { }

  ngOnInit() {
  	this._modService.getUser()
  		.then((res) =>{
        this.user = res['user'];
        this.user.addressOne = `${this.user['addresses'][this.user['addresses'].length-1].name} - ${this.user['addresses'][this.user['addresses'].length-1].district}`;
  		});
  }

  detail(){
    this.dialog.open(DetailComponent);
  }

  ticket(){
    this.dialog.open(TicketComponent);
  }

  updateAddress(){
    this._modService.addAddress(this.deliveryAddress)
      .then((res) => {
        setTimeout(() => {
          location.reload();
        }, 200);
        console.log(res);
      })
  }

  updatePassword(){
    this._modService.updateUser({user: this.user})
      .then((res) => {
        setTimeout(() => {
          location.reload();
        }, 200);
        console.log(res);
      })
  }
}