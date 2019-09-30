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
      address1: '',
      address2: '',
      distric: '',
      email: ''
  
    };
    public allDepartments:Array<string> = ['Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cuzco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'];
    
    public allDistrics:Array<string> =
    [
      'Ate','Barranco','Breña','Carabayllo','Chaclacayo','Chorillos','Cieneguilla','Comas','El Agustino','Independencia','Jesús María','La Molina','La Victoria','Lima','Lince','Los Olivos','Lurigancho-Chosica','Lurín','Magdalena del Mar','Magdalena Vieja','Miraflores','Pachacamac','Pucusana','Pueblo Libre','Puente Piedra','Punta Hermosa','Punta Negra','Rimac','San Juan de Miraflores','San Bartolo','San Borja','San Isidro','San Luis','San Martín de Porres','San Miguel','Santa Anita','Santa Maria del Mar','Santa Rosa','Santiago de Surco','Surquillo','Villa El Salvador','Villa María del Triunfo'
    ];
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
  
  }
