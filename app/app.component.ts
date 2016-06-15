import { Component, Output, EventEmitter } from '@angular/core';
import { CountryService } from './tweets/tweets.service';

@Component({
    selector: 'app',
    template: `
    <input #inputField
      (keyup.enter)="searchForTweets(inputField.value)"
      (blur)="searchForTweets(inputField.value); inputField.value='' ">

    <button (click)=searchForTweets(inputField.value)>Search</button>
    <div class="container">
        <ul><li *ngFor="let country of countries">{{country.name}}</li></ul>
    </div>

`,
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
