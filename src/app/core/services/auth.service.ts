import {Injectable} from '@angular/core';
import {RouterService} from './router.service';
import {ERoutes} from '../../shared/constants/enums/routes';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';

import {environment} from '../../../environments/environment';

interface ILoginForm {
  email: string
  password: string
}

interface IUserInfo {
  displayName: string
  image: null
  token: string
  userName: string
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  public loginInfo: ILoginForm | null
  public userInfo: IUserInfo | null

  public isAuthenticated: Promise<string | null> =
    new Promise((resolve => {
      setTimeout(() => {
        console.log(localStorage.getItem('userToken'))
        resolve(localStorage.getItem('userToken'))
      }, 1000)
    }))

  constructor(public redirect: RouterService, private http: HttpClient) {
  }

  public login(value: ILoginForm) {
    this.loginInfo = value
    this.http.post(environment.loginApi, value).pipe(
      tap((result: any) => { //TODO type
        if (result.token) {
          localStorage.setItem('userToken', result.token)
        }
      })
    ).subscribe(() => {
      this.redirect.redirect(ERoutes.TRAIN)
    }, (error) => {
      throw new Error(error.error)
    })

  }

  public logout() {
    localStorage.removeItem('userToken')
    this.loginInfo = null;
    this.redirect.redirect(ERoutes.LOGIN)
  }

  public register(value: IUserInfo) {
    this.userInfo = value
    this.redirect.redirect(ERoutes.TRAIN)
    this.http.post(environment.registerApi, value)
      .pipe(
        tap((result: any) => {
          if (result.token) {
            console.log(result.token)
            localStorage.setItem('userToken', result.token)
          }
        })
      ).subscribe(
      () => {
        this.redirect.redirect(ERoutes.TRAIN)
      },
      error => {
        throw new Error(error.error)
      }
    );
  }
}

