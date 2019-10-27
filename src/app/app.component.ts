import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];
  constructor(){
  this.quotes = ['Never let your anger till the sun sets','East or West home is the BEST!', 'It is never too late to start again']
  }
}
