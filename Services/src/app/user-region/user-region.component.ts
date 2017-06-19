import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpPlaceService } from '../services/http.placeService';
import { Place } from '../place/place.model';

@Component({
  selector: 'app-user-region',
  templateUrl: './user-region.component.html',
  styleUrls: ['./user-region.component.css']
})
export class UserRegionComponent implements OnInit {

  Id: number = -1;
  placeAll: Place[];
  places: Place[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpPlaceService: HttpPlaceService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

   onCancel() {
      this.router.navigate(['/appUser']);
  }

  Choose(id: number) {
    this.router.navigate(['/place/' + id]);
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpPlaceService.getPlaces().subscribe(
      (res: Response) => 
        {
          this.placeAll = res.json();
          
          for (let p of this.placeAll) {
            if(p.RegionId == this.Id) {
              this.places.push(p)
              console.log(p); 
            }
          }
        }
    );
  }

}
