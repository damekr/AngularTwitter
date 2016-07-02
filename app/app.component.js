"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tweets_service_1 = require('./tweets/tweets.service');
var tweetslive_component_1 = require('./tweetslive/tweetslive.component');
var SearchButtonComponent = (function () {
    function SearchButtonComponent(countryService, tweetslive) {
        this.countryService = countryService;
        this.tweetslive = tweetslive;
        this.countries = [];
        this.errorMessage = null;
    }
    SearchButtonComponent.prototype.searchForTweets = function (inputField) {
        var _this = this;
        if (inputField) {
            this.countryService.getCountriesByRegion(inputField)
                .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.errorMessage = error; });
            console.log("InputField: " + inputField);
        }
    };
    SearchButtonComponent.prototype.setLiveRefresh = function (tweetname) {
        this.tweetslive.send(tweetname);
    };
    SearchButtonComponent.prototype.start = function () {
        console.log("Starting live reloading");
        this.tweetslive.send("&&Start&&");
        // this.tweetslive.setData();
    };
    SearchButtonComponent.prototype.stop = function () {
        console.log("Stopping live reloading");
        this.tweetslive.send("&&Stop&&");
    };
    SearchButtonComponent.prototype.ngOnInit = function () {
        this.countries = null;
        console.log("Component tweets has been inited");
    };
    SearchButtonComponent = __decorate([
        core_1.Component({
            templateUrl: '../app/app.component.html',
            selector: 'app',
            providers: [tweets_service_1.CountryService, tweetslive_component_1.TweetsLive],
        }), 
        __metadata('design:paramtypes', [tweets_service_1.CountryService, tweetslive_component_1.TweetsLive])
    ], SearchButtonComponent);
    return SearchButtonComponent;
}());
exports.SearchButtonComponent = SearchButtonComponent;
//# sourceMappingURL=app.component.js.map