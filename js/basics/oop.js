window.onload = init

function init() {
    // Array with wrapper {check (length)property and (_proto_) property method}
    var names = ['Photon', 'Erfan', 'Samith']
    console.log(names)

    // Window with wrapper {check properties}
    console.log(window)

    // String with wrapper {check (length)property and (_proto_) property method}
    var name2 = new String('photon')
    console.log(name2)

    // Object Literal
    var userOne = {
        email: "ryu@ninjas.com",
        name: 'Ryu',
        get(props) {
            return this[props];
        }
    }
    console.log(userOne.get('email'))

    // Updating Property
    userOne.name = "Ryu Mastadon"
    console.log(userOne.get('name'))

    // Multiple Objects of the same type | Sugar Coat
    class UserClass {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        get(props) {
            return this[props];
        }

        setName(name) {
            this.name = name;
            return this;
        }

        setEmail(email) {
            this.email = email;
            return this;
        }
    }

    userTwo = new UserClass("Samith", "zaman@yahoo.com");
    console.log(userTwo.get('name'));
    console.log(userTwo.email);

    // Method Chaining
    userTwo.setName('Samith Zaman').setEmail("samith@hotmail.com");
    console.log(userTwo)

    // Inheritance | Sugar Coat
    class AdminClass extends UserClass {
        deleteUser(user) {
            users = users.filter( (u) => {
                return u.email != user.email;
            })
        }
    }
    var admin = new AdminClass('photon', 'photon@gmail.com')
    var users = [userOne, userTwo]
    console.log(users)
    admin.deleteUser(userOne)
    console.log(users)

    // Javascript Prototype Model
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.get = (props) => {
            return this[props]
        }
    }

    // Javascript Prototype Model (__proto__ property ==> method)
    // {Only the class will have it}
    User.prototype.setName = function (name) {
        this.name = name
    }
    User.prototype.setEmail = function (email) {
        this.email = email
    }

    var userThree = new User('Shahriar Sami', 'shahriar@inter.com')
    console.log(userThree.get('name'))
    userThree.setName('Damn Son')
    // console.log(userThree)

    // Extending Javascript Prototype Model | Prototype Chain
    function Admin(...args) {
        console.log(args)
        User.apply(this, args)
        this.message = function() {
            console.log("Bro I am the admin")
        }
    }
    Admin.prototype = Object.create(User.prototype)
    Admin.prototype.holla = function() {
        console.log("I said holla")
    }

    var admin = new Admin('Photon Khan', "khan.photon@gmail.com")
    console.log(admin.setName("Shabuktagin Photon Khan"))
    console.log(admin)
    console.log(admin.holla())
}