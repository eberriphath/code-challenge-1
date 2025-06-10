 //function for mobile money
 function estimateTransactionFee(amountToSend) {
    let fee = amountToSend * 0.015;
    fee = Math.max(10, Math.min(fee, 70));
    const total = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log("Send Money Securely!");
}

//user input prompt
const userInput = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(userInput));


