import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpPlaceService } from '../services/http.placeService'
import {Place} from './place.model'
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [HttpPlaceService]
})
export class PlaceComponent implements OnInit {

  places : Object [];
  place : Place;

  constructor(private httpPlaceService: HttpPlaceService) { }

  ngOnInit() {
   this.httpPlaceService.getPlaces().subscribe((res: Response) => 
   {this.places = res.json(); console.log(this.places)});
  }

  addPlace(newPlace: Place, form: NgForm) : void{
      this.httpPlaceService.postPlace(newPlace).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }
}
