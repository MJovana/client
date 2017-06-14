import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpPlaceService } from '../services/http.placeService';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

   Id: string = "-1";
  isLoading: boolean = true;
  place: any;

   constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpPlaceService: HttpPlaceService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpPlaceService.getOnePlace(this.Id).subscribe(
      (res: Response) => 
        {
          this.place = res;
          console.log(this.place)
          this.isLoading = false;
        }
    );
  }

}
