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
  Id: number = -1;

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
}

  fetchProduct(params: any){
    this.Id = params["Id"];
  }

  onCancel() {
      this.router.navigate(['/appUser']);
  }
  
   addRoomReservation(newRoomReservation: RoomReservation, form: NgForm) : void{
      newRoomReservation.RoomId = this.Id;
      this.id = localStorage.getItem('id');
      newRoomReservation.UserId = parseInt(this.id);
      this.httpRoomReservationService.postRoomReservation(newRoomReservation).subscribe(this.onPost);
      form.reset();
    }    

    CommentRoom(id: number) {
      this.router.navigate(['/roomr/' + id]);   
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
