var mainContent = document.querySelector(".content");
var villagerIcon;
var allFish = [];
var allSeaCreatures = [];
var allBugs = [];
var allFossils = [];
var villagers = ["Admiral", "Agent_S", "Agnes", "Al", "Alfonso", "Alice", "Alli", "Amelia", "Anabelle", "Anchovy", "Angus", "Anicotti", "Ankha", "Annalisa", "Annalise", "Antonio", "Apollo", "Apple", "Astrid", "Audie", "Aurora", "Ava", "Avery", "Axel", "Baabara", "Bam", "Bangle", "Barold", "Bea", "Beardo", "Beau", "Becky", "Bella", "Benedict", "Benjamin", "Bertha", "Bettina", "Bianca", "Biff", "Big_Top", "Bill", "Billy", "Biskit", "Bitty", "Blaire", "Blanche", "Bluebear", "Bob", "Bonbon", "Bones", "Boomer", "Boone", "Boots", "Boris", "Boyd", "Bree", "Broccolo", "Broffina", "Bruce", "Bubbles", "Buck", "Bud", "Bunnie", "Butch", "Buzz", "Cally", "Camofrog", "Canberra", "Candi", "Carmen", "Caroline", "Carrie", "Cashmere", "Celia", "Cesar", "Chadder", "Charlise", "Cheri", "Cherry", "Chester", "Chevre", "Chief", "Chops", "Chow", "Chrissy", "Claude", "Claudia", "Clay", "Cleo", "Clyde", "Coach", "Cobb", "Coco", "Cole", "Colton", "Cookie", "Cousteau", "Cranston", "Croque", "Cube", "Curlos", "Curly", "Curt", "Cyd", "Cyrano", "Daisy", "Deena", "Deirdre", "Del", "Deli", "Derwin", "Diana", "Diva", "Dizzy", "Dobie", "Doc", "Dom", "Dora", "Dotty", "Drago", "Drake", "Drift", "Ed", "Egbert", "Elise", "Ellie", "Elmer", "Eloise", "Elvis", "Erik", "Eugene", "Eunice", "Fang", "Fauna", "Felicity", "Filbert", "Flip", "Flo", "Flora", "Flurry", "Francine", "Frank", "Freckles", "Freya", "Friga", "Frita", "Frobert", "Fuchsia", "Gabi", "Gala", "Gaston", "Gayle", "Genji", "Gigi", "Gladys", "Gloria", "Goldie", "Gonzo", "Goose", "Graham", "Greta", "Grizzly", "Groucho", "Gruff", "Gwen", "Hamlet", "Hamphrey", "Hans", "Harry", "Hazel", "Henry", "Hippeux", "Hopkins", "Hopper", "Hornsby", "Huck", "Hugh", "Iggly", "Ike", "Jacob", "Jacques", "Jambette", "Jay", "Jeremiah", "Jitters", "Joey", "Judy", "Julia", "Julian", "June", "Kabuki", "Katt", "Keaton", "Ken", "Ketchup", "Kevin", "Kid_Cat", "Kidd", "Kiki", "Kitt", "Kitty", "Klaus", "Knox", "Kody", "Kyle", "Leonardo", "Leopold", "Lily", "Limberg", "Lionel", "Lobo", "Lolly", "Lopez", "Louie", "Lucha", "Lucky", "Lucy", "Lyman", "Mac", "Maddie", "Maelle", "Maggie", "Mallary", "Maple", "Marcel", "Marcie", "Margie", "Marina", "Marshal", "Mathilda", "Megan", "Melba", "Merengue", "Merry", "Midge", "Mint", "Mira", "Miranda", "Mitzi", "Moe", "Molly", "Monique", "Monty", "Moose", "Mott", "Muffy", "Murphy", "Nan", "Nana", "Naomi", "Nate", "Nibbles", "Norma", "O'Hare", "Octavian", "Olaf", "Olive", "Olivia", "Opal", "Ozzie", "Pancetti", "Pango", "Paolo", "Papi", "Pashmina", "Pate", "Patty", "Paula", "Peaches", "Peanut", "Pecan", "Peck", "Peewee", "Peggy", "Pekoe", "Penelope", "Phil", "Phoebe", "Pierce", "Pietro", "Pinky", "Piper", "Pippy", "Plucky", "Pompom", "Poncho", "Poppy", "Portia", "Prince", "Puck", "Puddles", "Pudge", "Punchy", "Purrl", "Queenie", "Quillson", "Raddle", "Rasher", "Raymond", "Reneigh", "Renée", "Rex", "Rhonda", "Ribbot", "Ricky", "Rizzo", "Roald", "Robin", "Rocco", "Rocket", "Rod", "Rodeo", "Rodney", "Rolf", "Rooney", "Rory", "Roscoe", "Rosie", "Rowan", "Ruby", "Rudy", "Sally", "Samson", "Sandy", "Savannah", "Scoot", "Shari", "Sheldon", "Shep", "Sherb", "Simon", "Skye", "Sly", "Snake", "Snooty", "Soleil", "Sparro", "Spike", "Spork", "Sprinkle", "Sprocket", "Static", "Stella", "Sterling", "Stinky", "Stitches", "Stu", "Sydney", "Sylvana", "Sylvia", "T-Bone", "Tabby", "Tad", "Tammi", "Tammy", "Tangy", "Tank", "Tasha", "Teddy", "Tex", "Tia", "Tiffany", "Timbra", "Tipper", "Tom", "Truffles", "Tucker", "Tutu", "Twiggy", "Tybalt", "Ursala", "Velma", "Vesta", "Vic", "Victoria", "Violet", "Vivian", "Vladimir", "Wade", "Walker", "Walt", "Wart_Jr.", "Weber", "Wendy", "Whitney", "Willow", "Winnie", "Wolfgang", "Yuka", "Zell", "Zucker"];

function toggleCompletion(event){
    var checked = event.target.checked;
    var fishName = event.target.getAttribute("data-fish-id");
    localStorage.setItem(fishName, checked);
};

function DeleteRows() {
    var rowCount = mainContent.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        mainContent.deleteRow(i);
    }
}

function getFish() {
    DeleteRows()
    // define URL for API
    var requestUrl = 'https://acnhapi.com/v1/fish/';
    // fetching data of API
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        // reformatting data to fit needs
        .then(function (data) {
            data = Object.values(data);
            console.log(data);
            
            $(data).each(function (i, e) {
                // create new row under the header
                var newRow = mainContent.insertRow(1);
                // inserts a cell in the first column "checkbox"
                var colCheckbox = newRow.insertCell(0)
                // creates a checkbox in that cell
                colCheckbox.innerHTML = `<label>
                <input class="fish" onclick="toggleCompletion(event)" type="checkbox" data-completed=false data-fish-id="` +  e.name['name-USen'] + `"/>
                <span></span>
              </label>`
                // insert a cell in the second column "image"
                var colImg = newRow.insertCell(1);
                // populating cell with img
                colImg.innerHTML = `<img src="` + e.image_uri + `" style="width:48px" alt="item img">`;
                // create Name cell
                var colName = newRow.insertCell(2);
                // add name to name cell
                colName.innerText = e.name['name-USen'];
                // create Location cell
                var colLocation = newRow.insertCell(3);
                // add Location to Location Cell
                colLocation.innerText = e.availability.location;
                // Create Rarity cell
                var colRarity = newRow.insertCell(4);
                // add rarity to rarity cell
                colRarity.innerText = e.availability.rarity;
                // create price cell
                var colPrice = newRow.insertCell(5);
                // add price to price cell
                colPrice.innerText = e.price.toLocaleString();
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = e.availability["month-northern"];
                
                var fishName= e.name['name-USen'];
                console.log(fishName);
                var checkbox = document.querySelector(`input[data-fish-id="` + fishName + `"]`);
                console.log(checkbox, checkbox.checked)
                var fishValue = localStorage.getItem(fishName)
                console.log(fishValue, typeof fishValue);

                if (localStorage.getItem(fishName) == undefined) {
                    localStorage.setItem(fishName, checkbox.checked);
                } else {
                    checkbox.checked= fishValue == "true"
                }

                console.log(colCheckbox.getElementsByTagName("input")[0].getAttribute("data-fish-id"));
            });

        }
        )
}



function getSeaCreatures() {
    var seaUrl = "http://acnhapi.com/v1/sea/";

    fetch(seaUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var allData = data;
            // creates array of keys of the data (all of the sea creature names that we need for URLs)
            var seaNames = Object.keys(allData);
            // pushes all names into empty array
            allSeaCreatures.push(seaNames)
        })
}

function getBugs() {
    var bugUrl = "http://acnhapi.com/v1/bugs/"

    fetch(bugUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var allData = data;
            // creates array of keys for data (bug names needed for new URLs)
            var bugNames = Object.keys(allData);
            // pushes all names into empty bug array
            allBugs.push(bugNames);
        })
}

function getFossils() {
    var fossilUrl = "http://acnhapi.com/v1/fossils/"

    fetch(fossilUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var allData = data;
            // new array data for fossils
            var fossilNames = Object.keys(allData);
            // push into empty array to be used for URLs
            allFossils.push(fossilNames)
        })
}

function getSongs() {
    var songUrl = "http://acnhapi.com/v1/songs/"

    fetch(songUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var allData = data;

        })
}

function getArt() {
    var artUrl = "http://acnhapi.com/v1/art/"

    fetch(artUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var allData = data;

        })
}

function getVillagers(){
    for (i=0; i < villagers.length; i++){
        var villagerUrl = 'https://www.instafluff.tv/ACDB/Villagers/' + villagers[i] + '.json'
        fetch(villagerUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data.name['US-en']);
            console.log(data.personality);
            console.log(data.birthday);
            console.log(data.hobby);
            console.log(data.icon);
            // villagerIcon.setAttribute("src", data.icon);
        })
    } 
}
