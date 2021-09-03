// yourType

var yourType = document.getElementById('yourType')
    yourType.scrollTop = yourType.scrollHeight;
var typewriter = new Typewriter(yourType, {
    loop: false, 
    delay: 35
});

typewriter.typeString("I've analyzed the data from all your Bumble matches.").pauseFor(500).typeString("<br><br>")
.typeString("It looks like you're into").typeString("<br>")
.typeString("<span class='yellow-dots'>. . . . . .<span>").pauseFor(500).typeString("<br>")
.typeString("<span class='left-type-bold-text'>Nice boys</span>").pauseFor(1500).deleteChars(9)
.typeString("<span class='left-type-bold-text'>6-foot-something-flex-in-the-mirror-wake-n-bake-soon-to-be-DILF guys.<span>")
.pauseFor(1000).typeString("<br><br>").typeString('...I expected more from you')
.pauseFor(500).typeString("<br><br>").typeString('*Avoids eye contact*')
.pauseFor(1000).typeString("<br><br>").typeString('Or maybe your type is a little more').pauseFor(500).typeString("<br>")
.typeString("<span class='yellow-dots'>. . . . . .<span>").pauseFor(500).typeString("<br>")
.typeString("<span class='left-type-bold-text'>Pledged-a-frat-America-loving-only-texts-over-snapchat-scorpio-fuckboys.</span>")
.pauseFor(1000).typeString("<br><br>").typeString('...Too real?')
.pauseFor(500).typeString("<br><br>").typeString("That's rough, buddy.")
.pauseFor(500).typeString("<br><br>").typeString("Wanna see more?")
.start();


