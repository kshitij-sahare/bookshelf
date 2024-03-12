import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;
  id: any;
  title: string = "";
  updated: any;
  categorisedBooks: any;
  successMessage: string ="";

  constructor(private data: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['id']
      this.data.getAllBooks().subscribe((data) => {
        this.books = data
        this.categorisedBooks = this.books.filter((book: any) => { return book.category_id == this.id })
        if (this.id) {
          this.books = this.categorisedBooks
        }
      })
    })

  }
  addToCart(book:any){
    this.data.addToCart(book).subscribe((data) =>
    this.successMessage = "added to cart")
  }

}
