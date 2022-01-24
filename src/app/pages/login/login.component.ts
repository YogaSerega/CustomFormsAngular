import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

interface ILoginForm {
  email: [string]
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = this.fb.group({ //TODO не вставляется дженерик с интерфейсом
    email: [''],
    password: ['']
  })

  constructor(private fb: FormBuilder) {
  }

  public onSubmit(form: FormGroup) {
    console.log(form)
  }

  public ngOnInit(): void {
  }
}
