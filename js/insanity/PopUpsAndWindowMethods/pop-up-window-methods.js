(function() {
    "use strict";

    window.onload = init;


    /**
     * Window Open (url, name, params)
     * Url: An URl to load into new window
     * Name: Window with unique name
     * Params: width,height,left,top,menubar,toolbar,location,status,status,resizable,scrollbars
     */
    function init() {
        let timeout;

        window.windowOpen = () => {
            clearInterval(timeout);
            window.open('https://sphotonkhan.com');
        }
        window.windowOpenWithDelay = () => {
            clearInterval(timeout);
            timeout = setTimeout(() => {
                window.open('https://sphotonkhan.com');
            }, 2000);
        }
        window.windowOpenWithParams = () => {
            let params = "scrollbars=no,resizable=no,status=no,location=no,menubar=no,width=600,height=300,left=100,top=100";
            window.open('https://sphotonkhan.com', "Photon's Website", params);
        }
        window.windowOpenWithReference = () => {
            let newWindow = open('/', 'example', 'width=300,height=300');
            newWindow.focus();

            newWindow.onload = () => {
                let html = '<div style="font-size:30px">Welcome!</div>';
                newWindow.document.body.insertAdjacentHTML('afterbegin', html);
            }
        }
        window.closePopUp = () => {
            let newWindow = open('/', 'example', 'width=300,height=300');
            newWindow.focus();
            newWindow.onload = () => newWindow.close();
        }
    }
})();