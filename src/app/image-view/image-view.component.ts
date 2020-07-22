import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { FoodService } from '../food.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  private imageId:any;
  private imageInfo:any;
  private imageUrl:any;

  constructor(private route:ActivatedRoute,private foodService:FoodService) { }

  ngOnInit() {
    this.imageId = this.route.snapshot.paramMap.get('imageId');
    console.log(this.imageId);

    this.getImageInfo();
  }

  private getImageInfo()
  {
    this.foodService.getImageInfo(this.imageId).subscribe((res)=>
    {
      console.log(res)

      // storing image info
      this.imageInfo=
      {
        id:this.imageId,
        secret:res['photo']['secret'],
        farm:res['photo']['farm'],
        title:res['photo']['title']['_content'],
        description:res['photo']['description']['_content'],
        server:res['photo']['server']
      }

      console.log(this.imageInfo)

      // creating imageUrl
      //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
      this.imageUrl=`https://farm${this.imageInfo.farm}.staticflickr.com/${this.imageInfo.server}/${this.imageInfo.id}_${this.imageInfo.secret}.jpg`;
    },
    (err)=>
    {
      console.log('some error occured')
    })
  }

}
