import { Component , OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;
  constructor(public userSer: UsersService, public myRouter: Router, public auth: AuthService) {

  }
  ngOnInit(): void {
    this.auth.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  doLogout() {
    localStorage.clear();
    this.myRouter.navigateByUrl("/")
  }

  logout(): void {
    // Perform logout logic
    // Once logout is successful, set isLoggedIn to false
    this.auth.setLoggedIn(false);
    this.auth.logoutgpt();
    this.myRouter.navigateByUrl("/")
  }
}
