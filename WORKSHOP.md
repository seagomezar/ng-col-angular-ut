# Workshop Steps

## Generate Specs for Service 

1. ng generate service [name] will create a names service and also will add the specs file.
Let's explore how an empty test is generated and injected.

## ...

2. Now let's create a private property to store a set of names, also we should add a method to return this names. It was easy, right? let's review how we can test this method. We need to think about how we can test the private property. Our instinct is to think about why is necessary to put name privates and why not just simply put default accessor or public instead. However, there is a Javascript trick (only javascript), by accessing the property in this way servive['privateProperty']. So, now, we know it is important to be aware of public and private properties and methods have a different strategy. Let's review than how the test is implemented.

3. Let's explore another way to inject the service and see how it should work, as you may see during the "it" definition we are injecting manually the service in each test which is great. i.e: `inject([NamesService], (service: NamesService)` however I always try to follow the rule DON'T REPEAT YOURSELF for that reason during the "beforeEach" method we can extract the service to test and put available. Less code and same functionality.

## Exercise #1 👇

4. Let's start with our first exercise, the idea is to gain muscle and write as many tests as we can, later, we will introduce TDD, but for now, let's imagine we have a function which returns us the first element on our names array. (Exercise 1)

5. The solution looks pretty obvious we should call the method and see if the returned name is the same than our `service['names'][0]`. (Solution 1)

6. Now we have a better understanding of the testing, the test just we wrote is helping us to understand the unit testing logic behind the scenes. Right now, probably you want to see what happens if our method is just a promise instead of a simple synchronous call? Now we rewrite the getNames method in a new method getNamesInPromise just to learn the logic about to return a promise instead of a simple call.

7. What about if the promise fail, right now there is not a way to fail the Promise but we can do something experimental by sending the params to the function in order to fail, now it is time to you for writing the test case for the promise when it is failing, review the empty test I have created for you and start adding how it should like.(Exercise 2)

8. Again, the solution is pretty obvious but we are gaining muscle to afford more challenges, for now, the key is you need to create a test case for the then and catch. (Solution 2)

9. What about observables, you will find in many cases that services are intended to return observables instead of promise because all the wave about reactive programming so let's explore first how to convert a simple data into an observable and then how to tests the observable. You will find the testing strategy is pretty similar than the promises stuff we assert inside the subscription object.

10. Implementing dependant functions, So far, right now we have a way to test simple functions, private properties, promises, and observables, we are creating a strong foundation for our future unit tests. Let's review how we can test dependent functions. It means what happens when a function is called from other function. What should be tested here? each function independently? both functions together? (Exercise 3)

11. Showing how to test dependent functions. The first temptation is trying to simply call the greetings random function and review whats happening if we invoke this function. It should work now, but is it really a good practice? because the sense of unit tests is unit test it means test functions independently what is wrong with this test is we are testing two functions instead of one, it should not happen never because if some the functions are failing we won't be able to isolate the problem. The right way is put the create a test for each function and for the second function simulate the real call of the random function. (Solution 3)

12. Let's go deeper into something more interesting, right now we are super ok, testing promises, observables and functions. In real projects it is comming most of the times from http request, because the inmediate utility of promises and observables is http streams, so let's create a method which calls and API endpoint to get some data. In this case it will be a set of events from: https://webconf-api-2018.glitch.me/. Let's create a new provider for that.

13. As you may see the service looks more or less similar to our names provider, one of the main differences is the HttpClient giving us the way to do a get request in a pretty straightforward way, similarly we can do get, post, put, delete etc, it is interesting because you can do as much as you need with HTTP Client, the natural return of the HTTP Client is an observable, and right now maybe you can't find too much profit of it, however, later on, we will cover it. Let's review then, how to test this simple service first let's try with the typical structure of the test, the goal is only to test whether the service is defined or not. 

14. Good for now, but we still need to test the HTTP request itself. It is obvious we are not going to call the real service instead of that we are going to intercept the request and provide a fake answer, however, a lot of injections happened here, the HttpClient, the HttpTestingModule, and HttpTestingController, also we can see how we are going to flush the request just to complete it. The key core concepts here are httpTestingController.expectOne, and the flush to intercept the request and to send and response instead of the request. 

15. It is time to other excercise, this time, the idea is you to practice all the learnings from mocks, providers and HTTP, this excersice could be tricky but it would be great to you by doing it. There is an API https://jsonplaceholder.typicode.com/ to simulate a POST request. So your challenge is to create the provider, the service, the method and the test to save a "post" inside the jsonplaceholder api, you should call the endpoint POST	/posts --> https://jsonplaceholder.typicode.com/posts with the required information. it should be the first time you can control about your function and your test, so enjoy it. (Exercise 4)

16. What is interesting about this is the response contains a key value which is the id and it should be the key value here to test if everything is going ok or not. Nothing should be very different than the get endpoint except we are using the interface and we are asserting more data focused.(Solution 4)

17. One of the advantages about the observables in angular is the hability to catch and manage the error in the request, the catchError operator which give us the hability to handle and manage our error in the proper way always returning in an observable way, let's explore strategies about how to test it and what to consider about.

18. Retry operator is a powerful tool which gives us the ability to resubscribe to the observable if the HTTP request fails and it tries again, this kind of behavior is for us a challenge because we need to think how we are going to handle this through unit tests. In this exercise, you have the goal of rewrite the failing unit test and write a new one when the retry operator works in the last attempt. (Exercise 5).

19. The key to solve this is figuring out how many times we need to respond the request and how to respond (success or fail), it is more or less a logical dissertation about what to in the first and last step, you will notice about the fail method which basically fails the test if the statement is reached. (Solution 5)
