import { Component } from '@angular/core';
import { QuotesService, Quote } from './quotes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quotes';
  quotes?: Quote[];
  constructor(
    private service: QuotesService
  ) {
  }
  async getQuotes() {
    await this.service.loadQuotes();
    this.quotes = this.service.quotes
  }
}

