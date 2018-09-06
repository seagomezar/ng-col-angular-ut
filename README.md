# Write powerful Unit Tests with Angular Test Bed

# 12. Let's rock with HTTP Request 🎸🎸🎸

Let's go deeper into something more interesting. 

Right now we are super ok, testing promises, observables and functions. In real projects it is comming most of the times from http request, because the inmediate utility of promises and observables are http streams, so let's create a method which calls and API endpoint to get some data. In this case it will be a set of events from: https://webconf-api-2018.glitch.me/. Let's create a new provider for that.

`ng generate service conferences`

Then let's create a simple method to invoque the conferences stuff in 
[conferences.service.ts](https://github.com/seagomezar/ng-col-angular-ut/blob/step12/src/app/conferences.service.ts)
You will see the most easiest scenario for a http request 😍:

` getAllConferences(): Observable<any> {
    return this.http.get(this.conferencesURL);
  } `


## You are done, now go to [Branch #13](https://github.com/seagomezar/ng-col-angular-ut/tree/step13)
