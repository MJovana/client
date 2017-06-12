import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProductService } from '../services/http.service';

@Component({
  selector: 'app-accommodation-type-details',
  templateUrl: './accommodation-type-details.component.html',
  styleUrls: ['./accommodation-type-details.component.css']
})
export class AccommodationTypeDetailsComponent implements OnInit {

  Id: string = "-1";
  isLoading: boolean = true;
  acType: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpProductService: HttpProductService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpProductService.getOneProduct(this.Id).subscribe(
      (res: Response) => 
        {
          this.acType = res;
          console.log(this.acType)
          this.isLoading = false;
        }
    );
  }

}
