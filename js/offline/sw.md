### Lifecycle of service worker ###

    register the service worker (sw.js)
        install event
            cache the files
    service worker becomes active
        active event
    service worker 'listens' for events
        it can intercept http request, all the fetch requests


    Refreshing the page
        It installs again if the service worker file is changed
    register the service worker(sw.js)
    service worker 'listens' for events

    Refresh the change with changed service worker file
    Previous service worker it still working
    unless all the older verision of the browser tabs are closed
    Therefore the new service worker gets stuck in the install event

    Service worker should always be in the root of the folder