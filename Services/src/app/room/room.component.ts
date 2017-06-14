import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpRoomService } from '../services/http.roomService'
import {Room} from './room.model'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [HttpRoomService]
})
export class RoomComponent implements OnInit {

  rooms : Object [];
  room : Room;

  constructor(private httpRoomService: HttpRoomService) { }

  ngOnInit() {
   this.httpRoomService.getRooms().subscribe((res: Response) =>
    {this.rooms = res.json(); console.log(this.rooms)});
  }
   addRoom(newRoom: Room, form: NgForm) : void{
      this.httpRoomService.postRoom(newRoom).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }
}
