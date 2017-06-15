import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Place} from '../place/place.model'

@Injectable()
export class HttpPlaceService{

    data: any;

    constructor (private http: Http){

    }

     getPlaces(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Places");        
    }

  getOnePlace(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Places/" + Id).map(this.extractOneProduct);
    }
     postPlace(place): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Places', place, opts);
  }

  delete(Id: number) {
      return this.http.delete("http://localhost:54042/api/Places/" + Id);
    }

   private extractOneProduct(res: Response) {
        let body = res.json();
        return body || {};
    }
}