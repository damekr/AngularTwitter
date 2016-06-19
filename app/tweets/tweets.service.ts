import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class CountryService{
    countries = [];
    error: string;
    // endpoint_url:String = "https://restcountries.eu/rest/v1/region/";
    endpoint_url:String = "http://localhost:8080/api/tweets"

   constructor(private http: Http){
       console.log("Country Service started!");
       this.http = http;

   }

   getCountriesByRegion(country){
       console.log("Getting data");
    //    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    //    let options = new RequestOptions({ headers: headers });
       return this.http.get(this.endpoint_url + "?tag=" + country)
                            .map(res => res.json())
                            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
