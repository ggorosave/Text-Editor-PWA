const butInstall = document.getElementById('buttonInstall');

// Event handler that triggers `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // stores the triggered events
    window.deferredPrompt = event;

});

// Event handler that triggers on the `butInstall` element
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

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    // Clears prompt
    window.deferredPrompt = null;
});
