  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class BookService {
    
    constructor(private http: HttpClient) { }
    
    getCategories(){
      return this.http.get("http://localhost:3000/categories")
    }
    remove(book:any) {
      console.log(book);
      
      return this.http.delete("http://localhost:3000/cart/"+ book)
    }
    getAllBooks(){
      return this.http.get("http://localhost:3000/books")
    }
    showCartItems(){
      return this.http.get("http://localhost:3000/cart")
    }
    addToCart(book:any){
      return this.http.post("http://localhost:3000/cart",book)
    }

  }
