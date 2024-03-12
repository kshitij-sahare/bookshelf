import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  successMessage: string="";

  constructor(private data: BookService) { }

  ngOnInit(): void {
    this.data.showCartItems().subscribe((data)=> this.cart=data)
  }
  removeFromCart(book:any){
    this.data.remove(book).subscribe((data)=> 
    {console.log("hii");
    
      this.successMessage= "Item removed from cart"})
  
  }
}
