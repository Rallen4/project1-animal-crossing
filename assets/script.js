var mainContent = document.querySelector(".content");
var allFish = [];
var allSeaCreatures = [];
var allBugs = [];
var allFossils = [];
var allArt = [];
var allSongs = [];

var rarityCommonEl = document.getElementById("rarity-common");
var rarityRareEl = document.getElementById("rarity-rare")
var rarityUncommonEl = document.getElementById("rarity-uncommon")
var rarityUltraRareEl = document.getElementById("rarity-ultra-rare")
var locationSeaEl = document.getElementById("location-sea")
var locationRiverEl = document.getElementById("location-river")
var locationPondEl = document.getElementById("location-pond")
var locationPierEl = document.getElementById("location-pier")
var locationRocksEl = document.getElementById("location-rocks")
var locationGroundEl = document.getElementById("location-ground")
var locationTreesEl = document.getElementById("location-trees")
var locationFlyingEl = document.getElementById("location-flying")
var locationOtherEl = document.getElementById("location-other")
var priceFilter0kEl = document.getElementById("price-filter-0k")
var priceFilter5kEl = document.getElementById("price-filter-5k")
var priceFilter10kEl = document.getElementById("price-filter-10k")


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
            allFish.push(data);
            renderFish();
            clearClicking();
            sakanaButtons();
        });
};

function renderFish() {
    DeleteRows();
    for (let i = 0; i < allFish[0].length; i++) {
        var newRow = mainContent.insertRow(1);
        // inserts a cell in the first column "checkbox"
        var colCheckbox = newRow.insertCell(0);
        // creates a checkbox in that cell
        colCheckbox.innerHTML = `<label>
        <input class="fish line-item" onclick="toggleCompletionFish(event)" type="checkbox" data-completed=false data-fish-id="` + allFish[0][i].name['name-USen'] + `"/>
        <span></span>
        </label>`;
        // insert a cell in the second column "image"
        var colImg = newRow.insertCell(1);
        // populating cell with img
        colImg.innerHTML = `<img src="` + allFish[0][i].image_uri + `" style="width:48px" alt="item img">`;
        // create Name cell
        var colName = newRow.insertCell(2);
        // add name to name cell
        colName.innerText = allFish[0][i].name['name-USen'];
        // create Location cell
        var colLocation = newRow.insertCell(3);
        // add class to Location
        $(colLocation).addClass("location-item");
        // add Location to Location Cell
        colLocation.innerText = allFish[0][i].availability.location;
        // Create Rarity cell
        var colRarity = newRow.insertCell(4);
        // add class to rarity
        $(colRarity).addClass("rarity-item");
        // add rarity to rarity cell
        colRarity.innerText = allFish[0][i].availability.rarity;
        // create price cell
        var colPrice = newRow.insertCell(5);
        // add class to price cell
        $(colPrice).addClass("price-item");
        // add price to price cell
        colPrice.innerText = allFish[0][i].price.toLocaleString();
        // Create Months Cell
        var colMonths = newRow.insertCell(6);
        // add months to months cell
        colMonths.innerText = allFish[0][i].availability["month-northern"];

        var fishName = allFish[0][i].name['name-USen'];
        var checkbox = document.querySelector(`input[data-fish-id="` + fishName + `"]`);
        var fishValue = localStorage.getItem(fishName);

        if (localStorage.getItem(fishName) == undefined) {
            localStorage.setItem(fishName, checkbox.checked);
        } else {
            checkbox.checked = fishValue == "true"
        }
    }
}

function sakanaButtons(){
    var fishNameClicked = true;
    var fishLocationClicked = true;
    var fishRarityClicked = true;
    var fishPriceClicked = true;
    var fishMonthsClicked = true;

    $("#header-name").on("click", function(event) {
        // click to sort by name
        event.preventDefault();
        // deletes the previously rendered rows 
        DeleteRows();
        // if the first row is lower than the second row then sort by A-Z
        if (fishNameClicked){
            allFish[0].sort((a,b)=> (a.name["name-USen"] < b.name["name-USen"] ? 1 : -1));
            fishNameClicked = false;
        } 
        // if not, then sort Z-A
        else{
            allFish[0].sort((a,b)=> (a.name["name-USen"] > b.name["name-USen"] ? 1 : -1));
            fishNameClicked = true;
        }  
        // render fish in the sorted by name array onto page
        renderFish(allFish[0]);
    })

    $("#header-location").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (fishLocationClicked){
            allFish[0].sort((a,b)=> (a.availability.location < b.availability.location ? 1 : -1));
            fishLocationClicked = false;
        }else{
            allFish[0].sort((a,b)=> (a.availability.location > b.availability.location ? 1 : -1));
            fishLocationClicked = true;
        }  
        renderFish(allFish[0]);
    })

    $("#header-rarity").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (fishRarityClicked){
            allFish[0].sort((a,b)=> (a.availability.rarity < b.availability.rarity ? 1 : -1));
            fishRarityClicked = false;
        }else{
            allFish[0].sort((a,b)=> (a.availability.rarity > b.availability.rarity ? 1 : -1));
            fishRarityClicked = true;
        }  
        renderFish(allFish[0]);
    })

    $("#header-price").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (fishPriceClicked){
            allFish[0].sort((a,b)=> (a.price < b.price ? 1 : -1));
            fishPriceClicked = false;
        }else{
            allFish[0].sort((a,b)=> (a.price > b.price ? 1 : -1));
            fishPriceClicked = true;
        }  
        renderFish(allFish[0]);
    })

    $("#header-months").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (fishMonthsClicked){
            allFish[0].sort((a,b)=> (a.availability["month-northern"] < b.availability["month-northern"] ? 1 : -1));
            fishMonthsClicked = false;
        }else{
            allFish[0].sort((a,b)=> (a.availability["month-northern"] > b.availability["month-northern"] ? 1 : -1));
            fishMonthsClicked = true;
        }  
        renderFish(allFish[0]);
    })
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

    // filter out completed items
    if ($("#name")[0].checked == true) {
        $(".line-item").each(function () {
            if ($(this)[0].checked == true) {
                $(this).parent().parent().parent().css("display", "none")
            }
        })
    }

    // Show only Common
    if (rarityCommonEl.checked == true) {
        $(".rarity-item").each(function () {
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
            if (!($(this)[0].innerText.includes("Sea"))) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only River
    if (locationRiverEl.checked == true) {
        $(".location-item").each(function () {
            if (!($(this)[0].innerText.includes("River"))) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only Pond
    if (locationPondEl.checked == true) {
        $(".location-item").each(function () {
            if (!($(this)[0].innerText.includes("Pond"))) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only Pier
    if (locationPierEl.checked == true) {
        $(".location-item").each(function () {
            if (!($(this)[0].innerText.includes("Pier"))) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only 0-5000
    if (priceFilter0kEl.checked == true) {
        $(".price-item").each(function () {
            if ($(this)[0].innerText > 5000) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only 5001-10000
    if (priceFilter5kEl.checked == true) {
        $(".price-item").each(function () {
            if ($(this)[0].innerText < 5000 || $(this)[0].innerText > 9999) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only 10000+
    if (priceFilter10kEl.checked == true) {
        $(".price-item").each(function () {
            if ($(this)[0].innerText < 10000) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only rocks
    if (locationRocksEl.checked == true) {
        $(".location-item").each(function () {
            if(!($(this)[0].innerText.includes("rock"))) {
                $(this).parent().css("display", "none")
            }
        })
    }
    // show only Ground
    if (locationGroundEl.checked == true) {
        $(".location-item").each(function () {
            if(!($(this)[0].innerText.includes("ground"))) {
                $(this).parent().css("display", "none")
            }
        })
    }
    // show only Trees
    if (locationTreesEl.checked == true) {
        $(".location-item").each(function () {
            if(!($(this)[0].innerText.includes("tree"))) {
                $(this).parent().css("display", "none")
            }
        })
    }
    // show only flying
    if (locationFlyingEl.checked == true) {
        $(".location-item").each(function () {
            if(!($(this)[0].innerText.includes("Flying"))) {
                $(this).parent().css("display", "none")
            }
        })
    }
    // show only Other
    if (locationOtherEl.checked == true) {
        $(".location-item").each(function () {
            if(($(this)[0].innerText.includes("rock")) || ($(this)[0].innerText.includes("tree")) || ($(this)[0].innerText.includes("ground"))) {
                $(this).parent().css("display", "none")
            } 
        })
    }

}

function getSeaCreatures() { 
    DeleteRows();
    clearClicking();
    // define URL for API
    var requestUrl = "https://acnhapi.com/v1/sea/";
    // fetching data of API
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        // reformatting data to fit needs
        .then(function (data) {
            data = Object.values(data);
            allSeaCreatures.push(data)
            renderSeaCreatures();
            umiButtons();
        })
}

function renderSeaCreatures() {
    DeleteRows();
    for (let i = 0; i < allSeaCreatures[0].length; i++) {
        var newRow = mainContent.insertRow(1);
        // inserts a cell in the first column "checkbox"
        var colCheckbox = newRow.insertCell(0);
        // creates a checkbox in that cell
        colCheckbox.innerHTML = `<label>
        <input class="sea-creatures" onclick="toggleCompletionSea(event)" type="checkbox" data-completed=false data-sea-id="` + allSeaCreatures[0][i].name['name-USen'] + `"/>
        <span></span>
        </label>`;
        // insert a cell in the second column "image"
        var colImg = newRow.insertCell(1);
        // populating cell with img
        colImg.innerHTML = `<img src="` + allSeaCreatures[0][i].image_uri + `" style="width:48px" alt="item img">`;
        // create Name cell
        var colName = newRow.insertCell(2);
        // add name to name cell
        colName.innerText = allSeaCreatures[0][i].name['name-USen'];
        // create Location cell
        var colLocation = newRow.insertCell(3);
        // add Location to Location Cell
        colLocation.innerText = "Deep Sea diving";
        // Create Rarity cell
        var colRarity = newRow.insertCell(4);
        // add rarity to rarity cell
        colRarity.innerText = "N/A";
        // create price cell
        var colPrice = newRow.insertCell(5);
        // add class to price cell
        $(colPrice).addClass("price-item");
        // add price to price cell
        colPrice.innerText = allSeaCreatures[0][i].price.toLocaleString();
        // Create Months Cell
        var colMonths = newRow.insertCell(6);
        // add months to months cell
        colMonths.innerText = allSeaCreatures[0][i].availability["month-northern"];

        var seaName = allSeaCreatures[0][i].name['name-USen'];
        var checkbox = document.querySelector(`input[data-sea-id="` + seaName + `"]`);
        var seaValue = localStorage.getItem(seaName)
        if (localStorage.getItem(seaName) == undefined) {
            localStorage.setItem(seaName, checkbox.checked);
        } else {
            checkbox.checked = seaValue == "true"
        }
    }
}

function clearClicking(){
    $("#header-name").off()
    $("#header-location").off()
    $("#header-rarity").off()
    $("#header-price").off()
    $("#header-months").off()
}

function umiButtons(){
    var seaNameClicked = true;
    $("#header-name").on("click", function(event) {
        // click to sort by name
        event.preventDefault();
        // deletes the previously rendered rows 
        DeleteRows();
        // if the first row is lower than the second row then sort by A-Z
        if (seaNameClicked){
            allSeaCreatures[0].sort((a,b)=> (a.name["name-USen"] < b.name["name-USen"] ? 1 : -1));
            seaNameClicked = false;
        } 
        // if not, then sort Z-A
        else{
            allSeaCreatures[0].sort((a,b)=> (a.name["name-USen"] > b.name["name-USen"] ? 1 : -1));
            seaNameClicked = true;
        }  
        // render fish in the sorted by name array onto page
        renderSeaCreatures(allSeaCreatures[0]);
    })
    
    var seaPriceClicked = true;
    $("#header-price").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (seaPriceClicked){
            allSeaCreatures[0].sort((a,b)=> (a.price < b.price ? 1 : -1));
            seaPriceClicked = false;
        }else{
            allSeaCreatures[0].sort((a,b)=> (a.price > b.price ? 1 : -1));
            seaPriceClicked = true;
        }  
        renderSeaCreatures(allSeaCreatures[0]);
    })
    
    var seaMonthsClicked = true;
    $("#header-months").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (seaMonthsClicked){
            allSeaCreatures[0].sort((a,b)=> (a.availability["month-northern"] < b.availability["month-northern"] ? 1 : -1));
            seaMonthsClicked = false;
        }else{
            allSeaCreatures[0].sort((a,b)=> (a.availability["month-northern"] > b.availability["month-northern"] ? 1 : -1));
            seaMonthsClicked = true;
        }  
        renderSeaCreatures(allSeaCreatures[0]);
    })
}

function getBugs() {
    clearClicking();
    DeleteRows();
    var requestUrl = "https://acnhapi.com/v1/bugs/"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data = Object.values(data);
            console.log(data);
            allBugs.push(data);
            renderBugs();
            mushiButtons();
        }
        )
}

function renderBugs() {
    DeleteRows();
    for (let i = 0; i < allBugs[0].length; i++) {
        // create new row under the header
        var newRow = mainContent.insertRow(1);
        // inserts a cell in the first column "checkbox"
        var colCheckbox = newRow.insertCell(0)
        // creates a checkbox in that cell
        colCheckbox.innerHTML = `<label>
        <input class="bugs" onclick="toggleCompletionBug(event)" type="checkbox" data-completed=false data-bug-id="` + allBugs[0][i].name['name-USen'] + `"/>
        <span></span>
      </label>`
        // insert a cell in the second column "image"
        var colImg = newRow.insertCell(1);
        // populating cell with img
        colImg.innerHTML = `<img src="` + allBugs[0][i].image_uri + `" style="width:48px" alt="item img">`;
        // create Name cell
        var colName = newRow.insertCell(2);
        // add name to name cell
        colName.innerText = allBugs[0][i].name['name-USen'];
        // create Location cell
        var colLocation = newRow.insertCell(3);
        // add class to Location
        $(colLocation).addClass("location-item")
        // add Location to Location Cell
        colLocation.innerText = allBugs[0][i].availability.location;
        // Create Rarity cell
        var colRarity = newRow.insertCell(4);
        // add class to rarity
        $(colRarity).addClass("rarity-item")
        // add rarity to rarity cell
        colRarity.innerText = allBugs[0][i].availability.rarity;
        // create price cell
        var colPrice = newRow.insertCell(5);
        // add class to price cell
        $(colPrice).addClass("price-item")
        // add price to price cell
        colPrice.innerText = allBugs[0][i].price.toLocaleString();
        // Create Months Cell
        var colMonths = newRow.insertCell(6);
        // add months to months cell
        colMonths.innerText = allBugs[0][i].availability["month-northern"];

        var bugName = allBugs[0][i].name['name-USen'];
        var checkbox = document.querySelector(`input[data-bug-id="` + bugName + `"]`);
        var bugValue = localStorage.getItem(bugName)

        if (localStorage.getItem(bugName) == undefined) {
            localStorage.setItem(bugName, checkbox.checked);
        } else {
            checkbox.checked = bugValue == "true"
        }
    }
}

function mushiButtons(){
    var bugNameClicked = true;
    var bugLocationClicked = true;
    var bugRarityClicked = true;
    var bugPriceClicked = true;
    var bugMonthsClicked = true;

    $("#header-name").on("click", function(event) {
        // click to sort by name
        event.preventDefault();
        // deletes the previously rendered rows 
        DeleteRows();
        // if the first row is lower than the second row then sort by A-Z
        if (bugNameClicked){
            allBugs[0].sort((a,b)=> (a.name["name-USen"] < b.name["name-USen"] ? 1 : -1));
            bugNameClicked = false;
        } 
        // if not, then sort Z-A
        else{
            allBugs[0].sort((a,b)=> (a.name["name-USen"] > b.name["name-USen"] ? 1 : -1));
            bugNameClicked = true;
        }  
        // render fish in the sorted by name array onto page
        renderBugs(allBugs[0]);
    })

    $("#header-location").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (bugLocationClicked){
            allBugs[0].sort((a,b)=> (a.availability.location < b.availability.location ? 1 : -1));
            bugLocationClicked = false;
        }else{
            allBugs[0].sort((a,b)=> (a.availability.location > b.availability.location ? 1 : -1));
            bugLocationClicked = true;
        }  
        renderBugs(allBugs[0]);
    })

    $("#header-rarity").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (bugRarityClicked){
            allBugs[0].sort((a,b)=> (a.availability.rarity < b.availability.rarity ? 1 : -1));
            bugRarityClicked = false;
        }else{
            allBugs[0].sort((a,b)=> (a.availability.rarity > b.availability.rarity ? 1 : -1));
            bugRarityClicked = true;
        }  
        renderBugs(allBugs[0]);
    })

    $("#header-price").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (bugPriceClicked){
            allBugs[0].sort((a,b)=> (a.price < b.price ? 1 : -1));
            bugPriceClicked = false;
        }else{
            allBugs[0].sort((a,b)=> (a.price > b.price ? 1 : -1));
            bugPriceClicked = true;
        }  
        renderBugs(allBugs[0]);
    })

    $("#header-months").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (bugMonthsClicked){
            allBugs[0].sort((a,b)=> (a.availability["month-northern"] < b.availability["month-northern"] ? 1 : -1));
            bugMonthsClicked = false;
        }else{
            allBugs[0].sort((a,b)=> (a.availability["month-northern"] > b.availability["month-northern"] ? 1 : -1));
            bugMonthsClicked = true;
        }  
        renderBugs(allBugs[0]);
    })
}

function getFossils() {
    DeleteRows();
    clearClicking();
    var requestUrl = "https://acnhapi.com/v1/fossils/"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data = Object.values(data);
            allFossils.push(data);
            renderFossils();
            kasekiButtons();
        }
        )
}

function renderFossils() {
    DeleteRows();
    for(i=0; i<allFossils[0].length; i++){
        // create new row under the header
        var newRow = mainContent.insertRow(1);
        // inserts a cell in the first column "checkbox"
        var colCheckbox = newRow.insertCell(0)
        // creates a checkbox in that cell
        colCheckbox.innerHTML = `<label>
        <input class="fossils" onclick="toggleCompletionFossil(event)" type="checkbox" data-completed=false data-fossil-id="` + allFossils[0][i].name['name-USen'] + `"/>
        <span></span>
        </label>`
        // insert a cell in the second column "image"
        var colImg = newRow.insertCell(1);
        // populating cell with img
        colImg.innerHTML = `<img src="` + allFossils[0][i].image_uri + `" style="width:48px" alt="item img">`;
        // create Name cell
        var colName = newRow.insertCell(2);
        // add name to name cell
        colName.innerText = allFossils[0][i].name['name-USen'];
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
        colPrice.innerText = allFossils[0][i].price;
        // Create Months Cell
        var colMonths = newRow.insertCell(6);
        // add months to months cell
        colMonths.innerText = "N/A";

        var fossilName = allFossils[0][i].name['name-USen'];
        var checkbox = document.querySelector(`input[data-fossil-id="` + fossilName + `"]`);
        var fossilValue = localStorage.getItem(fossilName)

        if (localStorage.getItem(fossilName) == undefined) {
            localStorage.setItem(fossilName, checkbox.checked);
        } else {
            checkbox.checked = fossilValue == "true"
        }
    }
}

function kasekiButtons (){
    var fossilNameClicked = true;
    $("#header-name").on("click", function(event) {
        // click to sort by name
        event.preventDefault();
        // deletes the previously rendered rows 
        DeleteRows();
        // if the first row is lower than the second row then sort by A-Z
        if (fossilNameClicked){
            allFossils[0].sort((a,b)=> (a.name["name-USen"] < b.name["name-USen"] ? 1 : -1));
            fossilNameClicked = false;
        } 
        // if not, then sort Z-A
        else{
            allFossils[0].sort((a,b)=> (a.name["name-USen"] > b.name["name-USen"] ? 1 : -1));
            fossilNameClicked = true;
        }  
        // render fossils in the sorted by name array onto page
        renderFossils(allFossils[0]);
    })

    var fossilPriceClicked = true;
    $("#header-price").on("click",function (event) {
        event.preventDefault();
        DeleteRows();
        if (fossilPriceClicked){
            allFossils[0].sort((a,b)=> (a.price < b.price ? 1 : -1));
            fossilPriceClicked = false;
        }else{
            allFossils[0].sort((a,b)=> (a.price > b.price ? 1 : -1));
            fossilPriceClicked = true;
        }  
        renderFossils(allFossils[0]);
    })
}

function getSongs() {
    DeleteRows();
    clearClicking();
    var requestUrl = "https://acnhapi.com/v1/songs/"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data = Object.values(data);
            allSongs.push(data);
            renderSongs();
            utaButtons();
        }
        )
}

function renderSongs(){
    DeleteRows();
    for (let i = 0; i < allSongs[0].length; i++) {
        // create new row under the header
        var newRow = mainContent.insertRow(1);
        // inserts a cell in the first column "checkbox"
        var colCheckbox = newRow.insertCell(0)
        // creates a checkbox in that cell
        colCheckbox.innerHTML = `<label>
        <input class="songs" onclick="toggleCompletionSong(event)" type="checkbox" data-completed=false data-song-id="` + allSongs[0][i].name['name-USen'] + `"/>
        <span></span>
        </label>`
        // insert a cell in the second column "image"
        var colImg = newRow.insertCell(1);
        // populating cell with img
        colImg.innerHTML = `<img src="` + allSongs[0][i].image_uri + `" style="width:48px" alt="item img">`;
        // create Name cell
        var colName = newRow.insertCell(2);
        // add name to name cell
        colName.innerText = allSongs[0][i].name['name-USen'];
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
        colPrice.innerText = "N/A"
        // Create Months Cell
        var colMonths = newRow.insertCell(6);
        // add months to months cell
        colMonths.innerText = "N/A";

        var songName = allSongs[0][i].name['name-USen'];
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
    }
}

function utaButtons (){
    var songNameClicked = true;
    $("#header-name").on("click", function(event) {
        // click to sort by name
        event.preventDefault();
        // deletes the previously rendered rows 
        DeleteRows();
        // if the first row is lower than the second row then sort by A-Z
        if (songNameClicked){
            allSongs[0].sort((a,b)=> (a.name["name-USen"] < b.name["name-USen"] ? 1 : -1));
            songNameClicked = false;
        } 
        // if not, then sort Z-A
        else{
            allSongs[0].sort((a,b)=> (a.name["name-USen"] > b.name["name-USen"] ? 1 : -1));
            songNameClicked = true;
        }  
        // render songs in the sorted by name array onto page
        renderSongs(allSongs[0]);
    })
}


function getArt() {
    DeleteRows();
    clearClicking();
    var requestUrl = "https://acnhapi.com/v1/art/"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data = Object.values(data);
            allArt.push(data);
            renderArt();
            bijutsuButtons();
        }
        )
}

function renderArt(){
    DeleteRows();
    for (let i = 0; i < allArt[0].length; i++) {
        const element = allArt[0][i];
        // create new row under the header
        var newRow = mainContent.insertRow(1);
        // inserts a cell in the first column "checkbox"
        var colCheckbox = newRow.insertCell(0)
        // creates a checkbox in that cell
        colCheckbox.innerHTML = `<label>
        <input class="art" onclick="toggleCompletionArt(event)" type="checkbox" data-completed=false data-art-id="` + allArt[0][i].name['name-USen'] + `"/>
        <span></span>
      </label>`
        // insert a cell in the second column "image"
        var colImg = newRow.insertCell(1);
        // populating cell with img
        colImg.innerHTML = `<img src="` + allArt[0][i].image_uri + `" style="width:48px" alt="item img">`;
        // create Name cell
        var colName = newRow.insertCell(2);
        // add name to name cell
        colName.innerText = allArt[0][i].name['name-USen'];
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

        var artName = allArt[0][i].name['name-USen'];
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
    }
}

function bijutsuButtons(){
    var artNameClicked = true;
    $("#header-name").on("click", function(event) {
        // click to sort by name
        event.preventDefault();
        // deletes the previously rendered rows 
        DeleteRows();
        // if the first row is lower than the second row then sort by A-Z
        if (artNameClicked){
            allArt[0].sort((a,b)=> (a.name["name-USen"] < b.name["name-USen"] ? 1 : -1));
            artNameClicked = false;
        } 
        // if not, then sort Z-A
        else{
            allArt[0].sort((a,b)=> (a.name["name-USen"] > b.name["name-USen"] ? 1 : -1));
            artNameClicked = true;
        }  
        // render songs in the sorted by name array onto page
        renderArt(allArt[0]);
    })
}

$('#mod-btn').on('click', function() {
    $('#creator-modal').show();
});

$('#title-btn').on('click', function() {
    $('#title-modal').show();
});
