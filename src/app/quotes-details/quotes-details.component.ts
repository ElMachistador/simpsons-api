import { Component, Input, OnInit } from '@angular/core';
import { Quote, QuotesService } from '../quotes.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.scss']
})
export class QuotesDetailsComponent implements OnInit {
  quote: Quote | undefined
  index?: number
  constructor(
    private route: ActivatedRoute,
    private service: QuotesService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.index = Number(routeParams.get('index'));
    if (this.service.quotes) {
      this.quote = this.service.quotes[this.index]
    }
  }

}
