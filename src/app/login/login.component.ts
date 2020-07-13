import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { WsService} from '../services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, public ws: WsService, public router: Router) {
    this.formulario();
  }

  ngOnInit(): void {
  }

  formulario(){
    this.formLogin = this.formBuilder.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  login(){
    const provider = this.formLogin.value;
    // console.log(this.formLogin.value.usuario);
    //  console.log(provider);
    this.ws.WS_LOGIN(provider).subscribe(data => {
      console.log(data);
      if (data['success'] === 1){
        localStorage.setItem('token', data['token']);
        localStorage.setItem('iniciado', 'true');
        console.log('Logeado');
        this.router.navigate(['/dashboard']);
      }else{
        console.log('Error de Credenciales');
      }
    });

  }

}
