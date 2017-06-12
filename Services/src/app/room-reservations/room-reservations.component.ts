import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpProductService } from '../services/http.service'

@Component({
  selector: 'app-room-reservations',
  templateUrl: './room-reservations.component.html',
  styleUrls: ['./room-reservations.component.css']
})
export class RoomReservationsComponent implements OnInit {

  roomr : Object [];

  constructor(private httpProductService: HttpProductService) { }

  ngOnInit() {
   this.httpProductService.getReservations().subscribe((res: Response) => {this.roomr = res.json(); console.log(this.roomr)});
  }

}
