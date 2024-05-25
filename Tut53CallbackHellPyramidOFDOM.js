const loadScript = (src, callback) => {
    let script = document.createElement('script');
    script.src = src;

    document.body.appendChild(script);
    console.time('lola')
    script.onload = () => {
        console.log("loaded script with src: " + src)
        callback(null, src);
    }
    console.timeEnd('lola');
    script.onerror = () => {
        callback(new Error("Failed to load the script"));
    }
}
const hello = (err, src) => {
    if (err) {
        console.log(err);
    }
    console.log(`Script loaded ${src}`)
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', goodmorning = (err, src) => {
    if (err) {
        console.log(err);
        sendEmergencyMessageToCEO();
    }
    loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap2.bundle.min.js', goodmorning = (err, src) => {
        if (err) {
            console.log(err);
            sendEmergencyMessageToCEO();
        }
        loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap3.bundle.min.js', goodmorning = (err, src) => {
            if (err) {
                console.log(err);
                sendEmergencyMessageToCEO();
            }
            loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap4.bundle.min.js',goodmorning);
        });
    });
});

 


