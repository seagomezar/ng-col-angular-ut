# Write powerful Unit Tests with Angular Test Bed

# 3. Exploring other way

Let's explore another way to inject the service and see how it should work.

As you may see during the "it" definition we are injecting manually the service in each test which is great. i.e: `inject([NamesService], (service: NamesService)`.

✋ However, I always try to follow the rule DON'T REPEAT YOURSELF for that reason during the "beforeEach" method we can extract the service to test and put available. Let's see:
[names.service.spec.ts](https://github.com/seagomezar/ng-col-angular-ut/blob/step2/src/app/names.service.spec.ts)

🎉 Less code and same functionality. 🎉

## You are done, now go to [Branch #4](https://github.com/seagomezar/ng-col-angular-ut/tree/step4)