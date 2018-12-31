window.onload = function() {
    // Constant
    console.log("%c Constant", "background-color: firebrick; color: white");
    const PI = 3.142
    function piInsideTheFunction() {
        const PI = 10
        console.log("Inside Function: " + PI)
    }
    console.log("Global: " + PI)
    piInsideTheFunction()
    
    // Let [Lexical Scope]
    console.log("%c Let", "background-color: indigo; color: white");
    let x = 5
    function letInsideFunction() {
        let x = 10
        console.log("Inside Function: " + x)
    }
    if (x == 5) {
        let x = 10;
        console.log("Inside If Statement: " + x)
    }
    for(let x = 0; x < 5; x++) {
        console.log("Inside Loop: " + x)
    }
    console.log("Global: " + x)
    letInsideFunction()

    // Spread Operator
    console.log("%c Spread Operator", "background-color: blue; color: white");
    var names = ['Samith', 'Photon', 'Erfan']
    console.log(...names)
    
    var newNames = [...names, 'Towhid', 'Abdullah']
    console.log(newNames)
    
    var numbers = [3, 4, 6]
    function addNumbers(num1, num2, num3) {
        return num1 + num2 + num3
    }
    console.log(addNumbers(...numbers))
    
    // Template Strings
    console.log("%c Template String", "background-color: violet; color: white");
    var many = 5;
    console.log(`I cook ${many} days in a week`);
    var quote = `
    I can sleep all day I want
    but I can't move!
    `
    console.log(quote)
    
    // Object Literals Enhancements
    console.log("%c Object Literals Enhancements", "background-color: purple; color: white");
    name = "Shabuktagin Photon Khan"
    age = 25
    salary = 25000
    
    var employee = {
        name,
        age,
        salary,
        oneline() {
            return `${name}-${age}-years old has a salary of ${salary} per month`
        }
    }
    console.log(employee.name)
    console.log(employee.age)
    console.log(employee.salary)
    console.log(employee.oneline())

    // New String Methods
    console.log("%c New String Methods", "background-color: black; color: white");
    /**
     * repeat
     * startsWith
     * endsWith
     * includes
     */
    var yum = "Yum"
    console.log(yum.repeat(5))
    console.log(yum.startsWith('m'))
    console.log(yum.endsWith('m'))
    console.log(yum.includes('um'))
    
    // Fat Arrows
    console.log("%c Fat Arrows", "background-color: grey; color: white");
    var iAmAFatArrow = () => {
        console.log("Fat Arrow Function")
    }
    iAmAFatArrow();
    
    var area = (base, height) => {
        return 0.5 * base * height
    }
    
    var rectangle = (width, height) => {
        return width * height;
    } 
    
    var onelineFatArrow = (area, rectangle) => area(2, 2) + rectangle(2, 2) 
    console.log(onelineFatArrow(area, rectangle))
    
    var ninja = {
        name: "Ryu",
        chop(x) {
            window.setInterval(() => {
                if (x > 0) {
                    console.log(this.name + " chopped the enemy")
                }
                x--;
            }, 1000)
        }
    }
    ninja.chop(1)

    // Sets
    console.log("%c Sets", "background-color: brown; color: white");
    var employees = ["Mark", "Henry", "John", "Doe", "Smith"];
    var employeeSets = new Set();
    employeeSets.add('Shaun').add('Ryu').add("Emily").add('Ryu')
    console.log(employeeSets)
    
    console.log(employeeSets.size)
    console.log(employeeSets.delete('Emily'))
    console.log(employeeSets)
    
    
    console.log(employeeSets.has('Ryu'))
    console.log(employeeSets)
    
    employeeSets.clear()
    console.log(employeeSets)
    
    console.log(new Set(employees))
    
    // Generators [Acts like a iterator]
    console.log("%c Generatos", "background-color: green; color: white");
    function* generator() {
        var pear  = yield "pear"
        var banana = yield "banana"
        var apple = yield "apple"
        return pear + banana + apple
    }

    console.log(generator())
    var myGenerator = generator();
    console.log(myGenerator.next());
    console.log(myGenerator.next(2));
    console.log(myGenerator.next(3));
    console.log(myGenerator.next(4));
}