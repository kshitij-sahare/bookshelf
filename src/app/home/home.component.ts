import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any;

  constructor(private data: BookService) { }

  ngOnInit(): void {
    this.data.getCategories().subscribe((data)=> this.categories=data)
  }

}
