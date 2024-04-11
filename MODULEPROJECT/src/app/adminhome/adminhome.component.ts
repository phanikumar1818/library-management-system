import { Component } from '@angular/core';
import {UsersService} from "../users.service";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {
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
  navigateToBookDetails(bookId: string): void {
    this.router.navigate(['/books-details', bookId]);
  }
  navigateToBookCart(bookId: string): void {
    this.router.navigate(['/books-cart', bookId]);
  }
  editBook(bookId: string): void {
    console.log('Editing book with ID:', bookId);
    this.router.navigate(['/edit', bookId]);
  }

  // deleteBook(bookId: string) {
  //   this.userSer.deleteBook(bookId).subscribe(
  //     () => {
  //       console.log('Book deleted successfully!');
  //       this.router.navigate(['/deleted']);
  //     },
  //     (error) => {
  //       console.error('Error deleting book:', error);
  //     }
  //   );
  // }
  deleteBook(bookId: string) {
    const confirmDelete = confirm('Are you sure you want to delete this book?');
    if (confirmDelete) {
      this.userSer.deleteBook(bookId).subscribe(
        () => {
        console.log('Book deleted successfully!');
        this.router.navigate(['/deleted']);
      },
      (error) => {
        console.error('Error deleting book:', error);
      }
    );
  } else {
    console.log("Deletion canceled.")}
    this.router.navigate(['/notdeleted']);
  }
}
