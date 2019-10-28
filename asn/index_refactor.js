const mainPanel = document.getElementById("main_area")
const statsPanel = document.getElementById("stats_area")
const playPanel = document.getElementById("play_area")
const messagePanel = document.getElementById("message_panel")
const dungeonPanel = document.getElementById("play_area")

document.addEventListener('DOMContentLoaded', function(){
	startScreen()
}, false);

const headersObj = {
	"Content-Type": "application/json",
	"Accept": "application/json"
  }

//CHOICES SCREEN START
//This is the screen when you first load up the page
function startScreen(){
	let listChoices = `<h1 onclick="displayList()" id="list">Click Here To List All Characters</h1>
	<h1 onclick="buildChar()" id='build'>Click Here To Build A New Character</h1>
	<h1 onclick="createAccountArea()"id='account'>Click Here To Create A New Account</h1>`
	playPanel.innerHTML += listChoices
}

function createAccountArea(){
	playPanel.innerHTML = ""
	let accountInfo = `<h4 style="margin-left: 12px">Select username</h4>
	<input id="username" style="margin:12px;" type="text" name="Username">
	<h4 style="margin-left: 12px">Enter Password</h4>
	<input id="password" style="margin:12px;" type="text" name"Password">
	<h4 style="margin-left: 12px">Enter Email</h4>
	<input id="email" style="margin:12px;" type="text"><br>
	<button onclick="submitUser()" id="createAcctBtn" style="margin: 18px;"">Click To Create Account </button>`
	playPanel.innerHTML += accountInfo
}

function postUserToDB(){
	let userObj = {
	 	username: document.getElementById("username").value,
	 	password: document.getElementById("password").value,
	 	email: document.getElementById("email").value,
	}
		
	fetch("http://localhost:3000/users",{
		method: "POST",
		headers: headersObj,
		body: JSON.stringify(userObj)			
	})
}

function submitUser(){
	postUserToDB()
	buildChar()
}
//CHOICES SCREEN END

//CHAR CREATE START
//This builds the mechanics needed for me to create a new char
function buildChar(){
	playPanel.innerHTML = " "
	let nameInput= '<input id="inputName" style="margin:12px;"" type="text" name="Char Name">'
	playPanel.innerHTML += nameInput
	let nameSetButton= "<button onclick='addName()' id='name' style='margin:12px;'>Name Character</button>"
	playPanel.innerHTML += nameSetButton
	let submitInput= "<button onclick='createChar()' id='submit' style='margin:12px;'>SUBMIT</button>"
	playPanel.innerHTML += submitInput
	let charPicks = 
	`<h4 id="Title">Select Play Style</h1>
	<button onclick="updateUI('style', 'Wise')" id="Wise">Wise</button>
	<button onclick="updateUI('style', 'Good')" id="Good">Good</button>
	<button onclick="updateUI('style', 'Insane')" id="Insane">Insane</button>
	<h4 id="Title">Select Race</h1>
	<button onclick="updateUI('race', 'Orc')" id="Orc">Orc</button>
	<button onclick="updateUI('race', 'Human')" id="Human">Human</button>
	<button onclick="updateUI('race', 'Dwarf')" id="Dwarf">Dwarf</button>
	<h4 id="Title">Select Profession</h1>
	<button onclick="updateUI('prof', 'Mage')" id="Mage">Mage</button>
	<button onclick="updateUI('prof', 'Warrior')" id="Warrior">Warrior</button>
	<button onclick="updateUI('prof', 'Assassin')" id="Assassin">Assassin</button>`
	playPanel.innerHTML += charPicks
}

class StatBuilder{

	statsData = {
		"none": {"Strength": 0,"Dexterity": 0,"Fortitude": 0,"Wisdom": 0},
		"Wise": {"Strength": 0,"Dexterity": 1,"Fortitude": 1,"Wisdom": 1},
		"Good": {"Strength": 0,"Dexterity": 1,"Fortitude": 1,"Wisdom": 2},
		"Insane": {"Strength": 0,"Dexterity": 1,"Fortitude": 1,"Wisdom": 3},
		"Orc": {"Strength": 0,"Dexterity": 1,"Fortitude": 1,"Wisdom": 4},
		"Human": {"Strength": 0,"Dexterity": 1,"Fortitude": 1,"Wisdom": 5},
		"Dwarf":{"Strength": 0,"Dexterity": 1,"Fortitude": 1,"Wisdom": 6},
		"Warrior":{"Strength": 0,"Dexterity": 1,"Fortitude": 1,"Wisdom": 7},
		"Mage":{"Strength": 0,"Dexterity": 1,"Fortitude": 1,"Wisdom": 8},
		"Assassin":{"Strength": 0,"Dexterity": 1,"Fortitude": 1,"Wisdom": 9}
	}
	
	constructor(){
		this.nameValues = {
			"name": "none",
			"style": "none",
			"race": "none",
			"prof": "none"
		}
	}

	setStats(){
		statsPanel.innerHTML =" "
		let statPanelInfo = `${this.nameValues["name"]}<br>
		${this.nameValues["style"]} ${this.nameValues["race"]} ${this.nameValues["prof"]}<br>
		Strength: ${this.getStatValue("Strength")} <br>
		Dexterity: ${this.getStatValue("Dexterity")} <br>
		Fortitude: ${this.getStatValue("Fortitude")} <br>
		Wisdom: ${this.getStatValue("Wisdom")} <br>`
		statsPanel.innerHTML += statPanelInfo
	}

	getStatValue(stat){
		return this.statsData[this.nameValues["style"]][stat]+this.statsData[this.nameValues["race"]][stat]+this.statsData[this.nameValues["prof"]][stat]
	}

	update(group, value){
		this.nameValues[group] = value
		this.setStats()
	}
}

let statBuilder = new StatBuilder()

function postUserToDB(){
	let userObj = {
		 username: document.getElementById("username").value,
		 password: document.getElementById("password").value,
		 email: document.getElementById("email").value,
	}

	fetch("http://localhost:3000/users",{
		method: "POST",
		headers: headersObj,
		body: JSON.stringify(userObj)			
	})


}

function updateUI(group, value){
	statBuilder.update(group,value)
}

function addName(){
	statBuilder.nameValues["name"] = document.getElementById("inputName").value
	statBuilder.setStats()
}

function createChar(){
	// let total = stats[4]+stats[5]+stats[6]+stats[7]
	if(statBuilder.nameValues["name"] != "none"){
		submitCharToDB()
		dungeonArea()
	}else{
		alert("You appear to be missing something")
	} 		
}

function submitCharToDB(){
	let charObj = {
		name: statBuilder.nameValues["name"],
		style: statBuilder.nameValues["style"],
		race: statBuilder.nameValues["race"],
		prof: statBuilder.nameValues["prof"],
	}
	fetch("http://localhost:3000/characters",{
		method: "POST",
		headers: headersObj,
		body: JSON.stringify(charObj)			
	})
}
//CHAR CREATE END

//DISPLAY CHARS LIST START
function displayList(){
	playPanel.innerHTML = "1 "
	fetch("http://localhost:3000/characters")
	.then(res => res.json())
	.then(charArray => charArray.forEach(char =>{
		playPanel.innerHTML += `<h2 onclick="selectChar(${char.id})" id=${char.id} style='margin-left: 24px;'>${char.id}.${char.name}</h2'><h4 style='margin-left: 24px;'>${char.style} ${char.race} ${char.prof}</h4>`
	}))
}
//DISPLAY CHARS LIST END

//DUNGEON AREA START
//This is where the dungeon area and major play mechanics will happen
function dungeonArea(){
	playPanel.innerHTML = " "
	let horizontalOffset = 0
	let verticalOffset = 0
	let charPosLeft = 0
	let charPosTop = 0
	for( x = 0; x< 135; x++){
		if(horizontalOffset <750){
			dungeonPanel.innerHTML += `<div style="position: absolute; width: 50px; height: 50px; padding-left:${horizontalOffset}px; padding-top: ${verticalOffset}px"><img src="tile0000.png"></div>`
			horizontalOffset +=50
		}else{
			verticalOffset += 50
			horizontalOffset = 0
			dungeonPanel.innerHTML += `<div style="position: absolute; width: 50px; height: 50px; padding-left:${horizontalOffset}px; padding-top: ${verticalOffset}px"><img src="tile0000.png"></div>`
			horizontalOffset +=50
		}
	}
	dungeonPanel.innerHTML += `<div id='me' style="position: absolute; width: 50px; height: 50px; padding-left:${charPosLeft}px; padding-top: ${charPosTop}px"><img src="smiley.png"></div>`
}
//DUNGEON AREA END

//SELECT CHAR SCREEN START
//This will be used to grab any given char from the db and use them to play
function selectChar(id){
	let charChosen = 0
	charChosen = id
	if(charChosen > 0){
		playPanel.innerHTML = ""
		fetch(`http://localhost:3000/characters/${charChosen}`)
		.then(res => res.json())
		// .then(findChar => findChar.forEach(char=>{
		.then(char => {
				statBuilder.nameValues["name"] = char["name"]
				statBuilder.nameValues["style"] = char["style"]
				statBuilder.nameValues["race"] = char["race"]
				statBuilder.nameValues["prof"] = char["prof"]
				statBuilder.setStats()
				dungeonArea()		
			}
		)
	}
}
//SELECT CHAAR SCREEN END

//CREATE ENEMY MONSTER START
class enemyMonster{
	constructor(){
		this.style = style
	}
}
//CREATE ENEMY MONSTER END