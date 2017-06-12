import { Component, OnInit } from '@angular/core';
import { User } from "app/registration/User.model";
import { UserService } from './User.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
