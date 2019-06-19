const express=require ('express')
const app=express()
const port =3000

app.get('/',(req,res)=>res.send('Hello World'))
app.listen(port,()=>console.log(`example app listening`))

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("id").innerHTML = myObj.studentId;
    document.getElementById("name").innerHTML = myObj.name;
    document.getElementById("address").innerHTML = myObj.address;
    document.getElementById("contact").innerHTML = myObj.contact;
    
    

  }
};
xmlhttp.open("GET", "studentInfo.json", true);
xmlhttp.send();