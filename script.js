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
userAppend(arr);
    // for(let i=0; i<arr.length; i++){
    //   console.log(arr[i].name)
    // }

  //   arr.foreach(user => console.log(user));
  //   for( i=0; i<=obj.userUploads.length; i++ )
  //   {
  //     console.log(obj[i]);
  //   }
  //  console.log(arr);
  })
  .catch(err => console.log(err))
  for(let i=0; i<arr.length; i++){
      console.log(arr[i].name)
    }


console.log(typeof arr);

let userAppend = (array) => 
{
  for(item of array)
  {
  $('body').append(
    `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${item.name}</p>
    <p class="card-text">${item.surname}</p>
    <p class="card-text">${item.location}</p>
    <p class="card-text">${item.type}</p>
    <p class="card-text">${item.photo_url}</p>
    </div>
    </div>
  `)
}
} 

  
  // <div class="card" style="width: 18rem;">
  // <img class="card-img-top" src="..." alt="Card image cap">
  // <div class="card-body">
  // </div>
  // </div>