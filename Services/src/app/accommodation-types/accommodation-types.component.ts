import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpAccommodationTypeService } from '../services/http.accommodationTypeService'
import {AccommodationType} from './accommodation-types.model'
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accommodation-types',
  templateUrl: './accommodation-types.component.html',
  styleUrls: ['./accommodation-types.component.css'],
  providers: [HttpAccommodationTypeService]
})
export class AccommodationTypesComponent implements OnInit {

  accommodationTypes : Object [];
  accommodationType : AccommodationType;

  constructor(private httpAccommodationTypeService: HttpAccommodationTypeService, private router: Router) { }

  ngOnInit() {
    this.httpAccommodationTypeService.getACTypes().subscribe((res: Response) => 
    {this.accommodationTypes = res.json(); console.log(this.accommodationTypes)});
  }

  onCancle() {
      this.router.navigate(['/admin']);
  }

  addAccommodationType(newAccommodationType: AccommodationType, form: NgForm) : void{
      this.httpAccommodationTypeService.postAccommodationType(newAccommodationType).subscribe(this.onPost);
      form.reset();
    }    

    deleteAccommodationType(id: number) {
      this.httpAccommodationTypeService.delete(id).subscribe(() => {this.refresh(); });
    }

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

    refresh() {
       this.httpAccommodationTypeService.getACTypes().subscribe((res: Response) => 
       {this.accommodationTypes = res.json(); console.log(this.accommodationTypes)});
    }

}
