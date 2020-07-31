import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WsService {
  constructor(public http: HttpClient) {
  }

  Get_Main_Products(){
    return this.http.get('http://localhost/LAINNE_API/Get_Best_Products.php');
  }
  Login(data){
    return this.http.post('http://localhost/LAINNE_API/Login.php', data);
  }
  Get_Products(){
    return this.http.get('http://localhost/LAINNE_API/Get_Products.php');
  }
  ws_create(data){
    return this.http.post('http://localhost/LAINNE_API/create_user.php', data);
  }
}

