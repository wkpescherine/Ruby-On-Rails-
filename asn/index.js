const mainPanel = document.getElementById("main_area")
const statsPanel = document.getElementById("stats_area")
const playPanel = document.getElementById("play_area")
const messagePanel = document.getElementById("message_panel")

playPanel.addEventListener("click",createChar)

var stats = [0,0,0,0,0,0,0,0,0,0]

document.addEventListener('DOMContentLoaded', function(){
	let nameInput= "<input style='margin:12px;' type='text' name='Char Name' >"
	playPanel.innerHTML += nameInput
	let submitInput= "<button style='margin:12px;'>SUBMIT</button>"
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
	let btn4 = "<button style='font-size: 18px; margin: 18px;'> Warrior </button>"
	playPanel.innerHTML += btn4	
	let btn5 = "<button style='font-size: 18px; margin: 18px;'> Mage </button>"
	playPanel.innerHTML += btn5
	let btn6 = "<button style='font-size: 18px; margin: 18px;'> Assassin </button>"
	playPanel.innerHTML += btn6	

	setStats()
}, false);


function setStats(){
	statsPanel.innerHTML =" "
	let name = `${stats[0]}<br>`
	statsPanel.innerHTML += name
	let prof = `${stats[1]} ${stats[2]} ${stats[3]}<br>`
	statsPanel.innerHTML += prof
	let str = `Strength: ${stats[4]} <br>`
	statsPanel.innerHTML += str
}

function createChar(e){
	let cond = e.target.id

	switch(cond){
		case "wise":
			stats[1] = "Wise"
			setStats()
			break;
		case "good":
			stats[1] = "Good"
			setStats()
			break;
		case "insane":
			stats[1] = "Insane"
			setStats()
			break;
		case "orc":
			stats[2] = " Orc"
			setStats()
			break;
		case "human":
			stats[2] = "Human"
			setStats()
			break;
		case "dwarf":
			stats[2] = "Dwarf"
			setStats()
			break;

	}

}