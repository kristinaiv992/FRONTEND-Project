//fetch data from github
var obj;
//debugger;
let arr =[];
fetch('https://raw.githubusercontent.com/kristinaiv992/FRONTEND-Project/master/mydata.json')
  .then(res => res.json())
  .then(data => {
    obj = data;
    userAppend(arr);
    arr =[...obj.userUploads];
makePagination(arr);


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
  $('div.row.posted').append(
    `
    <div class=list-group>
    <div class="d-flex">
    <div class="card bg-light mb-3" style="width: 18rem;">
    <div id="upload-date" class="card-header border border-success"">Датум на објава: ${item.date}</div>

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
                  <td> ${item.location}</td>
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
$("#a").on("click", function () {filterItems('Hartija') });
$("#b").on("click", function () {filterItems('Plastika') });
$("#c").on("click", function () {filterItems('Staklo')});
$("#d").on("click", function () {filterItems('Ostanato')});

function filterItems(allfilters)
{
  $('div.row.posted').empty();
 let filteredArray = arr.filter( item => item.type == allfilters);
  userAppend(filteredArray);

}







