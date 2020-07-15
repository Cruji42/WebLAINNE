import { Component, OnInit } from '@angular/core';
import { WsService} from '../services';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: any;
  constructor(public WS: WsService) {
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts(){
    this.WS.Get_Products().subscribe(data => {
      this.products = data;
      console.log(this.products);
    }, error => {
      console.log(error);
    });
  }
}
