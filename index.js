// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  return drivers.splice(-1);
}

 function destructivelyRemoveFirstDriver(){
   return drivers.splice(0,1);
 }

function appendDriver(name){
  return [...drivers, name];
}

function prependDriver(name){
  return [name, ...drivers]
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length-1);
}

function removeFirstDriver(){
  return drivers.slice(1);
}
