import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Comment} from '../comment/comment.model'

@Injectable()
export class HttpCommentService{

    data: any;

    constructor (private http: Http){

    }
      getComments(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Comments");        
    }

    getOneComment(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Comments/" + Id).map(this.extractOneProduct);
    }
     postComment(comment): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Comments', comment, opts);
  }

    delete(Id: number) {
      return this.http.delete("http://localhost:54042/api/Comments/" + Id);
    }

   private extractOneProduct(res: Response) {
        let body = res.json();
        return body || {};
    }
}