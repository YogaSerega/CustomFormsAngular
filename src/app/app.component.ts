import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-form';

  public contactTypes: { value: string, title: string }[] = [
    {value: 'phone', title: 'Phone', },
    {value: 'e-mail', title: 'E-mail', },
    {value: 'skype', title: 'Skype', }
  ];
}
