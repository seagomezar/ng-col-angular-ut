# Write powerful Unit Tests with Angular Test Bed

# 14. Testing HTTP Request 🎸🎸🎸

Good for now, but we still need to test the HTTP request itself. 

It is obvious we are not going to call the real service instead of that we are going to intercept the request and provide a fake answer, however, a lot of injections happened here, the HttpClient, the HttpTestingModule, and HttpTestingController, also we can see how we are going to flush the request just to complete it.  🤔

The key core concepts here are `httpTestingController.expectOne`, and the `flush` to intercept the request and to send and response instead of the request. 😇 

Let's review deep this in

- [conferences.service.spec.ts](https://github.com/seagomezar/ng-col-angular-ut/blob/step13/src/app/conferences.service.spec.ts)

## You are done, now go to [Branch #15](https://github.com/seagomezar/ng-col-angular-ut/tree/step15)