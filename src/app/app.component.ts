import { Component } from '@angular/core';
import { QuotesService } from './quotes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'quotes';
  quotes = this.service.quotes;
  constructor(
    private service: QuotesService
  ) {
  }
  getQuotes() {
    this.service.loadQuotes();
  }
}

