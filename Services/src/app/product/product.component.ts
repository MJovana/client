import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpProductService } from '../services/http.service'
import {Country} from './product.model'
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [HttpProductService]
})
export class ProductComponent implements OnInit {
  
  countries : Object [];
  country: Country;

  constructor(private httpProductService: HttpProductService, private router: Router) { }

   ngOnInit() {
     this.httpProductService.getProducts().subscribe((res: Response) => 
     {this.countries = res.json(); console.log(this.countries)});
   }

 addCountry(newCountry: Country, form: NgForm) : void{
      this.httpProductService.postProduct(newCountry).subscribe(this.onPost);
      form.reset(); 
    }    

    onCancle() {
      this.router.navigate(['/admin']);
    }

  onPost(res : any) : void{    
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

    deleteCountry(id: number) {
      this.httpProductService.delete(id).subscribe(() => {this.refresh(); });
    }

    refresh() {
      this.httpProductService.getProducts().subscribe((res: Response) => 
      {this.countries = res.json(); console.log(this.countries)});
    }

  // addProduct() : void{
  //   this.httpProductService.postProduct().subscribe(this.onPost)
  // }

}
