console.log("Hello");
console.error("This is an error");
console.warn("This is a warning");
console.dir(document);
console.log(`URL: ${document.URL}`);
console.table({name: "Photon Khan", age: "27", salary: "26000"});
console.table([{name: "Photon Khan", age: "27", salary: "26000"}]);
// console.clear();
console.group('Names');
    console.log("John");
    console.log("Mary");
    console.log("Will");
    console.log("Daniel");
console.groupEnd('Names');

console.time('For Loop');
    for(var i = 0; i < 3; i++) {
        console.log(i);
    }
console.timeEnd('For Loop');

function greaterThan(x, y) {
    console.assert(x > y, {message: "X is not supposed to be greater than y", "x": x, "y": y});
}
greaterThan(4, 5);

document.getElementById('ajax-request').addEventListener('click', getUsers);
function getUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'random.txt', true);
    xhr.onload = function() {
        if(this.status == 200 && this.readyState == 4) {
            document.getElementById('ajax-display').innerHTML = this.responseText;
        }
    }
    xhr.send();
}  

localStorage.setItem('name', 'John');
// localStorage.clear('name');

sessionStorage.setItem('age', '27');
// sessionStorage.clear('age');

document.cookie = "username=John Doe";
document.cookie.clear();