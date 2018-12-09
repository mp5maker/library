### Firebase ###

**Website**
> https://firebase.google.com
> Go to Console
> Create a project **firebase-basics**
> Location
> Create the project 

**Focused on Database**
> Cloud Firestore Beta
> Start in test mode

**Add new collection**
> ADD Collection
> Cafes
> Add Fields

**Create a Table Cafes**
> name --> string -->
> age --> number -->
> salary --> number -->
> created_on --> timestamp -->

**Preparation for the frontent**
> Project Overview
> Add Firebase to your webapp

**Importing the library**

    <!-- <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script> -->
    <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase-firestore.js"></script>

**Initializing**

    const db = firebase.firestore();

**Removing console.log error**

    db.settings({timeStampsInSnapshots: true});

**List**

    db.collection('cafes').get().
        then((response) => {
            console.log(response);
            console.log(response.docs);
            const documents = response.docs;
            documents.forEach((doc) => {
                console.log(doc.data());
            })
        })
        .catch((error) => {
            console.log("error");
        })    