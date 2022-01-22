import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private httpService: HttpClient) {}

  // Get a random quote
  getRandomQuote(): Observable<Object> {
    return this.httpService.get('http://localhost:3000/randomquote');
  }
}
