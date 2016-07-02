"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var tweets_service_1 = require('./tweets/tweets.service');
var app_component_1 = require('./app.component');
// class TweetApp {
//     constructor(public searchButtonComponent : SearchButtonComponent,
//     public tweetslive : TweetsLive){
//     }
// }
platform_browser_dynamic_1.bootstrap(app_component_1.SearchButtonComponent, [http_1.HTTP_PROVIDERS, tweets_service_1.CountryService]);
// bootstrap(TweetsLive, [HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map