import figlet from "figlet";
//console.log("Hello, World");

// loop:
/**for (let i = 2; i < 7; i++) {
    console.log ("Block statement execution no." + i);
  }

  // for (let i = firstNumber; i < (secondNumber - 1); i++);
  */

  figlet.fonts(function(err, fonts) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.dir(fonts);
});

//to activate, type npm run start