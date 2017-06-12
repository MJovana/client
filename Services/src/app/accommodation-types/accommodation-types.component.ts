import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpProductService } from '../services/http.service'

@Component({
  selector: 'app-accommodation-types',
  templateUrl: './accommodation-types.component.html',
  styleUrls: ['./accommodation-types.component.css'],
  providers: [HttpProductService]
})
export class AccommodationTypesComponent implements OnInit {

  acType : Object [];

  constructor(private httpProductService: HttpProductService) { }

  ngOnInit() {
    this.httpProductService.getACTypes().subscribe((res: Response) => {this.acType = res.json(); console.log(this.acType)});
  }

}
