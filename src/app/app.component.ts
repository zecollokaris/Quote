import { Component } from '@angular/core';
import {quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes = [
  new quote(1, 'aaaaabbbbbb','aaaaaa'),
  new quote(2, 'cccccbbbbbb','aaaaaaa'),
  new quote(3, 'ddddddabbbbbb','aaaaaaa'),
  new quote(4, 'eeeeeeeabbbbbb','aaaaaaaa'),
  new quote(5, 'fffffffbbbbbb','aaaaaaaa'),
  new quote(6, 'ggggggggbbbbbb','aaaaaaaa'),
  ]
}
