import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {passwordValidation} from '../../shared/constants/regexps/regexps';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  public form = this._fb.group({
    userName: ['', [Validators.required]],
    displayName: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [
      Validators.required,
      Validators.pattern(passwordValidation)]],
    confirmPassword: [''],
  })

  constructor(private _fb: FormBuilder, private _authService: AuthService) {
  }

  public register() {
    this._authService.register(this.form.value)
  }

  public ngOnInit(): void {
  }

}
