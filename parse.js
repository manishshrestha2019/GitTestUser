let request = new XMLHttpRequest();
request.open("GET", "studentInfo.json", false);
request.send(null)
let obj = JSON.parse(request.responseText);
//alert (my_JSON_object.result[0]);

// var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
// var obj = JSON.parse(text);
obj.name = eval("(" + obj.age + ")");

document.getElementById("name").innerHTML = obj.name + ", " + obj.name(); 