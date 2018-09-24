# GraphQL #
1) Rest API
2) JSON

#### What is GraphQL ####
1) Application layer query language
2) Open sourced by Facebook in 2015
3) Can be used with any type of database
4) Ability to ask for exactly what we need and nothing more
5) Get multiple resources in a single request

**Simple GraphQL Code**
```json
    {
        user(id:"100") {
            name,
            email,
            posts{
                title
            }
        }
    }
```

6. GraphQl APIS are organized in terms of types and fields
7. GraphiQL Tool
    * Graphical Interactiv GraphQl IDE
    * Runs in the browser
    * Syntax Highlighting
    * Error Reporting 
    * Autmation & Hinting
8. Python, PHP and Javascript 