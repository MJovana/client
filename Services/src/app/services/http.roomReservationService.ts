import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {RoomReservation} from '../room-reservations/room-reservation.model'

@Injectable()
export class HttpRoomReservationService{

    data: any;

    constructor (private http: Http){

    }
 getReservations(): Observable<any> {

        return this.http.get("http://localhost:54042/api/RoomReservations");        
    }

  getOneReservation(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/RoomReservations/" + Id).map(this.extractOneProduct);
    }
     postRoomReservation(roomReservation): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/RoomReservations', roomReservation, opts);
  }


  delete(Id: number) {
      return this.http.delete("http://localhost:54042/api/RoomReservations/" + Id);
    }

   private extractOneProduct(res: Response) {
        let body = res.json();
        return body || {};
    }
}