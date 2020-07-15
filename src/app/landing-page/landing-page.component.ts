import { Component, OnInit } from '@angular/core';
import { WsService} from '../services';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  products: any;
  constructor(public WS: WsService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }
getProducts(){
  this.WS.Get_Main_Products().subscribe(data => {
    this.products = data;
    console.log(this.products);
  }, error => {
    console.log(error);
  });
}

}
