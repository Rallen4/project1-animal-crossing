var mainContent = document.querySelector(".content");
var villagerTable = document.querySelector("#villagerTable");
var villagerIcon;
var allFish = [];
var allSeaCreatures = [];
var allBugs = [];
var allFossils = [];
var allNames = [];
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

function DeleteRows() {
  var rowCount = mainContent.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    mainContent.deleteRow(i);
  }
}

function toggleCompletion(event){
    var checked = event.target.checked;
    var fishName = event.target.getAttribute("data-fish-id");
    localStorage.setItem(fishName, checked);
};

function toggleCompletion(event){
    var checked = event.target.checked;
    var seaName = event.target.getAttribute("data-sea-id");
    localStorage.setItem(seaName, checked);
};

function toggleCompletion(event){
    var checked = event.target.checked;
    var bugName = event.target.getAttribute("data-bug-id");
    localStorage.setItem(bugName, checked);
};

function toggleCompletion(event){
    var checked = event.target.checked;
    var fossilName = event.target.getAttribute("data-fossil-id");
    localStorage.setItem(fossilName, checked);
};

function toggleCompletion(event){
    var checked = event.target.checked;
    var songName = event.target.getAttribute("data-song-id");
    localStorage.setItem(songName, checked);
};

function toggleCompletion(event){
    var checked = event.target.checked;
    var artName = event.target.getAttribute("data-art-id");
    localStorage.setItem(artName, checked);
};


function getFish() {
  DeleteRows();
  // define URL for API
  var requestUrl = "https://acnhapi.com/v1/fish/";
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
        var colCheckbox = newRow.insertCell(0);
        // creates a checkbox in that cell
        colCheckbox.innerHTML =
          `<label>
                <input class="fish" onclick="toggleCompletion(event)" type="checkbox" data-completed=false data-fish-id="` +
          e.name["name-USen"] +
          `"/>
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
                // add class to rarity
                $(colRarity).addClass("rarity-item")
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

        var fishName = e.name["name-USen"];
        console.log(fishName);
        var checkbox = document.querySelector(
          `input[data-fish-id="` + fishName + `"]`
        );
        console.log(checkbox, checkbox.checked);
        var fishValue = localStorage.getItem(fishName);
        console.log(fishValue, typeof fishValue);


        if (localStorage.getItem(fishName) == undefined) {
          localStorage.setItem(fishName, checkbox.checked);
        } else {
          checkbox.checked = fishValue == "true";
        }

        console.log(
          colCheckbox
            .getElementsByTagName("input")[0]
            .getAttribute("data-fish-id")
        );
    });
};


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
      allSeaCreatures.push(seaNames);
    });
}

function getBugs() {
  var bugUrl = "http://acnhapi.com/v1/bugs/";

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
    });
}
var rarityCommonEl = document.getElementById("rarity-common");
var rarityRareEl = document.getElementById("rarity-rare")

function filterAll() {
    // console.log($(".rarity-item"));

    // filter out completed items
    if ($("#name")[0].checked == true) {
        $(".line-item").each(function () {
            // console.log($(this)[0].checked)
            if ($(this)[0].checked == true) {
                console.log("hello");
                $(this).parent().parent().parent().css("display", "none")
            }
        })

    }

    // Show only Common
    if (rarityCommonEl.checked == true) {
        $(".rarity-item").each(function () {
            console.log($(this).innerText);
            if ($(this)[0].innerText !== "Common") {
                $(this).parent().css("display", "none")            }
        })
    }

}

console.log();

function getSeaCreatures() {
    DeleteRows()
    // define URL for API
    var requestUrl = "http://acnhapi.com/v1/sea/";
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
                <input class="sea-creatures" onclick="toggleCompletion(event)" type="checkbox" data-completed=false data-sea-id="` +  e.name['name-USen'] + `"/>
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
                
                var seaName= e.name['name-USen'];
                console.log(seaName);
                var checkbox = document.querySelector(`input[data-sea-id="` + seaName + `"]`);
                console.log(checkbox, checkbox.checked)
                var seaValue = localStorage.getItem(seaName)
                console.log(seaValue, typeof seaValue);

                if (localStorage.getItem(seaName) == undefined) {
                    localStorage.setItem(seaName, checkbox.checked);
                } else {
                    checkbox.checked= seaValue == "true"
                }

                console.log(colCheckbox.getElementsByTagName("input")[0].getAttribute("data-sea-id"));
            });

        }
        )
}


// issue: fish populating with bugs
function getBugs() {
    DeleteRows()
    var requestUrl = "http://acnhapi.com/v1/bugs/"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
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
                <input class="bugs" onclick="toggleCompletion(event)" type="checkbox" data-completed=false data-bug-id="` +  e.name['name-USen'] + `"/>
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
                
                var bugName= e.name['name-USen'];
                console.log(bugName);
                var checkbox = document.querySelector(`input[data-bug-id="` + bugName + `"]`);
                console.log(checkbox, checkbox.checked)
                var bugValue = localStorage.getItem(bugName)
                console.log(bugValue, typeof bugValue);

                if (localStorage.getItem(bugName) == undefined) {
                    localStorage.setItem(bugName, checkbox.checked);
                } else {
                    checkbox.checked= bugValue == "true"
                }

                console.log(colCheckbox.getElementsByTagName("input")[0].getAttribute("data-bug-id"));
            });

        }
        )

}

function getFossils() {
    DeleteRows()
    var requestUrl = "http://acnhapi.com/v1/fossils/"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
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
                <input class="fossils" onclick="toggleCompletion(event)" type="checkbox" data-completed=false data-fossil-id="` +  e.name['name-USen'] + `"/>
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
                colLocation.innerText = "N/A";
                // Create Rarity cell
                var colRarity = newRow.insertCell(4);
                // add rarity to rarity cell
                colRarity.innerText = "N/A";
                // create price cell
                var colPrice = newRow.insertCell(5);
                // add price to price cell
                colPrice.innerText = e.price.toLocaleString();
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = "N/A";
                
                var fossilName= e.name['name-USen'];
                console.log(fossilName);
                var checkbox = document.querySelector(`input[data-fossil-id="` + fossilName + `"]`);
                console.log(checkbox, checkbox.checked)
                var fossilValue = localStorage.getItem(fossilName)
                console.log(fossilValue, typeof fossilValue);

                if (localStorage.getItem(fossilName) == undefined) {
                    localStorage.setItem(fossilName, checkbox.checked);
                } else {
                    checkbox.checked= fossilValue == "true"
                }

                console.log(colCheckbox.getElementsByTagName("input")[0].getAttribute("data-fossil-id"));
            });

        }
        )
}

function getSongs() {
    DeleteRows()
    var requestUrl = "http://acnhapi.com/v1/songs/"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
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
                <input class="songs" onclick="toggleCompletion(event)" type="checkbox" data-completed=false data-song-id="` +  e.name['name-USen'] + `"/>
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
                colLocation.innerText = "N/A";
                // Create Rarity cell
                var colRarity = newRow.insertCell(4);
                // add rarity to rarity cell
                colRarity.innerText = "N/A";
                // create price cell
                var colPrice = newRow.insertCell(5);
                // add price to price cell: Fix this!!!!!
                colPrice.innerText = "N/A";
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = "N/A";
                
                var songName= e.name['name-USen'];
                console.log(songName);
                var checkbox = document.querySelector(`input[data-song-id="` + songName + `"]`);
                console.log(checkbox, checkbox.checked)
                var songValue = localStorage.getItem(songName)
                console.log(songValue, typeof songValue);

                if (localStorage.getItem(songName) == undefined) {
                    localStorage.setItem(songName, checkbox.checked);
                } else {
                    checkbox.checked= songValue == "true"
                }

                console.log(colCheckbox.getElementsByTagName("input")[0].getAttribute("data-song-id"));
            });

        }
        )
}

function getArt() {
    DeleteRows()
    var requestUrl = "http://acnhapi.com/v1/art/"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
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
                <input class="art" onclick="toggleCompletion(event)" type="checkbox" data-completed=false data-art-id="` +  e.name['name-USen'] + `"/>
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
                colLocation.innerText = "N/A";
                // Create Rarity cell
                var colRarity = newRow.insertCell(4);
                // add rarity to rarity cell
                colRarity.innerText = "N/A";
                // create price cell
                var colPrice = newRow.insertCell(5);
                // add price to price cell
                colPrice.innerText = "N/A";
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = "N/A";
                
                var artName= e.name['name-USen'];
                console.log(artName);
                var checkbox = document.querySelector(`input[data-art-id="` + artName + `"]`);
                console.log(checkbox, checkbox.checked)
                var artValue = localStorage.getItem(artName)
                console.log(artValue, typeof artValue);

                if (localStorage.getItem(artName) == undefined) {
                    localStorage.setItem(artName, checkbox.checked);
                } else {
                    checkbox.checked= artValue == "true"
                }

                console.log(colCheckbox.getElementsByTagName("input")[0].getAttribute("data-art-id"));
            });

        }
        )
}

function getVillagers() {
    for (i = 0; i < villagers.length; i++) {
      var villagerUrl =
        "https://www.instafluff.tv/ACDB/Villagers/" + villagers[i] + ".json";
      fetch(villagerUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          renderVillagers(data);
        });
    }
}
  
  
function renderVillagers(data) {
    var newRow = villagerTable.insertRow(1);
    var colCheckbox = newRow.insertCell(0);
    // creates a checkbox in that cell
    colCheckbox.innerHTML = `<label>
      <input id="villagerCheck" onclick="toggleCompletion()" type="checkbox" data-completed: false/>
      <span></span>
      </label>`;
    var colImg = newRow.insertCell(1);
    // populating cell with img
    colImg.innerHTML =
      `<img src="` + data.icon + `" style="width:48px" alt="item img">`;
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
      document.querySelector("#villager-name").addEventListener("click", function (event){
          event.preventDefault();
          var fullName = data.name["US-en"];
          allNames.push(fullName);
          allNames.sort();
          for (let i = 0; i < allNames.length; i++) {
              console.log(allNames[i])
              if(allNames[i]===colName.innerText){
                  var table,
                  rows,
                  switching,
                  i,
                  x,
                  y,
                  shouldSwitch,
                  dir,
                  switchcount = 0;
                  table = document.getElementById("villagerTable");
                  
              }
          }
      })
}
  
  
  
function sortTable(n) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("villagerTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
      no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
        first, which contains table headers): */
      for (i = 1; i < rows.length - 1; i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
          one from current row and one from the next: */
        x = rows[i].getElementsByTagName("td")[n + 2];
        y = rows[i + 1].getElementsByTagName("td")[n + 2];
        /* Check if the two rows should switch place,
          based on the direction, asc or desc: */
        if (dir == "asc") {
          console.log(x.innerHTML);
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /* If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
    renderRows();
}
        

function renderRows(rows) {
  var table = document.getElementById("villagerTable");
  for (let i = 1; i < table.children("tr").length; i++) {
    table.children("tr")[i] = rows[i - 1];
  }
}

function filterCompleted() {
    var x = document.getElementById("completed-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function filterLocation() {
    var x = document.getElementById("location-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function filterPrice() {
    var x = document.getElementById("price-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function filterRarity() {
    var x = document.getElementById("rarity-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function filterMonth() {
    var x = document.getElementById("month-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
