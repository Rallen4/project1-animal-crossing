var mainContent = document.querySelector(".content");
var allFish = [];
var allVillagers = [];

function getFish(){
    var requestUrl = 'https://acnhapi.com/v1/fish/';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var allData = data
        var fishnames = Object.keys(allData);
        allFish.push(fishnames)
        for (var i = 0; i < fishnames.length; i++) {
            var listItem = document.createElement('p');
            listItem.textContent = allFish[0][i];
            mainContent.appendChild(listItem);
        }
      });
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
// getVillagers();