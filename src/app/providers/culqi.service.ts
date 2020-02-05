import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let Culqi: any;

@Injectable({
  providedIn: 'root'
})
export class CulqiService {
  settings: any = {
    title: '',
    currency: '',
    description: '',
    amount: 0
  };

  constructor(public http: HttpClient,
              private events) {
      document.addEventListener ('payment_event', (token: any) => {
        let token_id = token.detail;
        let url = 'https://api.culqi.com/v2/charges';

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'sk_test_ynvsr5eWmMDPDhv3'
        });

        let body = JSON.stringify ({
          amount: this.settings.amount,
          currency_code : "PEN",
          email: "ecogozo.com.pe@gmail.com",
          source_id: token_id
        });

        this.http.post (url, body, {headers: headers}).subscribe (
          response => {
            this.events.publish ('on_event_pago', response);
          }, error => {
            this.events.publish ('on_event_pago_error', error);
          });
      },false);
   }
   initCulqi() {
     Culqi.publicKey = 'pk_test_WpSiFR5iosBlxifQ';
   }

   formulario (descripcion: string, cantidad: number) {
     this.settings.title = 'ECOGOZO';
     this.settings.currency = "PEN";
     this.settings.descripcion = descripcion;
     this.settings.amount = cantidad;

     Culqi.settings ({
        title: 'ECOGOZO',
        currency: 'PEN',
        descripcion: descripcion,
        amount: cantidad
     });
   }

   open() {
     Culqi.open();
   }
}
