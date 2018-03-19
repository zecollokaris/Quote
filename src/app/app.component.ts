import { Component } from '@angular/core';
import {quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes = [
  new quote(1, 'aaaaabbbbbb'),
  new quote(2, 'cccccbbbbbb'),
  new quote(3, 'ddddddabbbbbb'),
  new quote(4, 'eeeeeeeabbbbbb'),
  new quote(5, 'fffffffbbbbbb'),
  new quote(6, 'ggggggggbbbbbb'),
  ]
}
