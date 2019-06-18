let myData = 'https://raw.githubusercontent.com/kristinaiv992/FRONTEND-Project/master/mydata.json';


//fetch data from github
var obj;
//debugger;
let arr =[];
fetch('https://raw.githubusercontent.com/kristinaiv992/FRONTEND-Project/master/mydata.json')
  .then(res => res.json())
  .then(data => {
console.log(data)
    obj = data;
    arr =[...obj.userUploads];
    //arr = obj.userUploads.foreach(user => console.log(user));
    // for( i=0; i<=obj.userUploads.length; i++ )
    // {
    //   console.log(obj[i]);
    // }
   // console.log(arr);
  })
  .catch(err => console.log(err))

  for(let i=0; i<arr.length; i++){
    console.log(arr[i].name)
  }

console.log(arr)
console.log(obj)

 