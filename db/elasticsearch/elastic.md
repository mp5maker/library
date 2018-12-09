# Elastic Search #
* It can be used both as search engine as well as data store
* It helps the user to improve performance, search quality
* Elastic *nodes* can be set up on a physical or a virtual server 
* Depends on RAM, CPU, and disk space

### Some Features ###
* Powerful Datastore
* Search Engined
* Unstructured Data
* Schema Less
* Real Time Searching
* Smaller Server Requirement
* Fast and Responsive Interface

### Key Points ###
1) Node
2) Index
3) Shard
4) Mapping/Type
5) Document
6) Field

#### Pre Node Start Up ####
1) Configuration is read from the elasticsearch.yml in config folder
2) Node name needs to be set in the configuration file or built random
3) Initializes the modules

#### Comparison ####
ElasticSearch | SQL | MongoDB
------------- | --- | -------
Index (Indices) | Database | Database
Shard | Shard | Shard
Mapping/Type | Table | Collection
Field | Field | Field
Object (JSON Object) | Record (Tuples) | Record (BSON) Object

#### Index ####
It is simple a database

#### Shard ####
It is a horizontal partition of data in database or search engine. Each
shard is held on a separate database server instance, to spread load
***
*Horizontal Partitioning*: splits one or more tables by row
Every record is stored in only a shard
*Primary*: They are part of the primary replica
*Secondary*: They are part of the secondary replica

#### Mapping ####
* The data is grouped into data types called mappings.
* It shows the property type of the object
* *Types* string, long, double, date, byte, shorts, double, boolean, binary, null, ip
* External Mapping needs to be mentioned before the indexing

*Regular JSON*
```json
    {
        "library":  {
            "books": {
                "id": 1,
                "title": "Angels and Demons",
                "author": "Dan Brown",
                "publish_date": "09 2001"
            }
        }
    }
```
*Default Mapping*
```json
    GET /library/books/_mapping 
    Below gives the default mapping by the elastic search 
    {
        "library":  {
            "mappings": {
                "books": {
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "author": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    }
```
*External Mapping*
```json
    GET /library/books/_mapping
    DELETE /library/books

    PUT /library/books/_mapping
        {
        "library":  {
            "mappings": {
                "books": {
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "author": {
                            "type": "date"
                        }
                    }
                }
            }
        }
    }
```
#### ElasticSearch Operations ####
1) Cluster/Index Operation
    *   Active writes are locked, applied to master first then to secondary
    *   Read Opearations are broadcasted to all the nodes
2) Document Operation
    *   Write actions are locked only for the single hit shard
    *   The read operations are balanced on all the shard replicas

#### Concept of Replication ####
* *Green*: Everything is OK
* *Yellow*: Some shards are missing, we can work on our clustur
* *Red*: Primary shard is missing
[Two nodes and a replica: Good rule of thumb]

#### Operation ####
* *Indexing*: Receive a document and store/index/process it in an index
* *Searching*: Action to retrieve data from the server

#### Elastic Search DataTypes ####
Type | Elasticsearch(ES) Type | Description
---- | ---------------------- | -----------
String, Varchar, Text | string | Text Field
Integer | integer | 32 bit
Long | long | 64 bit
Float | float | floating 32 bit
Double | double | floating 64 bit
Boolean | boolean | true, false
Data/Datetime | date | 2013-12-25, 2013-12-25T22:21:20
Bytes/Binary | binary | file/stream of bytes

#### Explicit Directive ####
1) store
    *   Separate Index fragment for fast retrieval
    *   Storing field consumes disk space
2) index 
    * no
        *   Field not indexed at all, not searchable
    * analyzed
        *   Analyzed with configure *analyzer*
    * not_analyzed
        *   By default, *KeywordAnalyzer*
3) null
    * Defines a default value if the field is missing
4) boost
    * Change the importance of the field
5) index_analyzer
    * Defines a analyzer to be used in order to process a field
6) search_analyzer
    * Analyzer used during search
7) include_in_all
    * A field that contains the concatenated text of all the fields
8) index_name
    * Name to be stored in the index
9) norms
    * Better score queries takes more resources

**Simple Example**
```json
    {
        "order": {
            "properties": {
                "id": {
                    "type": "string",
                    "store": "yes",
                    "index": "not_analyzed"
                },
                "date": {
                    "type": "date",
                    "store": "no",
                    "index": "not_analyzed"
                },
                "customer_id": {
                    "type": "string",
                    "store": "yes",
                    "index": "not_analyzed"
                },
                "sent": {
                    "type": "boolean",
                    "store": "no",
                    "index": "not_analyzed"
                },
                "item": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "store": "no",
                            "index": "analyzed"
                        },
                        "quantity": {
                            "type": "integer",
                            "store": "no",
                            "index": "not_analyzed"
                        },
                        "vat": {
                            "type": "double",
                            "store": "no",
                            "index": "not_analyzed"
                        }
                    }
                }
            }
        }
    }
```

#### Specifying a different Analyzer ####
```json
    "name": {
        "type": "string",
        "index": "analyzed",
        "index_analyzer": "standard",
        "search_analyzer": "simple
    }
```
Name | Description
---- | -----------
standard | Divides text into standard tokenizer, normalized tokens, and lowercase tokens, and also removes unwanted tokens
simple | Divides texts and converts them to lowercase
whitespace | Divides texts at spaces
stop | Processes with standard analyzer and then applies custom stopwords
keyword | Consider all words as token
pattern | Divides words using regular expression
snowball | This works as a standard analyzer plus a stemming at the end of processing


#### Tokenizer ####
>Tokenization is the act of breaking up a sequence of strings into pieces such as words, keywords, phrases, symbols and other elements called tokens. Tokens can be individual words, phrases or even whole sentences. In the process of tokenization, some characters like punctuation marks are discarded. The tokens become the input for another process like parsing and text mining.

>Tokenization is used in computer science, where it plays a large part in the process of lexical analysis.

#### Standard Tokenizer ####
> Standard Tokenizer: Provides a grammer based tokenization
```json
    POST _analyze
    {
        "tokenizer": "standard",
        "text": "The 2 QUICK Brown-Foxes jumped over the lazy dog's bone."
    }
```
**Output**
```json
    [ The, 2, QUICK, Brown, Foxes, jumped, over, the, lazy, dog's, bone ]
```

#### Normalized Token ####
> Normalized Tokenizer: Remove insignificant differences between otherwise and identical words
```json
    INPUT: HELLO 
    OUTPUT: hello
    
    INPUT: esta, ésta, and está
    OUTPUT: esta 

    INPUT: déjà vu
    OUTPUT: deja vu
```

### Installing and Configuring ###
1) bin
2) config
3) data
4) lib
5) log
6) search_app

**bin**
Contains all the elastic search executables

**config**
* One for elastic search, one for logging
* yml can be changed to json

**data**
* It contains the actual indexes

**lib**
* It contains all the jar files

**log**
* It is useful for debugging and analysis

### Changing Configuration ###
* Change elasticsearch.yml

```bash
    [elasticsearch.yml]
    path.data: app_data
    path.logs: app_logs
    cluster.name: booksearch
```
* Install Requirements
```bash
    sudo add-apt-repository ppa:webupd8team/java
    sudo apt-get update
    sudo apt-get install oracle-java8-installer
    java -version
    sudo service elasticsearch start
```

### Check localhost ###
http://localhost:9200/

### Data Ingestion ###
1) Text Analyzers
2) Stemming
3) Multi-fields
4) Document Routing
5) Batch Ingestion

**Text Analyzers** ["analyzer": "whitespace"]
* Analyzers: Standard, Simple, Whitespace, Stop, Keyword, Pattern, Snowball

*Whitespace Example*
```json
    GET /library/_analyze?text=Example+teXt&analyzer=whitespace
    PUT /library/books/_mapping
    {
        "properties":  {
            "title": {
                "type": "string",
                "analyzer": "whitespace"
            }
        }
    }
```
**Stemming** ["analyzer": "english"]
* Breaking words down to their base root
* Example: *Interper* will give *Interpreter*, *Interpreting*
* For the time being: *machine* will not result in *machines*

```json
    GET  /library/_search?q=title:machines
    {
        "properties":  {
            "title": {
                "type": "string",
                "analyzer": "english"
            }
        }
    }
```
**Multi-fields**
* Multiple fields with boosts
```json
    GET  /library/_search?q=title:machines
    {
        "properties":  {
            "title": {
                "type": "string",
                "analyzer": "english",
                "fields": {
                    "basic": {
                        "type": "string",
                        "analyer": "standard",
                        "boost": "1.5"
                    }
                }
            }
        }
    }
```

**Document Routing**
* Documents are evenly distributed among all the shards using hash
* Downside: All shards needs to be queried
* Custom routing improves performance
```json
    POST /library/books/1?routing=2
```

**Batch Ingestion**
```json
    POST /library/books/_bulk
    POST /library/_stats
```

**Basic Query Types**
1) Terms, Match, Range, Filters
2) Special Query Types
3) Combining queries

*URL*
_search?q=:web+design&analyzer=english&default_operator=AND&fields=title^5,description

*JSON*
```json
    "simple_query_string": {
        "query": "web design",
        "analyzer": "english",
        "fields": ["title^5", "description"],
        "default_operatory": "AND"
    }
```
**Terms**
* Identical matches of the given term
* Uppercase title won't give the lowercase terms
```json
    GET /library/books/_search
    {
        "query": {
            "term": {
                "title": "JAVA",
            }
        }
    }
```
**Match**
* It uses the same analyzer chain as the field that is being searched
```json
    GET /library/books/_search
    {
        "query": {
            "match": {
                "title": "JAVA",
                "operator": "and"
            }
        }
    }
```

**Multi-Match**
* Allows search multiple fields
```json
    GET /library/books/_search
    {
        "query": {
            "multi_match": {
                "fields": ["title"],
                "operator": "and"
            }
        }
    }
```
**Match Phrase Prefix**
* Just the keywords
```json
    GET /library/books/_search
    {
        "query": {
            "match_phrase_prefix": {
                "title": "Ajax"
            }
        }
    }
```

**Range**
* Greater than/equal to or less than/equal to
```json
    GET /library/books/_search
    {
        "query": {
            "FIELD": {
                "gte": 10,
                "lte": 20
            }
        }
    }
```

**Filters**
* Narrowing down results
* Filters are heavily cached
```json
    GET /library/books/_search
    {
        "query": {
            "FIELD": {
                "gte": 10,
                "lte": 20
            }
        },
        "filter": {
            "range": {
                "price_gbp": {
                    "gt": 30
                }
            }
        }
    }
```

**Specialized Query Types**
*Fuzzy*
* Searching "pithon" will still give "python"
```json
    GET /library/books/_search
    {
        "query": {
            "fuzzy": {
                "title": "pithon"
            }
        }
    }
```
*Common*
* Categorized as low frequency and high frequency
```json
    GET /library/books/_search
   {
       "query": {
           "common": {
               "FIELD": {
                   "query": "",
                   "cutoff_frequency": 0.001
               }
           }
       }
   }
```

*Wildcard*
* java* will give java as well as javascript
```json
    GET /library/books/_search
   {
       "query": {
           "wildcard": {
               "title": "java*"
           }
       }
   }
```
*RegExp*
* Regular Expression
```json
    GET /library/books/_search
   {
       "query": {
           "regexp": {
               "id": "[0-9]"
           }
       }
   }
```

Validate Query
* Validating Query
```json
    GET _validate/query
    {
        "query": {
            "boosting": {
                "positive": [
                    {
                        "term": {
                            "title": {
                                "value": "drupal"
                            }
                        }
                    }
                ],
                "negative": [
                    {
                        "term": {
                            "title": {
                                "value": "flash"
                            }
                        }
                    }
                ],
                "negative_boost": 0.2
            }
        }
    }
```
