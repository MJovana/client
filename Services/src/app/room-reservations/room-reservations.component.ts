import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpRoomReservationService } from '../services/http.roomReservationService';
import { HttpRoomService } from '../services/http.roomService';
import { UserService} from '../services/user.service';
import {RoomReservation} from './room-reservation.model';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


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
  id: string;
  idRoom: string;

  constructor(private httpRoomReservationService: HttpRoomReservationService,
              private httpRoomService: HttpRoomService,
              private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
      activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
  }

  ngOnInit() {
   this.httpRoomReservationService.getReservations().subscribe((res: Response) =>  
   {this.roomRs = res.json(); console.log(this.roomRs)});

  //   this.httpRoomService.getRooms().subscribe(c => this.rooms = c.json(), error => 
  //  { console.log(error), alert("Unsuccessfull fetch operation")});
}

  fetchProduct(params: any){
    this.idRoom = params["Id"];
    /*this.httpRoomService.getRooms().subscribe(
      (res: Response) => 
        {
          this.roomAll = res.json();
          
          for (let r of this.roomAll) {
            if(r.AccommodationId == this.Id) {
              this.rooms.push(r)
              console.log(r); 
            }
          }
        }
    );*/
  }

  onCancel() {
    //  this.router.navigate(['/accommodation/' + this.idRoom]);
   //   this.router.navigate(['/appUser']);
  }
  
   addRoomReservation(newRoomReservation: RoomReservation, form: NgForm) : void{
      newRoomReservation.RoomId = parseInt(this.idRoom);
      this.id = localStorage.getItem('id');
      newRoomReservation.UserId = parseInt(this.id);
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
