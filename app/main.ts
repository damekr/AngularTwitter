import {bootstrap}		            from '@angular/platform-browser-dynamic';
// import {Tweets}                     from './tweets/tweets.component';
import { HTTP_PROVIDERS }           from '@angular/http';
import {CountryService}             from './tweets/tweets.service';
import {SearchButtonComponent}                        from './app.component';

bootstrap(SearchButtonComponent, [HTTP_PROVIDERS, CountryService]);
