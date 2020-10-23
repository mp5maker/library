import 'package:flutter/material.dart';
import '../quote.dart';

class QuoteCard extends StatelessWidget {
  final Quote quote;
  final Function delete;

  QuoteCard({ this.quote, this.delete });

  @override
  Widget build(BuildContext context) {
    return Card(
        margin: EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 0),
        child: Padding(
          padding: EdgeInsets.all(12.0),
          child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                    quote.text,
                    style: TextStyle(
                        fontSize: 18.0,
                        color: Colors.grey[600]
                    )
                ),
                SizedBox(height: 6.0),
                Text(
                    quote.author,
                    style: TextStyle(
                        fontSize: 14.0,
                        color: Colors.grey[800]
                    )
                ),
                FlatButton.icon(
                  onPressed: delete,
                  label: Text('Delete Quote'),
                  icon: Icon(Icons.delete)
                )
              ]
          ),
        )
    );
  }
}
