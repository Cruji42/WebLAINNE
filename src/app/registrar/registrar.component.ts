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
  response: any;
  user = {Name: '', LastName: '', Telephone: '', Address: '', City: '', Mail: '', Password: ''};
  constructor(private formBuilder: FormBuilder, public ws: WsService, public router: Router) {
  // this.formulario();
  }

  ngOnInit(): void {
  }

  formulario(){
    this.formRegistrar = this.formBuilder.group({
      nombre: [ '', Validators.required],
      apellido: [ '', Validators.required],
      telefono: [ '', Validators.required],
      direccion: [ '', Validators.required],
      ciudad: [ '', Validators.required],
      correo: [ '', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  registrar_usuario(nombre, apellido, telefono, direccion, ciudad, correo, contrasena){
    this.user.Name = nombre;
    this.user.LastName = apellido;
    this.user.Telephone = telefono;
    this.user.Address = direccion;
    this.user.City = ciudad;
    this.user.Mail = correo;
    this.user.Password = contrasena;
    console.log(this.user);
    this.ws.ws_create(this.user).subscribe(data => {
      this.response = data;
      console.log(this.response.status_code_header);
      if (this.response.status_code_header === 'HTTP/1.1 201 Created'){
        alert('registrado');
        this.router.navigate(['login']);
      }else{
        alert('no registrado');
      }
    });
  }
  cancel(){
        this.router.navigate(['login']);
  }
}
