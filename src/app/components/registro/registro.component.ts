import { Component, OnInit } from '@angular/core';
import { ModdingService } from '../../providers/moddinpc.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { matchOtherValidator } from '../../validation/match_passwords';
import { SessionService } from '../../providers/session.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
	public user:FormGroup;
	public allDepartments:Array<string> = ['Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cuzco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'];

  constructor(
  	public modService:ModdingService,
  	private _fb: FormBuilder,
    private router: Router,
    public session: SessionService) { }

  ngOnInit() {
  	this.user = this._fb.group({
  		firstname: ['', Validators.required],
  		lastname: ['', Validators.required],
  		dni: ['', Validators.required],
  		// address: ['', Validators.required],
  		email: new FormControl('', [Validators.required, Validators.email]),
  		phone: ['', Validators.required],
  		department: ['', Validators.required],
  		postalcode: ['', Validators.required],
  		password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  		password2: ['', Validators.compose([Validators.required, matchOtherValidator('password')])]
  	});
  }

  onSubmit(user, valid){
    if (valid) {
      this.modService.register(user).then((res) => {
        this.session.setObject('user', res['user']);
        this.session.setItem('token', res['user'].token);
        this.router.navigate(['/home']);
      }, (err) => {
        console.log(err);
      });
    }
  }

}