import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class CountryService{
    countries = [];
    error: string;
    endpoint_url:String = "https://restcountries.eu/rest/v1/region/";

   constructor(private http: Http){
       console.log("Country Service started!");
       this.http = http;
   }

   getCountriesByRegion(country){
       console.log("Getting data");
       return this.http.get(this.endpoint_url + country)
                            .map(res => res.json())
                            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
