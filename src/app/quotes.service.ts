import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Quote {
  quote: string,
  character: string,
  image: string,
  characterDirection: "Left" | "Right"
}


@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  quotes?: Quote[];

  constructor(
    private http: HttpClient
  ) {
  }

  loadQuotes() {
    this.http.get<Quote[]>('https://thesimpsonsquoteapi.glitch.me/quotes?count=10').subscribe(quotes => {this.quotes = quotes})
  }

} 