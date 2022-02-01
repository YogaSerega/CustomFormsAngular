import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './core/services/auth.service';
import {Subject, takeUntil} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string;
  public destroyed$: Subject<void> = new Subject<void>();

  constructor(private _route: Router, public authService: AuthService, private ref: ChangeDetectorRef) {
  }

  public ngOnInit() {
    this._route.events.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      if (this._route.url.includes('false')) {
        this.title = 'Please, login before train!'
      } else {
        this.title = this._route.url.slice(1).toUpperCase()
      }
    })
    this.authService.isAuthenticated.then((isAuth) => {
      console.log(isAuth,'app component')
    this.ref.detectChanges()
    })
  }

  public ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete()
  }
}
