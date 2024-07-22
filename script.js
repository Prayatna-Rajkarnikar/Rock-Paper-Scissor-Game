function makeChoice(playerChoice) {
    const possibleChoice = ['rock', 'paper', 'scissors'];
    // Randomly select the computer's choice from the array
    const computerChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    let result = '';
    // Determine the game result based on player and computer choices
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'You Win!'
    }
    else if (playerChoice == computerChoice) {
        result = 'It`s a draw'
    }
    else {
        result = 'Computer wins!'
    }

    // Update the result text on the webpage
    document.getElementById('gameResult').textContent = `${result}`;

    // Update the computer's choice text on the webpage
    document.getElementById('compChoice').textContent = `Computer chose: ${computerChoice}`;
}