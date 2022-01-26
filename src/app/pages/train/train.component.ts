import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TrainComponent implements OnInit {
  public contactTypes: { value: string, title: string }[] = [
    {value: 'phone', title: 'Phone',},
    {value: 'e-mail', title: 'E-mail',},
    {value: 'skype', title: 'Skype',}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
