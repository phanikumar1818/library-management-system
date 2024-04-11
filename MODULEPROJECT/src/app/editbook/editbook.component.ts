import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../users.service";
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrl: './editbook.component.css'
})
export class EditbookComponent implements OnInit{
  bookId: string; // Assuming the book ID is a string, adjust the type accordingly if it's different
  books: any;

  constructor(private route: ActivatedRoute, private userSer: UsersService, public router: Router) { }

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
  saveChanges() {
    // Assuming updatedBookData contains the updated book information
    const updatedBookData = this.books; // Modify this line accordingly

    this.userSer.updateBook(this.bookId, updatedBookData).subscribe(
      () => {
        console.log('Book updated successfully!');
        // Redirect to book details page or any other page as needed
        this.router.navigate(['/adminhome']);
      },
      (error) => {
        console.error('Error updating book:', error);
        // Handle error if necessary
      }
    );
  }
}
