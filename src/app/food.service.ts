import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private url="https://www.flickr.com/services/rest?method=flickr.photos.search&api_key=b28295d680bc9359fac07d1751d9066e&text=food&per_page=30&page=1&format=json";

  constructor(private http:HttpClient) { }

  public getImages()
  {
    return this.http.get(this.url);
  }

  // public getTemp()
  // {
  //   return 'phursang';
  // }
}
