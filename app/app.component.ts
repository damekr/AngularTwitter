import { Component, Output, EventEmitter } from '@angular/core';
import { CountryService } from './tweets/tweets.service';

@Component({
    templateUrl: '../app/app.component.html',
    selector: 'app',
    providers: [CountryService],
})


export class SearchButtonComponent {
    countries = [];
    errorMessage = null;

    constructor(private countryService:CountryService){

    }

    searchForTweets(inputField) {
        if (inputField) {
            this.countryService.getCountriesByRegion(inputField)
                                .subscribe(
                                    countries => this.countries = countries,
                                        error => this.errorMessage = <any> error
                                    );
            console.log("InputField: " + inputField);


        }
    }



    ngOnInit() {
        this.countries = null;
        console.log("Component tweets has been inited");
        }
    }
