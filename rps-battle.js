const args = process.argv;
const userInput = args.slice(2);

const checkUserInput = (userInput) => {
    if (!userInput || userInput.length !== 1) {
        console.log("Invalid!ONLY Rock, Paper, Scissor input allowed!");
        process.exit(0);
    }
    const userInputLower = userInput[0].toLowerCase();
    switch (userInputLower) {
        case "rock":
            return userInputLower;
        case "paper":
            return userInputLower;
        case "scissor":
            return userInputLower;
        default:
            console.log("Invalid!ONLY Rock, Paper, Scissor input allowed!");
            process.exit(0);
    }
};
const validUserInput = checkUserInput(userInput);
//console.log(validUserInput);

const getComputerInput = () => {
    const computerInputArray = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * computerInputArray.length);
    return computerInputArray[randomIndex];
};

const computerInput = getComputerInput();
//console.log(computerInput);

const checkResults = (validUserInput, computerInput) => {
    const output = ["win", "lose", "draw"];
    if (
        (validUserInput === "rock" && computerInput === "scissor") ||
        (validUserInput === "paper" && computerInput === "rock") ||
        (validUserInput === "scissor" && computerInput === "paper")
    ) {
        return buildOutputString(validUserInput, computerInput, output[0]);
    } else if (validUserInput === computerInput) {
        return buildOutputString(validUserInput, computerInput, output[2]); //draw
    } else {
        return buildOutputString(validUserInput, computerInput, output[1]); //lose
    }
};

const buildOutputString = (validUserInput, computerInput, outputString) => {
    if (outputString === "draw") {
        return `You chose ${validUserInput}. Computer chose ${computerInput}. Yikes! it's a ${outputString}!`;
    } else {
        return `You chose ${validUserInput}. Computer chose ${computerInput}. ${
            outputString === "win"
                ? "Yay congrats, you win!"
                : "Opps you lose, maybe next time?"
        }`;
    }
};

console.log(checkResults(validUserInput, computerInput));
