import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new  Quote(1,'Life','"Life can only be understood backwards, but it must be lived forward.",  – V.i.q.u.e', new Date(2019,4,16)),
    new Quote(2, 'Home','“A house is made with walls and beams. A home is made with love and dreams.” – Unknown!', new Date(2019,7,21)),
    new Quote(3,'Start over','It is never too late to start again!!',new Date (2009,7,16)),
    new Quote(4,'Future','The best thing about the future is that it comes only one day at a time.',new Date (2009,7,16)),
    new Quote(5,'Differences','Women and foxes, being weak, are distinguished by superior tact!',new Date (2010,2,26)),
    new Quote(6,'Finish','It does not matter how slowly you go, so long as you do not stop.',new Date (2019,11,16)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
      this.quotes.splice(index,1);
    }
  }
}
  
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}
  constructor() { }

  ngOnInit() {
  }

}
