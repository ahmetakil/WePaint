connection = connect("46.101.102.147", 4759);

setTimeout(function () {
    connection.onmessage = function (event) {
        var datas = [];
        event.data.split(",").forEach(function(element) {
            datas.push(parseInt(element.replace("\"", "")));
        });

        fill(color(datas[3], datas[4], datas[5]));
        strokeWeight(0);
        ellipse(datas[0], datas[1], datas[2], datas[2]);
        // TODO Never use JavaScript.
    };
}, 2000);


