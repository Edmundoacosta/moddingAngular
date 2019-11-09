import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { TermsComponent } from 'src/app/components/modals/terms/terms.component';
import { PoliticaComponent } from 'src/app/components/modals/politica/politica.component';
import { GarantiaComponent } from 'src/app/components/modals/garantia/garantia.component';
import { MensajeSoporteComponent } from 'src/app/components/modals/mensaje-soporte/mensaje-soporte.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	public year:any = new Date().getFullYear();
  constructor(
    public dialog : MatDialog,
    private router : Router,
  ) { }

  ngOnInit() {
  }

  openTerminos() {
    this.dialog.open(TermsComponent);
  }
  openPolitica() {
    this.dialog.open(PoliticaComponent);
  }
  openGarantia() {
    this.dialog.open(GarantiaComponent);
  }
  mensajeSoporte() {
    this.dialog.open(MensajeSoporteComponent);
    this.router.navigate(['/contact_us']);
  }

}
