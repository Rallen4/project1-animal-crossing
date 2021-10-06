var villagerTable = document.querySelector("#villagerTable");
var allVillagers = [];
var villagers = [
  "Admiral",
  "Agent_S",
  "Agnes",
  "Al",
  "Alfonso",
  "Alice",
  "Alli",
  "Amelia",
  "Anabelle",
  "Anchovy",
  "Angus",
  "Anicotti",
  "Ankha",
  "Annalisa",
  "Annalise",
  "Antonio",
  "Apollo",
  "Apple",
  "Astrid",
  "Audie",
  "Aurora",
  "Ava",
  "Avery",
  "Axel",
  "Baabara",
  "Bam",
  "Bangle",
  "Barold",
  "Bea",
  "Beardo",
  "Beau",
  "Becky",
  "Bella",
  "Benedict",
  "Benjamin",
  "Bertha",
  "Bettina",
  "Bianca",
  "Biff",
  "Big_Top",
  "Bill",
  "Billy",
  "Biskit",
  "Bitty",
  "Blaire",
  "Blanche",
  "Bluebear",
  "Bob",
  "Bonbon",
  "Bones",
  "Boomer",
  "Boone",
  "Boots",
  "Boris",
  "Boyd",
  "Bree",
  "Broccolo",
  "Broffina",
  "Bruce",
  "Bubbles",
  "Buck",
  "Bud",
  "Bunnie",
  "Butch",
  "Buzz",
  "Cally",
  "Camofrog",
  "Canberra",
  "Candi",
  "Carmen",
  "Caroline",
  "Carrie",
  "Cashmere",
  "Celia",
  "Cesar",
  "Chadder",
  "Charlise",
  "Cheri",
  "Cherry",
  "Chester",
  "Chevre",
  "Chief",
  "Chops",
  "Chow",
  "Chrissy",
  "Claude",
  "Claudia",
  "Clay",
  "Cleo",
  "Clyde",
  "Coach",
  "Cobb",
  "Coco",
  "Cole",
  "Colton",
  "Cookie",
  "Cousteau",
  "Cranston",
  "Croque",
  "Cube",
  "Curlos",
  "Curly",
  "Curt",
  "Cyd",
  "Cyrano",
  "Daisy",
  "Deena",
  "Deirdre",
  "Del",
  "Deli",
  "Derwin",
  "Diana",
  "Diva",
  "Dizzy",
  "Dobie",
  "Doc",
  "Dom",
  "Dora",
  "Dotty",
  "Drago",
  "Drake",
  "Drift",
  "Ed",
  "Egbert",
  "Elise",
  "Ellie",
  "Elmer",
  "Eloise",
  "Elvis",
  "Erik",
  "Eugene",
  "Eunice",
  "Fang",
  "Fauna",
  "Felicity",
  "Filbert",
  "Flip",
  "Flo",
  "Flora",
  "Flurry",
  "Francine",
  "Frank",
  "Freckles",
  "Freya",
  "Friga",
  "Frita",
  "Frobert",
  "Fuchsia",
  "Gabi",
  "Gala",
  "Gaston",
  "Gayle",
  "Genji",
  "Gigi",
  "Gladys",
  "Gloria",
  "Goldie",
  "Gonzo",
  "Goose",
  "Graham",
  "Greta",
  "Grizzly",
  "Groucho",
  "Gruff",
  "Gwen",
  "Hamlet",
  "Hamphrey",
  "Hans",
  "Harry",
  "Hazel",
  "Henry",
  "Hippeux",
  "Hopkins",
  "Hopper",
  "Hornsby",
  "Huck",
  "Hugh",
  "Iggly",
  "Ike",
  "Jacob",
  "Jacques",
  "Jambette",
  "Jay",
  "Jeremiah",
  "Jitters",
  "Joey",
  "Judy",
  "Julia",
  "Julian",
  "June",
  "Kabuki",
  "Katt",
  "Keaton",
  "Ken",
  "Ketchup",
  "Kevin",
  "Kid_Cat",
  "Kidd",
  "Kiki",
  "Kitt",
  "Kitty",
  "Klaus",
  "Knox",
  "Kody",
  "Kyle",
  "Leonardo",
  "Leopold",
  "Lily",
  "Limberg",
  "Lionel",
  "Lobo",
  "Lolly",
  "Lopez",
  "Louie",
  "Lucha",
  "Lucky",
  "Lucy",
  "Lyman",
  "Mac",
  "Maddie",
  "Maelle",
  "Maggie",
  "Mallary",
  "Maple",
  "Marcel",
  "Marcie",
  "Margie",
  "Marina",
  "Marshal",
  "Mathilda",
  "Megan",
  "Melba",
  "Merengue",
  "Merry",
  "Midge",
  "Mint",
  "Mira",
  "Miranda",
  "Mitzi",
  "Moe",
  "Molly",
  "Monique",
  "Monty",
  "Moose",
  "Mott",
  "Muffy",
  "Murphy",
  "Nan",
  "Nana",
  "Naomi",
  "Nate",
  "Nibbles",
  "Norma",
  "O'Hare",
  "Octavian",
  "Olaf",
  "Olive",
  "Olivia",
  "Opal",
  "Ozzie",
  "Pancetti",
  "Pango",
  "Paolo",
  "Papi",
  "Pashmina",
  "Pate",
  "Patty",
  "Paula",
  "Peaches",
  "Peanut",
  "Pecan",
  "Peck",
  "Peewee",
  "Peggy",
  "Pekoe",
  "Penelope",
  "Phil",
  "Phoebe",
  "Pierce",
  "Pietro",
  "Pinky",
  "Piper",
  "Pippy",
  "Plucky",
  "Pompom",
  "Poncho",
  "Poppy",
  "Portia",
  "Prince",
  "Puck",
  "Puddles",
  "Pudge",
  "Punchy",
  "Purrl",
  "Queenie",
  "Quillson",
  "Raddle",
  "Rasher",
  "Raymond",
  "Reneigh",
  "Renée",
  "Rex",
  "Rhonda",
  "Ribbot",
  "Ricky",
  "Rizzo",
  "Roald",
  "Robin",
  "Rocco",
  "Rocket",
  "Rod",
  "Rodeo",
  "Rodney",
  "Rolf",
  "Rooney",
  "Rory",
  "Roscoe",
  "Rosie",
  "Rowan",
  "Ruby",
  "Rudy",
  "Sally",
  "Samson",
  "Sandy",
  "Savannah",
  "Scoot",
  "Shari",
  "Sheldon",
  "Shep",
  "Sherb",
  "Simon",
  "Skye",
  "Sly",
  "Snake",
  "Snooty",
  "Soleil",
  "Sparro",
  "Spike",
  "Spork",
  "Sprinkle",
  "Sprocket",
  "Static",
  "Stella",
  "Sterling",
  "Stinky",
  "Stitches",
  "Stu",
  "Sydney",
  "Sylvana",
  "Sylvia",
  "T-Bone",
  "Tabby",
  "Tad",
  "Tammi",
  "Tammy",
  "Tangy",
  "Tank",
  "Tasha",
  "Teddy",
  "Tex",
  "Tia",
  "Tiffany",
  "Timbra",
  "Tipper",
  "Tom",
  "Truffles",
  "Tucker",
  "Tutu",
  "Twiggy",
  "Tybalt",
  "Ursala",
  "Velma",
  "Vesta",
  "Vic",
  "Victoria",
  "Violet",
  "Vivian",
  "Vladimir",
  "Wade",
  "Walker",
  "Walt",
  "Wart_Jr.",
  "Weber",
  "Wendy",
  "Whitney",
  "Willow",
  "Winnie",
  "Wolfgang",
  "Yuka",
  "Zell",
  "Zucker",
];

// clears the table of the villager information
function DeleteVillagerRows() {
    var rowCount = villagerTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
      villagerTable.deleteRow(i);
    }
}

// fetches data from API
function getVillagers(){
    // loop to get all villagers individual data
    for (i = 0; i < villagers.length; i++) {
      var villagerUrl =
        "https://www.instafluff.tv/ACDB/Villagers/" + villagers[i] + ".json";
      fetch(villagerUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
            // put all the data to the page on page load
            renderVillager(data);
            // pushes all data into empty array as objects
            allVillagers.push(data);
        });
    }
}

// function to put villagers data on page
function renderVillager(data) {
    // create new row for villager
    var newRow = villagerTable.insertRow(1);
    var colCheckbox = newRow.insertCell(0);
    // creates a checkbox in that cell
    colCheckbox.innerHTML = `<label>
      <input id="villagerCheck" onclick="toggleCompletion()" type="checkbox" data-completed: false/>
      <span></span>
      </label>`;
    var colImg = newRow.insertCell(1);
    // populating cell with img
    colImg.innerHTML = `<img src="` + data.icon + `" style="width:48px" alt="item img">`;
    var colName = newRow.insertCell(2);
    // add name to name cell
    colName.innerText = data.name["US-en"];
    var colPersonality = newRow.insertCell(3);
    // add personality
    colPersonality.innerText = data.personality;
    var colBirthday = newRow.insertCell(4);
    // add birthday
    colBirthday.innerText = data.birthday;
    var colHobby = newRow.insertCell(5);
    // add hobby
    colHobby.innerText = data.hobby;
}

// renders the villagers from array to the page
function renderManyVillagers(allVillagers) {
    for (let i = 0; i < allVillagers.length; i++) {
        // puts villager info from the empty, now full, array onto page
        renderVillager(allVillagers[i]);
    }
}

// set clicked value to true
var villagerClicked = true;
// click to sort by name
document.querySelector("#villager-name").addEventListener("click", function (event){
    event.preventDefault();
    // deletes the previously rendered rows 
    DeleteVillagerRows();
    // if the first row is lower than the second row then sort by A-Z
    if (villagerClicked){
        allVillagers.sort((a,b)=> (a.name["US-en"] < b.name["US-en"] ? 1 : -1));
        villagerClicked = false;
        $(this).text($(this).text().slice(0,-2) + " ↑")
    }
    // if not, then sort Z-A
    else{
        allVillagers.sort((a,b)=> (a.name["US-en"] > b.name["US-en"] ? 1 : -1));
        villagerClicked = true;
        $(this).text($(this).text().slice(0,-2) + " ↓")
    }  
    // render villagers in the sorted by name array onto page
    renderManyVillagers(allVillagers);
})

// set clicked value to true
var personalityClicked = true;
// click to sort alphabetically by personality
document.querySelector("#villager-personality").addEventListener("click", function (event){
    event.preventDefault();
    DeleteVillagerRows();
    // if villagerClicked, sort A-Z
    if(personalityClicked){
        allVillagers.sort((a,b)=> (a.personality < b.personality ? 1 : -1));
        personalityClicked = false;
        $(this).text($(this).text().slice(0,-2) + " ↑")
    }
    // if not true, then sort Z-A
    else{
        allVillagers.sort((a,b)=> (a.personality > b.personality ? 1 : -1));
        personalityClicked = true;
        $(this).text($(this).text().slice(0,-2) + " ↓")
    }
    // render villagers sorted alphabetically by personality
    renderManyVillagers(allVillagers);
})

// set clicked value to true
var birthdayClicked = true;
// click to sort alphabetically by birthday
document.querySelector("#villager-birthday").addEventListener("click", function (event){
    event.preventDefault();
    DeleteVillagerRows();
    if(birthdayClicked){
        allVillagers.sort((a,b)=> (a.birthday < b.birthday ? 1 : -1));
        birthdayClicked = false
        $(this).text($(this).text().slice(0,-2) + " ↑")
    }
    // if not, then sort Z-A
    else{
        allVillagers.sort((a,b)=> (a.birthday > b.birthday ? 1 : -1));
        birthdayClicked = true;
        $(this).text($(this).text().slice(0,-2) + " ↓")
    }
    // renders villagers sorted by alphabetical birthday
    renderManyVillagers(allVillagers);
})

// set clicked value to true
var hobbyClicked = true;
// click to sort alphabetically by hobby
document.querySelector("#villager-hobbies").addEventListener("click", function (event){
    event.preventDefault();
    DeleteVillagerRows();
    // if clicked then sort A-Z
    if (hobbyClicked){
        allVillagers.sort((a,b)=> (a.hobby < b.hobby ? 1 : -1));
        hobbyClicked = false;
        $(this).text($(this).text().slice(0,-2) + " ↑")
    } 
    // if not clicked then sort Z-A
    else{
        allVillagers.sort((a,b)=> (a.hobby > b.hobby ? 1 : -1));
        hobbyClicked = true;
        $(this).text($(this).text().slice(0,-2) + " ↓")
    }
    // renders villagers sorted alphabetically hobby
    renderManyVillagers(allVillagers);
})