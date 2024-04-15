import {Component, OnInit} from '@angular/core';
import {BookService} from "../bservice/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  string = '';
  books:any;
  constructor(private  bookService: BookService) { }
    ngOnInit() {
    this.bookService.getBooks().subscribe(books =>{
      this.books = books;
    })


  }

}
