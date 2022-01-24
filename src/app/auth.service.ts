import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private isAuth:boolean = true

  public login () {
  this.isAuth = true
  }
  public logout () {
    this.isAuth = false
  }

  isAuthenticated():Promise<boolean>{
  return new Promise((resolve => {
    setTimeout(()=>{
      resolve(this.isAuth)
    },2000)
  }))
  }
  constructor() { }
}
