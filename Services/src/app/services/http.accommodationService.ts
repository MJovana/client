import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Accommodation} from '../accommodation/accommodation.model'

@Injectable()
export class HttpAccommodationService{

    data: any;

    constructor (private http: Http){

    }

    
    getAC(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Accommodations");        
    }

    getOneAC(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Accommodations/" + Id).map(this.extractOneProduct);
    }
    
     postAccommodation(accommodation, file: File): Observable<any>  {
        let formData: FormData = new FormData();
        formData.append('accommodation', JSON.stringify(accommodation));
        formData.append('uploadFile', file, file.name);


        const headers: Headers = new Headers();

        headers.append('enctype', 'multipart/form-data');

        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Accommodations', accommodation, opts);
  }

delete(Id: number) {
      return this.http.delete("http://localhost:54042/api/Accommodations/" + Id);
  }

   private extractOneProduct(res: Response) {
        let body = res.json();
        return body || {};
    }
}