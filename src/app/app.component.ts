import { Component } from '@angular/core';
import { quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new quote(1, 'aaaaabbbbbb2', 'aaaaaa2', new Date(2019, 3, 14)),
    new quote(2, 'cccccbbbbbb2', 'aaaaaaa2', new Date(2019, 3, 14)),
    new quote(3, 'ddddddabbbbbb2', 'aaaaaaa2', new Date(2019, 3, 14)),
    new quote(4, 'eeeeeeeabbbbbb2', 'aaaaaaaa2', new Date(2019, 3, 14)),
    new quote(5, 'fffffffbbbbbb2', 'aaaaaaaa2', new Date(2019, 3, 14)),
    new quote(6, 'ggggggggbbbbbb2', 'aaaaaaaa2', new Date(2019, 3, 14)),
  ]
}
