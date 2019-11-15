import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ModdingService } from '../../../providers/moddinpc.service';
import { ListenService } from '../../../providers/listen.service';
import { SessionService } from 'src/app/providers/session.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  public category:string = '';
  public subcategory:string ='';
  public childrens:Array<any> = [];
  public DBURL:string = 'http://localhost:4444/';
  constructor(
  	public activatedRoute: ActivatedRoute,
    public moodingService: ModdingService,
    public listen: ListenService,
    public session: SessionService
  	) { }
 
  ngOnInit() {
  	this.activatedRoute.params
  		.subscribe(params => {
  			let name = params.type;
        this.moodingService.getChildrens(name)
          .then((res) => {
            this.childrens = res['result']['subcategories'];
            for (let i = 0; i < this.childrens.length; i++) {
              this.moodingService.getProductsByType(this.childrens[i].name)
                .then((res) => {
                  this.childrens[i].products = res['result'];
                });
            }
          });
  			});
      };

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

  addProduct(item) {
    let inCart = [];
    if (this.session.getItem('inCart')) {
      inCart = JSON.parse(this.session.getItem('inCart'));
    }
    item.quantity = 1;
    if(inCart.find(el => el._id == item._id)) {
      inCart.find(el => el._id == item._id).quantity++;
    } else {
      this.addNumbertoHeader();
      inCart.push(item);
    };
    this.session.setObject('inCart', inCart);
  }

  addNumbertoHeader(){
    this.listen.filter('add');
  }
}