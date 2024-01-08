import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//@Injectable -- makes this class a service
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(userName :string, password:string): boolean{
    if(userName == "suma"){
      sessionStorage.setItem('authenticateUser', userName)
      return true;
  }
  else 
  return false;
}

isUserLoggdIn(){
  let user = sessionStorage.getItem('authenticateUser')
  return !(user===null)
}

logout(){
 sessionStorage.removeItem('authenticateUser')
}

}
