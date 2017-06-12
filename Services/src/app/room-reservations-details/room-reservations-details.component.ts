import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProductService } from '../services/http.service';

@Component({
  selector: 'app-room-reservations-details',
  templateUrl: './room-reservations-details.component.html',
  styleUrls: ['./room-reservations-details.component.css']
})
export class RoomReservationsDetailsComponent implements OnInit {

  Id: string = "-1";
  isLoading: boolean = true;
  roomr: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpProductService: HttpProductService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpProductService.getOneReservation(this.Id).subscribe(
      (res: Response) => 
        {
          this.roomr = res;
          console.log(this.roomr)
          this.isLoading = false;
        }
    );
  }

}
