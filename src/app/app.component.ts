import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title:string
  public authService
  constructor(private route:Router, authService:AuthService) {
    this.authService = authService;


  }
public ngOnInit() {
  this.route.events.subscribe(() => {
    this.title =this.route.url.slice(1).toUpperCase() //TODO
  })

}
}
