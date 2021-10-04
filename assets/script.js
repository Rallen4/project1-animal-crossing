var mainContent = document.querySelector(".content");
var allFish = [];
var allSeaCreatures = [];
var allBugs = [];
var allVillagers = [];

 "Ketchup", "Kevin", "Kid Cat", "Kidd", "Kiki", "Kitt", "Kitty", "Klaus", "Knox", "Kody", "Kyle", "Leonardo", "Leopold", "Lily", "Limberg", "Lionel", "Lobo", "Lolly", "Lopez", "Louie", "Lucha", "Lucky", "Lucy", "Lyman", "Mac", "Maddie", "Maelle", "Maggie", "Mallary", "Maple", "Marcel", "Marcie", "Margie", "Marina", "Marshal", "Mathilda", "Megan", "Melba", "Merengue", "Merry", "Midge", "Mint", "Mira", "Miranda", "Mitzi", "Moe", "Molly", "Monique", "Monty", "Moose", "Mott", "Muffy", "Murphy", "Nan", "Nana", "Naomi", "Nate", "Nibbles", "Norma", "O'Hare", "Octavian", "Olaf", "Olive", "Olivia", "Opal", "Ozzie", "Pancetti", "Pango", "Paolo", "Papi", "Pashmina", "Pate", "Patty", "Paula", "Peaches", "Peanut", "Pecan", "Peck", "Peewee", "Peggy", "Pekoe", "Penelope", "Phil", "Phoebe", "Pierce", "Pietro", "Pinky", "Piper", "Pippy", "Plucky", "Pompom", "Poncho", "Poppy", "Portia", "Prince", "Puck", "Puddles", "Pudge", "Punchy", "Purrl", "Queenie", "Quillson", "Raddle", "Rasher", "Raymond", "Reneigh", "Renée", "Rex", "Rhonda", "Ribbot", "Ricky", "Rizzo", "Roald", "Robin", "Rocco", "Rocket", "Rod", "Rodeo", "Rodney", "Rolf", "Rooney", "Rory", "Roscoe", "Rosie", "Rowan", "Ruby", "Rudy", "Sally", "Samson", "Sandy", "Savannah", "Scoot", "Shari", "Sheldon", "Shep", "Sherb", "Simon", "Skye", "Sly", "Snake", "Snooty", "Soleil", "Sparro", "Spike", "Spork", "Sprinkle", "Sprocket", "Static", "Stella", "Sterling", "Stinky", "Stitches", "Stu", "Sydney", "Sylvana", "Sylvia", "T-Bone", "Tabby", "Tad", "Tammi", "Tammy", "Tangy", "Tank", "Tasha", "Teddy", "Tex", "Tia", "Tiffany", "Timbra", "Tipper", "Tom", "Truffles", "Tucker", "Tutu", "Twiggy", "Tybalt", "Ursala", "Velma", "Vesta", "Vic", "Victoria", "Violet", "Vivian", "Vladimir", "Wade", "Walker", "Walt", "Wart Jr.", "Weber", "Wendy", "Whitney", "Willow", "Winnie", "Wolfgang", "Yuka", "Zell", "Zucker"

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

function getBugs(){
    var bugUrl = "http://acnhapi.com/v1/bugs/"

    fetch(bugUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var allData = data;
            // creates array of keys for data (bug names needed for new URLs)
            var bugNames = Object.keys(allData);
            // pushes all names into empty bug array
            allBugs.push(bugNames);
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
getSeaCreatures();
getBugs();
// getVillagers();