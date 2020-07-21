import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private listOfFoods:any[];

  constructor(private foodService:FoodService) { }

  ngOnInit() {

    //fetch data for images
    this.getImages();
    
  }

  private getImages()
  {
    this.foodService.getImages().subscribe((response)=>
    {
      console.log(response)
    },
    (error)=>
    {
      console.log(error)
    })
  }

}
