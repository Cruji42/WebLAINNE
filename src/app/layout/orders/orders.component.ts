import { Component, OnInit } from '@angular/core';
import { WsService} from '../../services';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  data: any;
  log: any;
  dataUser: any;
  dataOrder: any;
  id = {id: null};
  // tslint:disable-next-line:variable-name
  id_O = {id_order: null};
  response: any;
  response2: any;
  products: any;

  constructor(public WS: WsService, public router: Router) {
  }
  ngOnInit(){
    this.GetUser();
    this.GetOrders();
    this.log = Number(localStorage.getItem('LogState'));
  }
  GetUser(){
    this.id.id = Number(localStorage.getItem('Id'));
    this.WS.getUser(this.id).subscribe(data => {
      this.response = data;
      this.dataUser = this.response[0];
    }, error => {
      console.log(error);
    });
  }
  /*GetOrders(){
    this.id.id = Number(localStorage.getItem('Id'));
    this.WS.getOrders(this.id).subscribe(data => {
      this.response2 = data;
      this.dataOrder = this.response2.body;
      console.log(this.dataOrder);
      }, error => {
      console.log(error);
    });
  }*/
  LogOut(){
    localStorage.clear();
    this.router.navigate(['home']);
  }
  Perfil(){
    this.router.navigate(['profile']);
  }
  goOrders(){
    this.router.navigate(['orders']);
  }
  GetOrders(){
    this.WS.getOrders(this.id).subscribe(data => {
      this.response2 = data;
      console.log(this.response2);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:variable-name
  eliminar( id ){
    this.id_O.id_order = Number(id);
    Swal.fire({
      title: 'Cancelar pedido',
      text: '¿Estas seguro de que deseas cancelar tu pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EC9EB1',
      cancelButtonColor: '#D762CF',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.WS.DeleteOrder(this.id_O ).subscribe((data: any) => {
            console.log(data);
            if(data.body === 'ok'){
              Swal.fire({
                title: '¡Cancelado!',
                text: 'Tu pedido ha sido cancelado',
                icon: 'success',
                confirmButtonColor: '#EC9EB1',
              });
              this.GetOrders();
            } else {
              Swal.fire({
                title: 'Error',
                text: 'Tu pedido no pudo ser cancelado, favor de intentarlo más tarde',
                icon: 'success',
                confirmButtonColor: '#EC9EB1',
              });
            }
        });

      }
    });
  }




}
