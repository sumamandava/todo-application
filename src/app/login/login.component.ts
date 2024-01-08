import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Need Router instance
  //Angular.giveMeRouter -- earlier
  //Dependency Injection -- New concepts

 constructor(private router : Router,private hardcodedAuthenticationService:HardcodedAuthenticationService){

 }

 // without private it is not working why ??
  userName = 'in28Mins';
  password= '';
  errorMessage = "invalidCredentials"
  inValidLogin =false;

  handleLogin(){
  
   if(this.hardcodedAuthenticationService.authenticate(this.userName,this.password)){
    //Redirect to Welcome page
  this.router.navigate(['welcome',this.userName])
   }
   else
   this.inValidLogin = true
  
  }
}
