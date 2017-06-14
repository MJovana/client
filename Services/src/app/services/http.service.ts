import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Country} from '../product/product.model'

@Injectable()
export class HttpProductService{

    data: any;

    constructor (private http: Http){

    }

//COUNTRY-------------------------------------------------------------------------

    getProducts(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Countries");        
    }

    getOneProduct(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Countries/" + Id).map(this.extractOneProduct);
    }

    postProduct(country): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Countries', country, opts);
  }

  delete(Id: number) {
      return this.http.delete("http://localhost:54042/api/Countries/" + Id);
  }

//ACCOMMODATION TYPE ----------------------------------------------------------------


//ACCOMMODATION --------------------------------------------------------------------


//COMMENT----------------------------------------------------------------------------

  

//PLACE-------------------------------------------------------------------------------
 
 

//REGION-----------------------------------------------------------------------------

 
//ROOM RESERVATIONS------------------------------------------------------------------

 

//ROOM-------------------------------------------------------------------------------


  private extractOneProduct(res: Response) {
        let body = res.json();
        return body || {};
    }
}