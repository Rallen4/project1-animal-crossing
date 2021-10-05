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

function toggleCompletion(event) {
  var checked = event.target.checked;
  var fishName = event.target.getAttribute("data-fish-id");
  localStorage.setItem(fishName, checked);
}

function DeleteRows() {
  var rowCount = mainContent.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    mainContent.deleteRow(i);
  }
}

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
              </label>`;
        // insert a cell in the second column "image"
        var colImg = newRow.insertCell(1);
        // populating cell with img
        colImg.innerHTML =
          `<img src="` + e.image_uri + `" style="width:48px" alt="item img">`;
        // create Name cell
        var colName = newRow.insertCell(2);
        // add name to name cell
        colName.innerText = e.name["name-USen"];
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
    });
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

function getFossils() {
  var fossilUrl = "http://acnhapi.com/v1/fossils/";

  fetch(fossilUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var allData = data;
      // new array data for fossils
      var fossilNames = Object.keys(allData);
      // push into empty array to be used for URLs
      allFossils.push(fossilNames);
    });
}

function getSongs() {
  var songUrl = "http://acnhapi.com/v1/songs/";

  fetch(songUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var allData = data;
    });
}

function getArt() {
  var artUrl = "http://acnhapi.com/v1/art/";

  fetch(artUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var allData = data;
    });
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
