import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsersService} from "../users.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  msg: string;
  constructor(public userser : UsersService, public http: HttpClient, public myRouter: Router) {
  }
  ngOnInit(): void{

  }

  userRegistration(form: NgForm)
  {
    console.log(form.value);

    this.userser.doUserRegistration(form.value).subscribe((data:string)=>{
     console.log(data);

      this.msg = data;

      form.reset();

    }, (error:any)=>{

      console.log(error);

      this.msg = "Something Went Wrong!!";
    });
  }
  // onSubmit(form: NgForm) {
  //     const formData = form.value;
  //     this.http.post<any>('http://localhost:8085/register', formData)
  //       .subscribe(
  //         (response) => {
  //           console.log('Registration successful:', response);
  //           // You can add any further actions here, such as navigating to another page
  //         },
  //         (error) => {
  //           console.error('Error registering user:', error);
  //           // Handle error appropriately
  //         }
  //       );
  //   }

  onSubmit(form: NgForm) {
    const formData = form.value;
    this.userser.registerUser(formData)
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
          this.myRouter.navigateByUrl("/");
          // You can add any further actions here, such as navigating to another page
        },
        (error) => {
          console.error('Error registering user:', error);
          // Handle error appropriately
        }
      );
  }


  // dummyStr = "HI"
}
