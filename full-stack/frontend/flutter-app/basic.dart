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
      body: Center(
        child: IconButton(
            onPressed: () {
              print('You clicked icon me');
            },
            icon: Icon(
                Icons.mail
            ),
            color: Colors.red[200]
        )
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
