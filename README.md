# Write powerful Unit Tests with Angular Test Bed

# 2. Testing simple get functions and private properties

Now,
1. Let's create a private property to store a set of names in our [names.service.ts](https://github.com/seagomezar/ng-col-angular-ut/blob/step2/src/app/names.service.ts):

    `private names: string[] = ['Juan', 'Mati'];`

2. Also we should add a method to return this names. 

    ` public getNames() {`
        `return this.names;`
    `}`

It was easy right? 🎉🎉🎉🤗🤗🤗, Let's review how we can test this method. We need to think about how we can test the private property 🧐. Our instinct is to think about why is necesary to put name privates and why not just simply put default accessor or public instead. 

However there are a Javascript trick (only javascript 👌), by accesing the property in this way service['privateProperty']. 

So, now, we know it is important be aware about public and private properties and methods have a different strategy. Let's review then how the test is implemented in  [names.service.spec.ts](https://github.com/seagomezar/ng-col-angular-ut/blob/step2/src/app/names.service.spec.ts) 🧐

There are two key concepts here ✌️:

1. Inyecting the service in the it method.
2. The expect options for assert



## You are done, now go to [Branch #3](https://github.com/seagomezar/ng-col-angular-ut/tree/step3)