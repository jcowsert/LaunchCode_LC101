function launchOutput(num){
  //your code here
   let output = '';
   let numberObject ={
     '2': 'Launch',
     '3': 'Code',
     '5': 'Rocks'
   }

   for(item in numberObject){
     if(num%Number(item) === 0){
       if(Number(item) === 5 && output){
         output += ` ${numberObject[item]}`
       }
       else {
         output += numberObject[item]
       }
     }
   }
    //took out to DRY my code
    // if (num%2 === 0){
    //   output += 'Launch';
    // }
  
    // if (num%3 === 0){
    //   output += 'Code';
    // }
  
    // if (num%5 === 0){
    //   if (output) {
    //     output += ' Rocks';
    //   } else {
    //     output += 'Rocks';
    //   }
    // }
  
    if (!output){
      return "Rutabagas! That doesn't work.";
    } else if (output==='Launch Rocks') {
      return output + '! (CRASH!!!!)';
    } else {
      return output + '!';
    }

}

module.exports = launchOutput;