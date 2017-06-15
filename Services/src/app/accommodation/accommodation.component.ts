import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpAccommodationService } from '../services/http.accommodationService'
import { HttpAccommodationTypeService } from '../services/http.accommodationTypeService'
import { HttpProductService } from '../services/http.service'
import {Accommodation} from './accommodation.model'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
  providers: [HttpAccommodationService]
})
export class AccommodationComponent implements OnInit {

  accommodations : Object [];
  accommodation : Accommodation;
  countries : Object[];
  acTypes: Object[];
  AccommodationId: number;

  constructor(private httpAccommodationService: HttpAccommodationService, private httpProductService: HttpProductService, private httpAccommodationTypeService: HttpAccommodationTypeService) { }

  ngOnInit() {
   this.httpAccommodationService.getAC().subscribe((res: Response) => {this.accommodations = res.json(); console.log(this.accommodations)});

   this.httpProductService.getProducts().subscribe(c => this.countries = c.json(), error => 
   {
     console.log(error), alert("Unsuccessfull fetch operation")
   });
   this.httpAccommodationTypeService.getACTypes().subscribe(c => this.acTypes = c.json(), error => 
   {
     console.log(error), alert("Unsuccessfull fetch operation")
   });
  }

  addAccommodation(newAccommodation: Accommodation, form: NgForm) : void{
      newAccommodation.Approved = true;
      newAccommodation.AccommodationId = this.AccommodationId;
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
      this.httpAccommodationService.getAC().subscribe((res: Response) => {this.accommodations = res.json(); console.log(this.accommodations)});
    }

}
