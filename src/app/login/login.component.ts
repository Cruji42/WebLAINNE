import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WsService} from '../services';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {email: '', password: ''};
  data: any;
  constructor( public WS: WsService, public router: Router) {
  }

  ngOnInit(): void {
  }

  Login(pass, email){
    this.userData.email = email;
    this.userData.password = pass;
    console.log (this.userData);
    this.WS.Login(this.userData).subscribe(response => {
      this.data = response;
      if (this.data.success === 1){
        localStorage.setItem('token', this.data.token);
        localStorage.setItem('LogState', '1');
        this.router.navigate(['order']);
      }else{
        console.log('auth err');
      }
    });
  }
}
