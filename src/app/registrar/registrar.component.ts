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
  constructor(private formBuilder: FormBuilder, public ws: WsService, public router: Router) {
  this.formulario();
  }

  ngOnInit(): void {
  }

  formulario(){
    this.formRegistrar = this.formBuilder.group({
      Name: [ '', Validators.required],
      LastName: [ '', Validators.required],
      Telephone: [ '', Validators.required],
      Address: [ '', Validators.required],
      City: [ '', Validators.required],
      Mail: [ '', Validators.required],
      Password: ['', Validators.required]
    });
  }

  registrar_usuario(){
    const provider = this.formRegistrar.value;
    console.log(provider);
    this.ws.ws_create(provider).subscribe(data => {
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
