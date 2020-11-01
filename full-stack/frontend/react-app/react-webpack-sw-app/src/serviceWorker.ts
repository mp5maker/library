interface BeforeInstallPromptEvent extends Event {
    readonly platforms?: Array<string>;
    readonly userChoice?: Promise<{
        outcome: 'accepted' | 'dismissed',
        platform: string
    }>;
    prompt(): Promise<void>;
}

export function addToHomeScreen() {
    let deferredPrompt: BeforeInstallPromptEvent | null;
    const addButton: HTMLElement | null = document.querySelector('.add-button');
    if (addButton) addButton.style.display = "none"

    window.addEventListener('beforeinstallprompt', (event: BeforeInstallPromptEvent) => {
        event.preventDefault();
        deferredPrompt = event
        if (addButton) {
            console.log("addToHomeScreen -> addButton", addButton)
            addButton.style.display = "block"
            addButton.addEventListener("click", (event) => {
                addButton.style.display = "none"
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice?.then((choiceResult) => {
                        if (choiceResult.outcome == 'accepted') console.log('Accepted')
                        else console.log('Declined')
                        deferredPrompt = null;
                    })
                }
            })
        }
    })
}

export function register() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("/sw.js")
                .then((registration) =>
                    console.log("SW registered: ", registration)
                )
                .catch((registrationError) =>
                    console.log("SW registration failed: ", registrationError)
                );
        });
    }
}

export function unregister() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => registration.unregister())
            .catch((error) => console.error(error.message));
    }
}
