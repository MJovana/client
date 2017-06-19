import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpRegionService } from '../services/http.regionService';
import { Region } from '../region/region.model';

@Component({
  selector: 'app-user-country',
  templateUrl: './user-country.component.html',
  styleUrls: ['./user-country.component.css']
})
export class UserCountryComponent implements OnInit {

  Id: number = -1;
  regionsAll: Region[];
  regions: Region[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpRegionService: HttpRegionService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

   onCancel() {
      this.router.navigate(['/appUser']);
  }

  Choose(id: number) {
    this.router.navigate(['/region/' + id]);
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpRegionService.getRegions().subscribe(
      (res: Response) => 
        {
          this.regionsAll = res.json();
          
          for (let r of this.regionsAll) {
            if(r.CountryId == this.Id) {
              this.regions.push(r)
              console.log(r); 
            }
          }
        }
    );
  }

}
