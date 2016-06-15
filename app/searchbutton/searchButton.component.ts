import { Component, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../tweets/tweets.service';

@Component({
    selector: 'search',
    template: `
    <input #inputField
      (keyup.enter)="searchForTweets(inputField.value)"
      (blur)="searchForTweets(inputField.value); inputField.value='' ">

    <button (click)=searchForTweets(inputField.value)>Search</button>
`,
    providers: [CountryService]
})


export class SearchButtonComponent {
    countries = [];
    errorMessage = null;

    constructor(private countryService:CountryService){

    }

    searchForTweets(inputField: string) {
        if (inputField) {
            console.log("InputField: " + inputField);


        }
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
