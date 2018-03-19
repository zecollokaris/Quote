import { Component, OnInit } from '@angular/core';
import { quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new quote(1, 'aaaaabbbbbb','aaaaaaa'),
    new quote(2, 'cccccbbbbbb','aaaaaaa'),
    new quote(3, 'ddddddabbbbbb','aaaaaaa'),
    new quote(4, 'eeeeeeeabbbbbb','aaaaaaaa'),
    new quote(5, 'fffffffbbbbbb','aaaaaaaa'),
    new quote(6, 'ggggggggbbbbbb','aaaaaaa')
  ]
  toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  
    constructor() { }

  ngOnInit() {
    }

}
