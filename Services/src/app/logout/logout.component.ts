import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [UserService]
})
export class LogoutComponent implements OnInit {

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit() {
   // this.userService.logOut().subscribe(x => {localStorage.clear(); this.router.navigate(['/home']); });
    this.userService.logOut(); 
    this.router.navigate(['/home']);
  }

}
