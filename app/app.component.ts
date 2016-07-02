import { Component, Output, EventEmitter } from '@angular/core';
import { CountryService } from './tweets/tweets.service';
import { TweetsLive }   from './tweetslive/tweetslive.component';

@Component({
    templateUrl: '../app/app.component.html',
    selector: 'app',
    providers: [CountryService, TweetsLive],
})


export class SearchButtonComponent {
    countries = [];
    errorMessage = null;

    constructor(private countryService:CountryService, private tweetslive:TweetsLive){

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

    setLiveRefresh(tweetname) {
        this.tweetslive.send(tweetname);
    }

    start(){
        console.log("Starting live reloading");
        this.tweetslive.send("&&Start&&");
        // this.tweetslive.setData();
    }

    stop(){
        console.log("Stopping live reloading")
        this.tweetslive.send("&&Stop&&");
    }

    ngOnInit() {
        this.countries = null;
        console.log("Component tweets has been inited");
        }
    }
