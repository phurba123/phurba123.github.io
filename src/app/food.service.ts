import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url = 'https://www.flickr.com/services/rest?format=json&nojsoncallback=1&media=photos';
  private apiKey = 'b28295d680bc9359fac07d1751d9066e';
  private photoSearchMethod="flickr.photos.search";
  
  private imageInfoMethod="flickr.photos.getInfo";

  constructor(private http:HttpClient) { }

  public getImages(pageNo:number)
  {
    console.log('inside service : getImages()');
    let currentUrl=`${this.url}&method=${this.photoSearchMethod}&api_key=${this.apiKey}&text=food&per_page=30&page=${pageNo}`

    return this.http.get(currentUrl);
  }

  //getting single image info
  public getImageInfo(imageId)
  {
    let currentUrl=`${this.url}&method=${this.imageInfoMethod}&api_key=${this.apiKey}&photo_id=${imageId}`;
    return this.http.get(currentUrl);
  }

  // public getTemp()
  // {
  //   return 'phursang';
  // }




  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.headers}`);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }
  
}
