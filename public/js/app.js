
fetch('/data.php')
    .then(response => response.json())
    .then(json => { 
        if (typeof controller !== 'undefined') {
            new controller(json);
        }
    });

/*
if (typeof controller !== 'undefined') {
    new controller();
}
*/
