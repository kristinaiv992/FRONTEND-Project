let myData = 'https://raw.githubusercontent.com/kristinaiv992/FRONTEND-Project/master/mydata.json';


//fetch data from github
var obj;

fetch('https://raw.githubusercontent.com/kristinaiv992/FRONTEND-Project/master/mydata.json')
  .then(res => res.json())
  .then(data => {

    obj = data;
    let arr =[]
    arr = obj.userUploads.foreach(user => console.log(user)
    console.log(arr);
  })
    
 



 