# Write powerful Unit Tests with Angular Test Bed

# 11.  Solution testing dependent functions 🤩

Showing how to test dependent functions. The first temptation is trying to simply call the greetings random function and review whats happening if we invoke this function. 

It should work now, but is it really a good practice? 🤔 . I mean because the sense of unit tests is unit test it means test functions independently what is wrong with this test is we are testing two functions instead of one, it should not happen never because if some the functions are failing we won't be able to isolate the problem. 

🤨 The right way is put the create a test for each function and for the second function simulate the real call of the random function.

[names.service.spec.ts](https://github.com/seagomezar/ng-col-angular-ut/blob/step11/src/app/names.service.spec.ts)

## You are done, now go to [Branch #12](https://github.com/seagomezar/ng-col-angular-ut/tree/step12)