var mainContent = document.querySelector(".content");
var villagerTable = document.querySelector("#villagerTable");
var villagerIcon;
var allFish = [];
var allSeaCreatures = [];
var allBugs = [];
var allFossils = [];
var allNames = [];
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

function DeleteRows() {
  var rowCount = mainContent.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    mainContent.deleteRow(i);
  }
}

function toggleCompletionFish(event) {
    var checked = event.target.checked;
    var fishName = event.target.getAttribute("data-fish-id");
    localStorage.setItem(fishName, checked);
};

function toggleCompletionSea(event) {
    var checked = event.target.checked;
    var seaName = event.target.getAttribute("data-sea-id");
    localStorage.setItem(seaName, checked);
};

function toggleCompletionBug(event) {
    var checked = event.target.checked;
    var bugName = event.target.getAttribute("data-bug-id");
    localStorage.setItem(bugName, checked);
};

function toggleCompletionFossil(event) {
    var checked = event.target.checked;
    var fossilName = event.target.getAttribute("data-fossil-id");
    localStorage.setItem(fossilName, checked);
};

function toggleCompletionSong(event) {
    var checked = event.target.checked;
    var songName = event.target.getAttribute("data-song-id");
    localStorage.setItem(songName, checked);
};

function toggleCompletionArt(event) {
    var checked = event.target.checked;
    var artName = event.target.getAttribute("data-art-id");
    localStorage.setItem(artName, checked);
};



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

            $(data).each(function (i, e) {
                // create new row under the header
                var newRow = mainContent.insertRow(1);
                // inserts a cell in the first column "checkbox"
                var colCheckbox = newRow.insertCell(0)
                // creates a checkbox in that cell
                colCheckbox.innerHTML = `<label>
                <input class="fish line-item" onclick="toggleCompletionFish(event)" type="checkbox" data-completed=false data-fish-id="` + e.name['name-USen'] + `"/>
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
                // add class to Location
                $(colLocation).addClass("location-item")
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
                // add class to price cell
                $(colPrice).addClass("price-item")
                // add price to price cell
                colPrice.innerText = e.price.toLocaleString();
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = e.availability["month-northern"];

                var fishName = e.name['name-USen'];
                var checkbox = document.querySelector(`input[data-fish-id="` + fishName + `"]`);
                var fishValue = localStorage.getItem(fishName)

                if (localStorage.getItem(fishName) == undefined) {
                    localStorage.setItem(fishName, checkbox.checked);
                } else {
                    checkbox.checked = fishValue == "true"
                }
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

var rarityCommonEl = document.getElementById("rarity-common");
var rarityRareEl = document.getElementById("rarity-rare")
var rarityUncommonEl = document.getElementById("rarity-uncommon")
var rarityUltraRareEl = document.getElementById("rarity-ultra-rare")
var locationSeaEl = document.getElementById("location-sea")
var locationRiverEl = document.getElementById("location-river")
var locationPondEl = document.getElementById("location-pond")
var locationPierEl = document.getElementById("location-pier")
var priceFilter0kEl = document.getElementById("price-filter-0k")
var priceFilter5kEl = document.getElementById("price-filter-5k")
var priceFilter10kEl = document.getElementById("price-filter-10k")

function filterAll() {
    // console.log($(".rarity-item"));

    // filter out completed items
    if ($("#name")[0].checked == true) {
        $(".line-item").each(function () {
            // console.log($(this)[0].checked)
            if ($(this)[0].checked == true) {
                $(this).parent().parent().parent().css("display", "none")
            }
        })
    }

    // Show only Common
    if (rarityCommonEl.checked == true) {
        $(".rarity-item").each(function () {
            console.log($(this).innerText);
            if ($(this)[0].innerText !== "Common") {
                $(this).parent().css("display", "none")
            }
        })
    }

    // show only Uncommon
    if (rarityUncommonEl.checked == true) {
        $(".rarity-item").each(function () {
            if ($(this)[0].innerText !== "Uncommon") {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only Rare
    if (rarityRareEl.checked == true) {
        $(".rarity-item").each(function () {
            if ($(this)[0].innerText !== "Rare") {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only Ultra-Rare
    if (rarityUltraRareEl.checked == true) {
        $(".rarity-item").each(function () {
            if ($(this)[0].innerText !== "Ultra-rare") {
                $(this).parent().css('display', 'none')
            }
        })
    }

    // show only Sea
    if (locationSeaEl.checked == true) {
        $(".location-item").each(function () {
            if (!($(this)[0].includes("Sea"))) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only River
    if (locationRiverEl.checked == true) {
        $(".location-item").each(function () {
            if (!($(this)[0].includes("River"))) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only Pond
    if (locationPondEl.checked == true) {
        $(".location-item").each(function () {
            if (!($(this)[0].includes("Pond"))) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only Pier
    if (locationPierEl.checked == true) {
        $(".location-item").each(function () {
            if (!($(this)[0].includes("Pier"))) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only 0-5000
    if (priceFilter0kEl.checked == true) {
        $(".location-item").each(function () {
            if ($(this)[0] > 5000) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only 5001-10000
    if (priceFilter5kEl.checked == true) {
        $(".location-item").each(function () {
            if ($(this)[0] < 5000 || $(this)[0] > 9999) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    if (priceFilter10kEl.checked == true) {
        $(".location-item").each(function () {
            if ($(this)[0] < 10000) {
                $(this).parent().css('display', 'none')
            }
        })
    }


}

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

            $(data).each(function (i, e) {
                // create new row under the header
                var newRow = mainContent.insertRow(1);
                // inserts a cell in the first column "checkbox"
                var colCheckbox = newRow.insertCell(0)
                // creates a checkbox in that cell
                colCheckbox.innerHTML = `<label>
                <input class="sea-creatures" onclick="toggleCompletionSea(event)" type="checkbox" data-completed=false data-sea-id="` + e.name['name-USen'] + `"/>
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
                // add class to Location
                $(colLocation).addClass("location-item")
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
                // add class to price cell
                $(colPrice).addClass("price-item")
                // add price to price cell
                colPrice.innerText = e.price.toLocaleString();
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = e.availability["month-northern"];

                var seaName = e.name['name-USen'];
                console.log(seaName);
                var checkbox = document.querySelector(`input[data-sea-id="` + seaName + `"]`);
                console.log(checkbox, checkbox.checked)
                var seaValue = localStorage.getItem(seaName)
                console.log(seaValue, typeof seaValue);

                if (localStorage.getItem(seaName) == undefined) {
                    localStorage.setItem(seaName, checkbox.checked);
                } else {
                    checkbox.checked = seaValue == "true"
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
                <input class="bugs" onclick="toggleCompletionBug(event)" type="checkbox" data-completed=false data-bug-id="` + e.name['name-USen'] + `"/>
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
                // add class to Location
                $(colLocation).addClass("location-item")
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
                // add class to price cell
                $(colPrice).addClass("price-item")
                // add price to price cell
                colPrice.innerText = e.price.toLocaleString();
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = e.availability["month-northern"];

                var bugName = e.name['name-USen'];
                console.log(bugName);
                var checkbox = document.querySelector(`input[data-bug-id="` + bugName + `"]`);
                console.log(checkbox, checkbox.checked)
                var bugValue = localStorage.getItem(bugName)
                console.log(bugValue, typeof bugValue);

                if (localStorage.getItem(bugName) == undefined) {
                    localStorage.setItem(bugName, checkbox.checked);
                } else {
                    checkbox.checked = bugValue == "true"
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
                <input class="fossils" onclick="toggleCompletionFossil(event)" type="checkbox" data-completed=false data-fossil-id="` + e.name['name-USen'] + `"/>
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
                // add class to Location
                $(colLocation).addClass("location-item")
                // add Location to Location Cell
                colLocation.innerText = "N/A";
                // Create Rarity cell
                var colRarity = newRow.insertCell(4);
                // add class to rarity
                $(colRarity).addClass("rarity-item")
                // add rarity to rarity cell
                colRarity.innerText = "N/A";
                // create price cell
                var colPrice = newRow.insertCell(5);
                // add class to price cell
                $(colPrice).addClass("price-item")
                // add price to price cell
                colPrice.innerText = e.price.toLocaleString();
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = "N/A";

                var fossilName = e.name['name-USen'];
                console.log(fossilName);
                var checkbox = document.querySelector(`input[data-fossil-id="` + fossilName + `"]`);
                console.log(checkbox, checkbox.checked)
                var fossilValue = localStorage.getItem(fossilName)
                console.log(fossilValue, typeof fossilValue);

                if (localStorage.getItem(fossilName) == undefined) {
                    localStorage.setItem(fossilName, checkbox.checked);
                } else {
                    checkbox.checked = fossilValue == "true"
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
                <input class="songs" onclick="toggleCompletionSong(event)" type="checkbox" data-completed=false data-song-id="` + e.name['name-USen'] + `"/>
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
                // add class to Location
                $(colLocation).addClass("location-item")
                // add Location to Location Cell
                colLocation.innerText = "N/A";
                // Create Rarity cell
                var colRarity = newRow.insertCell(4);
                // add class to rarity
                $(colRarity).addClass("rarity-item")
                // add rarity to rarity cell
                colRarity.innerText = "N/A";
                // create price cell
                var colPrice = newRow.insertCell(5);
                // add class to price cell
                $(colPrice).addClass("price-item")
                // add price to price cell: Fix this!!!!!
                colPrice.innerText = "N/A";
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = "N/A";

                var songName = e.name['name-USen'];
                console.log(songName);
                var checkbox = document.querySelector(`input[data-song-id="` + songName + `"]`);
                console.log(checkbox, checkbox.checked)
                var songValue = localStorage.getItem(songName)
                console.log(songValue, typeof songValue);

                if (localStorage.getItem(songName) == undefined) {
                    localStorage.setItem(songName, checkbox.checked);
                } else {
                    checkbox.checked = songValue == "true"
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
                <input class="art" onclick="toggleCompletionArt(event)" type="checkbox" data-completed=false data-art-id="` + e.name['name-USen'] + `"/>
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
                // add class to Location
                $(colLocation).addClass("location-item")
                // add Location to Location Cell
                colLocation.innerText = "N/A";
                // Create Rarity cell
                var colRarity = newRow.insertCell(4);
                // add class to rarity
                $(colRarity).addClass("rarity-item")
                // add rarity to rarity cell
                colRarity.innerText = "N/A";
                // create price cell
                var colPrice = newRow.insertCell(5);
                // add class to price cell
                $(colPrice).addClass("price-item")
                // add price to price cell
                colPrice.innerText = "N/A";
                // Create Months Cell
                var colMonths = newRow.insertCell(6);
                // add months to months cell
                colMonths.innerText = "N/A";

                var artName = e.name['name-USen'];
                console.log(artName);
                var checkbox = document.querySelector(`input[data-art-id="` + artName + `"]`);
                console.log(checkbox, checkbox.checked)
                var artValue = localStorage.getItem(artName)
                console.log(artValue, typeof artValue);

                if (localStorage.getItem(artName) == undefined) {
                    localStorage.setItem(artName, checkbox.checked);
                } else {
                    checkbox.checked = artValue == "true"
                }

                console.log(colCheckbox.getElementsByTagName("input")[0].getAttribute("data-art-id"));
            });

        }
        )
}

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

// click to sort by name
document.querySelector("#villager-name").addEventListener("click", function (event){
    event.preventDefault();
    // deletes the previously rendered rows 
    DeleteVillagerRows();
    // if the first row is lower than the second row then sort by A-Z
    if (allVillagers[0].name["US-en"] < allVillagers[1].name["US-en"]){
        allVillagers.sort((a,b)=> (a.name["US-en"] < b.name["US-en"] ? 1 : -1));
    
    }
    // if not, then sort Z-A
    else{
        allVillagers.sort((a,b)=> (a.name["US-en"] > b.name["US-en"] ? 1 : -1));

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
    }
    // if not true, then sort Z-A
    else{
        allVillagers.sort((a,b)=> (a.personality > b.personality ? 1 : -1));
        personalityClicked = true;
    }
    // render villagers sorted alphabetically by personality
    renderManyVillagers(allVillagers);
})

// click to sort alphabetically by birthday
document.querySelector("#villager-birthday").addEventListener("click", function (event){
    event.preventDefault();
    DeleteVillagerRows();
    // if first row is lower than second, then sort A-Z
    if(allVillagers[0].birthday < allVillagers[1].birthday){
        allVillagers.sort((a,b)=> (a.birthday < b.birthday ? 1 : -1));
    }
    // if not, then sort Z-A
    else{
        allVillagers.sort((a,b)=> (a.birthday > b.birthday ? 1 : -1));
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
    } 
    // if not clicked then sort Z-A
    else{
        allVillagers.sort((a,b)=> (a.hobby > b.hobby ? 1 : -1));
        hobbyClicked = true;
    }
    // renders villagers sorted alphabetically hobby
    renderManyVillagers(allVillagers);
})

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
