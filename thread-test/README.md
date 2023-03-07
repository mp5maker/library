# Jmeter

* Usually use jmeter for the thread test
* Postman and insomnia also has plugins for thread test (which will be looked later)

---

## What does it do

It has three main functionalities
* Performance Test
* Load Test
* Stress Test


### Performance Test
* Some expectations is set and by configuration
* Then we look into the output based on that

### Load Test
* Check how much load can an api or a server can take
* This is applicable for both frontend and backend
* However, we will solely focus on the backend

### Stress Test
* Break the systen with overwhelming resources

---

## How it works
1. Group of users are selected
2. Then an api or a server is target to make the api calls
3. Then the results are saved in the app
4. Using those results we can have statistical data (tables, graphs)

---

## How do we make a thread test
* Create a test plan
* Create a thread group
* Add a sampler (http request)
* Add a listener (Type of report, visualize data)
* Run the test


--

## Reporting (Listeners)

Elements that gathers information about the performance test
used to view results/metrics of the test

* View Results in Table
* View Results Tree
* Aggregate Report
* Graph Results
* Summary Report
* Simple Data Writer

For performance test we shouldn't any listeners listener
as it slow down the actual performance.


## Terms

> Latency
Time for first byte

> Connect Time
Time it took to connect to the server


## Assertions

Checks of the request/response

1. Response Assertion
2. Duration Assertion
3. Size Assertion
4. HTML Assertion
5. XML JSON Assertion
6. XPATH Assertion

---

## Test Script Recorder

Instead of manually typing down all the apis
we can just record and add the api in that manner

1. Add Http(s) Test Script Recorder
2. Thread Group with Recording Controller
3. Add Proxy through Chrome settings
4. Add Certificate through Chrome

### Generate Apache JmeterTemporaryRootCA.crt
As of `jmeter 5.5`
By default <br/>
`ApacheJMeterTemporaryRootCA.crt` is not generated in the libexec <br/>

# Generate `ApacheJMeterTemporaryRootCA.crt`

**TLDR**
 * Add Https Test Script Recorder
 * Add Thread Group
 * Add Recording Controller
 * Run the Http Test Script Recording
 * This will generate `ApacheJMeterTemporaryRootCA.crt`

**Short Form**
 * RC --> Right Click


### Steps
 * Test Plan -> RC -> Non Test Elements -> HTTP(S) Test Script Recorder
 * Test Plan -> RC -> Threads -> Thread Group
 * Thread Group -> RC -> Logic Controller -> Recording Controller
 * HTTP Test Script Recorder -> Click -> Test Plan Creation -> Choose your target controller
 * Click on start

### Confirmation
```bash
which jmeter # /opt/homebrew/bin/jmeter
cd ~/
cd /opt/homebrew/bin/jmeter
cd [jmeter-version]/libexec/bin
```

### Use Templates
* Recording
* Recording with think time


## Blazemeter

Steps
1. Create a blazemeter account
2. Get blazemeter extension
3. Record Test
4. Save as JMX
5. Add JMX in Jmeter and run
