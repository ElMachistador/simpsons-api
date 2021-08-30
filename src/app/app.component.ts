import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Quote {
  quote: string,
  character: string,
  image: string,
  characterDirection: "Left" | "Right"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'quotes';
  quotes?: Observable<Quote[]>;


  constructor(
    private http: HttpClient
  ) {

  }

  getQuotes() {
    this.quotes = this.http.get<Quote[]>('https://thesimpsonsquoteapi.glitch.me/quotes?count=10');
  }

}
