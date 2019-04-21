## Clean Code ##

### Meaningful Names ###
1. Name of the variables, functions and classes should explain why it exists, what it does and how it is used

2. Noise words are meaningless distraction. eg. Product => ProductData, ProductInfo

3. Classes and Objects should have noun phrase. eg. Customer

4. Method should have verb or verb phrase. eg. postPayment()

### Functions ###
1. Each function should not cross more than 20 lines.

2. Parameters should not be more than three, if more than three send an object.

3. Functions and parameters naming should make sense. eg. writeField(name)

4. Function either return some info about the object or change state.

### Comments ###
1. Boolean Flags should have meaning names. eg TOO_YOUNG = 2

2. Write TODOS when something needs to be done in future.

### Formatting ###
1. Width of a line should be between 100 to 120 lines

### Error Handling ###
1. Use try, catch, finally for files, databases or http request

2. Do not return null in a function

### Boundaries ###
1. Write Tests for third-party packages for the learning experience

2. Create a adapter to make it look cleaner

### Unit Tests ###
1. Test should be fast

2. Test should be independent

3. Test repeatable in any environment

4. Test should be self validating and the output should be in boolean

5. Test should be done first and then it should be moved in production

6. Threee laws of Test driven development (TDD)

    1) You may not have production code until you have written a failing test unit
    2) You may not write more of a unit test that is sufficient to fail, and not compiling is failing
    3) You may not write more production code than is sufficient to pass the currently failing test

### Classes ###
1. In Class first the public should be mentioned followed by protected then private

2. Classes size should be small with 5 responsiblities

### Emergence ###
1. Write the name of the patterns with classes

### Concurrency ##
1. It means the execution of multiple tasks over a period of time.

2. It helps us to decouple whate gets done from when gets done

3. It can happen during the asynchoronous functions

4. PHP, Ruby follows the blocking pattern which heavily relies on multi-threading

5. Blocking: It stops the execution of the thread before moving on with the thread

6. Non blocking pattern is implement on javascript

7. Non-Blocking: Callbacks should be avoided, promises solves the problem with error handling

8. Non-Blocking: Function generators are also a great way to solve it but not good enough

        function *generator() {
            let result = fetch('/users/');
            yield result;
        }

9. Non-Blocking: We should use async/await, it is similar to function generator but
instead of using yield it uses await after the promise.

        async function getUsers() {
            let result = await fetchJSON('/users');
            return result;
        }

Terms|Definition
-----|----------
ReentrantLock|A lock that can be acquired in one method and released in another.
Semaphore| An implementation of the classic samphore, a lock with a count.
CountDownLatch| A lock that waits for a number of events before releasing all threads waiting on it
Bound Resources|Resources of a fixed size or number used in a concurrent environment. Eg. Database connections
Mutual Exclusion|Only one thread can access shared data or a shared resource at a time
Starvation|One thread or a group of threads is prohibted from preoceeding for an excessively long time or forever.
DeadLock|Two or more threads waiting for each other to finish
Livelock|Threads in lockstep, each trying to do work but finding another "in the way".

### Smells and Heuristics ###
1. Delete commented out old code

2. Prefer polymorphism to if/else or Switch/Case [One Switch Rule]

3. Avoid Negative Conditionals, Encapsulate conditionals

4. Encapsulate boundary conditions. eg.

        if (level + 1 < tags.length) {
            parts = new Parse(body, tags, level+1, offset + endTag)
        }

        int nextLevel = level + 1;
        if (nextLevel < tags.length) {
            parts = new Parse(body, tags, nextLevel, offset + endTag)
        }