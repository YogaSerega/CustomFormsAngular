import {Injectable} from '@angular/core';
import {RouterService} from './router.service';
import {ERoutes} from '../../shared/constants/enums/routes';

interface ILoginForm {
  email: string
  password: string
}

interface IRegisterForm {
  name: string
  login: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  public loginInfo: ILoginForm | null
  public registerInfo: IRegisterForm | null
  private isAuth: boolean = true;

  constructor(public redirect: RouterService) {
  }

  public login(value: ILoginForm) {
    this.isAuth = true;
    this.loginInfo = value
    this.redirect.redirect(ERoutes.TRAIN)
    console.log(this.loginInfo)
  }

  public logout() {
    this.isAuth = false;
    this.loginInfo = null;
    console.log(this.loginInfo)
    this.redirect.redirect(ERoutes.LOGIN)
  }

  public register(value: IRegisterForm) {
    this.isAuth = true;
    this.registerInfo = value
    console.log(this.registerInfo)
    this.redirect.redirect(ERoutes.TRAIN)
  }

  public isAuthenticated(): Promise<boolean> {

    return new Promise((resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 1000)
    }))
  }
}
