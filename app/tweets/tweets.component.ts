import { Component } from '@angular/core';
import { CountryService } from './tweets.service';


@Component({
    templateUrl: 'tweets.component.html',
    providers: [CountryService]

})

export class Tweets {
    countries = [];
    errorMessage = null;

    constructor(private countryService:CountryService){

    }
    getCountries(){
        let country = 'europe';
        this.countryService.getCountriesByRegion(country)
                            .subscribe(
                                countries => this.countries = countries,
                                error => this.errorMessage = <any> error
                            );
    }


    ngOnInit() {
        this.getCountries();
        console.log("Component tweets has been inited");

    }
}
