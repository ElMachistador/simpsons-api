import { Component,Input } from '@angular/core';
import { Quote } from '../app.component';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {
    @Input() myQuotes?: Quote[] | null
}
