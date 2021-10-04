var mainContent = document.querySelector(".content");
var allFish = [];
var allSeaCreatures = [];
var allVillagers = [];

function getFish(){
    var requestUrl = 'https://acnhapi.com/v1/fish/';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var allData = data
        // generates all fishnames (hopefully without the "")
        var fishnames = Object.keys(allData);
        // for-loop to create column of all fish names in table
        allFish.push(fishnames)
        for (var i = 0; i < fishnames.length; i++) {
            // creating a new row in the table
            var createRow = mainContent.insertRow(1);
            // create a cell in the name column of that row
            var nameCell = createRow.insertCell($("#header-name"));
            // populate the cell with content
            nameCell.innerHTML = fishnames[i]
        }
      });
}

function getSeaCreatures(){
    var seaUrl = "http://acnhapi.com/v1/sea/";

    fetch(seaUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data){
            var allData = data;
            // creates array of keys of the data (all of the sea creature names that we need for URLs)
            var seaNames = Object.keys(allData);
            // pushes all names into empty array
            allSeaCreatures.push(seaNames)
        })
}

function getVillagers(){
    var villagerUrl = 'https://www.instafluff.tv/ACDB/Villagers/' + villagerName + '.json'

    fetch(villagerUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
}

getFish();
getSeaCreatures()
// getVillagers();