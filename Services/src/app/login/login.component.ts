import { Component, OnInit } from '@angular/core';
import { User } from "app/registration/User.model";
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from './login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  Username : string;
  Password : string;

  constructor(private userService : UserService, private router: Router) {}    
  
  ngOnInit() {
    // get return url from route parameters or default to '/'
     //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onCancle() {
      this.router.navigate(['/home']);
  }

  onSubmitLogin(loginUser: LoginModel, form: NgForm) : void{
      this.userService.logIn(this.Username,this.Password).subscribe(this.onLogin);
   // form.reset();
      
      if(localStorage.getItem("role")=="Admin")
      {
         this.router.navigate(['/admin']);
      }
  }

  onLogin(response: any){
    
    localStorage.setItem('token_id', response.json().access_token);
    localStorage.setItem('role', response.headers.get('Role'));
    localStorage.setItem('user', this.Username);

    console.log(response.json());
 }

  isLoggedIn() : boolean{
    return this.userService.isLoggedIn();
  }
}


