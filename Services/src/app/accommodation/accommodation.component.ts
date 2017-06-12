import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpProductService } from '../services/http.service'

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
  providers: [HttpProductService]
})
export class AccommodationComponent implements OnInit {

  accommodation : Object [];

  constructor(private httpProductService: HttpProductService) { }

  ngOnInit() {
   this.httpProductService.getAC().subscribe((res: Response) => {this.accommodation = res.json(); console.log(this.accommodation)});
  }

}
