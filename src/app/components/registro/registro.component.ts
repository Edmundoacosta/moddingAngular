import { Component, OnInit, TemplateRef} from '@angular/core';
import { ModdingService } from '../../providers/moddinpc.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { matchOtherValidator } from '../../validation/match_passwords';
import { SessionService } from '../../providers/session.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material';
import { LoginModalComponent } from '../modals/login-modal/login-modal.component';
import { TermsComponent } from '../modals/terms/terms.component';
import { PoliticaComponent } from '../modals/politica/politica.component';
import { SuccessMComponent } from '../modals/success-m/success-m.component';
import { SuccessRegisterComponent } from '../modals/success-register/success-register.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'] 
})
export class RegistroComponent implements OnInit {
  public user:FormGroup;
  modalRef: BsModalRef;
	public allDepartments:Array<string> = ['Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cuzco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'];

      firstname = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
      lastname = new FormControl ('', Validators.compose([Validators.required, Validators.minLength(3)]));
      rucname = new FormControl ('', Validators.compose([Validators.required, Validators.minLength(3)]));
      id_type = new FormControl ('', Validators.required);
      id_number = new FormControl ('', Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(12)]));
  		email = new FormControl('', [Validators.required, Validators.email]);
  		phone = new FormControl ('', Validators.compose([Validators.required, Validators.minLength(9) , Validators.maxLength(9)]));
  		department = new FormControl ('', Validators.required);
  		postalcode = new FormControl ('', Validators.compose([Validators.required, Validators.minLength(5),Validators.maxLength(5)]));
  		password = new FormControl ('', Validators.compose([Validators.required, Validators.minLength(8)]));
      password2 = new FormControl ('', Validators.compose([Validators.required, matchOtherValidator('password')]));
      ErrorMessageFirstname() {
        return this.firstname.hasError('required') ? 'Ingrese un nombre' : '';
      }
      ErrorMessageLastname() {
        return this.lastname.hasError('required') ? 'Ingrese un apellido' : '';
      }
      ErrorMessagerucname() {
        return this.rucname.hasError('required') ? 'Ingrese una razón social' : '';
      }
      ErrorMessageId_type() {
        return this.id_type.hasError('required') ? 'Elija un tipo de Identificación' : '';
      }
      ErrorMessageId_number() {
        return this.id_number.hasError('required') ? 'Ingrese un número de identificación' : this.id_number.hasError('minLenght') ? 'Ingrese un número de identificación válido' : this.id_number.hasError('maxLenght') ? 'Ingrese un número de identificación válido' : '';
      }
      ErrorMessagePhone() {
        return this.phone.hasError('required') ? 'Ingrese un número de celular' : '';
      }
      ErrorMessagePostalcode() {
        return this.postalcode.hasError('required') ? 'Ingrese un código postal, si no sabe su código postal puede hacer click en ?' : '';
      }
      ErrorMessageDepartment() {
        return this.department.hasError('required') ? 'Elija un departamento' : '';
      }

  constructor(
  	public modService:ModdingService,
  	private _fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService,
    public session: SessionService,
    public dialog : MatDialog
    ) { }

  ngOnInit() {
  	this.user = this._fb.group({
  		firstname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      rucname: [''],
      id_type: ['', Validators.required],
      id_number: ['', Validators.compose([Validators.required, Validators.minLength(8) ,Validators.maxLength(11)])],
  		email: new FormControl('', [Validators.required, Validators.email]),
  		phone: ['', Validators.compose([Validators.required, Validators.minLength(9) , Validators.maxLength(9)])],
  		department: ['', Validators.required],
  		postalcode: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
  		password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password2: ['', Validators.compose([Validators.required, matchOtherValidator('password')])],
  	});
  }
  openLogin() {
    this.dialog.open(LoginModalComponent);
  }
  openTerminos() {
    this.dialog.open(TermsComponent);
  }
  openPolitica() {
    this.dialog.open(PoliticaComponent);
  }
  test() {
    this.dialog.open(SuccessRegisterComponent);
  }
 
  get u() {return this.user.controls;}

  onSubmit(user, valid){
    if(valid) {
      this.modService.register(user).then((res) => {
        this.session.setObject('user', res['user']);
        this.session.setItem('token', res['user'].token);
        this.dialog.open(SuccessRegisterComponent);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2010);
      }, (err) => {
        console.log(err);
      });
    }
    
  }

}