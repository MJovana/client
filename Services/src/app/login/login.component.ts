import { Component, OnInit } from '@angular/core';
import { User } from "app/registration/User.model";
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  Username : string;
  Password : string;
  Email : string;
  ConfirmPassword: string;
  Role: string;

  constructor(private userService : UserService, private route: ActivatedRoute, private router: Router) {}    
   

  ngOnInit() {
    // get return url from route parameters or default to '/'
     //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

onSubmitLogin(){
    this.userService.login(new User(this.Username, this.Password, this.Role, this.Email, this.ConfirmPassword)).subscribe(
      res => {
        localStorage.setItem("response", res);
      }
    );

  }


}
