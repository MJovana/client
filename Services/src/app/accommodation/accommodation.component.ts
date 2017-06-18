import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpAccommodationService } from '../services/http.accommodationService';
import { HttpAccommodationTypeService } from '../services/http.accommodationTypeService';
import { HttpProductService } from '../services/http.service';
import { UserService } from '../services/user.service';
import { HttpPlaceService } from '../services/http.placeService';
import {Accommodation} from './accommodation.model';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
  providers: [HttpAccommodationService]
})
export class AccommodationComponent implements OnInit {

  accommodations : Object [];
  accommodation : Accommodation;
  AccommodationId: number;
  users : Object[];
  places : Object[];
  accommodationTypes: Object[];
  id: string;

  constructor(private httpAccommodationService: HttpAccommodationService,
              private httpAccommodationTypeService: HttpAccommodationTypeService,
              private httpPlaceService : HttpPlaceService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
   this.httpAccommodationService.getAC().subscribe((res: Response) =>
  { this.accommodations = res.json(); console.log(this.accommodations)});

   //id od places
   this.httpPlaceService.getPlaces().subscribe(c => this.places = c.json(), error => 
   { console.log(error), alert("Unsuccessfull fetch operation - Place")});

   //id od accommodationTypes
   this.httpAccommodationTypeService.getACTypes().subscribe(c => this.accommodationTypes = c.json(), error => 
   {console.log(error), alert("Unsuccessfull fetch operation - AcType")});

   //id od usera
    // this.userService.getUsers().subscribe(c => this.users = c.json(), error => 
    // { console.log(error), alert("Unsuccessfull fetch operation -")});
  }

  onCancle() {
      this.router.navigate(['/admin']);
  }

  addAccommodation(newAccommodation: Accommodation, form: NgForm) : void{
      newAccommodation.Approved = true;
 //     newAccommodation.AccommodationTypeId = this.AccommodationId;
      this.id = localStorage.getItem('id');
      newAccommodation.UserId = parseInt(this.id);
      this.httpAccommodationService.postAccommodation(newAccommodation).subscribe(this.onPost);
      form.reset();
    }   

    deleteAccommodation(id: number) {
      this.httpAccommodationService.delete(id).subscribe(() => {this.refresh(); });
    } 

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

    refresh() {
      this.httpAccommodationService.getAC().subscribe((res: Response) => 
      {this.accommodations = res.json(); console.log(this.accommodations)});
    }

}
