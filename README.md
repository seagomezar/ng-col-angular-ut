# Write powerful Unit Tests with Angular Test Bed

# 20. Introducing testing for components 🤙

So far until here, we have covered many scenarios regarding services and providers, the muscle is ready to go next level, and it is time to start reviewing the common scenarios for the components and what we should consider and learn about it. 👣👣👣

☝️ Let's start with something very simple to understand what the fixture is. We have created a new component called login (with `ng generate component login`) which comes with a defined test, it is important to note in the test declarations property. Which basically allow us to add components to the test suite. A couple of considerations here are `.compileComponents();` is required for testing components because the styles and the template require compilation process and time. 


✌️ Then you will note the async word in the beforeEach method. It is similar to the app.component.test, basically as the compilation process is an async job we need to declare on this way the callback. 

Here we can review detailed the parallel between the [app.component.spec.ts](https://github.com/seagomezar/ng-col-angular-ut/blob/step20/src/app/app.component.spec.ts) and the [login.component.spec.ts](https://github.com/seagomezar/ng-col-angular-ut/blob/step20/src/app/login/login.component.spec.ts)

## You are done, now go to [Branch #21](https://github.com/seagomezar/ng-col-angular-ut/tree/step21)