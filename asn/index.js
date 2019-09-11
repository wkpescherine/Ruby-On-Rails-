const mainPanel = document.getElementById("main_area")
const statsPanel = document.getElementById("stats_area")
const playPanelStart = document.getElementById("play_area")
const playPanel = document.getElementById("play_area")
const messagePanel = document.getElementById("message_panel")

playPanel.addEventListener("click",createChar)
playPanelStart.addEventListener("click", startChoices)

var stats = [0,0,0,0,0,0,0,0]
var tempStyle = [0,0,0,0]
var tempRace = [0,0,0,0]
var tempProf = [0,0,0,0]

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
				console.log("posted to db")
				//postToDB()
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
			tempProf = [2,4,0,0]
			setMetrics()
			break;		
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
}
//DISPLAY CHARS LIST END