import 'package:http/http.dart';
import 'dart:convert';

void getData() async {
  //  Simulate a network request
  String username = await Future.delayed(Duration(seconds: 3), () => 'Yoshi');

  //  Simulate a network request
  String bio = await Future.delayed(Duration(seconds: 2), () => 'Vegan, musician && egg collector');

  print(username);
  print(bio);
}

void getData() async {
  Response response = await get('https://jsonplaceholder.typicode.com/todos/1');
  Map data = jsonDecode(response.body);
  print(data);
}