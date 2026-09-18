// Get elements
const envelope = document.getElementById("envelope");
const home = document.getElementById("home");
const letterSection = document.getElementById("letterSection");
const memories = document.getElementById("memories");
const surprise = document.getElementById("surprise");

const music = document.getElementById("music");
const musicButton = document.querySelector(".music-btn");


// Open Letter
function openLetter() {

    // Open envelope
    const flap = envelope.querySelector(".envelope-flap");

    if (flap) {
        flap.style.transform = "rotateX(180deg)";
    }

    // Play music
    if (music) {
        music.play().catch(function(error) {
            console.log("Music could not start:", error);
        });
    }

    // Change music button
    if (musicButton) {
        musicButton.innerHTML = "🔊";
    }

    // Show letter after animation
    setTimeout(function() {

        home.style.display = "none";
        letterSection.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        startTyping();

    }, 1200);
}


// Typing Message
const message = `Thank you for coming into my life.

Thank you for all the random conversations,
the stupid jokes, the laughter,
the secrets and the countless memories.

There were days when I didn't feel okay,
but somehow talking to you made everything
feel a little lighter.

I don't know where life will take us,
or how much things will change with time.

But one thing I know for sure...

I will always be grateful that I met you.

You are not just a friend.

You are one of those rare people
who became a beautiful part of my life. 💗`;


let typingIndex = 0;


// Start Typing
function startTyping() {

    const typingText =
        document.getElementById("typingText");

    if (!typingText) {
        return;
    }

    typingText.innerHTML = "";

    typingIndex = 0;

    typeCharacter(typingText);
}


// Type Character
function typeCharacter(element) {

    if (typingIndex < message.length) {

        const character =
            message.charAt(typingIndex);

        if (character === "\n") {
            element.innerHTML += "<br>";
        } else {
            element.innerHTML += character;
        }

        typingIndex++;

        setTimeout(function() {
            typeCharacter(element);
        }, 40);
    }
}


// Show Memories
function showMemories() {

    letterSection.style.display = "none";

    memories.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Show Final Surprise
function showSurprise() {

    memories.style.display = "none";

    surprise.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Music Control
function toggleMusic() {

    if (!music) {
        return;
    }

    if (music.paused) {

        music.play().then(function() {

            if (musicButton) {
                musicButton.innerHTML = "🔊";
            }

        }).catch(function(error) {

            console.log("Music could not play:", error);

        });

    } else {

        music.pause();

        if (musicButton) {
            musicButton.innerHTML = "🎵";
        }
    }
}


// Falling Petals
function createPetals() {

    const flowers = [
        "🌸",
        "🌷",
        "💗",
        "🦋",
        "✨"
    ];

    setInterval(function() {

        const petal =
            document.createElement("div");

        petal.classList.add("petal");

        petal.innerHTML =
            flowers[
                Math.floor(
                    Math.random() * flowers.length
                )
            ];

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.fontSize =
            (15 + Math.random() * 20) + "px";

        petal.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        document.body.appendChild(petal);

        setTimeout(function() {
            petal.remove();
        }, 9000);

    }, 600);
}


// Start petals
createPetals();