import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService } from '../quote.service';
import { Quote } from '../quote.interface';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';


@Component({
  selector: 'app-quote-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-display.component.html',
  styleUrl: './quote-display.component.scss'
})
export class QuoteDisplayComponent implements OnInit {
  quotes: Quote[] = [];
  currentQuote: Quote = {
    quote: '',
    link: '',
    image: ''
  };

  constructor(public dialogRef: MatDialogRef<QuoteDisplayComponent>, private quoteService: QuoteService) { }

  ngOnInit() {
    this.quotes = this.quoteService.getQuotes();
    this.getRandomQuote();
  }

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomIndex];
  }

  newQuote() {
    this.getRandomQuote();
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }
}