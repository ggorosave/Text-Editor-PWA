const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // stores the triggered events
    window.deferredPrompt = event;

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // shows prompt
    promptEvent.prompt();

    // resets the deferred prompt variable
    window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    // Clears prompt
    window.deferredPrompt = null;
});
