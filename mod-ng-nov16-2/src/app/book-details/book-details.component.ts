import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {

  @Input() book: Book;

  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  deleteBook() {
    this.onDelete.emit(this.book.isbn);
  }
}
