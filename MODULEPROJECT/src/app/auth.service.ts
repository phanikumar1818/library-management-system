import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIngpt = false;
  constructor() { }
  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
  setLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }

  logingpt() {
    // Perform login logic here
    this.isLoggedIngpt = true;
  }

  logoutgpt() {
    // Perform logout logic here
    this.isLoggedIngpt = false;
  }

  isAuthenticatedgpt(): boolean {
    return this.isLoggedIngpt;
  }

}
