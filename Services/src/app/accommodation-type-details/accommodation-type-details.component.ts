import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpAccommodationTypeService } from '../services/http.accommodationTypeService';

@Component({
  selector: 'app-accommodation-type-details',
  templateUrl: './accommodation-type-details.component.html',
  styleUrls: ['./accommodation-type-details.component.css']
})
export class AccommodationTypeDetailsComponent implements OnInit {

  Id: string = "-1";
  isLoading: boolean = true;
  acType: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpAccommodationTypeService: HttpAccommodationTypeService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpAccommodationTypeService.getOneACType(this.Id).subscribe(
      (res: Response) => 
        {
          this.acType = res;
          console.log(this.acType)
          this.isLoading = false;
        }
    );
  }

}
