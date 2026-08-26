# SoundSpace — Replacement `script.js`

/* =========================================================
   SOUNDSPACE
   COMPLETE FUNCTIONAL SCRIPT
   Keeps the existing SoundSpace HTML + design
   ========================================================= */


/* =========================================================
   SUPABASE SETTINGS
   ========================================================= */

const SUPABASE_URL =
    "https://bjfmlknorxlztxkxlebd.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_NDHWFaIHfs6IqvmbZiHrCg_0H2ZXZbU";


/* =========================================================
   DEVELOPER MODE
   ========================================================= */

const DEVELOPER_MODE_KEY =
    "soundspace_developer_mode";

const params =
    new URLSearchParams(window.location.search);

if (params.get("developer") === "on") {

    localStorage.setItem(
        DEVELOPER_MODE_KEY,
        "true"
    );

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );
}

if (params.get("developer") === "off") {

    localStorage.removeItem(
        DEVELOPER_MODE_KEY
    );

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );
}

const IS_DEVELOPER =
    localStorage.getItem(
        DEVELOPER_MODE_KEY
    ) === "true";


/* =========================================================
   SESSION ID
   ========================================================= */

let SOUNDSPACE_SESSION_ID =
    sessionStorage.getItem(
        "soundspace_session_id"
    );

if (!SOUNDSPACE_SESSION_ID) {

    SOUNDSPACE_SESSION_ID =
        "ss_" +
        Date.now() +
        "_" +
        Math.random()
            .toString(36)
            .substring(2, 10);

    sessionStorage.setItem(
        "soundspace_session_id",
        SOUNDSPACE_SESSION_ID
    );
}


/* =========================================================
   ANALYTICS
   ========================================================= */

async function trackSoundSpaceEvent(
    eventType,
    mood = null,
    song = null,
    helpful = null,
    feedbackText = null
) {

    if (IS_DEVELOPER) {

        console.log(
            "[Developer Mode] Not tracked:",
            eventType
        );

        return false;
    }

    try {

        const payload = {
            event_type: eventType,
            session_id: SOUNDSPACE_SESSION_ID,
            page: window.location.pathname,
            mood: mood,
            song: song,
            helpful: helpful,
            feedback_text: feedbackText
        };

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/usage_events`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",

                        "apikey":
                            SUPABASE_KEY,

                        "Authorization":
                            `Bearer ${SUPABASE_KEY}`,

                        "Prefer":
                            "return=minimal"
                    },

                    body:
                        JSON.stringify(payload)
                }
            );

        if (!response.ok) {

            const errorText =
                await response.text();

            console.error(
                "Supabase analytics error:",
                response.status,
                errorText
            );

            return false;
        }

        return true;

    } catch (error) {

        console.error(
            "Analytics connection error:",
            error
        );

        return false;
    }
}


/* =========================================================
   SONG DATA
   ========================================================= */

const moodData = {

    happiness: {

        title: "Happiness",

        emoji: "😊",

        description:
            "Keep the good feeling going with upbeat, energetic and positive music.",

        songs: [

            {
                title: "Happy",
                artist: "Pharrell Williams",
                why:
                    "Its upbeat rhythm and positive energy make it a natural fit for maintaining a happy mood."
            },

            {
                title: "Can't Stop the Feeling!",
                artist: "Justin Timberlake",
                why:
                    "Its lively tempo and danceable rhythm create an energetic and joyful atmosphere."
            },

            {
                title: "Levitating",
                artist: "Dua Lipa",
                why:
                    "Its playful disco-inspired production gives the song an uplifting character."
            },

            {
                title: "Uptown Funk",
                artist: "Mark Ronson ft. Bruno Mars",
                why:
                    "Its energetic funk groove makes it lively, stimulating and highly danceable."
            },

            {
                title: "Good as Hell",
                artist: "Lizzo",
                why:
                    "Its confident message and upbeat production support feelings of positivity."
            },

            {
                title: "Lush Life",
                artist: "Zara Larsson",
                why:
                    "Its bright pop sound creates a carefree and energetic atmosphere."
            },

            {
                title: "APT.",
                artist: "ROSÉ & Bruno Mars",
                why:
                    "Its catchy rhythm and high-energy production make it suitable for an upbeat mood."
            },

            {
                title: "Golden",
                artist:
                    "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
                why:
                    "Its energetic production and confident delivery create an uplifting atmosphere."
            },

            {
                title: "Flowers",
                artist: "Miley Cyrus",
                why:
                    "Its confident message and bright pop production can reinforce positive feelings."
            },

            {
                title: "Roar",
                artist: "Katy Perry",
                why:
                    "Its energetic chorus and empowering message make it uplifting and motivating."
            }

        ]
    },


    sadness: {

        title: "Sadness",

        emoji: "😢",

        description:
            "Find comfort, emotional connection and gentle warmth through reflective music.",

        songs: [

            {
                title: "Beautiful Things",
                artist: "Benson Boone",
                why:
                    "Its emotional delivery creates space for reflection and emotional connection."
            },

            {
                title: "Someone You Loved",
                artist: "Lewis Capaldi",
                why:
                    "Its emotional vocals and reflective mood connect naturally with feelings of sadness."
            },

            {
                title: "The Night We Met",
                artist: "Lord Huron",
                why:
                    "Its nostalgic atmosphere creates a deeply reflective listening experience."
            },

            {
                title: "When We Were Young",
                artist: "Adele",
                why:
                    "Its nostalgic themes and expressive vocals create a strong sense of reflection."
            },

            {
                title: "Iris",
                artist: "Goo Goo Dolls",
                why:
                    "Its emotional melody and vulnerable atmosphere can resonate with longing."
            },

            {
                title: "Lovely",
                artist: "Billie Eilish & Khalid",
                why:
                    "Its restrained production and vulnerable atmosphere suit reflective listening."
            },

            {
                title: "What Was I Made For?",
                artist: "Billie Eilish",
                why:
                    "Its soft arrangement and introspective tone encourage quiet reflection."
            },

            {
                title: "Ocean Eyes",
                artist: "Billie Eilish",
                why:
                    "Its gentle production creates a calm and introspective atmosphere."
            },

            {
                title: "Die With A Smile",
                artist: "Lady Gaga & Bruno Mars",
                why:
                    "Its emotional ballad style creates space for heartfelt reflection."
            },

            {
                title: "Back To Friends",
                artist: "sombr",
                why:
                    "Its reflective themes and emotional delivery suit feelings of loss and longing."
            }

        ]
    },


    anger: {

        title: "Anger",

        emoji: "😡",

        description:
            "Use powerful music as a structured way to release energy and shift your emotional direction.",

        songs: [

            {
                title: "Believer",
                artist: "Imagine Dragons",
                why:
                    "Its intense percussion and powerful vocals provide an energetic outlet."
            },

            {
                title: "Stronger",
                artist: "Kelly Clarkson",
                why:
                    "Its message of overcoming difficulty can redirect frustration toward resilience."
            },

            {
                title: "Titanium",
                artist: "David Guetta ft. Sia",
                why:
                    "Its powerful production and resilient message create an empowering experience."
            },

            {
                title: "Unstoppable",
                artist: "Sia",
                why:
                    "Its dramatic build can shift intense feelings toward determination."
            },

            {
                title: "Roar",
                artist: "Katy Perry",
                why:
                    "Its energetic chorus provides a constructive direction for intense emotions."
            },

            {
                title: "Shake It Off",
                artist: "Taylor Swift",
                why:
                    "Its upbeat rhythm encourages emotional release and moving forward."
            },

            {
                title: "Flowers",
                artist: "Miley Cyrus",
                why:
                    "Its confident message can redirect frustration toward self-reliance."
            },

            {
                title: "I Will Survive",
                artist: "Gloria Gaynor",
                why:
                    "Its resilient message transforms difficult feelings into strength."
            },

            {
                title: "Since U Been Gone",
                artist: "Kelly Clarkson",
                why:
                    "Its high-energy sound provides an expressive outlet for strong emotions."
            },

            {
                title: "The Man",
                artist: "The Killers",
                why:
                    "Its energetic rock sound matches high-energy emotional states."
            }

        ]
    },


    anxiety: {

        title: "Anxiety",

        emoji: "😟",

        description:
            "Explore slower, familiar and emotionally gentle songs that may help create a calmer atmosphere.",

        songs: [

            {
                title: "A Thousand Years",
                artist: "Christina Perri",
                why:
                    "Its slow tempo and gentle arrangement create a softer listening environment."
            },

            {
                title: "Perfect",
                artist: "Ed Sheeran",
                why:
                    "Its smooth melody provides a gentle and emotionally warm experience."
            },

            {
                title: "Photograph",
                artist: "Ed Sheeran",
                why:
                    "Its reflective pacing creates a quieter atmosphere suited to slowing down."
            },

            {
                title: "Yellow",
                artist: "Coldplay",
                why:
                    "Its warm melody can create a comforting atmosphere."
            },

            {
                title: "Ocean Eyes",
                artist: "Billie Eilish",
                why:
                    "Its soft vocals and spacious sound create a calm listening environment."
            },

            {
                title: "Lovely",
                artist: "Billie Eilish & Khalid",
                why:
                    "Its restrained instrumentation supports gentle reflective listening."
            },

            {
                title: "Until I Found You",
                artist: "Stephen Sanchez",
                why:
                    "Its nostalgic style and smooth vocals create a gentle atmosphere."
            },

            {
                title: "Adore You",
                artist: "Harry Styles",
                why:
                    "Its warm production and smooth melody create a comfortable listening experience."
            },

            {
                title: "Sunflower",
                artist: "Post Malone & Swae Lee",
                why:
                    "Its relaxed groove gives it an easy-going quality."
            },

            {
                title: "What Was I Made For?",
                artist: "Billie Eilish",
                why:
                    "Its quiet arrangement and slow pace encourage stillness and reflection."
            }

        ]
    },


    irritation: {

        title: "Irritation",

        emoji: "😤",

        description:
            "Take a musical reset with lighter, warmer and more relaxed songs.",

        songs: [

            {
                title: "Sunday Best",
                artist: "Surfaces",
                why:
                    "Its relaxed rhythm and optimistic tone create an easy-going atmosphere."
            },

            {
                title: "Put Your Records On",
                artist: "Corinne Bailey Rae",
                why:
                    "Its warm vocals and relaxed groove create a comforting experience."
            },

            {
                title: "Lovely Day",
                artist: "Bill Withers",
                why:
                    "Its smooth groove creates a warm and positive atmosphere."
            },

            {
                title: "Sunflower",
                artist: "Post Malone & Swae Lee",
                why:
                    "Its laid-back rhythm gives the song a relaxed quality."
            },

            {
                title: "Adore You",
                artist: "Harry Styles",
                why:
                    "Its warm production creates a lighter emotional atmosphere."
            },

            {
                title: "Best Part",
                artist: "Daniel Caesar ft. H.E.R.",
                why:
                    "Its soft instrumentation and gentle delivery create a calm atmosphere."
            },

            {
                title: "Location",
                artist: "Khalid",
                why:
                    "Its mellow production makes it suitable for relaxed listening."
            },

            {
                title: "Golden Hour",
                artist: "JVKE",
                why:
                    "Its warm melody creates a soothing emotional tone."
            },

            {
                title: "Sweet Creature",
                artist: "Harry Styles",
                why:
                    "Its quiet sound creates a low-intensity listening experience."
            },

            {
                title: "So Easy (To Fall in Love)",
                artist: "Olivia Dean",
                why:
                    "Its smooth vocals and warm production create an easy-going atmosphere."
            }

        ]
    }

};


/* =========================================================
   APP STATE
   ========================================================= */

let currentEmotion = "";

let currentSongIndex = -1;

let originalSongs = [];

let queueSongs = [];

let isShuffleOn = false;


/* =========================================================
   PAGE ELEMENTS
   ========================================================= */

const pages = {

    home:
        document.getElementById("home-page"),

    emotion:
        document.getElementById("emotion-page"),

    why:
        document.getElementById("why-page"),

    about:
        document.getElementById("about-page"),

    feedback:
        document.getElementById("feedback-page"),

    insights:
        document.getElementById("insights-page")

};


/* =========================================================
   PAGE SWITCHING
   ========================================================= */

function showPage(pageName) {

    Object.values(pages).forEach(
        page => {

            if (page) {
                page.style.display = "none";
            }

        }
    );

    if (pages[pageName]) {

        pages[pageName].style.display =
            "block";

    }

    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.remove("active");

        });

    const activeNav =
        document.getElementById(
            `${pageName}-nav`
        );

    if (activeNav) {

        activeNav.classList.add("active");

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showHomePage() {
    showPage("home");
}


function showEmotionPage() {
    showPage("emotion");
}


function showWhyPage() {
    showPage("why");
}


function showAboutPage() {
    showPage("about");
}


function showFeedbackPage() {
    showPage("feedback");
}


function showInsightsPage() {

    showPage("insights");

    displayInsights();
}


/* =========================================================
   RESET QUEUE
   ========================================================= */

function resetQueue(emotion) {

    if (!moodData[emotion]) {
        return;
    }

    currentEmotion = emotion;

    originalSongs =
        moodData[emotion].songs.map(
            song => ({ ...song })
        );

    queueSongs =
        moodData[emotion].songs.map(
            song => ({ ...song })
        );

    currentSongIndex = -1;

    isShuffleOn = false;

    updateQueueButton();

}


/* =========================================================
   DISPLAY EMOTION
   ========================================================= */

function displayEmotion(emotion) {

    const data =
        moodData[emotion];

    if (!data) {
        return;
    }

    resetQueue(emotion);

    document.getElementById(
        "selected-emotion-icon"
    ).textContent =
        data.emoji;

    document.getElementById(
        "selected-emotion-title"
    ).textContent =
        data.title;

    document.getElementById(
        "selected-emotion-description"
    ).textContent =
        data.description;

    const player =
        document.getElementById(
            "player-section"
        );

    if (player) {

        player.style.display =
            "none";

    }

    displaySongs();

    showEmotionPage();
}


/* =========================================================
   DISPLAY SONGS
   ========================================================= */

function displaySongs() {

    const songList =
        document.getElementById(
            "song-list"
        );

    if (!songList) {
        return;
    }

    songList.innerHTML = "";

    queueSongs.forEach(
        (song, index) => {

            const card =
                document.createElement("div");

            card.className =
                "song-card";

            card.innerHTML = `

                <div class="song-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="song-details">

                    <strong>
                        ${escapeHTML(song.title)}
                    </strong>

                    <small>
                        ${escapeHTML(song.artist)}
                    </small>

                    <p class="song-why">
                        <b>✨ Why this song fits:</b>
                        ${escapeHTML(song.why)}
                    </p>

                </div>

                <button
                    type="button"
                    class="listen-song-button"
                >
                    Listen
                </button>

            `;

            const listenButton =
                card.querySelector(
                    ".listen-song-button"
                );

            if (listenButton) {

                listenButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        currentSongIndex =
                            index;

                        playCurrentSong();

                    }
                );

            }

            card.addEventListener(
                "click",
                () => {

                    currentSongIndex =
                        index;

                    playCurrentSong();

                }
            );

            songList.appendChild(card);

        }
    );

    highlightCurrentSong();
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   HIGHLIGHT CURRENT SONG
   ========================================================= */

function highlightCurrentSong() {

    const cards =
        document.querySelectorAll(
            ".song-card"
        );

    cards.forEach(
        (card, index) => {

            card.classList.toggle(
                "current-song",
                index === currentSongIndex
            );

        }
    );
}


/* =========================================================
   PLAY CURRENT SONG
   ========================================================= */

function playCurrentSong() {

    if (
        !queueSongs.length ||
        currentSongIndex < 0 ||
        currentSongIndex >= queueSongs.length
    ) {

        return;

    }

    const song =
        queueSongs[currentSongIndex];

    trackSoundSpaceEvent(
        "song_selected",
        currentEmotion,
        `${song.title} — ${song.artist}`
    );

    const player =
        document.getElementById(
            "player-section"
        );

    const title =
        document.getElementById(
            "player-song-title"
        );

    const artist =
        document.getElementById(
            "player-song-artist"
        );

    const reason =
        document.getElementById(
            "player-song-reason"
        );

    const listenLink =
        document.getElementById(
            "listen-link"
        );

    if (title) {

        title.textContent =
            song.title;

    }

    if (artist) {

        artist.textContent =
            song.artist;

    }

    if (reason) {

        reason.textContent =
            "✨ Why this song fits: " +
            song.why;

    }

    if (listenLink) {

        const searchQuery =
            encodeURIComponent(
                `${song.title} ${song.artist}`
            );

        listenLink.href =
            "https://open.spotify.com/search/" +
            searchQuery;

    }

    if (player) {

        player.style.display =
            "block";

    }

    highlightCurrentSong();

    if (player) {

        player.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
}


/* =========================================================
   NEXT SONG
   ========================================================= */

function nextSong() {

    if (!queueSongs.length) {
        return;
    }

    if (currentSongIndex === -1) {

        currentSongIndex = 0;

    } else {

        currentSongIndex++;

        if (
            currentSongIndex >=
            queueSongs.length
        ) {

            currentSongIndex = 0;

        }

    }

    playCurrentSong();
}


/* =========================================================
   PREVIOUS SONG
   ========================================================= */

function previousSong() {

    if (!queueSongs.length) {
        return;
    }

    if (currentSongIndex === -1) {

        currentSongIndex =
            queueSongs.length - 1;

    } else {

        currentSongIndex--;

        if (currentSongIndex < 0) {

            currentSongIndex =
                queueSongs.length - 1;

        }

    }

    playCurrentSong();
}


/* =========================================================
   SHUFFLE ARRAY
   ========================================================= */

function shuffleArray(array) {

    const result =
        [...array];

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            result[i],
            result[randomIndex]
        ] =
        [
            result[randomIndex],
            result[i]
        ];

    }

    return result;
}


/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffleSongs() {

    if (!currentEmotion) {
        return;
    }

    const currentlyPlaying =
        currentSongIndex >= 0
            ? queueSongs[currentSongIndex]
            : null;

    queueSongs =
        shuffleArray(queueSongs);

    /*
       Keep the currently selected song
       as the current song after shuffle.
    */

    if (currentlyPlaying) {

        currentSongIndex =
            queueSongs.findIndex(
                song =>
                    song.title ===
                        currentlyPlaying.title &&
                    song.artist ===
                        currentlyPlaying.artist
            );

    } else {

        currentSongIndex = -1;

    }

    isShuffleOn = true;

    displaySongs();

    updateQueueButton();
}


/* =========================================================
   RESHUFFLE
   ========================================================= */

function reshuffleSongs() {

    if (!currentEmotion) {
        return;
    }

    queueSongs =
        shuffleArray(
            originalSongs
        );

    currentSongIndex = -1;

    isShuffleOn = true;

    displaySongs();

    updateQueueButton();
}


/* =========================================================
   UPDATE SHUFFLE BUTTON
   ========================================================= */

function updateQueueButton() {

    const button =
        document.getElementById(
            "shuffle-button"
        );

    if (!button) {
        return;
    }

    button.textContent =
        isShuffleOn
            ? "🔀 Shuffled"
            : "🔀 Shuffle";
}


/* =========================================================
   SURPRISE ME
   ========================================================= */

function surpriseMe() {

    if (!queueSongs.length) {
        return;
    }

    let randomIndex =
        Math.floor(
            Math.random() *
            queueSongs.length
        );

    /*
       Avoid immediately selecting
       the same song when possible.
    */

    if (
        queueSongs.length > 1 &&
        randomIndex === currentSongIndex
    ) {

        randomIndex =
            (
                randomIndex + 1
            ) %
            queueSongs.length;

    }

    currentSongIndex =
        randomIndex;

    playCurrentSong();
}


/* =========================================================
   FEEDBACK
   ========================================================= */

let selectedFit = "";

let selectedHelpful = "";


function setupFeedback() {

    const choiceButtons =
        document.querySelectorAll(
            ".choice-button"
        );

    choiceButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    choiceButtons.forEach(
                        otherButton => {

                            otherButton.classList.remove(
                                "selected"
                            );

                        }
                    );

                    button.classList.add(
                        "selected"
                    );

                    selectedFit =
                        button.dataset.value;

                    const hiddenInput =
                        document.getElementById(
                            "feedback-fit"
                        );

                    if (hiddenInput) {

                        hiddenInput.value =
                            selectedFit;

                    }

                }
            );

        }
    );


    const helpfulButtons =
        document.querySelectorAll(
            ".helpful-choice"
        );

    helpfulButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    helpfulButtons.forEach(
                        otherButton => {

                            otherButton.classList.remove(
                                "selected"
                            );

                        }
                    );

                    button.classList.add(
                        "selected"
                    );

                    selectedHelpful =
                        button.dataset.value;

                    const hiddenInput =
                        document.getElementById(
                            "feedback-helpful"
                        );

                    if (hiddenInput) {

                        hiddenInput.value =
                            selectedHelpful;

                    }

                }
            );

        }
    );


    const form =
        document.getElementById(
            "feedback-form"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();

            const emotion =
                document.getElementById(
                    "feedback-emotion"
                ).value;

            const improvement =
                document.getElementById(
                    "feedback-improvement"
                ).value.trim();

            const liked =
                document.getElementById(
                    "feedback-liked"
                ).value.trim();

            const message =
                document.getElementById(
                    "full-feedback-message"
                );


            if (
                !emotion ||
                !selectedFit ||
                !selectedHelpful
            ) {

                if (message) {

                    message.textContent =
                        "Please answer the required questions first.";

                }

                return;
            }


            const feedbackText =
                `Fit: ${selectedFit}. ` +
                `Helpful: ${selectedHelpful}. ` +
                `Improvement: ${improvement}. ` +
                `Liked: ${liked}`;


            if (message) {

                message.textContent =
                    "Sending feedback...";

            }


            const saved =
                await trackSoundSpaceEvent(
                    "feedback",
                    emotion.toLowerCase(),
                    null,
                    selectedHelpful,
                    feedbackText
                );


            if (saved) {

                if (message) {

                    message.textContent =
                        "✨ Thank you! Your feedback has been sent.";

                }

                form.reset();

                selectedFit = "";

                selectedHelpful = "";

                choiceButtons.forEach(
                    button => {

                        button.classList.remove(
                            "selected"
                        );

                    }
                );

                helpfulButtons.forEach(
                    button => {

                        button.classList.remove(
                            "selected"
                        );

                    }
                );

            } else {

                if (message) {

                    message.textContent =
                        "We couldn't send your feedback right now. Please try again.";

                }

            }

        }
    );

}


/* =========================================================
   INSIGHTS
   ========================================================= */

async function displayInsights() {

    const totalUses =
        document.getElementById(
            "total-uses"
        );

    const helpfulCount =
        document.getElementById(
            "helpful-count"
        );

    const mostUsedEmotion =
        document.getElementById(
            "most-used-emotion"
        );

    const emotionList =
        document.getElementById(
            "emotion-statistics-list"
        );

    const historyList =
        document.getElementById(
            "usage-history-list"
        );


    if (IS_DEVELOPER) {

        if (totalUses) {
            totalUses.textContent = "—";
        }

        if (helpfulCount) {
            helpfulCount.textContent = "—";
        }

        if (mostUsedEmotion) {
            mostUsedEmotion.textContent =
                "Developer Mode";
        }

        if (emotionList) {
            emotionList.innerHTML = "";
        }

        if (historyList) {
            historyList.innerHTML = "";
        }

        return;
    }


    if (totalUses) {
        totalUses.textContent = "Loading...";
    }

    if (helpfulCount) {
        helpfulCount.textContent = "Loading...";
    }

    if (mostUsedEmotion) {
        mostUsedEmotion.textContent = "Loading...";
    }


    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/usage_events?select=*&order=created_at.asc`,
                {
                    method: "GET",

                    headers: {
                        "apikey":
                            SUPABASE_KEY,

                        "Authorization":
                            `Bearer ${SUPABASE_KEY}`
                    }
                }
            );


        if (!response.ok) {

            const errorText =
                await response.text();

            throw new Error(
                `Supabase returned ${response.status}: ${errorText}`
            );

        }


        const events =
            await response.json();


        /*
           TOTAL USES
           Count unique sessions instead of
           counting every event.
        */

        const sessions =
            new Set();

        events.forEach(
            event => {

                if (event.session_id) {

                    sessions.add(
                        event.session_id
                    );

                }

            }
        );


        if (totalUses) {

            totalUses.textContent =
                sessions.size;

        }


        /*
           HELPFUL RESPONSES
        */

        const helpfulResponses =
            events.filter(
                event =>
                    event.event_type ===
                        "feedback" &&
                    String(event.helpful)
                        .toLowerCase() ===
                        "yes"
            );


        if (helpfulCount) {

            helpfulCount.textContent =
                helpfulResponses.length;

        }


        /*
           EMOTION COUNTS
        */

        const counts = {

            happiness: 0,
            sadness: 0,
            anger: 0,
            anxiety: 0,
            irritation: 0

        };


        events.forEach(
            event => {

                if (
                    event.event_type ===
                    "emotion_selected"
                ) {

                    const emotion =
                        String(
                            event.mood || ""
                        ).toLowerCase();

                    if (
                        Object.prototype.hasOwnProperty.call(
                            counts,
                            emotion
                        )
                    ) {

                        counts[emotion]++;

                    }

                }

            }
        );


        /*
           MOST USED EMOTION
        */

        let mostUsed = null;

        let highestCount = 0;


        Object.keys(counts).forEach(
            emotion => {

                if (
                    counts[emotion] >
                    highestCount
                ) {

                    highestCount =
                        counts[emotion];

                    mostUsed =
                        emotion;

                }

            }
        );


        if (mostUsedEmotion) {

            mostUsedEmotion.textContent =
                mostUsed
                    ? `${moodData[mostUsed].emoji} ${moodData[mostUsed].title}`
                    : "—";

        }


        /*
           EMOTION STATISTICS
        */

        if (emotionList) {

            emotionList.innerHTML = "";

            Object.keys(counts).forEach(
                emotion => {

                    const row =
                        document.createElement(
                            "div"
                        );

                    row.className =
                        "emotion-stat-row";

                    const label =
                        document.createElement(
                            "strong"
                        );

                    label.textContent =
                        `${moodData[emotion].emoji} ${moodData[emotion].title}`;

                    const count =
                        document.createElement(
                            "span"
                        );

                    count.textContent =
                        counts[emotion];

                    row.appendChild(label);

                    row.appendChild(count);

                    emotionList.appendChild(row);

                }
            );

        }


        /*
           USAGE HISTORY

           Shows actual page visits with dates.
        */

        if (historyList) {

            historyList.innerHTML = "";

            const pageViews =
                events.filter(
                    event =>
                        event.event_type ===
                        "page_view"
                );


            if (!pageViews.length) {

                historyList.innerHTML =
                    "<p>No visitor activity yet.</p>";

            } else {

                pageViews
                    .slice()
                    .reverse()
                    .slice(0, 20)
                    .forEach(
                        event => {

                            const row =
                                document.createElement(
                                    "div"
                                );

                            row.className =
                                "usage-history-row";

                            const date =
                                event.created_at
                                    ? new Date(
                                        event.created_at
                                      ).toLocaleString()
                                    : "Unknown date";

                            row.textContent =
                                date;

                            historyList.appendChild(
                                row
                            );

                        }
                    );

            }

        }


    } catch (error) {

        console.error(
            "Could not load SoundSpace insights:",
            error
        );


        if (totalUses) {
            totalUses.textContent = "—";
        }

        if (helpfulCount) {
            helpfulCount.textContent = "—";
        }

        if (mostUsedEmotion) {
            mostUsedEmotion.textContent = "—";
        }

        if (emotionList) {

            emotionList.innerHTML =
                "<p>Unable to load emotion statistics.</p>";

        }

        if (historyList) {

            historyList.innerHTML =
                "<p>Unable to load usage history.</p>";

        }

    }

}


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           EMOTION CARDS
           ================================================= */

        document
            .querySelectorAll(
                ".emotion-card"
            )
            .forEach(
                card => {

                    card.addEventListener(
                        "click",
                        () => {

                            const emotion =
                                String(
                                    card.dataset.emotion ||
                                    ""
                                ).toLowerCase();

                            if (
                                !moodData[emotion]
                            ) {

                                console.error(
                                    "Unknown emotion:",
                                    emotion
                                );

                                return;

                            }


                            trackSoundSpaceEvent(
                                "emotion_selected",
                                emotion
                            );


                            displayEmotion(
                                emotion
                            );

                        }
                    );

                }
            );


        /* =================================================
           BACK BUTTON
           ================================================= */

        const backButton =
            document.getElementById(
                "back-button"
            );

        if (backButton) {

            backButton.addEventListener(
                "click",
                showHomePage
            );

        }


        /* =================================================
           NAVIGATION
           ================================================= */

        const navigation = {

            "home-nav":
                showHomePage,

            "why-nav":
                showWhyPage,

            "about-nav":
                showAboutPage,

            "feedback-nav":
                showFeedbackPage,

            "insights-nav":
                showInsightsPage

        };


        Object.entries(
            navigation
        ).forEach(
            ([id, handler]) => {

                const button =
                    document.getElementById(id);

                if (button) {

                    button.addEventListener(
                        "click",
                        handler
                    );

                }

            }
        );


        /* =================================================
           SURPRISE ME
           ================================================= */

        const surpriseButton =
            document.getElementById(
                "surprise-button"
            );

        if (surpriseButton) {

            surpriseButton.addEventListener(
                "click",
                surpriseMe
            );

        }


        /* =================================================
           QUEUE BUTTONS
           ================================================= */

        const previousButton =
            document.getElementById(
                "previous-song"
            );

        const nextButton =
            document.getElementById(
                "next-song"
            );

        const shuffleButton =
            document.getElementById(
                "shuffle-button"
            );

        const reshuffleButton =
            document.getElementById(
                "reshuffle-button"
            );


        if (previousButton) {

            previousButton.addEventListener(
                "click",
                previousSong
            );

        }


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextSong
            );

        }


        if (shuffleButton) {

            shuffleButton.addEventListener(
                "click",
                shuffleSongs
            );

        }


        if (reshuffleButton) {

            reshuffleButton.addEventListener(
                "click",
                reshuffleSongs
            );

        }


        /* =================================================
           PLAYER CONTROLS
           ================================================= */

        const playerPrevious =
            document.getElementById(
                "player-previous"
            );

        const playerNext =
            document.getElementById(
                "player-next"
            );


        if (playerPrevious) {

            playerPrevious.addEventListener(
                "click",
                previousSong
            );

        }


        if (playerNext) {

            playerNext.addEventListener(
                "click",
                nextSong
            );

        }


        /* =================================================
           FEEDBACK
           ================================================= */

        setupFeedback();


        /* =================================================
           PAGE VIEW
           ================================================= */

        if (!IS_DEVELOPER) {

            trackSoundSpaceEvent(
                "page_view"
            );

        }


        /* =================================================
           STARTUP MESSAGE
           ================================================= */

        console.log(
            "SoundSpace loaded successfully."
        );

    }
);
