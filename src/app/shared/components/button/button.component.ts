import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class ButtonComponent implements OnInit {
  @Input() buttonClass: 'primary' | 'secondary' | 'error' = 'primary'

  public ngOnInit(): void {
  }
}
