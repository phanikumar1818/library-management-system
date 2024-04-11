import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import {AuthService} from "../auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  msg : string;

  constructor(public userSer : UsersService, public myRouter : Router, public auth: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  // doLogin(form:NgForm)
  // {
  //   console.log(form.value);
  //
  //   this.userSer.doUserLogin(form.value).subscribe((data:any[])=>{
  //
  //     console.log(data);
  //
  //     // this.msg = data;
  //
  //     if(data.length==0)
  //     {
  //       this.msg = "Invalid Login";
  //     }
  //     else {
  //       localStorage.setItem("loggeduser", data[0]._id);
  //       this.myRouter.navigateByUrl("/news");
  //     }
  //
  //   }, (error:any)=>{
  //
  //     console.log(error);
  //
  //     this.msg = "Something went wrong";
  //
  //   });
  // }

  islogin(): void {

    this.auth.setLoggedIn(true);
    this.myRouter.navigateByUrl("/homepage");
  }
  chatlogin(): void {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(userCredential => {
        // Login successful, do something
        console.log('Logged in user:', userCredential.user);
        this.myRouter.navigate(['/homepage']);
        this.auth.logingpt();
      })
      .catch(error => {
        // Handle login error
        console.error('Login error:', error);
      });
  }
  login(form: NgForm): void {
    if (form.valid) {
      const {username, password} = form.value;
      this.userSer.UserLogin({username, password}).subscribe(
        response => {
          // Handle successful login
          console.log('Login successful:', response);
          this.myRouter.navigateByUrl("/news");
          this.msg = 'Login successful';
          // Redirect to dashboard or other page
        },
        error => {
          // Handle login error
          console.error('Login failed:', error);
          this.msg = 'Something went wrong, Invalid username or password';
        }
      );
    }
  }
}
