import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { ModdingService } from '../../providers/moddinpc.service';
import { GarantiaComponent } from 'src/app/components/modals/garantia/garantia.component';
import { MatDialog } from '@angular/material';
import { ListenService } from '../../providers/listen.service';
import { SessionService } from 'src/app/providers/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ItemDetailComponent implements OnInit {
  quantity = 1 ;
  public product = {
    _id: '',
    name: '',
    inStock: 0,
    quantity: 0,
    principalImg: '',
    images: [],
    price: 0,
    description:''
  };
  public DBURL:string = 'http://localhost:4444/';
  public Districts:Array<any> = [
    {
      name : 'Ancon', name2 : 'Ate', name3 : 'Barranco', name4 : 'Breña',
    },
    {
      name :'Carabayllo', name2 : 'Chaclacayo', name3 : 'Chorillos', name4 : 'Cieneguilla',
    },
    {
      name : 'Comas', name2 : 'El agustino', name3 : 'Indenpendencia', name4 : 'Jesus maria',
    },
    {
      name : 'La molina', name2 :'La victoria', name3 : 'Lima', name4: 'Lince',
    },
    {
      name : 'Los olivos', name2 : 'Lurigancho', name3 : 'Lurin', name4 : 'Magdalena del mar',
    },
    {
      name : 'Magdalena vieja',  name2 : 'Miraflores', name3 : 'Pachacamac', name4 : 'Pucusana',
    },
    {
      name : 'Pueblo libre', name2 : 'Puente piedra', name3 : 'Punta negra', name4 : 'Punta hermosa',
    },
    {
      name : 'Rimac', name2 : 'S. juan de lurigancho', name3 : 'S. juan de miraflores', name4 : 'San bartolo',
    },
    {
      name : 'San borja',  name2 : 'San isidro', name3 : 'San luis', name4 : 'San martin de porres',
    },
    {
      name : 'San miguel', name2 : 'Santa anita', name3 : 'Santa maria del mar', name4 : 'Santa rosa',
    },
    {
      name : 'Santiago de surco', name2 : 'Surquillo', name3 : 'Villa el salvador', name4 : 'Villa maria del triunfo',
    }
  ];
  constructor(
    private location: Location,
    public activatedRoute: ActivatedRoute,
    public moodingService: ModdingService,
    public listen: ListenService,
    public dialog : MatDialog,
    public toastr: ToastrService,
    public session : SessionService,
    ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        let name = params.id;
        this.moodingService.getProductById(name)
        .then((res) => {
          this.product = res['result'];
          console.log(res);
        });
        
      })
    };
  
  add(plus) : void {
    if (plus) {
      this.quantity<this.product.inStock?this.quantity++:null;
    } else if(!plus && this.quantity != 1) {
      this.quantity--;
    }
  }

  openPdf(){
    window.open('https://ecogozotest.com:40/public/pdfs/' + this.product['mainPdf'], "_blank");
  }
  
  openGarantia() {
    this.dialog.open(GarantiaComponent);
  }
  goBack(){
    this.location.back();
  }

  addToCart(){
    let inCart = [];
    if (this.session.getItem('inCart')) {
      inCart = JSON.parse(this.session.getItem('inCart'));
    }
    this.product.quantity = this.quantity;
    if(inCart.find(item => item._id == this.product._id)) {
      inCart.find(item => item._id == this.product._id).quantity += this.quantity;
    } else {
      this.addNumbertoHeader();
      inCart.push(this.product);
    };
    this.session.setObject('inCart', inCart);
    this.toastr.success('Su producto se agregó a su carrito','', {
      timeOut: 1000
      
    });
  }

  addNumbertoHeader(){
    this.listen.filter('add');
  }

}