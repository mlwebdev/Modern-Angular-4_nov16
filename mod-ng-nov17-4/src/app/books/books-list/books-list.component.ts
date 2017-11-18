import { Component, Input } from '@angular/core';

import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.css'],
  providers: [BookStoreService]
})
export class BooksListComponent {
  @Input() books: Book[] = [];
}
