var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, "+ name + ". You are number " +(katzDeliLine.length)+ " in line.");
}

function nowServing(katsDeliLine) {
  if (katsDeliLine === 0) {
    return "There is nobody waiting to be served!.";
  }
}