let userScore = 0;
let compScore = 0;
const userScore_span =document.getElementById("userScore");
const compScore_span =document.getElementById('compScore');
const scoreBoard_div = document.querySelector(".scoreBoard");
const message_div = document.querySelector("#message");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scessior_div = document.getElementById('s');


function userGame(userChoice)
	{
		const compChoice = compGame();
		console.log(compChoice);
		console.log("=>"+ userChoice);
		switch(compChoice+userChoice){

			case "ps" :
			case "sr" :
			case "rp" :
				userWins(userChoice,compChoice);
				break;
			case "sp" :
			case "rs" :
			case "pr" :
				computerWins(userChoice,compChoice);
				break;
			case "ss" :
			case "pp" :
			case "rr" :
				draw(userChoice,compChoice);
				break;
		}
	}

function compGame()
	{
		const choice = ["r","p","s"];
		const y=Math.floor((Math.random() * 3));
		compChoice = choice[y];
		return compChoice;
	}

rock_div.addEventListener('click', function()
	{
		userGame('r');
	});
paper_div.addEventListener('click', function()
	{
		userGame('p');
	});
scessior_div.addEventListener('click', function()
	{
		userGame('s');
	});


function converter(Choice)
{
	if (Choice == "r")
		return 'Rock';
	else if (Choice == "p")
		return 'paper';
	else 
		return 'scessior';
}

function userWins(userChoice,compChoice) 
{
	userScore++;
	compScore = compScore;
	userScore_span.innerHTML = userScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	message_div.innerHTML = `${converter(userChoice)}${smallUserWord} beats ${converter(compChoice)}${smallCompWord}  you won :) !`;
	document.getElementById(userChoice).classList.add('won');
	setTimeout(function() {	document.getElementById(userChoice).classList.remove('won');
},300);

}

function computerWins(userChoice,compChoice)
{
	compScore++;
	userScore = userScore;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	message_div.innerHTML = `${converter(userChoice)}${smallUserWord} lose to  ${converter(compChoice)}${smallCompWord}  you lose :(`;
	document.getElementById(userChoice).classList.add('lose');
	setTimeout(function() {	document.getElementById(userChoice).classList.remove('lose');
},300);
}
function draw(userChoice,compChoice)
{
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	message_div.innerHTML = `${converter(userChoice)}${smallUserWord}  ${converter(compChoice)}${smallCompWord} It's draw!`;
	document.getElementById(userChoice).classList.add('draw');
	setTimeout(function() {	document.getElementById(userChoice).classList.remove('draw');
},300);
}




