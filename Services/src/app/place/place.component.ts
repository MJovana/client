import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpPlaceService } from '../services/http.placeService';
import { HttpRegionService } from '../services/http.regionService';
import {Place} from './place.model';
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
  regions : Object[];

  constructor(private httpPlaceService: HttpPlaceService, 
              private httpRegionService: HttpRegionService) { }

  ngOnInit() {
   this.httpPlaceService.getPlaces().subscribe((res: Response) =>  
   {this.places = res.json(); console.log(this.places)});
  
  // id od regiona
   this.httpRegionService.getRegions().subscribe(c => this.regions = c.json(), error => 
   {console.log(error), alert("Unsuccessfull fetch operation")});
}

  addPlace(newPlace: Place, form: NgForm) : void{
      this.httpPlaceService.postPlace(newPlace).subscribe(this.onPost);
      form.reset();
    } 

    deletePlace(id: number) {
      this.httpPlaceService.delete(id).subscribe(() => {this.refresh(); });
    }   

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

     refresh() {
       this.httpPlaceService.getPlaces().subscribe((res: Response) =>  
       {this.places = res.json(); console.log(this.places)});
    }
}
