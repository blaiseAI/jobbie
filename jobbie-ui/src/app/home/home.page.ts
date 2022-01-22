import { Component } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotesService.getRandomQuote().subscribe((res) => console.log(res));
  }
}
