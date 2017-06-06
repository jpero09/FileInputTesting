(function () {

    $("input:radio").change(readFile);
    $("#fileInput").change(readFile);

    function readFile(){
        // Clear anything that's already there:
        $("#results").text("");

        // Get our new data:
        var file = document.getElementById('fileInput').files[0];
        if(!file) {
            return;
        }
        var readType = $("input:radio[name='readType']:checked").val();
        var reader = new FileReader();

        reader.onload = function (event) {
            var formatType = $("input:radio[name='formatType']:checked").val();
            var rawData = event.target.result;
            var payload;

            if(formatType === "-1"){
                payload = rawData;
            }
            else if(formatType === "arrayBuffer"){
                payload = String.fromCharCode.apply(null, new Uint16Array(rawData));
            }
            else{
                payload = rawData.toString(formatType);
            }

            $("#results").text(payload);
        };

        // Start loading:
        if(readType === "readAsText"){
            reader.readAsText(file);
        }
        else if(readType === "readAsDataURL"){
            reader.readAsDataURL(file);
        }
        else if(readType === "readAsArrayBuffer"){
            reader.readAsArrayBuffer(file);
        }
        else if(readType === "readAsBinaryString"){
            reader.readAsBinaryString(file);
        }
        else{
            $("#results").text("ERROR");
        }
    }

})();