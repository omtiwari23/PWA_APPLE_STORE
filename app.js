if('serviceWorker' in Navigator){
    navigator.serviceWorker.register("/sw.js")
    .then((reg) => console.log('service worker is register',reg))
    .catch((reg) => console.log('service worker is not register',err));
}