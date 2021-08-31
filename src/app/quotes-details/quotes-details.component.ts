import { Component, Input} from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Quote } from '../quotes.service';



@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.scss']
})
export class QuotesDetailsComponent {
  @Input() myQuotes?: Quote[] | null
  constructor(
    private service : QuotesService,
  ){}
}
