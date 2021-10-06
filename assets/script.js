var mainContent = document.querySelector(".content");
var allFish = [];
var allSeaCreatures = [];
var allBugs = [];
var allFossils = [];
var allNames = [];

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
    DeleteRows();
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
            allFish.push(data)
            console.log(allFish)

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
        $("#location-sea").each(function () {
            if (!($(this)[0].includes("Sea"))) {
                $(this).parent().css('display', 'none')
            }
        })
    }
    // show only River
    if (locationRiverEl.checked == true) {
        $("#location-river").each(function () {
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

$('#mod-btn').on('click', function() {
    $('#creator-modal').show();
});