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

  onCancel() {
      this.router.navigate(['/home']);
  }


//LOGOVANJE
  onSubmitLogin(loginUser: LoginModel, form: NgForm) : void{
      this.userService.logIn(loginUser.Username, loginUser.Password).subscribe(res => this.onLogin(res));

       //GET ITEM NE RADI DOBRO!!!
      
  }

  //SETOVANJE
  onLogin(response: any){
    
    localStorage.setItem('token', response.json().access_token);
    localStorage.setItem('role', response.headers.get('Role'));
    localStorage.setItem('user', this.Username);
    localStorage.setItem('id', response.headers.get('user_id'));

    console.log(response.json());

    if(localStorage.getItem('role')=="Admin")
      {
         this.router.navigate(['/admin']);
      }
      else if(localStorage.getItem('role')=="User")
      {
        this.router.navigate(['/appUser']);
      }
      else
      {
        this.router.navigate(['/home']);
      }
 }

  isLoggedIn() : boolean{
    return this.userService.isLoggedIn();
  }
}


