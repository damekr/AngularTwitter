import { Component } from '@angular/core';
import { $WebSocket } from 'angular2-websocket/angular2-websocket';

@Component({
    templateUrl: 'app/tweetslive/tweetslive.component.html',
    selector: 'applive',

})

export class TweetsLive {
    socketUrl = "ws://127.0.0.1:8080/api/counter";
    ws = null;
    evt = null;
    rawtweets = null;

    constructor(){
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
    setData(){
        if (this.evt.data){
            this.rawtweets = this.evt.data;
        }
    }

    send(tweetname){
        if (tweetname){
            if (this.ws.readyState === 1) {
                console.log("Setting live update of twitter with vaule: " + tweetname);
                this.ws.send(tweetname);
        }else{
            console.log("Busy")
        }
    }
    }
    ngOnInit() {
        console.log("Component tweetslive has been inited");

    }
}
