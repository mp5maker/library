window.onload = init;

function init() {
    // Service Worker
    var supportDisplay = document.getElementById('service-worker-support');
    var registrationDisplay = document.getElementById('service-worker-registration');
    var supported = "Is Supported";
    var notSupported = "Is not supported in your version of browser";

    // Check whether the browser supports service worker or not
    if (navigator.serviceWorker) {
        supportDisplay.innerHTML = supported;
        // Service Worker Registration
        navigator.serviceWorker.register('serviceworker.js')
        .then((registration) => {
            if (registration) {
                registrationDisplay.innerHTML = "Registered"
            }
        }).catch((error) => {
            registrationDisplay.innerHTMNL = error;
        })
    } else {
        supportDisplay.innerHTML = notSupported;
    }

    // Check indexedDb is supported or not
    var indexedDBDisplay = document.getElementById('indexed-db-support');
    var indexDBSupported = "Is Supported";
    var indexDBNotSupported = "Is not Supported";

    // Creating Employee Data
    const employeeData = [
        { "id": 1, "name": "Shabuktagin Photon Khan" },
        { "id": 2, "name": "Shahriar Sami" },
        { "id": 3, "name": "Samith Zaman" },
        { "id": 4, "name": "Erfan Mahmud" },
    ];

    // Indexed DB is supported or not
    if (window.indexedDB) {
        indexedDBDisplay.innerHTML = indexDBSupported;
        console.log("IndexedDB: " + indexDBSupported);
        
        /**
         * Creating the database
         */
        const dbPromise = idb.open('TestDatabase', 1, (upgradeDb) => {
            console.log("Making a new object store");
            if (!upgradeDb.objectStoreNames.contains('employee')) {
                // Create Table
                let employeeTable = upgradeDb.createObjectStore('employee', { autoIncrement: true });
            }
        });

        /**
         * Create Data
         */
        var createData = (data) => {
            // Access the Table
            dbPromise.then((db) => {
                let transaction = db.transaction('employee', 'readwrite');
                let employee = transaction.objectStore('employee');
                employee.add(data);
                return transaction.complete;
            }).then(() => {
                console.log("Added person in the employee table");
            })
        }

        /**
         * Read All Data
         */
        var readAllData = () => {
            // Access the Table
            dbPromise.then((db) => {
                let transaction = db.transaction('employee', 'readonly');
                let employee = transaction.objectStore('employee');
                return employee.getAll();
            }).then((items) => {
                console.log("Fetching all the data")
                console.log(items);
            })
        }

        /**
         * Read Specific Data
         * @param {int} id 
         */
        var readSpecificData = (id) => {
            // Access the table
            dbPromise.then((db) => {
                let transaction = db.transaction('employee', 'readonly');
                let employee = transaction.objectStore('employee');
                return employee.get(id);
            }).then(() => {
                console.log("Fetching specific data");
            })
        }

        /**
         * Update Data
         * @param {int} id
         * @param {object} data 
         */
        var updateData = (id, data) => {
            // Access the table
            dbPromise.then((db) => {
                let transaction = db.transaction('employee', 'readwrite');
                let employee = transaction.objectStore('employee');
                employee.put(data, id);
                return transaction.complete;
            }).then(() => {
                console.log("Updating person in the employee table");
            });
        }

        /**
         * Delete Data
         * @param {int} id
         */
        var deleteData = (id) => {
            // Access the table
            dbPromise.then((db) => {
                let transaction = db.transaction('employee', 'readwrite');
                let employee = transaction.objectStore('employee');
                employee.delete(id);
                return transaction.complete;
            }).then(() => {
                console.log("Person Deleted");
            })
        }
    } else {
        dbPromise = null;
        indexedDBDisplay.innerHTML = indexDBNotSupported;
    }

    // Create Button
    document.getElementById('create').addEventListener('click', () => {
        _.each(employeeData, (value) => {
            createData(value);
        })
    });

    // Read Button
    document.getElementById('read').addEventListener('click', () => {
        readAllData();
        let employeeInformation = document.getElementById('employee-information');
        var creatingDataLoop = "";
        _.each(employeeData, (value) => {
            creatingDataLoop += `<p>${value.name}<p>`; 
        });
        employeeInformation.innerHTML = creatingDataLoop;
    });

    // Update Button
    document.getElementById('update').addEventListener('click', () => {
        let id = 3;
        let data = {
            id: 3,
            name: "Rizwan Mannan"
        }
        updateData(id, data);
    });

    // Delete Button
    document.getElementById('delete').addEventListener('click', () => {
        let id = 4;
        deleteData(id);
    });

    readSpecificData(4);
}