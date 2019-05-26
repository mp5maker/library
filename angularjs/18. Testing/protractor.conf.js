exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'dist/main-event.spec.js'
    ]
};