import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpRoomService } from '../services/http.roomService';
import { HttpAccommodationService } from '../services/http.accommodationService';
import {Room} from './room.model';
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
  accommodations : Object[];

  constructor(private httpRoomService: HttpRoomService, 
              private httpAccommodationService: HttpAccommodationService) { }

  ngOnInit() {
   this.httpRoomService.getRooms().subscribe((res: Response) => 
   {this.rooms = res.json(); console.log(this.rooms)});
   
   //id od accommodations
    this.httpAccommodationService.getAC().subscribe(c => this.accommodations = c.json(), error => 
   {console.log(error), alert("Unsuccessfull fetch operation")});

 }
   addRoom(newRoom: Room, form: NgForm) : void{
      this.httpRoomService.postRoom(newRoom).subscribe(this.onPost);
      form.reset();
    }    

    deleteRoom(id: number) {
      this.httpRoomService.delete(id).subscribe(() => {this.refresh(); });
    }

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

    refresh() {
      this.httpRoomService.getRooms().subscribe((res: Response) => 
      {this.rooms = res.json(); console.log(this.rooms)});
    }
}
