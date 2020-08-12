import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor( public router: Router) { }

  enviarMail(email){
    console.log(email);
  }

  login(){
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }

}
