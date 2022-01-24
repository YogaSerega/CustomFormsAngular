import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})


export class ButtonComponent implements OnInit {
 @Input() buttonClass:'primary'|'secondary'| 'error' = 'primary'
  public ngOnInit(): void {
  }
}
