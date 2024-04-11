import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {NewsComponent} from "./news/news.component";
import {TestDbComponent} from "./test-db/test-db.component";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {BookdetailsComponent} from "./bookdetails/bookdetails.component";
import {AdminloginComponent} from "./adminlogin/adminlogin.component";
import {AdminhomeComponent} from "./adminhome/adminhome.component";
import {EditbookComponent} from "./editbook/editbook.component";
import {BookmanagementComponent} from "./bookmanagement/bookmanagement.component";
import {DeletebookComponent} from "./deletebook/deletebook.component";
import {FrontendTestComponent} from "./frontend-test/frontend-test.component";
import {MembermanagementComponent} from "./membermanagement/membermanagement.component";


const routes: Routes = [
  { path: 'home', component: TestComponent },
  { path: "", component: LoginComponent },
  { path: 'test', component: TestComponent},
  { path: 'register', component: RegisterComponent},
  {path: '404error', component: NotfoundComponent},
  {path: 'news', component: NewsComponent},
  {path:'test_db', component: TestDbComponent},
  {path:'homepage', component: HomeComponent},
  {path:'books-cart/:id', component: CartComponent},
  {path: 'books-details/:id', component: BookdetailsComponent },
  {path: 'cart', component: CartComponent },
  {path: 'admin', component: AdminloginComponent},
  {path: 'adminhome', component: AdminhomeComponent},
  {path: 'edit/:id', component:EditbookComponent},
  {path: 'deleted', component: DeletebookComponent},
  {path: 'notdeleted', component: BookmanagementComponent},
  {path: 'front', component: FrontendTestComponent},
  {path: 'end', component: MembermanagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
