/* =========================================================
   SOUNDSPACE
   COMPLETE WORKING SCRIPT
   Matches the exact index.html provided
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
    new URLSearchParams(
        window.location.search
    );


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
            .slice(2, 10);

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
            "Developer activity not tracked:",
            eventType
        );

        return;

    }


    try {

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
                        JSON.stringify({

                            event_type:
                                eventType,

                            session_id:
                                SOUNDSPACE_SESSION_ID,

                            page:
                                window.location.pathname,

                            mood:
                                mood,

                            song:
                                song,

                            helpful:
                                helpful,

                            feedback_text:
                                feedbackText

                        })

                }
            );


        if (!response.ok) {

            console.error(
                "Analytics could not be saved."
            );

        }

    } catch (error) {

        console.error(
            "SoundSpace analytics error:",
            error
        );

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
        document.getElementById(
            "home-page"
        ),

    emotion:
        document.getElementById(
            "emotion-page"
        ),

    why:
        document.getElementById(
            "why-page"
        ),

    about:
        document.getElementById(
            "about-page"
        ),

    feedback:
        document.getElementById(
            "feedback-page"
        ),

    insights:
        document.getElementById(
            "insights-page"
        )

};


/* =========================================================
   PAGE SWITCHING
   ========================================================= */

function showPage(pageName) {

    Object.values(pages).forEach(
        function(page) {

            if (page) {

                page.style.display =
                    "none";

            }

        }
    );


    if (pages[pageName]) {

        pages[pageName].style.display =
            "block";

    }


    document
        .querySelectorAll(
            ".nav-btn"
        )
        .forEach(
            function(button) {

                button.classList.remove(
                    "active"
                );

            }
        );


    const activeNav =
        document.getElementById(
            `${pageName}-nav`
        );


    if (activeNav) {

        activeNav.classList.add(
            "active"
        );

    }


    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

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
   DISPLAY EMOTION
   ========================================================= */

function displayEmotion(emotion) {

    const data =
        moodData[emotion];


    if (!data) {

        return;

    }


    currentEmotion =
        emotion;


    currentSongIndex =
        -1;


    originalSongs =
        [...data.songs];


    queueSongs =
        [...data.songs];


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


    songList.innerHTML =
        "";


    queueSongs.forEach(
        function(song, index) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "song-card";


            card.innerHTML = `

                <div class="song-number">
                    ${String(
                        index + 1
                    ).padStart(
                        2,
                        "0"
                    )}
                </div>

                <div class="song-details">

                    <strong>
                        ${song.title}
                    </strong>

                    <small>
                        ${song.artist}
                    </small>

                    <p class="song-why">
                        <b>✨ Why this song fits:</b>
                        ${song.why}
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


            listenButton.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    currentSongIndex =
                        index;

                    playCurrentSong();

                }
            );


            card.addEventListener(
                "click",
                function() {

                    currentSongIndex =
                        index;

                    playCurrentSong();

                }
            );


            songList.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   PLAY CURRENT SONG
   ========================================================= */

function playCurrentSong() {

    if (
        currentSongIndex < 0 ||
        currentSongIndex >=
            queueSongs.length
    ) {

        return;

    }


    const song =
        queueSongs[
            currentSongIndex
        ];


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


    title.textContent =
        song.title;


    artist.textContent =
        song.artist;


    reason.textContent =
        "✨ Why this song fits: " +
        song.why;


    const searchQuery =
        encodeURIComponent(
            `${song.title} ${song.artist}`
        );


    listenLink.href =
        "https://open.spotify.com/search/" +
        searchQuery;


    player.style.display =
        "block";


    player.scrollIntoView({

        behavior:
            "smooth",

        block:
            "center"

    });

}


/* =========================================================
   NEXT SONG
   ========================================================= */

function nextSong() {

    if (
        queueSongs.length === 0
    ) {

        return;

    }


    currentSongIndex++;


    if (
        currentSongIndex >=
        queueSongs.length
    ) {

        currentSongIndex =
            0;

    }


    playCurrentSong();

}


/* =========================================================
   PREVIOUS SONG
   ========================================================= */

function previousSong() {

    if (
        queueSongs.length === 0
    ) {

        return;

    }


    currentSongIndex--;


    if (
        currentSongIndex < 0
    ) {

        currentSongIndex =
            queueSongs.length - 1;

    }


    playCurrentSong();

}


/* =========================================================
   SHUFFLE ARRAY
   ========================================================= */

function shuffleArray(array) {

    const shuffled =
        [...array];


    for (
        let i =
            shuffled.length - 1;

        i > 0;

        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            shuffled[i],
            shuffled[randomIndex]
        ] =
        [
            shuffled[randomIndex],
            shuffled[i]
        ];

    }


    return shuffled;

}


/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffleSongs() {

    if (
        !currentEmotion
    ) {

        return;

    }


    queueSongs =
        shuffleArray(
            queueSongs
        );


    currentSongIndex =
        -1;


    isShuffleOn =
        true;


    displaySongs();


    const button =
        document.getElementById(
            "shuffle-button"
        );


    if (button) {

        button.textContent =
            "🔀 Shuffled";

    }

}


/* =========================================================
   RESHUFFLE
   ========================================================= */

function reshuffleSongs() {

    if (
        !currentEmotion
    ) {

        return;

    }


    queueSongs =
        shuffleArray(
            originalSongs
        );


    currentSongIndex =
        -1;


    isShuffleOn =
        true;


    displaySongs();


    const button =
        document.getElementById(
            "shuffle-button"
        );


    if (button) {

        button.textContent =
            "🔀 Shuffled";

    }

}


/* =========================================================
   SURPRISE ME
   ========================================================= */

function surpriseMe() {

    if (
        queueSongs.length === 0
    ) {

        return;

    }


    let randomIndex =
        Math.floor(
            Math.random() *
            queueSongs.length
        );


    if (
        queueSongs.length > 1 &&
        randomIndex ===
        currentSongIndex
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
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    choiceButtons.forEach(
                        function(otherButton) {

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


                    document.getElementById(
                        "feedback-fit"
                    ).value =
                        selectedFit;

                }
            );

        }
    );


    const helpfulButtons =
        document.querySelectorAll(
            ".helpful-choice"
        );


    helpfulButtons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    helpfulButtons.forEach(
                        function(otherButton) {

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


                    document.getElementById(
                        "feedback-helpful"
                    ).value =
                        selectedHelpful;

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
        function(event) {

            event.preventDefault();


            const emotion =
                document.getElementById(
                    "feedback-emotion"
                ).value;


            const improvement =
                document.getElementById(
                    "feedback-improvement"
                ).value;


            const liked =
                document.getElementById(
                    "feedback-liked"
                ).value;


            const message =
                document.getElementById(
                    "full-feedback-message"
                );


            if (
                !emotion ||
                !selectedFit ||
                !selectedHelpful
            ) {

                message.textContent =
                    "Please answer the required questions first.";

                return;

            }


            const feedbackText =
                `Fit: ${selectedFit}. ` +
                `Helpful: ${selectedHelpful}. ` +
                `Improvement: ${improvement}. ` +
                `Liked: ${liked}`;


            trackSoundSpaceEvent(

                "feedback",

                emotion,

                null,

                selectedHelpful,

                feedbackText

            );


            message.textContent =
                IS_DEVELOPER
                    ? "Developer mode is on, so this feedback was not tracked."
                    : "✨ Thank you! Your feedback has been sent.";


            form.reset();


            selectedFit =
                "";


            selectedHelpful =
                "";


            choiceButtons.forEach(
                function(button) {

                    button.classList.remove(
                        "selected"
                    );

                }
            );


            helpfulButtons.forEach(
                function(button) {

                    button.classList.remove(
                        "selected"
                    );

                }
            );

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

            totalUses.textContent =
                "—";

        }


        if (helpfulCount) {

            helpfulCount.textContent =
                "—";

        }


        if (mostUsedEmotion) {

            mostUsedEmotion.textContent =
                "Developer Mode";

        }


        return;

    }


    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/usage_events?select=*`,
                {

                    headers: {

                        "apikey":
                            SUPABASE_KEY,

                        "Authorization":
                            `Bearer ${SUPABASE_KEY}`

                    }

                }
            );


        if (!response.ok) {

            throw new Error(
                "Could not load insights."
            );

        }


        const events =
            await response.json();


        const sessions =
            new Set();


        events.forEach(
            function(event) {

                if (
                    event.session_id
                ) {

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


        const helpfulResponses =
            events.filter(
                function(event) {

                    return (
                        event.event_type ===
                        "feedback" &&

                        event.helpful ===
                        "yes"
                    );

                }
            );


        if (helpfulCount) {

            helpfulCount.textContent =
                helpfulResponses.length;

        }


        const counts = {

            happiness: 0,
            sadness: 0,
            anger: 0,
            anxiety: 0,
            irritation: 0

        };


        events.forEach(
            function(event) {

                if (
                    event.event_type ===
                    "emotion_selected" &&

                    Object.prototype.hasOwnProperty.call(
                        counts,
                        event.mood
                    )
                ) {

                    counts[
                        event.mood
                    ]++;

                }

            }
        );


        let mostUsed =
            null;

        let highestCount =
            0;


        Object.keys(
            counts
        ).forEach(
            function(emotion) {

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
                    ? moodData[mostUsed].emoji +
                      " " +
                      moodData[mostUsed].title
                    : "—";

        }


        if (emotionList) {

            emotionList.innerHTML =
                "";


            Object.keys(
                counts
            ).forEach(
                function(emotion) {

                    const row =
                        document.createElement(
                            "div"
                        );


                    row.className =
                        "emotion-stat-row";


                    row.innerHTML =
                        `<strong>
                            ${moodData[emotion].emoji}
                            ${moodData[emotion].title}
                        </strong>

                        <span>
                            ${counts[emotion]}
                        </span>`;


                    emotionList.appendChild(
                        row
                    );

                }
            );

        }


        if (historyList) {

            historyList.innerHTML =
                "";


            const pageViews =
                events.filter(
                    function(event) {

                        return (
                            event.event_type ===
                            "page_view"
                        );

                    }
                );


            if (
                pageViews.length === 0
            ) {

                historyList.innerHTML =
                    "<p>No visitor activity yet.</p>";

            } else {

                pageViews
                    .slice()
                    .reverse()
                    .slice(0, 20)
                    .forEach(
                        function(event) {

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
            "Could not load insights:",
            error
        );


        if (totalUses) {

            totalUses.textContent =
                "—";

        }

    }

}


/* =========================================================
   START WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* EMOTION CARDS */

        document
            .querySelectorAll(
                ".emotion-card"
            )
            .forEach(
                function(card) {

                    card.addEventListener(
                        "click",
                        function() {

                            const emotion =
                                card.dataset.emotion
                                    .toLowerCase();


                            if (
                                !moodData[
                                    emotion
                                ]
                            ) {

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


        /* BACK BUTTON */

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


        /* NAVIGATION */

        const homeNav =
            document.getElementById(
                "home-nav"
            );

        const whyNav =
            document.getElementById(
                "why-nav"
            );

        const aboutNav =
            document.getElementById(
                "about-nav"
            );

        const feedbackNav =
            document.getElementById(
                "feedback-nav"
            );

        const insightsNav =
            document.getElementById(
                "insights-nav"
            );


        if (homeNav) {

            homeNav.addEventListener(
                "click",
                showHomePage
            );

        }


        if (whyNav) {

            whyNav.addEventListener(
                "click",
                showWhyPage
            );

        }


        if (aboutNav) {

            aboutNav.addEventListener(
                "click",
                showAboutPage
            );

        }


        if (feedbackNav) {

            feedbackNav.addEventListener(
                "click",
                showFeedbackPage
            );

        }


        if (insightsNav) {

            insightsNav.addEventListener(
                "click",
                showInsightsPage
            );

        }


        /* SURPRISE ME */

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


        /* QUEUE BUTTONS */

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


        /* PLAYER CONTROLS */

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


        /* FEEDBACK */

        setupFeedback();


        /* TRACK PAGE VISIT */

        if (!IS_DEVELOPER) {

            trackSoundSpaceEvent(
                "page_view"
            );

        }


        console.log(
            "SoundSpace loaded successfully!"
        );

    }
);
