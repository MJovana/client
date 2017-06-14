import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpRegionService } from '../services/http.regionService';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnInit {
 
  Id: string = "-1";
  isLoading: boolean = true;
  region: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpRegionService: HttpRegionService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpRegionService.getOneRegion(this.Id).subscribe(
      (res: Response) => 
        {
          this.region = res;
          console.log(this.region)
          this.isLoading = false;
        }
    );
  }
}
