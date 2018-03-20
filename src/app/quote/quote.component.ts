import { Component, OnInit } from '@angular/core';
import { quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new quote(1, '1aaaaabbbbbb', 'aaaaaaa', new Date(2018, 2, 18)),
    new quote(2, '1cccccbbbbbb', 'aaaaaaa', new Date(2018, 2, 18)),
    new quote(3, '1ddddddabbbbbb', 'aaaaaaa', new Date(2018, 2, 19)),
    new quote(4, '1eeeeeeeabbbbbb', 'aaaaaaaa', new Date(2018, 2, 19)),
    new quote(5, '1ffffffbbbbbb', 'aaaaaaaa', new Date(2018, 2, 20)),
    new quote(6, '1gggggggbbbbbb', 'aaaaaaa', new Date(2018, 2, 20))
  ]

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
