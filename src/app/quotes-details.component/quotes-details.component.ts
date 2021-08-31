import { Component } from "@angular/core";
import { QuotesService } from "../quotes-service";


@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.scss']
})
export class QuotesComponent {
  constructor(
    private quotesService : QuotesService
  ){}
}
