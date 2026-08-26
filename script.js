/* =========================================
   SOUNDSPACE
   WORKING SCRIPT + ANALYTICS
   ========================================= */


/* =========================================
   SUPABASE
   ========================================= */

const SUPABASE_URL =
    "https://bjfmlknorxlztxkxlebd.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_NDHWFaIHfs6IqvmbZiHrCg_0H2ZXZbU";


/* =========================================
   DEVELOPER MODE
   ========================================= */

const DEVELOPER_MODE_KEY =
    "soundspace_developer_mode";


const params =
    new URLSearchParams(
        window.location.search
    );


/* Turn developer mode ON */

if (
    params.get("developer") === "on"
) {

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


/* Turn developer mode OFF */

if (
    params.get("developer") === "off"
) {

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


/* =========================================
   SESSION ID
   ========================================= */

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


/* =========================================
   TRACK EVENT
   ========================================= */

async function trackSoundSpaceEvent(
    eventType,
    mood = null,
    song = null,
    helpful = null
) {

    /* Do not track developer activity */

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

                    body: JSON.stringify({

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
                            helpful

                    })

                }

            );


        if (!response.ok) {

            console.error(
                "Analytics could not be saved."
            );

        }

    }

    catch (error) {

        console.error(
            "SoundSpace analytics error:",
            error
        );

    }

}


/* =========================================
   SONG DATA
   ========================================= */

const moodData = {

    happiness: {

        title:
            "Happiness",

        emoji:
            "😊",

        description:
            "Keep the good feeling going with upbeat, energetic and positive music.",

        songs: [

            {
                title: "Happy",
                artist: "Pharrell Williams",
                why:
                    "Its fast, upbeat rhythm and strongly positive message give the song an energetic and joyful feel."
            },

            {
                title: "Can't Stop the Feeling!",
                artist: "Justin Timberlake",
                why:
                    "The lively tempo and danceable rhythm create an energetic listening experience."
            },

            {
                title: "Levitating",
                artist: "Dua Lipa",
                why:
                    "Its disco-inspired beat and playful production give the song an uplifting character."
            },

            {
                title: "Uptown Funk",
                artist: "Mark Ronson ft. Bruno Mars",
                why:
                    "The strong funk groove and energetic tempo make it lively and highly danceable."
            },

            {
                title: "Good as Hell",
                artist: "Lizzo",
                why:
                    "Its upbeat production and encouraging message support feelings of confidence and positivity."
            },

            {
                title: "Lush Life",
                artist: "Zara Larsson",
                why:
                    "The bright pop production and carefree tone create a lively atmosphere."
            },

            {
                title: "APT.",
                artist: "ROSÉ & Bruno Mars",
                why:
                    "Its catchy rhythm and high-energy production make it well suited to an upbeat mood."
            },

            {
                title: "Golden",
                artist:
                    "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
                why:
                    "The energetic production and confident delivery give the song an uplifting direction."
            },

            {
                title: "Flowers",
                artist: "Miley Cyrus",
                why:
                    "Its confident message and bright pop production create an empowering feeling."
            },

            {
                title: "Roar",
                artist: "Katy Perry",
                why:
                    "The energetic chorus and empowering message make it uplifting and motivating."
            }

        ]

    },


    sadness: {

        title:
            "Sadness",

        emoji:
            "😢",

        description:
            "Find comfort, emotional connection and gentle warmth through reflective music.",

        songs: [

            {
                title: "Beautiful Things",
                artist: "Benson Boone",
                why:
                    "Its emotional delivery and themes of meaningful relationships create space for reflection."
            },

            {
                title: "Someone You Loved",
                artist: "Lewis Capaldi",
                why:
                    "The emotional vocals and reflective mood can help listeners connect with feelings of sadness."
            },

            {
                title: "The Night We Met",
                artist: "Lord Huron",
                why:
                    "Its atmospheric sound and nostalgic feeling create a reflective listening experience."
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
                    "The emotional melody and vulnerable lyrics can resonate with longing and sadness."
            },

            {
                title: "Lovely",
                artist: "Billie Eilish & Khalid",
                why:
                    "Its restrained production and vulnerable atmosphere make it suitable for reflective listening."
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
                    "The gentle production and dreamy atmosphere create a calm, introspective experience."
            },

            {
                title: "Die With A Smile",
                artist: "Lady Gaga & Bruno Mars",
                why:
                    "Its emotional ballad style encourages heartfelt reflection."
            },

            {
                title: "Back To Friends",
                artist: "sombr",
                why:
                    "Its reflective themes and emotional delivery suit feelings of loss or longing."
            }

        ]

    },


    anger: {

        title:
            "Anger",

        emoji:
            "😡",

        description:
            "Use powerful music as a structured way to release energy and shift your emotional direction.",

        songs: [

            {
                title: "Believer",
                artist: "Imagine Dragons",
                why:
                    "Its intense percussion and powerful vocals provide an energetic outlet for strong emotions."
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
                    "Its strong production and resilient message create an intense but empowering experience."
            },

            {
                title: "Unstoppable",
                artist: "Sia",
                why:
                    "Its dramatic build and confident message can shift frustration toward determination."
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
                    "Its message of overcoming hardship transforms difficult experiences into resilience."
            },

            {
                title: "Since U Been Gone",
                artist: "Kelly Clarkson",
                why:
                    "Its high-energy sound provides an expressive outlet for intense feelings."
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

        title:
            "Anxiety",

        emoji:
            "😟",

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
                    "Its smooth melody provides a gentle and emotionally warm listening experience."
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
                    "Its restrained instrumentation allows for gentle reflective listening."
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

        title:
            "Irritation",

        emoji:
            "😤",

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
                    "Its warm vocals and relaxed groove create a comforting listening experience."
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
                    "Its warm melody creates a soothing and pleasant emotional tone."
            },

            {
                title: "Sweet Creature",
                artist: "Harry Styles",
                why:
                    "Its acoustic sound creates a quiet and low-intensity listening experience."
            },

            {
                title:
                    "So Easy (To Fall in Love)",

                artist:
                    "Olivia Dean",

                why:
                    "Its smooth vocals and warm production create an easy-going atmosphere."
            }

        ]

    }

};


/* =========================================
   APP STATE
   ========================================= */

let currentEmotion = null;

let currentSong = null;


/* =========================================
   PAGE NAVIGATION
   ========================================= */

function showPage(page) {

    const homePage =
        document.getElementById(
            "home-page"
        );

    const emotionPage =
        document.getElementById(
            "emotion-page"
        );

    const insightsPage =
        document.getElementById(
            "insights-page"
        );


    homePage.style.display = "none";

    emotionPage.style.display = "none";

    insightsPage.style.display = "none";


    if (page === "home") {

        homePage.style.display = "block";

    }


    if (page === "emotion") {

        emotionPage.style.display = "block";

    }


    if (page === "insights") {

        insightsPage.style.display = "block";

        loadInsights();

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================
   DISPLAY EMOTION
   ========================================= */

function showEmotion(emotionName) {

    const emotion =
        emotionName.toLowerCase();


    const data =
        moodData[emotion];


    if (!data) {
        return;
    }


    currentEmotion =
        emotion;


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


    document.getElementById(
        "player-section"
    ).style.display =
        "none";


    displaySongs();


    showPage("emotion");


    trackSoundSpaceEvent(
        "emotion_selected",
        emotion
    );

}


/* =========================================
   DISPLAY SONGS
   ========================================= */

function displaySongs() {

    const songList =
        document.getElementById(
            "song-list"
        );


    songList.innerHTML = "";


    const songs =
        moodData[currentEmotion].songs;


    songs.forEach(
        function(song, index) {

            const card =
                document.createElement(
                    "button"
                );


            card.type = "button";


            card.className =
                "song-card";


            card.innerHTML = `

                <span class="song-number">

                    ${String(
                        index + 1
                    ).padStart(2, "0")}

                </span>


                <span class="song-details">

                    <strong>
                        ${song.title}
                    </strong>


                    <small>
                        ${song.artist}
                    </small>


                    <span class="song-why">

                        <b>
                            ✨ Why this song fits:
                        </b>

                        ${song.why}

                    </span>

                </span>


                <span class="song-arrow">
                    →
                </span>

            `;


            card.addEventListener(
                "click",
                function() {

                    playSong(song);

                }
            );


            songList.appendChild(
                card
            );

        }
    );

}


/* =========================================
   PLAY SONG
   ========================================= */

function playSong(song) {

    currentSong =
        song;


    document.getElementById(
        "player-song-title"
    ).textContent =
        song.title;


    document.getElementById(
        "player-song-artist"
    ).textContent =
        song.artist;


    document.getElementById(
        "player-song-reason"
    ).textContent =
        song.why;


    const query =
        encodeURIComponent(
            `${song.title} ${song.artist}`
        );


    document.getElementById(
        "listen-link"
    ).href =
        "https://www.youtube.com/results?search_query=" +
        query;


    document.getElementById(
        "player-section"
    ).style.display =
        "block";


    trackSoundSpaceEvent(

        "song_selected",

        currentEmotion,

        `${song.title} — ${song.artist}`

    );


    document.getElementById(
        "player-section"
    ).scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================================
   SURPRISE ME
   ========================================= */

document.getElementById(
    "surprise-button"
).addEventListener(
    "click",
    function() {

        if (!currentEmotion) {
            return;
        }


        const songs =
            moodData[currentEmotion].songs;


        const randomIndex =
            Math.floor(
                Math.random() *
                songs.length
            );


        playSong(
            songs[randomIndex]
        );

    }
);


/* =========================================
   FEEDBACK
   ========================================= */

document
    .querySelectorAll(
        ".feedback-button"
    )
    .forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const feedback =
                        button.dataset.feedback;


                    trackSoundSpaceEvent(

                        "feedback",

                        currentEmotion,

                        currentSong
                            ? `${currentSong.title} — ${currentSong.artist}`
                            : null,

                        feedback

                    );


                    const message =
                        document.getElementById(
                            "feedback-message"
                        );


                    if (IS_DEVELOPER) {

                        message.textContent =
                            "Developer Mode is on. Your feedback was not added to the analytics.";

                    }

                    else if (
                        feedback === "yes"
                    ) {

                        message.textContent =
                            "✨ Thank you! We're happy SoundSpace helped.";

                    }

                    else {

                        message.textContent =
                            "Thank you for your feedback. It helps us improve SoundSpace.";

                    }

                }
            );

        }
    );


/* =========================================
   LOAD INSIGHTS
   ========================================= */

async function loadInsights() {

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
                "Could not load insights"
            );

        }


        const events =
            await response.json();


        /* TOTAL UNIQUE SESSIONS */

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


        document.getElementById(
            "total-uses"
        ).textContent =
            sessions.size;


        /* HELPFUL RESPONSES */

        const helpfulCount =
            events.filter(
                function(event) {

                    return (
                        event.event_type ===
                            "feedback" &&

                        event.helpful ===
                            "yes"
                    );

                }
            ).length;


        document.getElementById(
            "helpful-count"
        ).textContent =
            helpfulCount;


        /* EMOTION COUNTS */

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

                    counts[
                        event.mood
                    ] !== undefined

                ) {

                    counts[
                        event.mood
                    ]++;

                }

            }
        );


        /* MOST USED EMOTION */

        let mostUsed =
            "—";

        let highest =
            0;


        Object.keys(
            counts
        ).forEach(
            function(emotion) {

                if (
                    counts[emotion] > highest
                ) {

                    highest =
                        counts[emotion];

                    mostUsed =
                        emotion.charAt(0)
                        .toUpperCase() +
                        emotion.slice(1);

                }

            }
        );


        document.getElementById(
            "most-used-emotion"
        ).textContent =
            mostUsed;


        /* EMOTION STATISTICS */

        const statisticsList =
            document.getElementById(
                "emotion-statistics-list"
            );


        statisticsList.innerHTML = "";


        Object.keys(
            counts
        ).forEach(
            function(emotion) {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "stat-row";


                row.innerHTML = `

                    <span>
                        ${emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                    </span>

                    <strong>
                        ${counts[emotion]}
                    </strong>

                `;


                statisticsList.appendChild(
                    row
                );

            }
        );


        /* USAGE HISTORY */

        const historyList =
            document.getElementById(
                "usage-history-list"
            );


        historyList.innerHTML = "";


        const visits =
            events.filter(
                function(event) {

                    return (
                        event.event_type ===
                        "page_view"
                    );

                }
            );


        if (
            visits.length === 0
        ) {

            historyList.innerHTML = `

                <p class="empty-message">

                    No usage data yet.

                </p>

            `;

            return;

        }


        const dates =
            {};


        visits.forEach(
            function(event) {

                if (
                    !event.created_at
                ) {
                    return;
                }


                const date =
                    new Date(
                        event.created_at
                    )
                    .toLocaleDateString();


                if (!dates[date]) {

                    dates[date] = 0;

                }


                dates[date]++;

            }
        );


        Object.keys(
            dates
        )
        .reverse()
        .forEach(
            function(date) {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "history-row";


                row.innerHTML = `

                    <span>
                        ${date}
                    </span>

                    <strong>
                        ${dates[date]} use${dates[date] === 1 ? "" : "s"}
                    </strong>

                `;


                historyList.appendChild(
                    row
                );

            }
        );

    }

    catch (error) {

        console.error(
            error
        );


        document.getElementById(
            "usage-history-list"
        ).innerHTML = `

            <p class="empty-message">

                Insights could not be loaded right now.

            </p>

        `;

    }

}


/* =========================================
   NAVIGATION
   ========================================= */

document.getElementById(
    "home-nav"
).addEventListener(
    "click",
    function() {

        showPage("home");

    }
);


document.getElementById(
    "insights-nav"
).addEventListener(
    "click",
    function() {

        showPage("insights");

    }
);


document.getElementById(
    "back-button"
).addEventListener(
    "click",
    function() {

        showPage("home");

    }
);


document.getElementById(
    "insights-back-button"
).addEventListener(
    "click",
    function() {

        showPage("home");

    }
);


/* =========================================
   EMOTION CARDS
   ========================================= */

document
    .querySelectorAll(
        ".emotion-card"
    )
    .forEach(
        function(card) {

            card.addEventListener(
                "click",
                function() {

                    showEmotion(
                        card.dataset.emotion
                    );

                }
            );

        }
    );


/* =========================================
   TRACK PAGE VISIT
   ========================================= */

if (!IS_DEVELOPER) {

    trackSoundSpaceEvent(
        "page_view"
    );

}


console.log(

    IS_DEVELOPER

        ? "SoundSpace loaded — Developer Mode ON"

        : "SoundSpace loaded successfully"

);
