const process = require('process');
const sendKeys = require('sendkeys');

// Parse command line arguments
const args = process.argv.slice(2);
let startDelay = 0;
let repeatCount = 1; // Default repeat count
let inputString = '';
let interval;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '-s') {
        startDelay = parseInt(args[i + 1]);
    } else if (args[i] === '-r') {
        repeatCount = parseInt(args[i + 1]);
        if (repeatCount === -1) repeatCount = Infinity; // Set repeatCount to Infinity if 0 is given
    } else {
        inputString = args[i];
    }
}

// Main function
function main() {
    setTimeout(() => {
        interval = setInterval(() => {
            if (repeatCount === 0) {
                clearInterval(interval);
                return;
            }

            sendKeys.sync(inputString);
            repeatCount = repeatCount - 1;
        }, 1000)
    }, startDelay > 1000 ? startDelay - 1000 : startDelay);
}

// Start the program
main();
