import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AccommodationType} from '../accommodation-types/accommodation-types.model'

@Injectable()
export class HttpAccommodationTypeService{

    data: any;

    constructor (private http: Http){

    }
    
     getACTypes(): Observable<any> {

        return this.http.get("http://localhost:54042/api/AccommodationTypes");        
    }

    getOneACType(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/AccommodationTypes/" + Id).map(this.extractOneProduct);
    }

     postAccommodationType(accommodationType): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/AccommodationTypes', accommodationType, opts);
  }
   private extractOneProduct(res: Response) {
        let body = res.json();
        return body || {};
    }
}