import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NewsComponent } from './news/news.component';
import { TestDbComponent } from './test-db/test-db.component';
import { BookmanagementComponent } from './bookmanagement/bookmanagement.component';
import { MembermanagementComponent } from './membermanagement/membermanagement.component';
import { UsernotificationsComponent } from './usernotifications/usernotifications.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {AngularFireModule} from "@angular/fire/compat";
import { environment } from "../firebase";
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EditbookComponent } from './editbook/editbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { FrontendTestComponent } from './frontend-test/frontend-test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    TestComponent,
    RegisterComponent,
    NotfoundComponent,
    NewsComponent,
    TestDbComponent,
    BookmanagementComponent,
    MembermanagementComponent,
    UsernotificationsComponent,
    HomeComponent,
    CartComponent,
    BookdetailsComponent,
    AdminloginComponent,
    AdminhomeComponent,
    EditbookComponent,
    DeletebookComponent,
    FrontendTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
