import { Component, OnInit } from '@angular/core';
import { WsService} from '../../services';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cakemaker',
  templateUrl: './cakemaker.component.html',
  styleUrls: ['./cakemaker.component.css']
})
export class CakemakerComponent implements OnInit {
  OrderData = {
    FechaEntrega: null,
    ClienteId: null,
    ProductoCant: null,
    ProductImporte: 0.0,
    ProductoDecoracion: null,
    ProductoTamano: null,
    ProductoSabor: null,
    ProductoRelleno: null,
    ProductoExtra: null,
  };
  data: any;

  constructor(public WS: WsService, public router: Router) { }

  ngOnInit(): void {
  }
  makeOrder(FechaEntrega, cantidad, decoracion, tamano, sabor, relleno, extra ){
    this.OrderData.ClienteId = Number(localStorage.getItem('Id'));
    this.OrderData.FechaEntrega = FechaEntrega;
    this.OrderData.ProductoCant = Number(cantidad);
    this.OrderData.ProductoDecoracion = decoracion;
    this.OrderData.ProductoTamano = tamano;
    this.OrderData.ProductoSabor = sabor;
    this.OrderData.ProductoRelleno = relleno;
    this.OrderData.ProductoExtra = extra;
    console.log(this.OrderData);
    this.WS.CreateOrder(this.OrderData).subscribe(response => {
      this.data = response;
      console.log(this.data);
      this.router.navigate(['order']);
    });
  }

}
