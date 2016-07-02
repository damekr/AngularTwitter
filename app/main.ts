import {bootstrap}		            from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS }           from '@angular/http';
import {CountryService}             from './tweets/tweets.service';
import {SearchButtonComponent}      from './app.component';
import {TweetsLive}                 from './tweetslive/tweetslive.component';

// class TweetApp {
//     constructor(public searchButtonComponent : SearchButtonComponent,
//     public tweetslive : TweetsLive){
        
//     }
// }

bootstrap(SearchButtonComponent, [HTTP_PROVIDERS, CountryService]);
// bootstrap(TweetsLive, [HTTP_PROVIDERS]);

