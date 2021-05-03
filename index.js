const chalk = require('chalk');
const readlineSync = require('readline-sync');
function base64Encoder(str)
{
  const base64 = Buffer.from(str).toString('base64');
  return base64;
}
function base64Decoder(encoded_str)
{
  const original = Buffer.from(encoded_str,'base64').toString('ascii');
  return original;
}
function base64EncodeDecode()
{
  console.log(chalk.yellowBright.bold('\n-----Base64 Encoder Decoder-----'));
  console.log(`What do you want?`);
  console.log(`(1) Base64 Encoder\n(2) Base64 Decoder\n(3) Exit\n`);
  let userChoice = readlineSync.question(`Please enter a valid choice (1/2/3) : `);
  while(userChoice!=3){
    if(userChoice == 1)
    {
      console.log(chalk.yellowBright.bold(`\n----BASE64 ENCODER UTILITY APP----\n`));
      let str = (readlineSync.question(`Please enter a string to encode : \n`));
      const base64 = base64Encoder(str);
      console.log(base64);
    }
    else if(userChoice == 2)
    {
      console.log(chalk.yellowBright.bold(`\n----BASE64 DECODER UTILITY APP----\n`));
      let str = (readlineSync.question(`Please enter a string to decode : \n`));
      const original = base64Decoder(str);
      console.log(original);
    }
    else
    {
      console.log(`You have entered a wrong choice.`);
      userChoice = parseInt(readlineSync.question(`Please select a valid option(1/2/3): `))
    }
    if(userChoice !=3)
    {
      const choice = parseInt(readlineSync.question(chalk.green.bold("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice == 1)
      {
        userChoice = readlineSync.question(`Please enter a valid choice (1/2/3): `);
      }
      else if(choice == 2)
      {
        userChoice = 3;
      }
    }
  }
}
base64EncodeDecode();
console.log(chalk.bgCyan.bold(`\n\nThank You!`));