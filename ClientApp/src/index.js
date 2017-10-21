let c = 0;

const answerView = (counter, obj) => '<p>Request #' + counter + '</p><p>' + JSON.stringify(obj, null, 4) + '</p>';

const getJsonFromServerAndShowOnPage = () => {
    c++;
    fetch('api/values')
        .then(response => response.json())
        .then(obj => {
            document.getElementById('response').innerHTML = answerView(c, obj);
        }).catch(err => {
            document.getElementById('response').innerHTML = answerView(c, err);
        });
}

const timerCallback = () => {
    getJsonFromServerAndShowOnPage();
    setTimeout(timerCallback, 1000);
};

setTimeout(timerCallback, 1000);