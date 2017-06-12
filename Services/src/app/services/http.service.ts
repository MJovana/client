import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

    postProduct(): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Countries',
        JSON.stringify({
            Name: 'Product from front-end',
            Price: 15
        }), opts);
  }

//ACCOMMODATION TYPE ----------------------------------------------------------------

     getACTypes(): Observable<any> {

        return this.http.get("http://localhost:54042/api/AccommodationTypes");        
    }

    getOneACType(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/AccommodationTypes/" + Id).map(this.extractOneProduct);
    }

//ACCOMMODATION --------------------------------------------------------------------

    getAC(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Accommodations");        
    }

    getOneAC(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Accommodations/" + Id).map(this.extractOneProduct);
    }

//COMMENT----------------------------------------------------------------------------

    getComments(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Comments");        
    }

    getOneComment(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Comments/" + Id).map(this.extractOneProduct);
    }

//PLACE-------------------------------------------------------------------------------
 
  getPlaces(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Places");        
    }

  getOnePlace(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Places/" + Id).map(this.extractOneProduct);
    }

//REGION-----------------------------------------------------------------------------

  getRegions(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Regions");        
    }

  getOneRegion(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Regions/" + Id).map(this.extractOneProduct);
    }

//ROOM RESERVATIONS------------------------------------------------------------------

  getReservations(): Observable<any> {

        return this.http.get("http://localhost:54042/api/RoomReservations");        
    }

  getOneReservation(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/RoomReservations/" + Id).map(this.extractOneProduct);
    }

//ROOM-------------------------------------------------------------------------------

 getRooms(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Rooms");        
    }

  getOneRoom(Id: string): Observable<any> {

        return this.http.get("http://localhost:54042/api/Rooms/" + Id).map(this.extractOneProduct);
    }

  private extractOneProduct(res: Response) {
        let body = res.json();
        return body || {};
    }
}