const mainPanel = document.getElementById("main_area")
const statsPanel = document.getElementById("stats_area")
const playPanelCharSelect = document.getElementById("play_area")
const playPanelStart = document.getElementById("play_area")
const playPanel = document.getElementById("play_area")
const messagePanel = document.getElementById("message_panel")
const dungeonPanel = document.getElementById("play_area")

playPanel.addEventListener("click",createChar)
playPanelStart.addEventListener("click", startChoices)
playPanelCharSelect.addEventListener("click", selectChar)
dungeonPanel.addEventListener("keydown", toonMovement)

var stats = [0,0,0,0,0,0,0,0]
var tempStyle = [0,0,0,0]
var tempRace = [0,0,0,0]
var tempProf = [0,0,0,0]

const headersObj = {
      "Content-Type": "application/json",
      "Accept": "application/json"
  }

document.addEventListener('DOMContentLoaded', function(){
	startScreen()
}, false);

//CHOICES SCREEN START
//This is the screen when you first load up the page
function startScreen(){
	let listChar = "<h1 id='list'>Click Here To List All Characters</h1>"
	playPanelStart.innerHTML += listChar
	let buildNewChar = "<h1 id='build'>Click Here To Build A New Character</h1>"
	playPanelStart.innerHTML += buildNewChar
	let createAccount = "<h1 id='account'>Click Here To Create A New Account</h1>"
	playPanelStart.innerHTML += createAccount
}

function startChoices(e){
	let choices = e.target.id

	switch(choices){
		case "build":
			playPanel.innerHTML = " "
			buildChar()
			break;
		case "list":
			playPanel.innerHTML = " "
			displayList()
			break;
		case "account":
			playPanel.innerHTML = " "
			createAccountArea()
			break;
		case "createAcctBtn":
			postUserToDB()
			playPanel.innerHTML = " "
			buildChar()
			break;
	}

	function createAccountArea(){
		let item1 = "<h4 style='margin-left: 12px'>Select username</4e>"
		playPanel.innerHTML += item1
		let createUsername= "<input id='username' style='margin:12px;' type='text' name='Username'>"
		playPanel.innerHTML += createUsername
		let item2 = "<h4 style='margin-left: 12px'>Select username</4e>"
		playPanel.innerHTML += item2
		let createPassword= "<input id='password' style='margin:12px;' type='text'>"
		playPanel.innerHTML += createPassword
		let item3 = "<h4 style='margin-left: 12px'>Select username</4e>"
		playPanel.innerHTML += item3
		let createEmail= "<input id='email' style='margin:12px;' type='text'><br>"
		playPanel.innerHTML += createEmail
		let createAccountBtn = "<button id='createAcctBtn' style='margin: 18px;'>Click To Create Account </button>"
		playPanelStart.innerHTML += createAccountBtn
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

}
//CHOICES SCREEN END

//CHAR CREATE START
//This builds the mechanics needed for me to create a new char
function buildChar(){
	let nameInput= "<input id='inputName' style='margin:12px;' type='text' name='Char Name' >"
	playPanel.innerHTML += nameInput
	let nameSetButton= "<button id='name' style='margin:12px;'>Name Character</button>"
	playPanel.innerHTML += nameSetButton
	let submitInput= "<button id='submit' style='margin:12px;'>SUBMIT</button>"
	playPanel.innerHTML += submitInput
	let styleText = "<h4 style='margin: 16px;'> Select Play Style </h4>"
	playPanel.innerHTML += styleText	
	let btn7 = "<button id='wise' style='font-size: 18px; margin: 18px;'> Wise </button>"
	playPanel.innerHTML += btn7	
	let btn8 = "<button id='good' style='font-size: 18px; margin: 18px;'> Good </button>"
	playPanel.innerHTML += btn8
	let btn9 = "<button id='insane' style='font-size: 18px; margin: 18px;'> Insane </button>"
	playPanel.innerHTML += btn9	
	let raceText = "<h4 style='margin: 16px;'> Select Race </h4>"
	playPanel.innerHTML += raceText	
	let btn1 = "<button id='orc' style='font-size: 18px; margin: 18px;'> Orc </button>"
	playPanel.innerHTML += btn1	
	let btn2 = "<button id='human' style='font-size: 18px; margin: 18px;'> Human </button>"
	playPanel.innerHTML += btn2
	let btn3 = "<button id='dwarf' style='font-size: 18px; margin: 18px;'> Dwarf </button>"
	playPanel.innerHTML += btn3	
	let classText = "<h4 style='margin: 16px;'> Select Class </h4>"
	playPanel.innerHTML += classText
	let btn4 = "<button id='warrior' style='font-size: 18px; margin: 18px;'> Warrior </button>"
	playPanel.innerHTML += btn4	
	let btn5 = "<button id='mage' style='font-size: 18px; margin: 18px;'> Mage </button>"
	playPanel.innerHTML += btn5
	let btn6 = "<button id='assassin' style='font-size: 18px; margin: 18px;'> Assassin </button>"
	playPanel.innerHTML += btn6	

	setStats()
}

function setStats(){
	statsPanel.innerHTML =" "
	let name = `${stats[0]}<br>`
	statsPanel.innerHTML += name
	let prof = `${stats[1]} ${stats[2]} ${stats[3]}<br>`
	statsPanel.innerHTML += prof
	let str = `Strength: ${stats[4]} <br>`
	statsPanel.innerHTML += str
	let dex = `Dexterity: ${stats[5]} <br>`
	statsPanel.innerHTML += dex
	let fort = `Fortitude: ${stats[6]} <br>`
	statsPanel.innerHTML += fort
	let wis = `Wisdom: ${stats[7]} <br>`
	statsPanel.innerHTML += wis
}

function createChar(e){
	let cond = e.target.id

	switch(cond){
		case "submit":
			let total = stats[4]+stats[5]+stats[6]+stats[7]
			if(stats[0]!=0 && total == 15){
				submitCharToDB()
				dungeonArea()
			}else{
				alert("You appear to be missing something")
			} 	
			break;
		case "name":
			stats[0] = document.getElementById("inputName").value
			setMetrics()
			break;
		case "wise":
			stats[1] = "Wise"
			tempStyle = [0,1,1,3]
			setMetrics()
			break;
		case "good":
			stats[1] = "Good"
			tempStyle = [1,1,2,1]
			setMetrics()
			break;
		case "insane":
			stats[1] = "Insane"
			tempStyle = [3,1,1,0]
			setMetrics()
			break;
		case "orc":
			stats[2] = " Orc"
			tempRace = [3,1,1,0]
			setMetrics()
			break;
		case "human":
			stats[2] = "Human"
			tempRace = [1,1,2,1]
			setMetrics()
			break;
		case "dwarf":
			stats[2] = "Dwarf"
			tempRace = [2,0,3,0]
			setMetrics()
			break;
		case "warrior":
			stats[3] = "Warrior"
			tempProf = [4,0,1,0]
			setMetrics()
			break;
		case "mage":
			stats[3] = "Mage"
			tempProf = [0,2,0,3]
			setMetrics()
			break;
		case "assassin":
			stats[3] = "Assassin"
			tempProf = [1,4,0,0]
			setMetrics()
			break;		
	}

	function submitCharToDB(){
		let charObj = {
			name: stats[0],
			style: stats[1],
			race: stats[2],
			prof: stats[3],
			str: stats[4],
			dex: stats[5],
			fort: stats[6],
			wis: stats[7]
		}

		fetch("http://localhost:3000/characters",{
			method: "POST",
			headers: headersObj,
			body: JSON.stringify(charObj)			
		})
	}

	function setMetrics(){
		combStats()
		setStats()
	}

	function combStats(){
		stats[4] = tempStyle[0]+tempRace[0]+tempProf[0]
		stats[5] = tempStyle[1]+tempRace[1]+tempProf[1]
		stats[6] = tempStyle[2]+tempRace[2]+tempProf[2]
		stats[7] = tempStyle[3]+tempRace[3]+tempProf[3]
	}
}
//CHAR CREATE END

//DISPLAY CHARS LIST START
function displayList(){
	playPanel.innerHTML = " "
	fetch("http://localhost:3000/characters")
	.then(res => res.json())
	.then(charArray => charArray.forEach(char =>{
		playPanelCharSelect.innerHTML += `<h2 id=${char.id} style='margin-left: 24px;'>${char.id}.${char.name}</h2'><h4 style='margin-left: 24px;'>${char.style} ${char.race} ${char.prof}</h4>`
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
	const toon = document.getElementById("me")
			
function toonMovement(e){
	console.log(e)   		    		
}

//DUNGEON AREA END

//SELECT CHAR SCREEN START
//This will be used to grab any given char from the db and use them to play
function selectChar(e){
	let charChosen = 0
	let cond = e.target.id

	charChosen = cond

	if(charChosen > 0){
		playPanel.innerHTML = ""
		fetch("http://localhost:3000/characters")
		.then(res => res.json())
		.then(findChar => findChar.forEach(char=>{
			if(char["id"] == cond){
				stats[0] = char["name"]
				stats[1] = char["style"]
				stats[2] = char["race"]
				stats[3] = char["prof"]
				stats[4] = char["str"]
				stats[5] = char["dex"]
				stats[6] = char["fort"]
				stats[7] = char["wis"]
				setStats();
				dungeonArea()
			}
		}))
		//setStats();
	}
}
//SELECT CHAAR SCREEN END

//CREATE ENEMY MONSTER START
class enemyMonster{
	constructor(name, style, race, prof){
		this.name = name;
		this.style = style;
		this.race = race;
		this.prof = prof;
	}
}
//CREATE ENEMY MONSTER END



