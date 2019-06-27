//fetch data from github
var obj;
//debugger;
let arr =[];
fetch('https://raw.githubusercontent.com/kristinaiv992/FRONTEND-Project/master/mydata.json')
  .then(res => res.json())
  .then(data => {
    obj = data;
    arr =[...obj.userUploads];
    userAppend(arr);
    makePagination(arr);


})
  .catch(err => console.log(err))
  for(let i=0; i<arr.length; i++){
      console.log(arr[i].name)
    }


let userAppend = (array) => 

{
  for(item of array)
  {
  $('div.row.posted').append(
    `
    <div class=list-group>
    <div class="d-flex">
    <div class="card bg-light mb-3" style="width: 18rem;">
    <div id="upload-date" class="card-header border border-success""><b>Датум на објава:</b> ${item.date.substring(0,10)}</div>
    <p id="colored-font" class="filter-description">${item.description}</p>
    <img class="card-img-top rounded" src="images/${item.uploads_url}" height="230px" width="220px alt="Card image cap">
    <div class="card-body">
    <div class = "nameimageinfo green">
    <table id="vertical-1" class="table table-hover mb-0">
              <tr>
                  <th>Име:</th>
                  <td>${item.name}</td>
              </tr>
              <tr>
                  <th>Презиме:</th>
                  <td>${item.surname}</td>
              </tr>
              <tr>
                  <th>Град:</th>
                  <td id="search-location"> ${item.location}</td>
              </tr>
              <tr>
              <th>Селекција:</th>
              <td>${item.type}</td>
          </tr>
          </table>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  `)
}
} 


var numberofitems= $('div.list-group').length;

/* -------------------------------------------- */
//Filters applied on buttons on the top of the page!
function filterItemsbyType(allfilters)
{
  $('div.row.posted').empty();
 let filteredArray = arr.filter( item => item.type == allfilters);
  userAppend(filteredArray);
}

$("#a").on("click", function () {filterItemsbyType('Хартија') });
$("#b").on("click", function () {filterItemsbyType('Пластика') });
$("#c").on("click", function () {filterItemsbyType('Стакло')});
$("#d").on("click", function () {filterItemsbyType('Останато')});

/* -------------------------------------------- */
//Filter by city - applied on dropdown 
function filterItemsbyCity(allfilters)
{
  $('div.row.posted').empty();
 let filteredbyCityArray = arr.filter( item => item.location == allfilters);
 if(filteredbyCityArray.length == 0) {
  $('div.row.posted').append(`<div> No matches are found please try again! </div>`)
 }
  userAppend(filteredbyCityArray);
}

$("#skopje").on("click", function () {filterItemsbyCity('Скопје') });
$("#veles").on("click", function () {filterItemsbyCity('Велес') });
$("#tetovo").on("click", function () {filterItemsbyCity('Тетово') });
$("#kumanovo").on("click", function () {filterItemsbyCity('Куманово') });
$("#stip").on("click", function () {filterItemsbyCity('Штип') });
$("#bitola").on("click", function () {filterItemsbyCity('Битола') });
$("#ohrid").on("click", function () {filterItemsbyCity('Охрид') });
$("#kriva-palanka").on("click", function () {filterItemsbyCity('Крива Паланка') });
$("#gevgelija").on("click", function () {filterItemsbyCity('Гевгелија') });

/* -------------------------------------------- */
//Search menu filter


function NoMatch(){
  userAppend(arr);
  $('div.row.posted').empty();
  $('div.row.posted').append(`<div id="matches"> No matches are found please try again! </div>`)
}

let filterInput = document.getElementById('searchbutton');
// filterInput.addEventListener('keyup', filterByDescription);

let selectedDescriptions = [];
filterInput.addEventListener('keypress', function filterByDescription() {
  //debugger;
  
  let inputs = $('#searchbutton').val().toLowerCase();
  if (inputs.length == 0 || inputs.length == "" ) 
  {
    //tuka ima problem noMatch() se povikuva na mnogu kratko i se pojavuva siv kvadrat kaj sto pisuva deka no mathes are found i odma bega!
    NoMatch()
    // $('#searchbutton').val("");
    return;
  }
  else 
  {
    arr.forEach(function (item) {
      return selectedDescriptions.push(item.description.toLowerCase())
    })
    
    
  selectedDescriptions.forEach(function (name) {
      
    if (name.includes(inputs)) {
      var check = arr.find(function (check) {
       check.description.toLowerCase() === name;
      });
      return userAppend(check);       
    }
    });
};
});
console.log(selectedDescriptions)





//version 1
// let flag = true;
// let selectedPhones = [];
// function filterByDescription () {
//   var inputs = document.getElementById('searchbutton').value.toUpperCase();
//   if ($("#searchbutton").val().length == 0) {

//     flag = false;
//     console.log("Nothing matches!")
//   }

//   for (const item of arr) {
//     let counter = 0;
//     for (const input of inputs) {
//       if (item.description.toLowerCase().includes(input)) {
  //         counter++;
//       }
//     }
//     if (counter == inputs.length)
//       selectedPhones.push(item)
//   }
// console.log(inputs)
//   }


// const searchBtn = document.getElementById('searchbutton').value.toLowerCase().split(" ");
// console.log(searchBtn)

//---------------------------------------------------------------------------------------------
//version 2
// const searchBtn = document.getElementById('searchbutton')
// searchBtn.addEventListener('keyup', event => {
//   let results = []
 
//   const valueBtn = document.getElementById('searchbutton').value.toLowerCase();
//   console.log(valueBtn[0]);
//   let filteredBySearchbar = arr.filter( item => item.description == valueBtn);
//   console.log (filteredBySearchbar )
//   userAppend(filteredBySearchbar);
// })