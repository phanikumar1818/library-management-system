import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-test-db',
  templateUrl: './test-db.component.html',
  styleUrl: './test-db.component.css'
})
export class TestDbComponent  {
  userData: any;
  users:any[]
  constructor(private userSer: UsersService) { }
  ngOnInit(): void {
    this.userSer.getUsers().subscribe(
      (data:any[])=>{
        this.users=data;
      },
      (error)=>{
        console.error('Error fetching user:', error);
      }
    );
  }
  // fetchUserData(): void {
  //   this.userSer.getUserData().subscribe(
  //     (data) => {
  //       this.userData = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching user data:', error);
  //     }
  //   );
  // }
}
// user-data.component.ts






