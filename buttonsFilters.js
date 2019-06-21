


let userAppendGlass = (array) => 
{
    var newArr;
    function checkType(array) {
        return array.type = "Staklo";
      }
    
    (item.type = "Staklo");
    }
    for(item2 of newArr)
    {
    $('div.row.posted').append

    (`<div class=list-group>
<div class="d-flex">
<div class="card bg-light mb-3" style="width: 18rem;">
<div id="upload-date" class="card-header border border-success"">Датум на објава: ${item2.date}</div>

<img class="card-img-top rounded" src="images/${item2.uploads_url}" height="230px" width="220px alt="Card image cap">
<div class="card-body">
<div class = "nameimageinfo green">
<table id="vertical-1" class="table table-hover mb-0">
          <tr>
              <th>Име:</th>
              <td>${item2.name}</td>
          </tr>
          <tr>
              <th>Презиме:</th>
              <td>${item2.surname}</td>
          </tr>
          <tr>
              <th>Град:</th>
              <td> ${item2.location}</td>
          </tr>
          <tr>
          <th>Селекција:</th>
          <td>${item2.type}</td>
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
 

    
let userGlass = (array) => 
{
    $('#c').click(function(){
        userAppendGlass(array);       
    });
}
