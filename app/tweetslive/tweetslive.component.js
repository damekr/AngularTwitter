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
var TweetsLive = (function () {
    function TweetsLive() {
        this.socketUrl = "ws://127.0.0.1:8080/api/counter";
        this.ws = null;
        this.evt = null;
        this.rawtweets = null;
        this.ws = new WebSocket(this.socketUrl);
        this.ws.onopen = function () {
            console.log("Opening a connection...");
        };
        this.ws.onclose = function (evt) {
            console.log("I'm sorry. Bye!");
        };
        this.ws.onmessage = function (evt) {
            this.evt = evt;
            console.log(evt.data);
        };
        this.ws.onerror = function (evt) {
            console.log("ERR: " + evt.data);
        };
    }
    TweetsLive.prototype.setData = function () {
        if (this.evt.data) {
            this.rawtweets = this.evt.data;
        }
    };
    TweetsLive.prototype.send = function (tweetname) {
        if (tweetname) {
            if (this.ws.readyState === 1) {
                console.log("Setting live update of twitter with vaule: " + tweetname);
                this.ws.send(tweetname);
            }
            else {
                console.log("Busy");
            }
        }
    };
    TweetsLive.prototype.ngOnInit = function () {
        console.log("Component tweetslive has been inited");
    };
    TweetsLive = __decorate([
        core_1.Component({
            templateUrl: 'app/tweetslive/tweetslive.component.html',
            selector: 'applive',
        }), 
        __metadata('design:paramtypes', [])
    ], TweetsLive);
    return TweetsLive;
}());
exports.TweetsLive = TweetsLive;
//# sourceMappingURL=tweetslive.component.js.map