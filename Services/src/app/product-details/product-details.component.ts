import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProductService } from '../services/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  Id: string = "-1";
  isLoading: boolean = true;
  country: any;

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
          this.country = res;
          console.log(this.country)
          this.isLoading = false;
        }
    );
  }
}
