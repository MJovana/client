import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpAccommodationService } from '../services/http.accommodationService'
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

  constructor(private httpAccommodationService: HttpAccommodationService) { }

  ngOnInit() {
   this.httpAccommodationService.getAC().subscribe((res: Response) => {this.accommodations = res.json(); console.log(this.accommodations)});
  }

  addAccommodation(newAccommodation: Accommodation, form: NgForm) : void{
      newAccommodation.Approved = true;
      this.httpAccommodationService.postAccommodation(newAccommodation).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }

}
