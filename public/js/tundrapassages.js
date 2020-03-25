const start = '<p>\
You are in a forest. Sunlight needles between branches of pine and leafless \
maple, dying the snow a light shade of sherbet. You have walked for quite some \
time, and you think that the sky will dim to night within two hours. \
A new moon will hide its pale face in the shadow of the earth; your light is \
precious, far too finite to waste. You\’re too far from base camp to safely \
return until the morning, so you must camp out for the night. Thankfully, you’re \
well prepared; you packed a tent, a campstove, your sleeping bag, and some grub.\
</p> <button onClick="loadPassage(camp)"> Search for a spot to set up camp</button>';

const camp = '<p>\
You scan the surroundings, searching for flat land free of stones. Nothing \
catches your eye, so you walk south, towards base camp, hoping to help your \
future self with a head start. Huffing uphill in the cold, your breath fogs \
your lenses and you quickly lose vision. You stop to catch your breath, and \
hastily wipe your glasses with your mittens before continuing uphill, still \
searching a spot that’s up to snuff. \
</p>\
<button onClick = "loadPassage(keepgoing)">Keep Going</button>';

const keepgoing = '<p>\
You continue to climb the hill despite the growing darkness. The sunlight \
barely squeezes through the trees across the ground, stretching your shadow to \
the east until it dissipates into powder. You curse yourself, give up, and \
hastily dig for your tent until you notice a warm light eminating from the east.\
 If you squint, you can see a small snake of smoke slithering up towards the\
  sky. You quickly pack your tent away and hike towards the light, hoping that \
  the fire is tended by someone hospitable. </p>\
<p>\
After hoofing it for some time, you arrive in a small clearing. You spot a \
small, red cabin, with glowing windows; a sure sign that someone is home. \
You hustle to the doorway, practicing the conversation in your head: <em>Hey, \
I know you don’t know— ugh, that’s silly, why do I need to remind them I’m a \
stranger… Hello! I’m a scientist with Hemlock State— God, I sound like I’m \
trying to sell something or take the census… Hello, could I please use your \
restroom? yeah…then once I get in they’ll see the state of me and offer a bed \
and some dinner. Okay, that’s the plan…that will totally work…time to look \
pitiful!</em> You climb the creaking steps and, with a sufficiently pouty face, \
rap your knucles against the door…to no response. </p> \
<p>\
<em>Oh, really? I KNOW someone’s home…geez!</em> You huff and knock harder, this time \
with a tentative “Hello? Is there anyone home?” Again, no answer. You stand on \
your tip toes to peek through the window, but you see no one inside. A chill \
crawls up your spine as the sun finally disappears below the horizon. \
</p>\
<button onClick = "loadPassage(door)">Try the doorknob</button> || \
<button onClick = "loadPassage(trywindow)">Try the window</button>';

const door = '<p>\
You twist the knob, and to your surpise, the door opens. \
The warm air embraces you, and you return the welcome. There are no boots in \
the boot rack by the door, but you take yours off for the sake of civility. You\
 peek into the bathroom, the only room in the cabin besides the small kitchen, \
 bedroom, and living room combo, pulling back the moldy curtains to check the \
 tub for masked murderers. You\’re sure you’re alone. You heave a sigh of relief \
 and take off your coat, hanging it by the door. </p>\
 <button onClick="loadPassage(dinner)">Make Dinner</button>\
 || <button onClick="loadPassage(shower)">Take a Shower</button>';

 const trywindow = '<p>\
 You pull your mutli-tool from your pack and flip open the blade, shoving it \
 in the gap between the window pane and the frame. You wiggle the handle in a \
 see-saw motion to test the lock, and to your luck, the window inches upward, \
 and a slight warm breeze teases your finger tips. You stow your knive and push\
  the window up further with your palms, then squeeze through the person-sized \
  gap you’ve created. You land clumsily on a dingy rug, dyed brown with dry \
  sand. \
  </p><p>\
  You push yourself up from the floor, patting the dirt from your hands, and \
  close the window. There are no boots in the boot rack by the door, and no \
  other rooms in the house besides a small bathroom. You peek into the \
  bathroom, pulling back the moldy curtains to check the tub for masked \
  murderers. After a quick scan of the small bed, kitchenette, and living \
  room combo, you’re sure that you’re alone. You heave a sigh of relief, and \
  tell yourself that you didn’t just commit a crime, and that the charming \
  country folk will understand your situation and they won’t shoot you.</p>\
  <p>Surely they won’t. \
  </p>\
  <button onClick="loadPassage(dinner)">Make Dinner</button>\
  || <button onClick="loadPassage(shower)">Take a Shower</button>'

  const dinner = '<p>You pull a can of kidney beans from your pack and open it \
  with your multi-tool. After a brief search of the kitchen, you find a bowl \
  clean enough to hold the beans. You help yourself to a dash of table salt and \
  scarf down your cold dinner as you warm yourself next to the woodstove. \
  Strange that the owner left it going while they were out… you stoke the \
  dying flame. </p>\
  <p>As you spoon the last bit of beans into your mouth, your eyelids droop. \
  You’ve walked pretty far today in search of the cave that Stephen told you \
  about, and thankfully he wasn’t lying! You spent a couple hours searching \
  for primitive tools, cave art, or bone fragments, but you couldn’t bring the\
   best equipment as you’re the newest of the team, so you didn’t find much. \
   You did manage to find something unexpected, which you had to leave behind \
   due to its weight: a smooth, carved quartz stone the shape of an egg and the\
    size of a human skull. The egg was such a wonderful sight that you almost \
    swore it was glowing. You convinced yourself this was just your eyes \
    adjusting to the darkness, but finding an example of craftsmanship like \
    the stone warrants further investigation in and of itself, whether it \
    glows or not. You think you can make a pretty good case to Dr. Morgensen \
    to send someone with you back to the cave to investigate further, but \
    you’re hoping you can convince her to give you access to the equipment \
    so that you can return on your own time, maybe even move up on the \
    authorship ladder. <em>Yeah, keep dreaming…</em></p>\
    <p>\
    You suddenly sit up, realizing you had fallen asleep for a second in your \
    seat. You need a shower, but you can’t imagine standing for more than five \
    minutes. You need to get horizontal, ASAP.  After you slightly close the \
    valve on the woodstove, you slide out of your snow pants and try to ignore \
    the smell of sweat. Stumbling stupidly, you make your way to the neatly \
    made bed. You feel a bit like Goldilocks as you slide under the covers, \
    except this bed is not juuuuuuust right. The flannel sheets are warm, but \
    the bed is stiff as a board. You’re too tired to complain; you barely have \
    time to think of a complaint before you fall into heavy sleep. \
    </p>\
    <button onClick="loadPassage(dream1)">Dream</button>'

  const shower = '<p>You squirm out of your snow pants and run for the \
  bathroom. You positively reek of sweat and damp earth. You turn the faucet \
  and, thankfully, warm water pours through the pores of the shower head. You \
  climb in and help yourself to the non-descript bar of soap and shampoo in the \
  shower caddy. The smell of clean linen slowly overtakes the stench of your \
  exertion. </p><p>The warm water soothes your aching muscles, coercing you \
  into a pseudo-fugue state as you massage the shampoo into your scalp. \
  You’ve walked pretty far today in search of the cave that Stephen told \
  you about, and thankfully he wasn’t lying! You spent a couple hours \
  spelunking, searching for primitive tools, cave art, and bone fragments, \
  but you couldn’t bring the best equipment as you’re the newest of the dig \
  team. You did manage to find something though, which you had to leave behind \
  due to its weight: a smooth, carved quartz stone the shape of an egg and the \
  size of a human skull. The egg was such a wonderful sight that you almost \
  swore it was glowing. You convinced yourself this was just your eyes \
  adjusting to the darkness, but finding an example of craftsmanship like \
  the stone warrants further investigation in and of itself, whether it glows \
  or not. You think you can make a pretty good case to Dr. Morgensen to send \
  someone with you to investigate further, but you’re hoping you can convince \
  her to give you access to the equipment so that you can return on your own \
  time, and maybe even move up on the authorship ladder. Yeah, keep dreaming…\
  </p>\
  <p>Suddenly, your eyes sting and tear up, and you jerk out of your head and \
  back into your body to flush your eyes under the shower head. Ugh, this soap\
  hurts so bad! You hold your breath as long as you can, gasping away from the \
  shower head with only a lingering sting left. You rinse your body and hair \
  once more before leaving the warmth of the shower. You take one of the clean \
  towels from a nearby shelf and dry yourself, then slip into the spare \
  underwear you brought in your pack. <em>And Stephen said I was being too \
  paranoid…Ha!</em> You’re too tired to worry about whether or not Stephen’s \
  missing you tonight, anyway, so you slink to the small bed and slide under \
  the covers alone. Before you can complain to yourself about the stiff \
  mattress, you doze off to the last crackles of the dying fire. </p>\
  <button onClick="loadPassage(dream2)">Dream</button>'

const dream1 = '<p>\
Inside <br/>\
the egg you<br/>\
cannot move like<br/>\
you want, cannot take<br/>\
breaths or time or chances,<br/>\
no matter how you struggle.<br/>\
Despite the fact you have no <br/>\
choice in the matter, you are <br/>\
comfortable forced into the <br/>\
fetal position. Are you sure<br/>\
you\’re happy inside<br/>\
your shell cell?<br/>\
</p>\
<button onClick="loadPassage(wake)">...</button>'

const dream2 = '<p>Outside<br/>\
the egg you<br/>\
cannot wait for <br/>\
mommy to call the <br/>\
doctor or God or therapists<br/>\
no matter how it pains you to <br/>\
admit you were dependent, to <br/>\
admit that you still are. Would<br/>\
you hatch if you knew what <br/>\
was coming? You ask yourself<br/>\
every day, but you never<br/>\
give an answer.<br/></p>\
<button onClick="loadPassage(wake)">...</button>'
