(function() {
    "use strict";

    window.onload = init;

    function init() {
        const DB_NAME = "test-database";
        const DB_VERSION = 1;

        if (window.indexedDB) {
            let db;
            let usersObjectStore, todosObjectStore, postsObjectStore, photosObjectStore, commentsObjectStore, albumsObjectStore;

            let request = window.indexedDB.open(DB_NAME, DB_VERSION);
            request.onsuccess = (event) => db = event.target.result;
            request.onerror = (event) => console.log(event.target.errorCode);
            request.onupgradeneeded = (event) => {
                db = event.target.result;

                // User
                usersObjectStore = db.createObjectStore("users", { keyPath: "id" })
                usersObjectStore.createIndex("email", "email", { unique: true });

                // Todos
                todosObjectStore = db.createObjectStore("todos", { keyPath: "id" })
                todosObjectStore.createIndex("title", "title", { unique: false });
                todosObjectStore.createIndex("id", "id", { unique: true });

                // Posts
                postsObjectStore = db.createObjectStore("posts", { keyPath: "id" })
                postsObjectStore.createIndex("body", "body", { unique: false })

                // Photos
                photosObjectStore = db.createObjectStore("photos", { keyPath: "id" })
                photosObjectStore.createIndex("url", "url", { unique: false})

                // Comments
                commentsObjectStore = db.createObjectStore("comments", { keyPath: "id" })
                commentsObjectStore.createIndex("body", "body", { unique: false })

                // Albums
                albumsObjectStore = db.createObjectStore("albums", { keyPath: "id" })
                albumsObjectStore.createIndex("id", "id", { unique: true })
            }
        }

        if (!window.indexedDB) {
            console.log('Browser do not support Indexed DB')
        }

        fetch('./db.json').then((response) => response.text()).then((textData) => {
            let data = JSON.parse(textData);
            const { users, todos, posts, photos, comments, albums } = data;
            let request = window.indexedDB.open(DB_NAME, DB_VERSION);

            request.onsuccess = (event) => {
                let db = event.target.result;

                const addApi = (dataList, tableName) => {
                    let transaction = db.transaction([tableName], "readwrite");
                    let objectStore = transaction.objectStore(tableName);
                    dataList.forEach((data) => objectStore.add(data))
                }

                addApi(users, 'users')
                addApi(todos, 'todos')
                addApi(todos, 'todos')
                addApi(posts, 'posts')
                addApi(photos, 'photos')
                addApi(comments, 'comments')
                addApi(albums, 'albums')
            }
            request.onerror = (event) => console.log(event.target.errorCode);
        })

        if (window.indexedDB) {
            let request = window.indexedDB.open(DB_NAME, DB_VERSION);

            request.onsuccess = (event) => {
                // Newest First
                let getUsers = new Promise((resolve, reject) => {
                    let users = [];
                    let db = event.target.result;
                    let objectStore = db.transaction('users', "readwrite").objectStore("users");
                    let objectStoreOpenCursor = objectStore.openCursor(null, "prev")
                    objectStoreOpenCursor.onsuccess = (event) => {
                        let cursor = event.target.result;
                        if (cursor) {
                            users.push(cursor.value)
                            cursor.continue();
                        }
                        if (!cursor) {
                            resolve(users);
                        }
                    }
                })

                // Promise
                getUsers.then((data) => console.log(data))

                // Get ObjectStore
                let db = event.target.result;
                let objectStore = db.transaction("users").objectStore("users");

                // Retreive
                objectStore.get(3).onsuccess = (event) => console.log(event.target.result);

                // Get All
                objectStore.getAll().onsuccess = (event) => {
                    console.log(event.target.result)
                };

                // Index
                let getTodos = (type) => new Promise((resolve, reject) => {
                    let todos = [];
                    let db = event.target.result;
                    let objectStore = db.transaction("todos").objectStore("todos");
                    let index = objectStore.index(type)
                    index.openCursor().onsuccess = (event) => {
                        let cursor = event.target.result;
                        if (cursor) {
                            todos.push(cursor.value)
                            cursor.continue();
                        }
                        if (!cursor) {
                            resolve(todos);
                        }
                    }
                })

                // Promise
                getTodos("title").then((data) => console.log(data))
                getTodos("id").then((data) => console.log(data))
            }
        }
    }
})();