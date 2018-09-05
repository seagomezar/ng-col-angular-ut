# Write powerful Unit Tests with Angular Test Bed

# 22. Automatic binding process in testing 🤖

Now we understand how to handle the change detection it is complete healthy try to avoid the `fixture.detectChanges` when possible, because we really don't want to be aware all the time if we need to run the `detectChanges` statement. Angular provides us the way to handle this process very easy through `ComponentFixtureAutoDetect`, let's take a look the considerations and limitations about here: 🚯

[login.component.spec.ts](https://github.com/seagomezar/ng-col-angular-ut/blob/step21/src/app/login/login.component.spec.ts)

## You are done, now go to [Branch #23](https://github.com/seagomezar/ng-col-angular-ut/tree/step23)