import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'Life',description:'Never let your anger till the sun sets for if you do you will not see tomorrow.'},
    {id:2,name:'Home',description:'East or West home is the BEST!'},
    {id:3,name:'Start over',description:'It is never too late to start again'},
    {id:4,name:'Future',description:'The best thing about the future is that it comes only one day at a time.'},
    {id:5,name:'Differences',description:'Women and foxes, being weak, are distinguished by superior tact'},
    {id:6,name:'Finish',description:'It does not matter how slowly you go, so long as you do not stop.'},
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
