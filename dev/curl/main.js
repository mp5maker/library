fetch(' http://localhost:3000/comments/')
    .then(response => response.json())
    .then(json => console.log(json))