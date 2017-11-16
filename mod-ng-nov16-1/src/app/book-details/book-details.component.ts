import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book;

  @Output() delete: EventEmitter<number> = new EventEmitter();

    deleteBook() {
      this.delete.emit(this.book.isbn);
    }

  constructor() { }

  ngOnInit() {
  }

}
