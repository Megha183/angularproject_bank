import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ds:DataService){}

  register(){
    // alert("register works")
    // this.ds.userDetails
    let userDetails=this.ds.userDetails
  }

}
