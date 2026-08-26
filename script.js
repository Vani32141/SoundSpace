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
    new URLSearchParams(window.location.search);


/* Turn developer mode ON */

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


/* Turn developer mode OFF */

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
                "Analytics could not be saved.",
                await response.text()
            );

        }

    } catch (error) {

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

        title: "Happiness",

        emoji: "😊",

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

        title: "Sadness",

        emoji: "😢",

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

        title: "Anger",

        emoji: "😡",

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
                title: "So Easy (To Fall in Love)",
                artist: "Olivia Dean",
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

    const pages = [
        "home-page",
        "emotion-page",
        "why-page",
        "about-page",
        "feedback-page",
        "insights-page"
    ];

    pages.forEach(function(id) {

        const element =
            document.getElementById(id);

        if (element) {

            element.style.display = "none";

        }

    });


    const selectedPage =
        document.getElementById(
            page + "-page"
        );


    if (selectedPage) {

        selectedPage.style.display = "block";

    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(function(button) {

            button.classList.remove(
                "active"
            );

        });


    const navButton =
        document.getElementById(
            page + "-nav"
        );


    if (navButton) {

        navButton.classList.add(
            "active"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (page === "insights") {

        loadInsights();

    }

}


/* =========================================
   SHOW EMOTION
   ========================================= */

function showEmotion(emotion) {

    /*
       HTML sends:
       Happiness
       Sadness
       Anger
       Anxiety
       Irritation

       moodData uses lowercase keys.

       Convert the value to lowercase
       so they match.
    */

    const emotionKey =
        String(emotion).toLowerCase();


    const data =
        moodData[emotionKey];


    if (!data) {

        console.error(
            "SoundSpace could not find emotion:",
            emotion
        );

        return;

    }


    currentEmotion =
        emotionKey;


    /* -------------------------------------
       Emotion icon
       ------------------------------------- */

    const icon =
        document.getElementById(
            "selected-emotion-icon"
        );

    if (icon) {

        icon.textContent =
            data.emoji;

    }


    /* -------------------------------------
       Emotion title
       ------------------------------------- */

    const title =
        document.getElementById(
            "selected-emotion-title"
        );

    if (title) {

        title.textContent =
            data.title;

    }


    /* -------------------------------------
       Emotion description
       ------------------------------------- */

    const description =
        document.getElementById(
            "selected-emotion-description"
        );

    if (description) {

        description.textContent =
            data.description;

    }


    /* -------------------------------------
       Song list
       ------------------------------------- */

    const songList =
        document.getElementById(
            "song-list"
        );


    if (songList) {

        songList.innerHTML = "";


        data.songs.forEach(
            function(song, index) {

                const songButton =
                    document.createElement(
                        "button"
                    );


                songButton.type =
                    "button";


                songButton.className =
                    "song-item";


                songButton.innerHTML = `

                    <span class="song-number">
                        ${index + 1}
                    </span>

                    <span class="song-info">

                        <strong>
                            ${escapeHTML(song.title)}
                        </strong>

                        <small>
                            ${escapeHTML(song.artist)}
                        </small>

                    </span>

                    <span class="song-arrow">
                        ▶
                    </span>

                `;


                songButton.addEventListener(
                    "click",
                    function() {

                        playSong(song);

                    }
                );


                songList.appendChild(
                    songButton
                );

            }
        );

    }


    /* -------------------------------------
       Hide previous player
       ------------------------------------- */

    const playerSection =
        document.getElementById(
            "player-section"
        );


    if (playerSection) {

        playerSection.style.display =
            "none";

    }


    /* -------------------------------------
       Show emotion page
       ------------------------------------- */

    showPage("emotion");


    /* -------------------------------------
       Analytics
       ------------------------------------- */

    trackSoundSpaceEvent(
        "emotion_selected",
        emotionKey
    );

}


/* =========================================
   PLAY / SELECT SONG
   ========================================= */

function playSong(song) {

    currentSong =
        song;


    /* -------------------------------------
       Player title
       ------------------------------------- */

    const title =
        document.getElementById(
            "player-song-title"
        );


    if (title) {

        title.textContent =
            song.title;

    }


    /* -------------------------------------
       Player artist
       ------------------------------------- */

    const artist =
        document.getElementById(
            "player-song-artist"
        );


    if (artist) {

        artist.textContent =
            song.artist;

    }


    /* -------------------------------------
       Player reason
       ------------------------------------- */

    const reason =
        document.getElementById(
            "player-song-reason"
        );


    if (reason) {

        reason.textContent =
            song.why;

    }


    /* -------------------------------------
       Listen button
       ------------------------------------- */

    const listenLink =
        document.getElementById(
            "listen-link"
        );


    if (listenLink) {

        /*
           Opens a search for the exact song.
           This avoids sending users to a random
           or incorrect page.
        */

        const searchQuery =
            encodeURIComponent(
                `${song.title} ${song.artist}`
            );


        listenLink.href =
            `https://open.spotify.com/search/${searchQuery}`;`;

    }


    /* -------------------------------------
       Show player
       ------------------------------------- */

    const playerSection =
        document.getElementById(
            "player-section"
        );


    if (playerSection) {

        playerSection.style.display =
            "block";

        playerSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    /* -------------------------------------
       Analytics
       ------------------------------------- */

    trackSoundSpaceEvent(
        "song_selected",
        currentEmotion,
        song.title
    );

}


/* =========================================
   ESCAPE HTML
   ========================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================
   NAVIGATION BUTTONS
   ========================================= */

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
        function() {

            showPage("home");

        }
    );

}


if (whyNav) {

    whyNav.addEventListener(
        "click",
        function() {

            showPage("why");

        }
    );

}


if (aboutNav) {

    aboutNav.addEventListener(
        "click",
        function() {

            showPage("about");

        }
    );

}


if (feedbackNav) {

    feedbackNav.addEventListener(
        "click",
        function() {

            showPage("feedback");

        }
    );

}


if (insightsNav) {

    insightsNav.addEventListener(
        "click",
        function() {

            showPage("insights");

        }
    );

}


/* =========================================
   BACK BUTTON
   ========================================= */

const backButton =
    document.getElementById(
        "back-button"
    );


if (backButton) {

    backButton.addEventListener(
        "click",
        function() {

            showPage("home");

        }
    );

}


const insightsBackButton =
    document.getElementById(
        "insights-back-button"
    );


if (insightsBackButton) {

    insightsBackButton.addEventListener(
        "click",
        function() {

            showPage("home");

        }
    );

}


/* =========================================
   EMOTION CARDS
   ========================================= */

document
    .querySelectorAll(
        ".emotion-card"
    )
    .forEach(function(card) {

        card.addEventListener(
            "click",
            function() {

                const emotion =
                    card.dataset.emotion;

                showEmotion(
                    emotion
                );

            }
        );

    });


/* =========================================
   SURPRISE ME
   ========================================= */

const surpriseButton =
    document.getElementById(
        "surprise-button"
    );


if (surpriseButton) {

    surpriseButton.addEventListener(
        "click",
        function() {

            if (!currentEmotion) {

                return;

            }


            const songs =
                moodData[
                    currentEmotion
                ].songs;


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

}


/* =========================================
   FEEDBACK CHOICE BUTTONS
   ========================================= */

document
    .querySelectorAll(
        ".choice-button"
    )
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(
                        ".choice-button"
                    )
                    .forEach(
                        function(other) {

                            other.classList.remove(
                                "selected"
                            );

                        }
                    );


                button.classList.add(
                    "selected"
                );


                const input =
                    document.getElementById(
                        "feedback-fit"
                    );


                if (input) {

                    input.value =
                        button.dataset.value;

                }

            }
        );

    });


document
    .querySelectorAll(
        ".helpful-choice"
    )
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(
                        ".helpful-choice"
                    )
                    .forEach(
                        function(other) {

                            other.classList.remove(
                                "selected"
                            );

                        }
                    );


                button.classList.add(
                    "selected"
                );


                const input =
                    document.getElementById(
                        "feedback-helpful"
                    );


                if (input) {

                    input.value =
                        button.dataset.value;

                }

            }
        );

    });


/* =========================================
   FEEDBACK FORM
   ========================================= */

const feedbackForm =
    document.getElementById(
        "feedback-form"
    );


if (feedbackForm) {

    feedbackForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const emotion =
                document.getElementById(
                    "feedback-emotion"
                ).value;


            const fit =
                document.getElementById(
                    "feedback-fit"
                ).value;


            const helpful =
                document.getElementById(
                    "feedback-helpful"
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


            if (!emotion) {

                message.textContent =
                    "Please choose the emotion you explored.";

                return;

            }


            if (!fit) {

                message.textContent =
                    "Please tell us whether the music fit your mood.";

                return;

            }


            if (!helpful) {

                message.textContent =
                    "Please tell us whether SoundSpace was helpful.";

                return;

            }


            if (IS_DEVELOPER) {

                message.textContent =
                    "✨ Developer Mode is on. Your feedback was not added to analytics.";

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
                                    "detailed_feedback",

                                session_id:
                                    SOUNDSPACE_SESSION_ID,

                                page:
                                    window.location.pathname,

                                mood:
                                    emotion,

                                helpful:
                                    helpful,

                                feedback_fit:
                                    fit,

                                improvement:
                                    improvement,

                                liked:
                                    liked

                            })

                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        "Feedback could not be saved."
                    );

                }


                message.textContent =
                    "✨ Thank you for helping shape the future of SoundSpace!";


                feedbackForm.reset();


                document
                    .querySelectorAll(
                        ".choice-button, .helpful-choice"
                    )
                    .forEach(
                        function(button) {

                            button.classList.remove(
                                "selected"
                            );

                        }
                    );


                document.getElementById(
                    "feedback-fit"
                ).value = "";


                document.getElementById(
                    "feedback-helpful"
                ).value = "";


            }

            catch (error) {

                console.error(
                    error
                );


                message.textContent =
                    "Something went wrong while sending your feedback. Please try again.";

            }

        }
    );

}


/* =========================================
   INSIGHTS
   ========================================= */

async function loadInsights() {

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

    const emotionStatistics =
        document.getElementById(
            "emotion-statistics-list"
        );

    const usageHistory =
        document.getElementById(
            "usage-history-list"
        );


    if (!totalUses) {

        return;

    }


    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/usage_events?select=*`,
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

            throw new Error(
                "Could not load insights."
            );

        }


        const events =
            await response.json();


        const emotionEvents =
            events.filter(
                function(event) {

                    return (
                        event.event_type ===
                        "emotion_selected"
                    );

                }
            );


        const feedbackEvents =
            events.filter(
                function(event) {

                    return (
                        event.event_type ===
                        "detailed_feedback"
                    );

                }
            );


        totalUses.textContent =
            emotionEvents.length;


        const helpfulResponses =
            feedbackEvents.filter(
                function(event) {

                    return (
                        event.helpful ===
                        "yes"
                    );

                }
            );


        if (helpfulCount) {

            helpfulCount.textContent =
                helpfulResponses.length;

        }


        /* ---------------------------------
           Emotion counts
           --------------------------------- */

        const counts = {};


        emotionEvents.forEach(
            function(event) {

                if (!event.mood) {
                    return;
                }

                const mood =
                    event.mood.toLowerCase();

                counts[mood] =
                    (counts[mood] || 0) + 1;

            }
        );


        let mostUsed =
            "—";

        let highest =
            0;


        Object.keys(counts)
            .forEach(
                function(mood) {

                    if (
                        counts[mood] >
                        highest
                    ) {

                        highest =
                            counts[mood];

                        mostUsed =
                            mood;

                    }

                }
            );


        if (mostUsedEmotion) {

            mostUsedEmotion.textContent =
                mostUsed === "—"
                    ? "—"
                    : moodData[mostUsed]
                        ? moodData[mostUsed].title
                        : mostUsed;

        }


        /* ---------------------------------
           Statistics
           --------------------------------- */

        if (emotionStatistics) {

            emotionStatistics.innerHTML = "";


            Object.keys(moodData)
                .forEach(
                    function(mood) {

                        const row =
                            document.createElement(
                                "div"
                            );


                        row.className =
                            "emotion-stat-row";


                        row.innerHTML = `
                            <span>
                                ${moodData[mood].emoji}
                                ${moodData[mood].title}
                            </span>

                            <strong>
                                ${counts[mood] || 0}
                            </strong>
                        `;


                        emotionStatistics.appendChild(
                            row
                        );

                    }
                );

        }


        /* ---------------------------------
           Usage history
           --------------------------------- */

        if (usageHistory) {

            usageHistory.innerHTML = "";


            const sortedEvents =
                [...events]
                    .sort(
                        function(a, b) {

                            return new Date(b.created_at)
                                - new Date(a.created_at);

                        }
                    )
                    .slice(0, 50);


            if (
                sortedEvents.length === 0
            ) {

                usageHistory.textContent =
                    "No usage recorded yet.";

            } else {

                sortedEvents.forEach(
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
                            `${date} — ${event.event_type}` +
                            (
                                event.mood
                                    ? ` — ${event.mood}`
                                    : ""
                            );


                        usageHistory.appendChild(
                            row
                        );

                    }
                );

            }

        }

    }

    catch (error) {

        console.error(
            "Insights error:",
            error
        );

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
                "—";

        }

    }

}


/* =========================================
   TRACK PAGE VISIT
   ========================================= */

if (!IS_DEVELOPER) {

    trackSoundSpaceEvent(
        "page_view"
    );

}


/* =========================================
   STARTUP
   ========================================= */

console.log(
    IS_DEVELOPER
        ? "SoundSpace loaded — Developer Mode ON"
        : "SoundSpace loaded successfully"
);
