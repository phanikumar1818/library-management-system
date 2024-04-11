import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8085/books';
  constructor(public http: HttpClient, ) {
  }

  doUserRegistration(data: any) {
    return this.http.post<string>("http://localhost:3000/register", data)
  }

  doUserLogin(data: any) {
    return this.http.post<any[]>("http://localhost:3000/login", data);
  }

  isLoggedIn() {
    return !!localStorage.getItem("loggeduser");
  }

  // Function to fetch user data from the backend
  getUserData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/userdata'); // Replace '/api/userdata' with your backend endpoint
  }

  registerUser(userData: any) {
    return this.http.post<any>('http://localhost:8085/register', userData);
  }

  UserLogin(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`http://localhost:8085/login`, credentials);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8085/users');
  }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8085/books');
  }

  searchBooks(query: string): Observable<any[]> {
    // Send a GET request to the backend with the search query
    return this.http.get<any[]>(`http://localhost:8085/search?query=${query}`);
  }

  getBookDetails(bookId: string): Observable<any> {
    const url = `http://localhost:8085/books/${bookId}`; // Assuming your API endpoint is /books/{bookId}
    return this.http.get<any[]>(url);
  }
  updateBook(bookId: string, updatedBookData: any): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`; // Construct the URL for updating a specific book
    return this.http.put<any>(url, updatedBookData);
  }

  deleteBook(bookId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8085/books/${bookId}`);
  }
}
