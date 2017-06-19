import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpProductService } from '../services/http.service'
import {Country} from '../product/product.model'
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [HttpProductService]
})
export class UserComponent implements OnInit {

  countries : Object [];
  country: Country;

  constructor(private httpProductService: HttpProductService, private router: Router) { }

  ngOnInit() {
    this.httpProductService.getProducts().subscribe((res: Response) => 
     {this.countries = res.json(); console.log(this.countries)});
  }

  Choose(id: number) {
    this.router.navigate(['/country/' + id]);
  }
  onLogout(){
    this.router.navigate(['/logout']);
   }

}
