import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from "../registration/user.model";

@Injectable()
export class UserService {

  constructor(private http : Http) { }

  register(user : User) : Observable<any> {
        let header = new Headers();
        header.append('Content-type', 'application/json');

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post('http://localhost:54042/api/Account/Register', user, opts);
    }

    login(user : User) : Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        const opts:RequestOptions = new RequestOptions();
        opts.headers = headers;
       
        return this.http.post('http://localhost:54042/oauth/token',`username=${user.Username}&password=${user.Password}&grant_type=password`, opts);
    }

       getUsers(): Observable<any> {

        return this.http.get("http://localhost:54042/api/AppUsers");        
    }

  delete(Id: number) {
      return this.http.delete("http://localhost:54042/api/AppUsers/" + Id);
  }

}