const cafeBody = document.querySelector('.cafe-body');

function renderCafe(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let age = document.createElement('span');
    let salary = document.createElement('span');
    let created_on = document.createElement('span');
    let cancelIcon = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    
    name.textContent = doc.data().name;
    age.textContent = doc.data().age;
    salary.textContent = doc.data().salary;
    created_on.textContent = doc.data().created_on;
    
    cancelIcon.setAttribute('class', 'cancel');

    li.appendChild(name);
    li.appendChild(age);
    li.appendChild(salary);
    li.appendChild(created_on);
    li.appendChild(cancelIcon)

    cafeBody.appendChild(li);

    /**
     * Delete
     */
    cancelIcon.addEventListener('click', (event) => {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        console.log("%c Delete", "background-color: firebrick; color: white");
        db.collection('cafes').doc(id).delete();
    })

}

/**
 * List
 */
console.log("%c List", "background-color: blue; color: white");
db.collection('cafes').get().
    then((response) => {
        // console.log(response);
        // console.log(response.docs);
        const documents = response.docs;
        documents.forEach((doc) => {
            // renderCafe(doc);
            console.log(doc.data());
        })
    })
    .catch((error) => {
        console.log("error");
    })

/**
 * Create
 */
form = document.getElementById('create-cafe');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    console.log("%c Create", "background-color: darkgreen; color: white");
    db.collection('cafes').add({
        name: form.name.value,
        age: form.age.value,
        salary: form.salary.value,
        created_on: form.created_on.value,
    })
});

/**
 * Retrive/Details using Where
 */
db.collection('cafes')
.where('age', '==', 27).get()
.then((response) => {
    console.log("%c Retrieve/Details(where)", "background-color: indigo; color: white");
    response.docs.forEach((doc) => {
        console.log(doc.data())        
    });
})

/**
 * Retrive/Details using Orderby
 */
db.collection('cafes')
.orderBy('name').get()
.then((response) => {
    console.log("%c Retrieve/Details(order by)", "background-color: purple; color: white");
    response.docs.forEach((doc) => {
        console.log(doc.data())        
    });
})

// Real Time Listener
db.collection('cafes').orderBy('age').onSnapshot((reponse) => {
    let changes = reponse.docChanges();
    changes.forEach((change) => {
        if (change.type == 'added') {
            renderCafe(change.doc);
        } else if (change.type == 'remove') {
            let requiredAttribute = '[data-id=' + change.doc.id + ']';
            let li = cafeBody.querySelector(requiredAttribute);
            cafeList.removeChild(li);
        }
    })
})

// Update
db.collection('cafes').doc('NN7shA752HsO6CZhihr2').update({
    name: 'Shahriar Sami'
});