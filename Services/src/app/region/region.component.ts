import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpProductService } from '../services/http.service'

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [HttpProductService]
})
export class RegionComponent implements OnInit {

  region : Object [];
  constructor(private httpProductService: HttpProductService) { }

 ngOnInit() {
   this.httpProductService.getRegions().subscribe((res: Response) => {this.region = res.json(); console.log(this.region)});
  }

}
