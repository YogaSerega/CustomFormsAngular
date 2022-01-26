import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public form = this._fb.group({
    email: [''],
    password: ['']
  })

  constructor(private _fb: FormBuilder, private _authService:AuthService) {
  }

  public login() {
    this._authService.login(this.form.value)
  }

  public onSubmit(form: FormGroup) {
    console.log(form)
  }

  public ngOnInit(): void {
  }
}
