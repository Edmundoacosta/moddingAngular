import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ItemDetailComponent implements OnInit {
  quantity = 1 ;

  public Districts:Array<any> = [
    {
      name : 'Ancon',
      name2 : 'Ate',
      name3 : 'Barranco',
      name4 : 'Breña',
    },
    {
      name :'Carabayllo',
      name2 : 'Chaclacayo',
      name3 : 'Chorillos',
      name4 : 'Cieneguilla',
    },
    {
      name : 'Comas',
      name2 : 'El agustino',
      name3 : 'Indenpendencia',
      name4 : 'Jesus maria',
    },
    {
      name : 'La molina',
      name2 :'La victoria',
      name3 : 'Lima',
      name4: 'Lince',
    },
    {
      name : 'Los olivos',
      name2 : 'Lurigancho',
      name3 : 'Lurin',
      name4 : 'Magdalena del mar',
    },
    {
      
      name : 'Magdalena vieja', 
      name2 : 'Miraflores',
      name3 : 'Pachacamac',
      name4 : 'Pucusana',
    },
    {
      name : 'Pueblo libre',
      name2 : 'Puente piedra',
      name3 : 'Punta negra',
      name4 : 'Punta hermosa',
    },
    {
      name : 'Rimac',
      name2 : 'S. juan de lurigancho',
      name3 : 'S. juan de miraflores',
      name4 : 'San bartolo',
    },
    {
      name : 'San borja', 
      name2 : 'San isidro',
      name3 : 'San luis',
      name4 : 'San martin de porres',
    },
    {
      name : 'San miguel',
      name2 : 'Santa anita',
      name3 : 'Santa maria del mar',
      name4 : 'Santa rosa',
    },
    {
      name : 'Santiago de surco',
      name2 : 'Surquillo',
      name3 : 'Villa el salvador',
      name4 : 'Villa maria del triunfo',
    }
  ];
  constructor(private location: Location) { }

  ngOnInit() {
  }
  
  incrementItem() : void {
    if(this.quantity < 20) {
      this.quantity += 1;
    } else {
      return;
    }
  }
  decrementItem() : void {
    if(this.quantity > 1) {
      this.quantity -= 1;
    } else {
      return;
    }
  }

  goBack(){
    this.location.back();
  }

}
