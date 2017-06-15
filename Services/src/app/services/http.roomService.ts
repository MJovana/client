import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Room} from '../room/room.model'

@Injectable()
export class HttpRoomService{

    data: any;

    constructor (private http: Http){

    }
    
 getRooms(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Rooms");        
    }

  getOneRoom(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Rooms/" + Id).map(this.extractOneProduct);
    }
     postRoom(room): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Rooms', room, opts);
  }

    delete(Id: number) {
      return this.http.delete("http://localhost:54042/api/Rooms/" + Id);
    }

   private extractOneProduct(res: Response) {
        let body = res.json();
        return body || {};
    }
}