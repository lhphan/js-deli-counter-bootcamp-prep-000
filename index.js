var katzDeli = []

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if(katzDeli.length >= 1){
    var serving = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ${serving}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli){
  if(katzDeli.length >= 1){
    var result = "The line is currently: "
    for(let i = 0; i < katzDeli.length; i++){

    }
  }else{
    return "The line is currently empty"
  }
}
