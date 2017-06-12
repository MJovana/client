import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProductService } from '../services/http.service';


@Component({
  selector: 'app-accommodation-details',
  templateUrl: './accommodation-details.component.html',
  styleUrls: ['./accommodation-details.component.css']
})
export class AccommodationDetailsComponent implements OnInit {

  Id: string = "-1";
  isLoading: boolean = true;
  ac: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpProductService: HttpProductService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpProductService.getOneAC(this.Id).subscribe(
      (res: Response) => 
        {
          this.ac = res;
          console.log(this.ac)
          this.isLoading = false;
        }
    );
  }

}
