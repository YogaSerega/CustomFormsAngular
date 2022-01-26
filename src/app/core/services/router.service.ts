import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class RouterService {
  constructor(private _router: Router) {
  }

  public redirect(to: string) {
    this._router.navigate([`${to}`])
  }
}

