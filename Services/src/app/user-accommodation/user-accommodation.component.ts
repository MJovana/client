import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpRoomService } from '../services/http.roomService';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-user-accommodation',
  templateUrl: './user-accommodation.component.html',
  styleUrls: ['./user-accommodation.component.css']
})
export class UserAccommodationComponent implements OnInit {

  Id: number = -1;
  roomAll: Room[];
  rooms: Room[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpRoomService: HttpRoomService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  onCancel() {
      this.router.navigate(['/appUser']);
  }

  RoomReservation(id: number) {
    this.router.navigate(['/roomr']);
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpRoomService.getRooms().subscribe(
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
    );
  }

}
