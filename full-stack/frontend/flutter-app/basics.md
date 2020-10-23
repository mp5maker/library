```typescript
void main() {
  int age = 30;
  String name = "chun-li";
  bool isNight = false;
  dynamic occupation = "great";
  User userOne = User('John', 27);
  SuperUser userTwo = SuperUser('Yoshi', 20);

  String greet = greeting();
  String goodNight = arrowGoodNight();

  List<String> names = ["chun-li", "yoshi", "mario"];
  names.add('luigi');
  names.remove('yoshi');

  print(age);
  print(name);
  print(isNight);
  print(occupation);
  print(greet);
  print(goodNight);
  print(names);
  print(userOne.age);
  print(userTwo.username);
  userTwo.publish();
}


String greeting() {
  return "Good Morning";
}

String arrowGoodNight() => "Good Night";

class User {
  String username;
  int age;

  User(String username, int age) {
    this.username = username;
    this.age = age;
  }

  void login() {
    print("User Logged In");
  }
}

class SuperUser extends User {

  SuperUser(String username, int age): super(username, age);

  void publish() {
    print("published update");
  }
}


```
