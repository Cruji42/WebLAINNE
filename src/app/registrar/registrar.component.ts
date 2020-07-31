import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { WsService} from '../services';

/*import Swal from 'sweetalert2'*/
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  public formRegistrar: FormGroup;
  constructor(private formBuilder: FormBuilder, public ws: WsService, public router: Router) {
  this.formulario();
  }

  ngOnInit(): void {
  }

  formulario(){
    this.formRegistrar = this.formBuilder.group({
      Nombre: [ '', Validators.required],
      Apellido: [ '', Validators.required],
      Telefono: [ '', Validators.required],
      Direccion: [ '', Validators.required],
      Ciudad: [ '', Validators.required],
      Correo: [ '', Validators.required],
      Contrasena: ['', Validators.required]
    });
  }

  registrar_usuario(){
    const provider = this.formRegistrar.value;
    console.log(provider);
    this.ws.ws_create(provider).subscribe(data => {
      console.log(data);
      if (data['success'] === 1){
        alert('registrado');
      }else{
        alert('no registrado');
      }
    });
  }
}
