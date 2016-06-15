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
var tweets_service_1 = require('../tweets/tweets.service');
var SearchButtonComponent = (function () {
    function SearchButtonComponent(countryService) {
        this.countryService = countryService;
        this.countries = [];
        this.errorMessage = null;
    }
    SearchButtonComponent.prototype.searchForTweets = function (inputField) {
        if (inputField) {
            console.log("InputField: " + inputField);
        }
    };
    SearchButtonComponent.prototype.getCountries = function () {
        var _this = this;
        var country = 'europe';
        this.countryService.getCountriesByRegion(country)
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.errorMessage = error; });
    };
    SearchButtonComponent.prototype.ngOnInit = function () {
        this.getCountries();
        console.log("Component tweets has been inited");
    };
    SearchButtonComponent = __decorate([
        core_1.Component({
            selector: 'search',
            template: "\n    <input #inputField\n      (keyup.enter)=\"searchForTweets(inputField.value)\"\n      (blur)=\"searchForTweets(inputField.value); inputField.value='' \">\n\n    <button (click)=searchForTweets(inputField.value)>Search</button>\n",
            providers: [tweets_service_1.CountryService]
        }), 
        __metadata('design:paramtypes', [tweets_service_1.CountryService])
    ], SearchButtonComponent);
    return SearchButtonComponent;
}());
exports.SearchButtonComponent = SearchButtonComponent;
//# sourceMappingURL=searchButton.component.js.map