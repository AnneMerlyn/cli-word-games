const userInput = process.argv.slice(2);

const validInputs = ["rock", "paper", "scissor"];

const checkUserInput = (userInput) => {
    if (!userInput || userInput.length < 1) {
        console.log("Did you forget to choose? rock, paper, or scissors?");
        process.exit(0);
    } else if (userInput.length > 1) {
        console.log("Hey, that's invalid! Way too much input...");
        process.exit(0);
    }

    const userInputLower = userInput[0].toLowerCase();
    if (!validInputs.includes(userInputLower)) {
        console.log(
            "Hold up! Only rock, paper, or scissors are allowed—no wildcards in this game!"
        );
        process.exit(0);
    }
    return userInputLower;
};
const validUserInput = checkUserInput(userInput);
//console.log(validUserInput);

const getComputerInput = () => {
    const randomIndex = Math.floor(Math.random() * validInputs.length);
    return validInputs[randomIndex];
};

const computerInput = getComputerInput();
//console.log(computerInput);

const checkResults = (validUserInput, computerInput) => {
    if (
        (validUserInput === "rock" && computerInput === "scissor") ||
        (validUserInput === "paper" && computerInput === "rock") ||
        (validUserInput === "scissor" && computerInput === "paper")
    ) {
        return buildOutputString(validUserInput, computerInput, "win");
    } else if (validUserInput === computerInput) {
        return buildOutputString(validUserInput, computerInput, "draw");
    } else {
        return buildOutputString(validUserInput, computerInput, "lose");
    }
};

const buildOutputString = (validUserInput, computerInput, state) => {
    if (state === "draw") {
        return `You chose ${validUserInput}. Computer chose ${computerInput}.\nYikes! it's a ${state}——looks like the universe loves balance!`;
    } else {
        return `You chose ${validUserInput}. Computer chose ${computerInput}.\n${
            state === "win"
                ? "Yay congrats, you win! Clearly, you're the chosen one. ^^"
                : "Opps you lose, Let's blame it on some cheat codes, shall we?"
        }`;
    }
};

console.log(checkResults(validUserInput, computerInput));
