import { Component, OnInit } from '@angular/core';
import { quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new quote(1, 'aaaaabbbbbb'),
    new quote(2, 'cccccbbbbbb'),
    new quote(3, 'ddddddabbbbbb'),
    new quote(4, 'eeeeeeeabbbbbb'),
    new quote(5, 'fffffffbbbbbb'),
    new quote(6, 'ggggggggbbbbbb')
  ]
    constructor() { }

  ngOnInit() {
    }

}
