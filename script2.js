document.getElementById('switchButton').addEventListener('click', function() {
    var themeStylesheet = document.getElementById('themeStylesheet');
    if (themeStylesheet.getAttribute('href') === 'styles.css') {
        themeStylesheet.setAttribute('href', 'styles2.css');
    } else {
        themeStylesheet.setAttribute('href', 'styles.css');
    }
});
