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

### Classes ###
1. In Class first the public should be mentioned followed by protected then private

2. Classes size should be small with 5 responsiblities