import { Injectable } from '@angular/core';
import { Quote } from './quote.interface';
import quotesData from '../../public/quotes.json';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes: Quote[] = quotesData;

  getQuotes(): Quote[] {
    return this.quotes;
  }
}