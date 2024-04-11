import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  newsData: any[]=[];
  isShowResult = false;
  constructor(public api: ApiService) {

  }
  getnewsts(newsCategory: string){
    this.api.getactualnews(newsCategory).subscribe((data:any)=>{
      this.isShowResult = true;
     this.newsData=data.articles;

    }, (error:any)=>{

        console.log(error);
  }, ()=>{

        console.log("News API completed");
    })
  }
}
