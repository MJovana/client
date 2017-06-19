import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-room',
  templateUrl: './user-room.component.html',
  styleUrls: ['./user-room.component.css']
})
export class UserRoomComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

   onCancel() {
      this.router.navigate(['/appUser']);
  }

}
