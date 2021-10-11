function scuberGreetingForFeet(num){

  let string;

  if (num <= 400) {
    string = 'This one is on me!'
  }
  else if (num >= 2001 && num <= 2500) {
    string = 'I will gladly take your thirty bucks.';
  }
  else if (num >= 2500) {
    string = 'No can do.';
  }
  return string;
}



function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  }
  else 
    return 'No go.';
}


function switchOnCharmFromTip(tip){
  let strings = '';

  if (tip === 'generous') {
    strings = 'Thank you so much.';
  }
  else if (tip === 'not as generous') {
    strings = 'Thank you.';
  }
  else if (tip === 'thanks for everything') {
    strings = 'Bye.';
  }
  return strings;
}
