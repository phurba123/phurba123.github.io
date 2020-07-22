import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private listOfFoods: any[];
  private initialPageNo = 1;
  public photos: any[];
  private totalPage: number;
  private disableNextBtn:boolean=false;

  constructor(private foodService: FoodService,
    private router:Router) { }

  ngOnInit() {

    //fetch data for images
    this.getImages();

  }

  private getImages() {
    // console.log('inside get Images');
    this.foodService.getImages(this.initialPageNo).toPromise().then((res) => {
      if (res['stat'] === "ok") {
        //keeping track of no. of pages
        this.totalPage = res['photos']['pages'];

        this.photos = res['photos']['photo'];
        // console.log(this.photos);

        //build url for fetching image
        this.buildUrl();
      }
    })
  }

  //making photo's url
  private buildUrl() {
    this.photos.map((photo) => {
      // console.log(photo)
      // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

      // creating each photos url
      photo.url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

    })

    //console.log(this.photos)
  }

  // viewing previous page
  private viewPreviousPage() {
    console.log('prec');
    this.initialPageNo--;
    this.getImages();

    // when the next btn is disabled at last page,by clicking prev btn it should re enable next button
    if(this.disableNextBtn)
    {
      console.log('not')
      this.disableNextBtn=false;
    }
  }

  //viewing next page
  private viewNextPage() {
    console.log(this.totalPage)
    if (this.initialPageNo < this.totalPage) {
      console.log('next')
      this.initialPageNo++;
      this.getImages();
    }
    else
    {
      // if current page is the last page then disable next button
      this.disableNextBtn=true;
    }

  }

  // navigation to image view
  private navigateToImage(photo)
  {
    console.log('inside navigate')
    console.log(photo);
    let temp = 'phursang'
    this.router.navigate([`image/${photo.id}`])

  }

  private consoler()
  {
    console.log('consoler')
  }

}
