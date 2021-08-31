import { Injectable } from '@angular/core';


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
  ) {
  }

  loadQuotes() {
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
      .then(res => res.json())
      .then(quotes => this.quotes = quotes)
  }

} 