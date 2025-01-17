const userInput = process.argv.slice(2);
const VALID_INPUTS = ["rock", "paper", "scissor"];

const checkUserInput = (userInput) => {
    if (!userInput || userInput.length < 1) {
        console.log("Did you forget to choose? rock, paper, or scissors?");
        process.exit(0);
    } else if (userInput.length > 1) {
        console.log("Hey, that's invalid! Way too much input...");
        process.exit(0);
    }

    const userInputLower = userInput[0].toLowerCase();
    if (!VALID_INPUTS.includes(userInputLower)) {
        console.log(
            "Hold up! Only rock, paper, or scissors are allowed—no wildcards in this game!"
        );
        process.exit(0);
    }
    return userInputLower;
};

const getComputerInput = () => {
    const randomIndex = Math.floor(Math.random() * VALID_INPUTS.length);
    return VALID_INPUTS[randomIndex];
};

const checkResults = (validUserInput, computerInput) => {
    if (
        (validUserInput === "rock" && computerInput === "scissor") ||
        (validUserInput === "paper" && computerInput === "rock") ||
        (validUserInput === "scissor" && computerInput === "paper")
    ) {
        buildOutputString(validUserInput, computerInput, "win");
    } else if (validUserInput === computerInput) {
        buildOutputString(validUserInput, computerInput, "draw");
    } else {
        buildOutputString(validUserInput, computerInput, "lose");
    }
};

const buildOutputString = (validUserInput, computerInput, state) => {
    if (state === "draw") {
        console.log(
            `You chose ${validUserInput}. Computer chose ${computerInput}.\nYikes! it's a ${state}——looks like the universe loves balance!`
        );
    } else {
        console.log(
            `You chose ${validUserInput}. Computer chose ${computerInput}.\n${
                state === "win"
                    ? "Yay congrats, you win! Clearly, you're the chosen one. ^^"
                    : "Opps you lose, Let's blame it on some cheat codes, shall we?"
            }`
        );
    }
};

const validUserInput = checkUserInput(userInput);
const computerInput = getComputerInput();
checkResults(validUserInput, computerInput);
