## Jest ##
**Install the Jest**
```bash
npm install --save-dev jest
    or
npm -i -D jest
```

**Test Added in package.json**
```json
"scripts": {
    "test": "jest"
},
```

**Run the Test**
```bash
npm test
```

**Jest Functions**

*Simple Script*
```javascript
test('Adds 2 + 2 to equal to 4', function(){
    expect(main.add(2,2)).toBe(4);
});
```

* toBe :: Can be used with only primitive types
* toEqual :: Can be used with arrays and objects

**Functions**
* *toBe*: Matches the value specified for primitive types
* *toBeNull*: Matches only Null
* *toBeUndefined*: Matches only Undefined
* *toBeDefined*: Matches only defined
* *toBeTruthy*: Matches only if the statement is true
* *toBeFalsy* : Matches only if the statement if false 
* *toEqual* : Matches the value for array and objects
* *toBeGreaterThan* : Greater than
* *toBeLessThan* : Less than
* *toBeLessThanOrEqual*: Less than or equal to
* *toBeGreaterThanOrEqual*: Greater than or equal to
* *toMatch*: Regular Expression
* *toContain*: In array

