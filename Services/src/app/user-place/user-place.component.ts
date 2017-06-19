import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpAccommodationService } from '../services/http.accommodationService';
import { Accommodation } from '../accommodation/accommodation.model';

@Component({
  selector: 'app-user-place',
  templateUrl: './user-place.component.html',
  styleUrls: ['./user-place.component.css']
})
export class UserPlaceComponent implements OnInit {

  Id: number = -1;
  accommodationAll: Accommodation[];
  accommodations: Accommodation[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpAccommodationService: HttpAccommodationService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  onCancel() {
      this.router.navigate(['/appUser']);
  }

  Choose(id: number) {
    this.router.navigate(['/accommodation/' + id]);
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpAccommodationService.getAC().subscribe(
      (res: Response) => 
        {
          this.accommodationAll = res.json();
          
          for (let a of this.accommodationAll) {
            if(a.PlaceId == this.Id) {
              this.accommodations.push(a)
              console.log(a); 
            }
          }
        }
    );
  }

}
