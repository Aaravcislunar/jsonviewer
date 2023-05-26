$(document).ready(function () {
    $('#submit').on('click', function () {
        var jsonData = document.getElementById('jsoncode').value;
        console.log(jsonData);
        function testJSON(text) {
            try {
                JSON.parse(text);
                return true;
            }
            catch (e) {
             
                return false;
            }
        };
        ;
        if(testJSON(jsonData)){
            $('#json-renderer').jsonViewer(JSON.parse(jsonData), { collapsed: true,
                withQuotes: false, withLinks: false });
        }
        else{
            $('#json-renderer').text('Invalid JSON');
        }
    });
});