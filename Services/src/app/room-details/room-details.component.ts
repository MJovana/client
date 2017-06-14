import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpRoomService } from '../services/http.roomService';


@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  Id: string = "-1";
  isLoading: boolean = true;
  room: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpRoomService: HttpRoomService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpRoomService.getOneRoom(this.Id).subscribe(
      (res: Response) => 
        {
          this.room = res;
          console.log(this.room)
          this.isLoading = false;
        }
    );
  }
}
