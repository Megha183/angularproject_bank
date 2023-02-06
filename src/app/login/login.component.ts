import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="your perfect banking transfer"
  inputPlaceholder="Account number"
  acno=''
  // acno:any
  psw=''

constructor(private router:Router,private ds:DataService){ }

login(){
  var acnum=this.acno
  var psw=this.psw
 
  const result=this.ds.login(acnum,psw)
  if(result){
    alert('Login success')
    this.router.navigateByUrl('dashboard')
    

  }
  else{
    alert('Incorrect account number or password')
  }
}

//template rendering

//---------------------------------
// login(a:any,b:any){
//   // console.log(a.value);
  
//   var acnum=a.value
//   var psw=b.value
//   var userDetails=this.userDetails
//   if(acnum in userDetails){
// if(psw==userDetails[acnum]["password"]){
//   alert("login success")
// }else{
//   alert("incorrect passsword")
// }
//   }
//   else{
//     alert("acno incorrect or not registerd yet")
//   }
//   alert("login clicked")
// }
// acnoChange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
  
// }
// pswrdChange(event:any){
// this.psw=event.target.value
// // console.log(this.psw);

// }
}
