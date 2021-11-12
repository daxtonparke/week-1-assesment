const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('welcome to the password validatorintator 9000')
reader.question("please input a password with 10 or more characters: ", function(input){
    tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	if (input.length>9){
        console.log('nice password')
    } else {console.log('weak password')}
	// This line closes the connection to the command line interface.
	reader.close()
});