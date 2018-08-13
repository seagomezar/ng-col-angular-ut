1. ng generate service [name] will create a names service and also will add the specs file.
Let's explore how how and empty test is generated and inyected.

2. Now let's create a private property to store a set of names, also we should add a method to return this names. It was easy right?, let's review how we can test this method. We need to think about how we can test the private property. Our instinct is to think about why is necesary to put name privates and why not just simply put default accessor or public instead. However there are a Javascript trick (only javascript), by accesing the property in this way servive['privateProperty']. So, now, we know it is important be aware about public and private properties and methods have a different strategy. Let's review then how the test is implemented.

3. Let's explore another way to inject the service and see how it should work, as you may see during the "it" definition we are inyecting manually the service in each test which is great. i.e: `inject([NamesService], (service: NamesService)` however I always try to follow the rule DON'T REPEAT YOURSELF for that reason during the "beforeEach" method we can extract the service to test and put available. Less code and same functionality.

4. Let's start with our first exercise, the idea is to gain muscle and write as many tests as we can, later, we will introduce TDD, but for now let's imagine we have a function which returns us the first element on our names array.

5. The solution looks pretty obvious we should call the method and see if the returned name is the same than our `service['names'][0]`.

6. Now we have a better understanding about the testing, the test just we wrote is helping us to understand the unit testing logic behind the scenes. Right now, probably you want to see what happens if our method is just a promise instead of a simple syncronous call? Now we rewrite the getNames method in a new method getNamesInPromise just to learn the logic about to return a promise instead of a simple call.