import { catchError, map, Observable, of } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
  constructor(private httpService: HttpService) {}

  // Get a random quote

  findRandom(): any {
    return this.httpService
      .get('https://programming-quotes-api.herokuapp.com/Quotes/random')
      .pipe(
        map((response) => response.data),
        catchError((err) => of([{ err }])),
      );
  }
}
