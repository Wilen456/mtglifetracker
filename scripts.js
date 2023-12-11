


function toggleTheme() {
    const body = document.body;
    const startbutton=document.startbutton;
    const statsbutton=document.statsbutton;
    body.classList.toggle('dark-theme');
    startbutton.classList.toggle('dark-theme')
    statsbutton.classList.toggle('dark-theme')
    console.log('Theme toggled successfully!');
}

function updatePlayerFields() {
    const playerCount = document.getElementById("player-count").value;
    const playerNamesContainer = document.getElementById("player-names-container");

    // Clear previous player name fields
    playerNamesContainer.innerHTML = "";

    // Generate new player name fields based on the selected player count
    for (let i = 1; i <= playerCount; i++) {
        const label = document.createElement("label");
        label.setAttribute("for", `player${i}-name`);
        label.textContent = `Player ${i} Name:`;

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", `player${i}-name`);
        input.setAttribute("name", `player${i}-name`);
        input.setAttribute("placeholder", `Player ${i} Name`);

        playerNamesContainer.appendChild(label);
        playerNamesContainer.appendChild(input);
    }
}

window.onload = function() {
    updatePlayerFields();
};


function startGame() {
    const playerCount = document.getElementById("player-count").value;
    const startingLife = document.getElementById("starting-life").value;

    // Save starting life total to localStorage
    localStorage.setItem('starting-life', startingLife);
    window.location.href = `game.html?players=${playerCount}`;
}

function savePlayers() {
    const playerCount = document.getElementById("player-count").value;

    const playerNames = [];
    for (let i = 1; i <= playerCount; i++) {
        const playerName = document.getElementById(`player${i}-name`).value || `Player ${i}`;
        playerNames.push(playerName);
    }

    // Log the player names to the console for testing
    console.log(playerNames);

    // Store player names in localStorage
    for (let i = 0; i < playerNames.length; i++) {
        localStorage.setItem(`player${i + 1}-name`, playerNames[i]);
    }
}

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function setupGameLayout() {
    const playerCount = parseInt(getQueryParam('players')) || 1;

    // Load different versions based on the number of players
    if (playerCount === 1) {
        setupForOnePlayer();
    } else if (playerCount === 2) {
        setupForTwoPlayers();
    } else if (playerCount === 3) {
        setupForThreePlayers();
    } else if (playerCount === 4) {
        setupForFourPlayers();
    } else {
        // Handle other cases or provide a default setup
        console.log("Unsupported number of players");
    }

    // Retrieve player names from localStorage
    const player1Name = localStorage.getItem('player1-name') || 'Player 1';
    const player2Name = localStorage.getItem('player2-name') || 'Player 2';
    const player3Name = localStorage.getItem('player3-name') || 'Player 3';
    const player4Name = localStorage.getItem('player4-name') || 'Player 4';

}

function setupForOnePlayer() {
    const singlePlayerSection = document.createElement("div");
    singlePlayerSection.className = "game-section";
    document.body.appendChild(singlePlayerSection);

    const player1Name = document.createElement("div");
    player1Name.className = "player-name";

    // Retrieve player name from local storage, default to 'Player 1' if not found
    const storedPlayer1Name = localStorage.getItem('player1-name') || 'Player 1';

    player1Name.textContent = storedPlayer1Name;
    singlePlayerSection.appendChild(player1Name);

    const startingLife = localStorage.getItem('starting-life') || 20;
    setupLifeCounter(singlePlayerSection, startingLife);
}

function setupForTwoPlayers() {

    
    const topSection = document.createElement("div");
    topSection.className = "game-section";
    document.body.appendChild(topSection);

    const bottomSection = document.createElement("div");
    bottomSection.className = "game-section";
    document.body.appendChild(bottomSection);

    const player1Name = document.createElement("div");
    player1Name.className = "player-name";
    const storedPlayer1Name = localStorage.getItem('player1-name') || 'Player 1';
    player1Name.textContent = storedPlayer1Name;
    topSection.appendChild(player1Name);

    const player2Name = document.createElement("div");
    player2Name.className = "player-name";
    const storedPlayer2Name = localStorage.getItem('player2-name') || 'Player 2';
    player2Name.textContent = storedPlayer2Name;
    bottomSection.appendChild(player2Name);

    const startingLife = localStorage.getItem('starting-life') || 20;

    setupLifeCounter(topSection, startingLife);
    setupLifeCounter(bottomSection, startingLife);
} 

function setupForThreePlayers() {
    const topHalf = document.createElement("div");
    topHalf.className = "top-half";
    document.body.appendChild(topHalf);

    const topSectionLeft = document.createElement("div");
    topSectionLeft.className = "game-section";
    topHalf.appendChild(topSectionLeft);

    const topSectionRight = document.createElement("div");
    topSectionRight.className = "game-section";
    topHalf.appendChild(topSectionRight);

    const bottomSection = document.createElement("div");
    bottomSection.className = "game-section";
    document.body.appendChild(bottomSection);

    const player1Name = document.createElement("div");
    player1Name.className = "player-name";
    const storedPlayer1Name = localStorage.getItem('player1-name') || 'Player 1';
    player1Name.textContent = storedPlayer1Name;
    topSectionLeft.appendChild(player1Name);

    const player2Name = document.createElement("div");
    player2Name.className = "player-name";
    const storedPlayer2Name = localStorage.getItem('player2-name') || 'Player 2';
    player2Name.textContent = storedPlayer2Name;
    topSectionRight.appendChild(player2Name);

    const player3Name = document.createElement("div");
    player3Name.className = "player-name";
    const storedPlayer3Name = localStorage.getItem('player3-name') || 'Player 3';
    player3Name.textContent = storedPlayer3Name;
    bottomSection.appendChild(player3Name);

    const startingLife = localStorage.getItem('starting-life') || 20;

    setupLifeCounter(topSectionLeft, startingLife);
    setupLifeCounter(topSectionRight, startingLife);
    setupLifeCounter(bottomSection, startingLife);
}

function setupForFourPlayers() {
    const topHalf = document.createElement("div");
    topHalf.className = "top-half";
    document.body.appendChild(topHalf);

    const topSectionLeft = document.createElement("div");
    topSectionLeft.className = "game-section";
    topHalf.appendChild(topSectionLeft);

    const topSectionRight = document.createElement("div");
    topSectionRight.className = "game-section";
    topHalf.appendChild(topSectionRight);

    const bottomHalf = document.createElement("div");
    bottomHalf.className = "top-half"; 
    document.body.appendChild(bottomHalf);

    const bottomSectionLeft = document.createElement("div");
    bottomSectionLeft.className = "game-section";
    bottomHalf.appendChild(bottomSectionLeft);

    const bottomSectionRight = document.createElement("div");
    bottomSectionRight.className = "game-section";
    bottomHalf.appendChild(bottomSectionRight);

    const player1Name = document.createElement("div");
    player1Name.className = "player-name";
    const storedPlayer1Name = localStorage.getItem('player1-name') || 'Player 1';
    player1Name.textContent = storedPlayer1Name;
    topSectionLeft.appendChild(player1Name);

    const player2Name = document.createElement("div");
    player2Name.className = "player-name";
    const storedPlayer2Name = localStorage.getItem('player2-name') || 'Player 2';
    player2Name.textContent = storedPlayer2Name;
    topSectionRight.appendChild(player2Name);

    const player3Name = document.createElement("div");
    player3Name.className = "player-name";
    const storedPlayer3Name = localStorage.getItem('player3-name') || 'Player 3';
    player3Name.textContent = storedPlayer3Name;
    bottomSectionLeft.appendChild(player3Name);

    const player4Name = document.createElement("div");
    player4Name.className = "player-name";
    const storedPlayer4Name = localStorage.getItem('player4-name') || 'Player 4';
    player4Name.textContent = storedPlayer4Name;
    bottomSectionRight.appendChild(player4Name);

    const startingLife = localStorage.getItem('starting-life') || 20;

    setupLifeCounter(topSectionLeft, startingLife);

    setupLifeCounter(topSectionRight, startingLife);

    setupLifeCounter(bottomSectionLeft, startingLife);

    setupLifeCounter(bottomSectionRight, startingLife);
}

function addLifeTotalListeners(playerSection) {
    playerSection.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        decreaseLifeTotal(playerSection);
    });

    playerSection.addEventListener("click", () => {
        increaseLifeTotal(playerSection);
    });
}

function setupLifeCounter(playerSection, startingLife, playerName) {
    const lifeCounter = document.createElement("div");
    lifeCounter.className = "life-counter";
    lifeCounter.textContent = startingLife;

    // Add event listeners to update life total on click
    lifeCounter.addEventListener("click", function () {
        const currentLife = parseInt(lifeCounter.textContent);
        lifeCounter.textContent = currentLife + 1;
    });


    lifeCounter.addEventListener("contextmenu", function (event) {
        event.preventDefault(); // Prevent the default right-click context menu
        const currentLife = parseInt(lifeCounter.textContent);
        lifeCounter.textContent = currentLife - 1;
    });

    playerSection.appendChild(lifeCounter);

    // Create commander damage tracker
    const commanderDamageCounter = document.createElement("div");
    commanderDamageCounter.className = "commander-damage";
    commanderDamageCounter.textContent = "0"; // Initial commander damage

    // Add event listeners to update commander damage on click
    commanderDamageCounter.addEventListener("click", function () {
        const currentDamage = parseInt(commanderDamageCounter.textContent);
        commanderDamageCounter.textContent = currentDamage + 1;
    });

    // Add event listeners to update commander damage on right-click (contextmenu)
    commanderDamageCounter.addEventListener("contextmenu", function (event) {
        event.preventDefault(); // Prevent the default right-click context menu
        const currentDamage = parseInt(commanderDamageCounter.textContent);
        commanderDamageCounter.textContent = Math.max(0, currentDamage - 1); // Ensure damage doesn't go below 0
    });

    // Create label for commander damage tracker
    const commanderLabel = document.createElement("div");
    commanderLabel.className = "commander-label";
    commanderLabel.textContent = `Commander Damage (${playerName}):`;

    playerSection.appendChild(commanderLabel);
    playerSection.appendChild(commanderDamageCounter);
}

function increaseLifeTotal(playerSection) {
    let lifeCounter = playerSection.querySelector(".life-counter");
    let currentLife = parseInt(lifeCounter.textContent);
    lifeCounter.textContent = currentLife + 1;
}

function decreaseLifeTotal(playerSection) {
    let lifeCounter = playerSection.querySelector(".life-counter");
    let currentLife = parseInt(lifeCounter.textContent);
    if (currentLife > 0) {
        lifeCounter.textContent = currentLife - 1;
    }
}

function setupLifeCounter(playerSection, startingLife) {
    const lifeCounter = document.createElement("div");
    lifeCounter.className = "life-counter";
    lifeCounter.textContent = startingLife;

    // Center the life counter
    lifeCounter.style.position = "absolute";
    lifeCounter.style.top = "50%";
    lifeCounter.style.left = "50%";
    lifeCounter.style.transform = "translate(-50%, -50%)";
    lifeCounter.style.fontSize = "24px";

    // Add event listeners to update life total on click
    lifeCounter.addEventListener("click", function () {
        increaseLifeTotal(playerSection);
    });

    // Add event listeners to update life total on right-click (contextmenu)
    lifeCounter.addEventListener("contextmenu", function (event) {
        event.preventDefault(); // Prevent the default right-click context menu
        decreaseLifeTotal(playerSection);
    });

    playerSection.appendChild(lifeCounter);
}


function getStartingLifeTotal() {
    const startingLifeInput = document.getElementById("starting-life");

    // Check if the element exists before accessing its value
    if (startingLifeInput && !isNaN(startingLifeInput.value)) {
        return parseInt(startingLifeInput.value);
    } else {
        // Provide a default value if the element is not found or the value is not a number
        return 20;
    }
}