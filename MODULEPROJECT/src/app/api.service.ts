import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  randomStatus= "Inactive"
modifyStatus()
{
  this.randomStatus = (this.randomStatus=="Inactive")? "Active" : "Inactive";
}
  getnews(newsCat:string)
  {
    return this.http.get<any>("https://api.dictionaryapi.dev/api/v2/entries/en/"+newsCat)
  }

  getactualnews(newsCategory: string)
  {
    if(newsCategory=="all")
    {
      return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&apiKey=408b4153b994422d8638da72f2d3ac5b")
    }
    else {
      return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=us&category="+newsCategory+"&apiKey=408b4153b994422d8638da72f2d3ac5b")
    }

  }
  constructor(public http: HttpClient) {

  }
}
