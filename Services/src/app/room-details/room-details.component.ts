import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProductService } from '../services/http.service';


@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  Id: string = "-1";
  isLoading: boolean = true;
  room: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpProductService: HttpProductService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpProductService.getOneRoom(this.Id).subscribe(
      (res: Response) => 
        {
          this.room = res;
          console.log(this.room)
          this.isLoading = false;
        }
    );
  }
}
