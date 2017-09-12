var katzDeli = []

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if(katzDeli >= 1){
    var serving = katzDeli[0]
    katzDeli.unshift()
    return serving
  }else{
    return "There is nobody waiting to be served!"
  }
}
