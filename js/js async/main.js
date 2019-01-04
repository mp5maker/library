window.onload = function() {
    // Http Request
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
        }
    }
    http.open('GET', 'employee.json', true)
    http.send()

    // Callback Function
    var callbackFunction = (somevalue, cf) => cf(somevalue);
    callbackFunction('photon', function(response) {
        console.log(response);
    })

    // Promise
    var get = (url) => {
        return new Promise((resolve, reject) => {
            var xhttp = new XMLHttpRequest()
            xhttp.open("GET", url, true)
            xhttp.onload = function() {
                if (this.status == 200) {
                    resolve(JSON.parse(this.response))
                } else {
                    reject(this.statusText)
                }
            }
            xhttp.onerror = () => {
                reject(xhttp.statusText)
            }
            xhttp.send();
        })
    }

    var promise = get('employee.json')
    promise.then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })

    // Simple Gemerator
    function* simpleGenerator() {
        let x = yield 'Photon'
        let y = yield 'Samith'
        let z = yield 'Erfan'
        return x + y + z;
    }

    var g = simpleGenerator();
    console.log(g.next())
    console.log(g.next(2))
    console.log(g.next(3))
    console.log(g.next(4))

    // Generator
    genWrap(function*(){
        let employee = yield get('employee.json')
        console.log(employee)
        let post = yield get('post.json')
        console.log(post)
        return;
    })

    function genWrap(generator) {
        let gen = generator()
        function handle(yielded) {
            if (!yielded.done) {
                yielded.value.then(function(data) {
                    return handle(gen.next(data))
                })
            }
        }
        return handle(gen.next());
    }
}