const display = document.getElementById("display");

function append(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function percent(){
  display.value = Number(display.value) / 100;
}

function calculate(){
  try{
    display.value = Function("return " + display.value)();
  }catch{
    display.value = "Error";
  }
}