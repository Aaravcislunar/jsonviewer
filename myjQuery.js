
$(document).ready(function () {
    $('#submit').on('click', function () {
        var jsonData = JSON.parse(document.getElementById('jsoncode').value);
        $('#json-renderer').jsonViewer(jsonData, { collapsed: true, withQuotes: false, withLinks: false });
    });

});



