import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';

import {passwordValidation} from '../../shared/constants/regexps/regexps';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  public form = this._fb.group({
    name: ['', [Validators.required]],
    login: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [
      Validators.required,
      Validators.pattern(passwordValidation)]],
    confirmPassword: [''],//TODO same password
  })

  constructor(private _fb: FormBuilder, private _authService: AuthService) {
  }

  public register() {
    this._authService.register(this.form.value)
  }

  public ngOnInit(): void {
  }

}
