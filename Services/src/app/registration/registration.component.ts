import { Component, OnInit } from '@angular/core';
import { User } from "app/registration/User.model";
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {

  Username : string;
  Password : string;
  Email : string;
  ConfirmPassword: string;
  Role: string;

  constructor(private userService : UserService, private router: Router) { 
  }

  ngOnInit() {
  }

  onSubmitRegister(user:User,form:NgForm){
    this.userService.register(new User(this.Username, this.Password, this.Role, this.Email, this.ConfirmPassword)).subscribe(x => { this.router.navigate(['/home']); });

    //form.resetForm();
  }

  onCancel() {
      this.router.navigate(['/home']);
  }

  // onSubmitLogin(){
  //   this.userService.login(new User(this.Username, this.Password, this.Role, this.Email, this.ConfirmPassword)).subscribe();
  //   this.Email = "";
  //   this.Password = "";
  //   this.ConfirmPassword = "";
  // }

}