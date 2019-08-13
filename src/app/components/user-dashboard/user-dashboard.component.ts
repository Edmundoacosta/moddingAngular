import { Component, OnInit } from '@angular/core';
import { ModdingService } from '../../providers/moddinpc.service';

@Component({
  selector   : 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls  : ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public user = {
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    email: ''

  };
	public allDepartments:Array<string> = ['Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cuzco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'];

  constructor(
    public _modService: ModdingService
    ) { }

  ngOnInit() {
  	this._modService.getUser()
  		.then((res) =>{
        this.user = res['user'];
        console.log(this.user);
  		});
  }

  updateAddress(){
    this._modService.updateUser({user: this.user})
      .then((res) => {
        console.log(res);
      })
  }

}
