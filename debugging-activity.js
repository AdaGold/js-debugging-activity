'use strict';
let prompt = require('prompt');

prompt.start();

prompt.get(['num1','num2'], checkOddness)

function checkOddness(error, input) {
  let message = '';
  if ( parseInt( input['num1'] ) % 2 == 1 ) {
    message = 'The first number entered was odd'
  }
  if ( parseInt( input['num2'] ) % 2 == 1 ) {
    message = 'The second number entered was odd'
  }
  console.log(message);
  return message;
}
