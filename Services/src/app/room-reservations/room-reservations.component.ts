import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpRoomReservationService } from '../services/http.roomReservationService'
import {RoomReservation} from './room-reservation.model'
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

  constructor(private httpRoomReservationService: HttpRoomReservationService) { }

  ngOnInit() {
   this.httpRoomReservationService.getReservations().subscribe((res: Response) =>  {this.roomRs = res.json(); console.log(this.roomRs)});
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
      this.httpRoomReservationService.getReservations().subscribe((res: Response) =>  {this.roomRs = res.json(); console.log(this.roomRs)});
    }

}
