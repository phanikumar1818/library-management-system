import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {RegisterComponent} from "../register/register.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

pdtstatus: string = "COPIED"
  FunctionalStatus: string = "NEGATIVE"
  buttonfunctionn: boolean = false
  array: string[] = ["hi", "hru", "im good", "see you"]

  ButtonFunction()
  {
    this.buttonfunctionn = ! this.buttonfunctionn
    this.FunctionalStatus= "POSITIVE"
  }
  constructor(public api: ApiService, private myRouter: Router) {

  }

  ChangeStatus()
  {
    this.api.modifyStatus();
  }

  doLogien()
  {
    //this.myRouter.navigate(['/news']).then(() => {
      //console.log('Navigation to /news completed successfully');
    //});
    this.myRouter.navigateByUrl("/");
    //this.myRouter.navigate(['/news'])
  }

}
