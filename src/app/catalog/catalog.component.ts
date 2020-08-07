import { Component, OnInit } from '@angular/core';
import { WsService} from '../services';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: any;
  response: any;
  constructor(public WS: WsService) {
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts(){
    this.WS.Get_Products().subscribe(data => {
      this.response = data;
      this.products = this.response.body;
      console.log(this.products);
    }, error => {
      console.log(error);
    });
  }
}
