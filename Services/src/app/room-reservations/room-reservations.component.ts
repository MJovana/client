import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpRoomReservationService } from '../services/http.roomReservationService';
import { HttpRoomService } from '../services/http.roomService';
import { UserService} from '../services/user.service';
import {RoomReservation} from './room-reservation.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-room-reservations',
  templateUrl: './room-reservations.component.html',
  styleUrls: ['./room-reservations.component.css'],
  providers: [HttpRoomReservationService]
})
export class RoomReservationsComponent implements OnInit {

  roomRs : Object [];
  roomR : RoomReservation;
  rooms : Object[];
  users : Object[];

  constructor(private httpRoomReservationService: HttpRoomReservationService,
              private httpRoomService: HttpRoomService,
              private userService: UserService) { }

  ngOnInit() {
   this.httpRoomReservationService.getReservations().subscribe((res: Response) =>  
   {this.roomRs = res.json(); console.log(this.roomRs)});

    this.httpRoomService.getRooms().subscribe(c => this.rooms = c.json(), error => 
   { console.log(error), alert("Unsuccessfull fetch operation")});

    //id od usera
   this.userService.getUsers().subscribe(c => this.users = c.json(), error => 
    { console.log(error), alert("Unsuccessfull fetch operation")});

}
   addRoomReservation(newRoomReservation: RoomReservation, form: NgForm) : void{
      this.httpRoomReservationService.postRoomReservation(newRoomReservation).subscribe(this.onPost);
      form.reset();
    }    

    deleteRoomReservation(id: number) {
      this.httpRoomReservationService.delete(id).subscribe(() => {this.refresh(); });
    }

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

    refresh() {
      this.httpRoomReservationService.getReservations().subscribe((res: Response) =>  
      {this.roomRs = res.json(); console.log(this.roomRs)});
    }

}
