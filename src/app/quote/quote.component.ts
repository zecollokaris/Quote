import { Component, OnInit, EventEmitter } from '@angular/core';
import { quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new quote(1, ' Setting goals is the first step in turning the invisible into the visible. ', ' —Tony Robbins ', new Date(2018, 2, 18)),
    new quote(2, ' Never give up, for that is just the place and time that the tide will turn. ', ' —Harriet Beecher Stow ', new Date(2018, 2, 18)),
    new quote(3, ' You just can’t beat the person who never gives up. ', ' —Babe Ruth ', new Date(2018, 2, 19)),
    new quote(4, ' We aim above the mark to hit the mark.  ', ' —Ralph Waldo Emerson ', new Date(2018, 2, 19)),
    new quote(5, ' The future belongs to those who believe in the beauty of their dreams. ', ' —Eleanor Roosevelt ', new Date(2018, 2, 20)),
    new quote(6, ' If you can dream it, you can do it. ', ' —Walt Disney ', new Date(2018, 2, 20))
  ]

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote: quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.userDate = new Date(quote.userDate)
    this.quotes.push(quote)

  }


  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
