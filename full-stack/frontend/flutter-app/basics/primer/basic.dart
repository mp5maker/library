import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Home(),
  ));
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My first app'),
        centerTitle: true,
        backgroundColor: Colors.red[600],
      ),
      body: Row(
        children: [
          Expanded(
            flex: 3,
            child: Image.asset('assets/space-2.jpg'),
          ),
          Expanded(
            flex: 1,
            child: Container(
              padding: EdgeInsets.all(30.0),
              color: Colors.cyan,
              child: Text('1')
            ),
          ),
          Expanded(
            flex: 2,
            child: Container(
                padding: EdgeInsets.all(30.0),
                color: Colors.pinkAccent,
                child: Text('2')
            ),
          ),
          Expanded(
            flex: 1,
            child: Container(
                padding: EdgeInsets.all(30.0),
                color: Colors.amber,
                child: Text('3')
            ),
          ),
        ]
      ),
      // body: Column(
      //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      //   crossAxisAlignment: CrossAxisAlignment.stretch,
      //   children: [
      //       Container(
      //         padding: EdgeInsets.all(20.0),
      //         color: Colors.cyan[500],
      //         child: Text('one'),
      //       ),
      //       Container(
      //         padding: EdgeInsets.all(30.0),
      //         color: Colors.pinkAccent,
      //         child: Text('one'),
      //       ),
      //       Container(
      //         padding: EdgeInsets.all(40.0),
      //         color: Colors.amber[500],
      //         child: Text('one'),
      //       ),
      //   ],
      // ),
      // body: Row(
      //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      //   crossAxisAlignment: CrossAxisAlignment.center,
      //   children: <Widget>[
      //     Text('Hello World'),
      //     FlatButton(
      //       onPressed: () {},
      //       color: Colors.amber,
      //       child: Text('Click me')
      //     ),
      //     Container(
      //       color: Colors.cyan,
      //       padding: EdgeInsets.all(30.0),
      //       child: Text('Inside container')
      //     )
      //   ],
      // ),
      // body: Padding(
      //   padding: EdgeInsets.all(50.0),
      //   child: Text('hello'),
      // ),
      // body: Container(
      //   padding: EdgeInsets.all(20.0),
      //   // padding: EdgeInsets.symmetric(horizontal: 30.0, vertical: 10.0),
      //   // padding: EdgeInsets.fromLTRB(5, 20, 25, 5),
      //   margin: EdgeInsets.all(20.0),
      //   color: Colors.grey[400],
      //   child: Text('hello'),
      // ),
      // body: Center(
      //   child: IconButton(
      //       onPressed: () {
      //         print('You clicked icon me');
      //       },
      //       icon: Icon(
      //           Icons.mail
      //       ),
      //       color: Colors.red[200]
      //   )
        // child: RaisedButton.icon(
        //     onPressed: () {
        //       print('You clicked me');
        //     },
        //     icon: Icon(
        //       Icons.mail
        //     ),
        //     label: Text('mail me'),
        //     color: Colors.lightBlue[200]
        // )
        // child: FlatButton(
        //   onPressed: () {
        //     print('You clicked me');
        //   },
        //   child: Text('Hello'),
        //   color: Colors.lightBlue[200]
        // )
        // child: RaisedButton(
        //   onPressed: () {},
        //   child: Text('Hello'),
        //   color: Colors.lightBlue[200]
        // )
        // child: Icon(
        //   Icons.airport_shuttle,
        //   color: Colors.lightBlue,
        //   size: 50.0,
        // )
        // child: Image.asset('assets/space-3.jpg'),
        // child: Image(
        //   // image: NetworkImage('https://source.unsplash.com/random'),
        //   image: AssetImage('assets/space-2.jpg')
        // ),
        // child: Text(
        //     'Hello and hi',
        //     style: TextStyle(
        //         fontSize: 20.0,
        //         fontWeight: FontWeight.bold,
        //         letterSpacing: 2.0,
        //         color: Colors.grey[600],
        //         fontFamily: 'IndieFlower'
        //     )
        // ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Text('click'),
      ),
    );
  }
}
