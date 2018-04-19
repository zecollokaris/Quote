import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

downvote=0;
upvote=0

voteDown(){
  this.downvote=this.downvote+1;
}

voteUp(){
  this.upvote=this.upvote+1;
}

  constructor() { }

  ngOnInit() {
  }

}
