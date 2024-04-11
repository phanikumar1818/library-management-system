import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  bookId: string; // Assuming the book ID is a string, adjust the type accordingly if it's different
  books: any;
  constructor(private route: ActivatedRoute, private userSer: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
      this.userSer.getBookDetails(this.bookId).subscribe(
        (data: any) => {
          this.books = data;
        },
        (error) => {
          console.error('Error fetching book details:', error);
          // Handle error if necessary
        }
      );
    });
  }
}
