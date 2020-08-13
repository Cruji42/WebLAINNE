import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  dataUser: any;
  log: any;
  ngOnInit(): void {
    this.dataUser = 'Julieta García';
    console.log( this.dataUser);
    // tslint:disable-next-line:radix
    this.log = parseInt(localStorage.getItem('LogState'));
    console.log( this.log);
  }


}
