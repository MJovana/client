import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpProductService } from '../services/http.service'

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [HttpProductService]
})
export class RoomComponent implements OnInit {

  room : Object [];

  constructor(private httpProductService: HttpProductService) { }

  ngOnInit() {
   this.httpProductService.getRooms().subscribe((res: Response) => {this.room = res.json(); console.log(this.room)});
  }
}
