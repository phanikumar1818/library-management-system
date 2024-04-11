import { Component } from '@angular/core';
import {UsersService} from "../users.service";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users: any[] = [];

  constructor(private userSer: UsersService, public router: Router) { }

  ngOnInit(): void {
    this.userSer.getBooks().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching user:', error.statusText);
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          console.error('An error occurred:', error.error.message);
        } else {
          // Server-side error
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${JSON.stringify(error.error)}`
          );
        }
      }
    );

  }

  // onSearch(event: any): void {
  //   const searchTerm = event.target.value; // Extract the value from the event
  //   // Call a method in your service to send the search term to the backend
  //   this.userSer.searchBooks(searchTerm).subscribe(
  //     (data: any) => {
  //       // Handle the response from the backend
  //       console.log('Search results:', data);
  //     },
  //     (error) => {
  //       console.error('Error searching books:', error);
  //     }
  //   );
  // }
  navigateToBookDetails(bookId: string): void {
    this.router.navigate(['/books-details', bookId]);
  }
  navigateToBookCart(bookId: string): void {
    this.router.navigate(['/books-cart', bookId]);
  }

}
