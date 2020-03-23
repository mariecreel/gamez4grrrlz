const dressupButtons = '<h3>Tops</h3> \
                  <button onClick ="handleDressupClick(0)">1</button>\
                  <button onClick ="handleDressupClick(1)">2</button>\
                  <button onClick ="handleDressupClick(2)">3</button>\
                  <h3>Bottoms</h3> \
                  <button onClick ="handleDressupClick(3)">1</button>\
                  <button onClick ="handleDressupClick(4)">2</button>\
                  <button onClick ="handleDressupClick(5)">3</button>\
                  <h3>Shoes</h3> \
                  <button onClick ="handleDressupClick(6)">1</button>\
                  <button onClick ="handleDressupClick(7)">2</button><br/><br/>\
                  <button onClick = "handleSubmit(state)">~~Done!!~~</button>\
                  '
var state = [0,0,0] // values indicate which [top, bottom, shoes] when submitted

function handleDressupClick(name){
  let top = document.getElementById('top');
  let bottom = document.getElementById('bottom');
  let shoes = document.getElementById('shoes');
  switch(name) {
    case 0:
      top.innerHTML = '<img src="../assets/images/dressup/t-shirt.png">';
      state[0] = 1;
      break;
    case 1:
      top.innerHTML = '<img src="../assets/images/dressup/cardigan.png">';
      break;
      state[0] = 2;
    case 2:
      top.innerHTML = '<img src="../assets/images/dressup/longsleeve.png">';
      state[0] = 3;
      break;
    case 3:
      bottom.innerHTML = '<img src="../assets/images/dressup/jeans.png">';
      state[1] = 1;
      break;
    case 4:
      bottom.innerHTML = '<img src="../assets/images/dressup/skirt.png">';
      state[1] = 2;
      break;
    case 5:
      bottom.innerHTML = '<img src="../assets/images/dressup/shorts.png">';
      state[1] = 3;
      break;
    case 6:
      shoes.innerHTML = '<img src="../assets/images/dressup/sneakers.png">';
      state[2] = 1;
      break;
    case 7:
      shoes.innerHTML = '<img src="../assets/images/dressup/flats.png">';
      state[2] = 2;
  };
}

function handleStartClick (){
  element = document.getElementById('textbox')
  element.innerHTML = dressupButtons;
}

function handleSubmit(state){
  alert(state);
}
