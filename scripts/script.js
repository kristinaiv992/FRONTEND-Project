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
  for(let i=0; i<arr.length; i++)
  {
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
  NoMatch()
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
  $('div.row.posted').empty();
  $('div.row.posted').append(`<div id="matches"> No matches are found please try again! </div>`)
}

$('#search').on('submit', (e) => {
  e.preventDefault();
  let filterValue = document.getElementById('searchInput').value.toLowerCase();
  let newArray = arr.filter(item => item.description.toLowerCase().includes(filterValue));
//debugger;
  if(newArray.length !=0) 
  {
  console.log(newArray);
  $('div.row.posted').empty();
  userAppend(newArray);
  console.log(filterValue);
  }
  else 
    {
      $('div.row.posted').empty();
      $('div.row.posted').append(`<div id="matches"> No matches are found please try again! </div>`)

      setTimeout(function(){
        
        $('div.row.posted').empty();
        userAppend(arr);
      }, 3000);
    }
})

/* -------------------------------------------- */
//filter by name/surname
$('#searchbyname').on('submit', (e)=> {
e.preventDefault();
let filterByName =  document.getElementById('namesurname').value.toLowerCase();

var newerArray = arr.filter(obj => obj.name.toLowerCase().includes(filterByName) || obj.surname.toLowerCase().includes(filterByName));
console.log(newerArray);

$('div.row.posted').empty();
userAppend(newerArray);
});
/*------------------------------------------------ */
//Log in / Register option 
// var modal = document.getElementById('modal-wrapper');
// window.onclick = function(event) {
// if (event.target == modal) {
// modal.style.display = 'none';
// }
// }
document.getElementById('search').addEventListener('click', submitForm);

function submitForm(e) {
  e.preventDefault()
  var name = getInputVal('name');
}

function getInputVal(id){
  return document.getElementById(id).value;
}


