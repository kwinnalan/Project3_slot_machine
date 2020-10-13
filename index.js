
/**
 *   @author Danforth, Kwinn (kdanforth@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Program for a slot machine game || created: 10.13.2020
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

// ----Above this line is section 1, comment header block & pragmas/library calls----

let bet, winAmt, betWin, again;
let spin = [0,0,0];

// ----Above this line is section 2, global variable declarations & global constant declarations/assignments----

/**
 * @method
 * @desc The dispatch method for the program
 * @returns {null}
 */
function main() {
    do {
        getBet();
        pullOrSpin();
        displayResults();
        scoreResults();
        scoreBet();
        displayWinnings();
        askToPlay();
    } while (again != 2);
}

main();
// ----Above this line is section 3, dispatch method & call to dispatch method----

/**
 * @method
 * @desc bet mutator
 * @returns {null}
 */
function getBet(){

    let input;

    input = PROMPT.question(`\nPlayer please enter you'r bet: `);
    console.log(' input= '+ input);
    bet = parseInt(input);
    console.log("bet type: " + typeof bet + " bet =" + bet);
    console.log("bet type: " + typeof bet );
}

/**
 * @method
 * @desc spin mutator
 * @returns {null}
 */
function pullOrSpin(){

    let i;

    for (i=0; i < 3; i++) {
        spin[i] = Math.floor(Math.random() * 6) + 1;
    }
    console.log(spin);
}

/**
 * @method
 * @desc spin mutator
 * @returns {null}
 */
function displayResults(){

    let i;

    for (i=0; i < 3; i++){
        if (spin[i] === 1){
            spin[i] = "Cherries";
        }
        else if (spin[i] === 2) {
            spin[i] = "Oranges";
        }
        else if (spin[i] === 3) {
            spin[i] = "Plums";
        }
        else if (spin[i] === 4) {
            spin[i] = "Bells";
        }
        else if (spin[i] === 5) {
            spin[i] = "Melons";
        }
        else if (spin[i] === 6) {
            spin[i] = "bars";
        }
    }
    console.log("Spin: " + spin);
}

/**
 * @method
 * @desc winAmt mutator
 * @returns {null}
 */
function scoreResults(){
    
        if (spin[0] === spin[1] && spin[1] === spin[2]){
            winAmt = 3;
        } else if (spin[0] === spin[1] || spin[0] === spin[2] || spin[1] === spin[2]) {
            winAmt = 2;
        }else{
            winAmt = 0;
        }
        console.log("Matches =  " + winAmt);
    }

/**
 * @method
 * @desc betWin mutator
 * @returns {null}
 */
function scoreBet(){
betWin = winAmt * bet;
}


/**
 * @method
 * @desc Utility: outputs results
 * @returns {null}
 */
function displayWinnings(){
    console.log('Bet: ' + bet);
    console.log('x'+ winAmt);
    console.log("Pay out = " + betWin);
}


/**
 * @method
 * @desc again mutator
 * @returns {null}
 */
function askToPlay(){

    again = PROMPT.question(`\nPlayer, would you like to bet again? (1= yes 2= no): `);

}


// ----Above this line is section 4, mutator & worker/utility methods----

