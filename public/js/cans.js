const peas = "<img class='canimg' src='../assets/images/cans/sweetpeas.png'>";
const beans = "<img class='canimg' src='../assets/images/cans/greenbeans.png'>";
const potato = "<img class='canimg' src='../assets/images/cans/sweetpotatoes.png'>";
const peaches = "<img class='canimg' src='../assets/images/cans/peaches.png'>";

const canimgs = [peas, beans, potato, peaches]

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(id){
  if(id != "nine"){
    document.getElementById(id).innerHTML = stanzas[id];
    if(document.getElementById("nine").innerHTML.charAt(1) === 'p'){
      document.getElementById("nine").innerHTML = canimgs[randomInt(4)]
    }
  } else {
    document.getElementById(id).innerHTML = stanzas[id];
    for(key in stanzas){
      if(key != "nine"){
        document.getElementById(key).innerHTML = canimgs[randomInt(4)]
      }
    }
  }
}
