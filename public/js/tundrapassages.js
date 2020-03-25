const start = '<p>\
You are in a forest. Sunlight needles between branches of pine and leafless \
maple, dying the snow a light shade of sherbet. You have walked for quite some \
time, and you think that the sky will dim to night within two hours. \
A new moon will hide its pale face in the shadow of the earth; your light is \
precious, far too finite to waste. You\’re too far from base camp to safely \
return until the morning, so you must camp out for the night. Thankfully, you’re \
well prepared; you packed a tent, a campstove, your sleeping bag, and some grub.\
</p> <button onClick="loadPassage(searchcamp)"> Search for a spot to set up camp</button>';

const searchcamp = '<p>\
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
<button onClick = "loadPassage(door)">Try the doorknob</button> \
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
  <button onClick="loadPassage(shower)">Take a Shower</button>';

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

const wake = '<p>The sun streams directly down into your eyes, forcing you awake\
 with a sneeze. Groaning, you squeeze your face into the pillow. <em>Not yet…five \
 more minutes…please, Mom… </em> After a few moments breathing stale pillow air, you \
 realize that your mother isn\'t here at all. Tentatively, you poke a toe out \
 into the cold morning air. All the heat of last night’s cozy fire is \
 definitely gone now. You groan again and wrap yourself up in the blanket, \
 sluggishly walk over to the woodstove, and light a new fire. You wait for your \
 nose to warm up again before you shed your flannel cocoon. Your stomach grumbles, so \
 you dig through your pack to find breakfast. </p>\
 <p><em>Wait…are you kidding?</em> You \
 dig through your pack again just to make sure, and your fears are cofirmed: \
 you’re all out of food. I thought I packed at least one more can…Your stomach \
 gurgles louder than before in protest. You jump up and dig through the \
 cabinets in desperation, finding nothing but flour and oil. You fear that \
 you will find the same in the fridge, but you still check anyway. The fridge \
 bulb flickers, dimly illuminating the mostly-empty shelves. You find a stack \
 of homemade pancakes and a note written in your handwriting. \
 </p>\
 <p>You almost miss the note as you grab the pancakes and stuff the last bites \
 into your face. You almost miss it again because you think it can’t be real, \
 that your hungry brain is deceiving you, that you breathed some strange cave \
 fumes yesterday and now you have brain damage. The third time you look at the \
 note, you pinch your arm like the movies. It hurts! So…this has to be real. \
 A cold sweat gather on your forehead and palms. </p>\
 <p>You’ve never been to this cabin before last night. You haven’t hand-written \
 a note in ages, either; you switched to digital notes years ago in undergrad. \
 So how the HECK did this note get here? Sure enough, your chicken scratch \
 scrawls across the page; It is definitely your handwriting. </p>\
 <button onClick ="loadPassage(note)">Read the note</button>'

 const note = '<div id="note"><p>Dear Linda,</p><p>\
This is probably very strange for you…I can only apologize. You aren’t going \
crazy, I promise! Well, as much as I can promise. I realize I might not be the \
most reliable source of information, but I’m all you’ve got. So, listen up:</p>\
<p>There’s definitely something up with that cave!!! Ever since I found it, I \
keep getting lost in the woods. No matter how far I walk to the east or west, \
north or south, I always end up back at this cabin. Even if I check myself \
with the sun instead of my compass, I end right where I started. I’ve lost \
hope that I’ll ever make it back to camp. I never should have left on my \
own…but I was too proud to ask Stephen to come with me. You were too. \
We all were. </p>\
<p>Ever since my first visit to the cabin, I’ve seen myself walking through the \
forest every day. Not like I’m imaginging it; I’ve literally watched myself \
walk out of the cave, oblivious to what kind of trouble I’ve gotten myself \
into! I feel sooo crazy! I’ve followed my own footsteps, cris-crossing the \
clearing as the snow falls. I’ve watched myself climb into the cabin window, \
or try the door, at least ten times. I’m so tired of watching myself sleep, \
wake up, and head out into the unknown over and over again. I’m scared I’ll \
find a body soon. I’m losing weight, losing sleep, and losing patience. </p>\
<p>I don’t know what to do, but I’m begging you, for your sake: please find a \
way out of this forest! It must have something to do with the cave! I know it \
must! I can’t find anything there but that stupid egg…but maybe I’m missing \
something that you might think of?</p><p>Yours,<br/>\
Linda<br/></p>\
</div>\
<button onClick="loadPassage(afternote)">...</button>'

const afternote = '<p>You can’t believe anything you just read. You pinch \
yourself again. You bite your finger. You scratch your arm. It all hurts. \
Is this really a reliable test? You feel your heart quicken and your breath \
stagger. Is this some prank? Did the team think this was funny? Now you’re \
shaking like a leaf in the wind. <em>What do I do? Come on…think!</em> You cover your \
face in your hands and cower by the woodstove. What if the letter is real? <em>I \
really must be hallucinating…</em></p>\
<p>You shake your head and take a deep \
breath. You notice the sun has almost reached the middle of the sky. \
<em>Okay… either way, I need to go.</em> If the letter is fake, as you suspect, \
you can make it back to camp before dinner if you leave now. If the letter \
is real, you’ll probably end up back at the cabin anyway. Just in case, \
you throw a few extra logs into the woodstove.<br/></p>\
<button onClick="loadPassage(leavecabin)">Leave the cabin</button>'

const leavecabin = '<p>You zip yourself into your snow suit and take another \
deep breath. You stand by the woodstove to gather as much heat as possible \
before departing. Leaving the woodstove lit and the door unlocked, you walk \
back down the creaking steps and back into the snow. </p>\
<button onClick="loadPassage(camp)">Go back to base camp</button> \
<button onClick="loadPassage(cave)">Go back to the cave</button>'

const camp = '<p>You make the conservative choice and head south, towards camp. \
You walk for hours, hungry and tired, hoping that the team has gone looking for \
you so that you can meet them halfway by coincidence. You have no such luck, \
and you amble along for hours without seeing another person. You don’t even see \
yourself, and you never cross any tracks, animal or human. Suddenly you see \
smoke and light in the distance, and you almost sprint towards it, moving as \
fast as your snow gear allows.</p><p>As the sun sinks behind the trees, you \
finally stumble upon a clearing. Your stomach grumbles, and you have to lean \
up against a tree to stand. Your heart pounds as you look up after wiping \
your lenses clean, hoping for a heroes welcome. But you were never that \
lucky, or heroic.</p><p>Instead, you watch yourself knock on the front \
door of the red cabin. “Hello? Is there anyone home?” echoes across the \
clearing, through the trees, and all your bones. Before you fall, you \
watch yourself climb in through the window towards the glow of orange \
warmth. </p><br/> <a href="../../index.html">Home</a>'

const cave = '<p>Despite your better judgement, you go in the direction \
you think the cave lies. If there’s any morsel of truth to the letter you \
found, you’re bound to run into yourself there. You try not to think about \
how weird that is. But you have to know whether or not it’s true, even if \
it is weird. Hey, maybe Stephen came looking for me here too! He’s the \
only one who would know… You really, really hope Stephen is looking for you. \
</p><p>After a couple of hours, you enter the mouth of the cave. Inside, you can hear \
grunts, deep and gutteral, interspersed with gasps. You draw your multi-tool \
knife and slowly enter the cave, walking towards the cavern where you found \
the egg. You watch as another you heaves the egg into the air and slams it \
to the ground, shooting the glowing shrapnel to all corners of the cavern \
with a spark. When you make eye contact with yourself, you both dissipate \
into cave dust. </p><br/> <a href="../../index.html">Home</a>'
