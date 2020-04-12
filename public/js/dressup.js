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
                  <button onClick = "handleSubmit(state)">~~Done!!~~</button><br/>\
                  <audio autoplay loop>\
                    <source src="../assets/sounds/dressuphappy.wav">\
                  </audio>\
                  '
var state = [1,1,1] // values indicate which [top, bottom, shoes] when submitted

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

function handleSubmit(){
  element = document.getElementById('textbox');
  element.innerHTML = '<p> \
                      Thanks so much for your help!<br/> \
                      Hopefully Mom thinks this is okay...<br/> \
                      Well...I need to catch the bus. See you later?</br>\
                      <button onClick="handleOK(state)">OK</button>\
                      </p>';

}

function handleOK(state){
  element = document.getElementById('dressup')

  element.innerHTML = '<div style="margin: 10px; background-color:black; color:white;">\
                        <h1>YOU DIDN\'T FIX ANYTHING</h1>\
                        <h2><em>I SHOULD HAVE NEVER ASKED FOR YOUR HELP.</em></h2>\
                        <p>\
                          manufactured home trailer<br/>\
                          propped up on cinder blocks <br/>\
                          nine miles from the grocery stores <br/> \
                          and main street shops nine miles <br/> \
                          from the school the solitude <br/> \
                          no neighbors and no visitors <br/> \
                          the front lawn was desolate <br/> \
                          <br/> \
                          <h2><em>I SHOULD HAVE NEVER GONE TO SCHOOL</em></h2>\
                          my mother covered windows in tin<br/> \
                          foil the sun leaked through cracked<br/> \
                          wrinkles particles of nicotine <br/> \
                          danced in afternoon glow nicotine<br/> \
                          dripped from the ceiling brown<br/> \
                          and ominous never behind <br/> \
                          the photos in the hallway<br/> \
                          <br/> \
                          <h2><em>I SHOULD HAVE NEVER KEPT THE PROOFS</em></h2>\
                          the photos concealed something <br/> \
                          more than nicotine stains in our <br/> \
                          manufactured home what the walls <br/> \
                          were manufactured around<br/> \
                          my mother always shouted after <br/> \
                          school portraits because I failed<br/> \
                          because my smile looked manufactured. <br/> \
                          <h2><em>I SHOULD HAVE NEVER MENTIONED IT</em></h2>\
                        </p><br/>\
                        <a href="../../index.html">Home</a>\
                      </div> '
}
