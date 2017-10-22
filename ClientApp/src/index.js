let c = 0;

const answerView = (counter, obj) => '<p>Request #' + counter + '</p><p>' + JSON.stringify(obj, null, 4) + '</p>';

const getJsonFromServerAndShowOnPage = () => {
    c++;
    var headers = new Headers({
        'Content-Type': 'text/plain',
        'X-My-Custom-Header': 'CustomValue'
    });
    fetch('api/values', {
        method: 'POST',
        body: JSON.stringify({
            RequestId: Math.ceil(Math.random() * 1000),
            Echo: 'echo string from JS'
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => response.json())
        .then(obj => {
            document.getElementById('response').innerHTML = answerView(c, obj);
        })
        .catch(err => {
            document.getElementById('response').innerHTML = answerView(c, err);
        });
}

const timerCallback = () => {
    getJsonFromServerAndShowOnPage();
    setTimeout(timerCallback, 1000);
};

setTimeout(timerCallback, 1000);