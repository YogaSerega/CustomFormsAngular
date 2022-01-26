import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './core/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string

  constructor(private _route: Router, public authService: AuthService) {
    this.authService = authService;
  }

  public ngOnInit() {
    this._route.events.subscribe(() => {
      console.log(this._route)
      if (this._route.url.includes('false')) {
        this.title = 'Please, login before train!'
      } else {
        this.title = this._route.url.slice(1).toUpperCase()
      }
    })
  }
}
