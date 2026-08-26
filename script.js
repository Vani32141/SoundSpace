/* =========================================
   SOUNDSPACE
   WORKING SCRIPT + ANALYTICS + MUSIC QUEUE
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


/* Developer Mode ON */

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


/* Developer Mode OFF */

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
   ANALYTICS
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

let currentQueue = [];

let currentQueueIndex = 0;


/* =========================================
   GET ELEMENT SAFELY
   ========================================= */

function getElement(id) {

    return document.getElementById(id);

}


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
            getElement(id);

        if (element) {

            element.style.display =
                "none";

        }

    });


    const selectedPage =
        getElement(page + "-page");


    if (selectedPage) {

        selectedPage.style.display =
            "block";

    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(function(button) {

            button.classList.remove(
                "active"
            );

        });


    const navButton =
        getElement(page + "-nav");


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
   NAVIGATION
   ========================================= */

const homeNav =
    getElement("home-nav");

const whyNav =
    getElement("why-nav");

const aboutNav =
    getElement("about-nav");

const feedbackNav =
    getElement("feedback-nav");

const insightsNav =
    getElement("insights-nav");


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
   EMOTION SYSTEM
   ========================================= */

function showEmotion(emotionName) {

    if (!emotionName) {

        return;

    }


    const emotionKey =
        emotionName.toLowerCase().trim();


    const emotion =
        moodData[emotionKey];


    if (!emotion) {

        console.error(
            "Emotion not found:",
            emotionName
        );

        return;

    }


    currentEmotion =
        emotionKey;


    currentQueue =
        [...emotion.songs];


    currentQueueIndex = 0;


    const icon =
        getElement(
            "selected-emotion-icon"
        );

    const title =
        getElement(
            "selected-emotion-title"
        );

    const description =
        getElement(
            "selected-emotion-description"
        );


    if (icon) {

        icon.textContent =
            emotion.emoji;

    }


    if (title) {

        title.textContent =
            emotion.title;

    }


    if (description) {

        description.textContent =
            emotion.description;

    }


    renderSongList();


    showPage("emotion");


    trackSoundSpaceEvent(
        "emotion_selected",
        emotionKey
    );

}


/* =========================================
   RENDER SONG LIST
   ========================================= */

function renderSongList() {

    const songList =
        getElement("song-list");


    if (!songList) {

        return;

    }


    songList.innerHTML = "";


    currentQueue.forEach(
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
                    ${index + 1}
                </span>

                <span class="song-info">

                    <strong>
                        ${escapeHTML(song.title)}
                    </strong>

                    <span>
                        ${escapeHTML(song.artist)}
                    </span>

                </span>

                <span class="song-arrow">
                    →
                </span>

            `;


            card.addEventListener(
                "click",
                function() {

                    currentQueueIndex =
                        index;

                    playSong(song);

                }
            );


            songList.appendChild(card);

        }
    );

}


/* =========================================
   PLAY SONG
   ========================================= */

function playSong(song) {

    if (!song) {

        return;

    }


    currentSong =
        song;


    const playerSection =
        getElement(
            "player-section"
        );


    const title =
        getElement(
            "player-song-title"
        );

    const artist =
        getElement(
            "player-song-artist"
        );

    const reason =
        getElement(
            "player-song-reason"
        );

    const listenLink =
        getElement(
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
            song.why;

    }


    /* =====================================
       SPOTIFY SEARCH
       ===================================== */

    if (listenLink) {

        const spotifyQuery =
            encodeURIComponent(
                `${song.title} ${song.artist}`
            );


        listenLink.href =
            `https://open.spotify.com/search/${spotifyQuery}`;


        listenLink.target =
            "_blank";

    }


    if (playerSection) {

        playerSection.style.display =
            "block";

    }


    trackSoundSpaceEvent(
        "song_selected",
        currentEmotion,
        song.title
    );


    if (playerSection) {

        playerSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* =========================================
   NEXT SONG
   ========================================= */

function playNextSong() {

    if (
        !currentQueue.length
    ) {

        return;

    }


    currentQueueIndex++;


    if (
        currentQueueIndex >=
        currentQueue.length
    ) {

        currentQueueIndex = 0;

    }


    playSong(
        currentQueue[currentQueueIndex]
    );

}


/* =========================================
   PREVIOUS SONG
   ========================================= */

function playPreviousSong() {

    if (
        !currentQueue.length
    ) {

        return;

    }


    currentQueueIndex--;


    if (
        currentQueueIndex < 0
    ) {

        currentQueueIndex =
            currentQueue.length - 1;

    }


    playSong(
        currentQueue[currentQueueIndex]
    );

}


/* =========================================
   SHUFFLE QUEUE
   ========================================= */

function shuffleQueue() {

    if (
        !currentQueue.length
    ) {

        return;

    }


    for (
        let i =
            currentQueue.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            currentQueue[i],
            currentQueue[j]
        ] = [
            currentQueue[j],
            currentQueue[i]
        ];

    }


    currentQueueIndex = 0;


    renderSongList();

}


/* =========================================
   RESHUFFLE QUEUE
   ========================================= */

function reshuffleQueue() {

    if (!currentEmotion) {

        return;

    }


    const songs =
        moodData[currentEmotion].songs;


    currentQueue =
        [...songs];


    shuffleQueue();

}


/* =========================================
   SURPRISE ME
   ========================================= */

const surpriseButton =
    getElement("surprise-button");


if (surpriseButton) {

    surpriseButton.addEventListener(
        "click",
        function() {

            if (
                !currentEmotion
            ) {

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


            currentQueueIndex =
                randomIndex;


            playSong(
                songs[randomIndex]
            );

        }
    );

}


/* =========================================
   OPTIONAL QUEUE BUTTON SUPPORT
   ========================================= */

const shuffleButton =
    getElement("shuffle-button");

if (shuffleButton) {

    shuffleButton.addEventListener(
        "click",
        shuffleQueue
    );

}


const reshuffleButton =
    getElement("reshuffle-button");

if (reshuffleButton) {

    reshuffleButton.addEventListener(
        "click",
        reshuffleQueue
    );

}


const nextButton =
    getElement("next-song");

if (nextButton) {

    nextButton.addEventListener(
        "click",
        playNextSong
    );

}


const previousButton =
    getElement("previous-song");

if (previousButton) {

    previousButton.addEventListener(
        "click",
        playPreviousSong
    );

}


/* =========================================
   BACK BUTTON
   ========================================= */

const backButton =
    getElement("back-button");


if (backButton) {

    backButton.addEventListener(
        "click",
        function() {

            showPage("home");

        }
    );

}


/* =========================================
   FEEDBACK CHOICE BUTTONS
   ========================================= */

document
    .querySelectorAll(".choice-button")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(
                        ".choice-button"
                    )
                    .forEach(function(other) {

                        other.classList.remove(
                            "selected"
                        );

                    });


                button.classList.add(
                    "selected"
                );


                const input =
                    getElement(
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
    .querySelectorAll(".helpful-choice")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(
                        ".helpful-choice"
                    )
                    .forEach(function(other) {

                        other.classList.remove(
                            "selected"
                        );

                    });


                button.classList.add(
                    "selected"
                );


                const input =
                    getElement(
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
    getElement("feedback-form");


if (feedbackForm) {

    feedbackForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const emotion =
                getElement(
                    "feedback-emotion"
                )?.value;


            const fit =
                getElement(
                    "feedback-fit"
                )?.value;


            const helpful =
                getElement(
                    "feedback-helpful"
                )?.value;


            const improvement =
                getElement(
                    "feedback-improvement"
                )?.value.trim();


            const liked =
                getElement(
                    "feedback-liked"
                )?.value.trim();


            const message =
                getElement(
                    "full-feedback-message"
                );


            if (!emotion) {

                if (message) {

                    message.textContent =
                        "Please choose the emotion you explored.";

                }

                return;

            }


            if (!fit) {

                if (message) {

                    message.textContent =
                        "Please tell us whether the music fit your mood.";

                }

                return;

            }


            if (!helpful) {

                if (message) {

                    message.textContent =
                        "Please tell us whether SoundSpace was helpful.";

                }

                return;

            }


            if (IS_DEVELOPER) {

                if (message) {

                    message.textContent =
                        "✨ Developer Mode is on. Your feedback was not added to analytics.";

                }

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


                if (message) {

                    message.textContent =
                        "✨ Thank you for helping shape the future of SoundSpace!";

                }


                feedbackForm.reset();


                document
                    .querySelectorAll(
                        ".choice-button, .helpful-choice"
                    )
                    .forEach(function(button) {

                        button.classList.remove(
                            "selected"
                        );

                    });


                const fitInput =
                    getElement(
                        "feedback-fit"
                    );

                const helpfulInput =
                    getElement(
                        "feedback-helpful"
                    );


                if (fitInput) {

                    fitInput.value = "";

                }


                if (helpfulInput) {

                    helpfulInput.value = "";

                }


            } catch (error) {

                console.error(error);


                if (message) {

                    message.textContent =
                        "Something went wrong while sending your feedback. Please try again.";

                }

            }

        }
    );

}


/* =========================================
   INSIGHTS
   ========================================= */

async function loadInsights() {

    if (IS_DEVELOPER) {

        console.log(
            "Developer Mode: insights not loaded."
        );

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


        const emotionEvents =
            events.filter(function(event) {

                return (
                    event.event_type ===
                    "emotion_selected"
                );

            });


        const helpfulEvents =
            events.filter(function(event) {

                return (
                    event.helpful === "yes"
                );

            });


        const totalUses =
            getElement("total-uses");

        const helpfulCount =
            getElement("helpful-count");

        const mostUsedEmotion =
            getElement(
                "most-used-emotion"
            );


        if (totalUses) {

            totalUses.textContent =
                emotionEvents.length;

        }


        if (helpfulCount) {

            helpfulCount.textContent =
                helpfulEvents.length;

        }


        const emotionCounts = {};


        emotionEvents.forEach(function(event) {

            const emotion =
                event.mood;

            if (emotion) {

                emotionCounts[emotion] =
                    (
                        emotionCounts[emotion] ||
                        0
                    ) + 1;

            }

        });


        let highestEmotion = null;

        let highestCount = 0;


        Object.keys(
            emotionCounts
        ).forEach(function(emotion) {

            if (
                emotionCounts[emotion] >
                highestCount
            ) {

                highestCount =
                    emotionCounts[emotion];

                highestEmotion =
                    emotion;

            }

        });


        if (mostUsedEmotion) {

            mostUsedEmotion.textContent =
                highestEmotion
                    ? moodData[
                        highestEmotion
                    ].title
                    : "—";

        }


        const statistics =
            getElement(
                "emotion-statistics-list"
            );


        if (statistics) {

            statistics.innerHTML = "";


            Object.keys(
                moodData
            ).forEach(function(emotion) {

                const count =
                    emotionCounts[
                        emotion
                    ] || 0;


                const item =
                    document.createElement(
                        "p"
                    );


                item.textContent =
                    `${moodData[emotion].emoji} ${moodData[emotion].title}: ${count}`;


                statistics.appendChild(
                    item
                );

            });

        }


        const history =
            getElement(
                "usage-history-list"
            );


        if (history) {

            history.innerHTML = "";


            const sorted =
                [...events].sort(
                    function(a, b) {

                        return new Date(
                            b.created_at
                        ) -
                        new Date(
                            a.created_at
                        );

                    }
                );


            sorted
                .slice(0, 50)
                .forEach(function(event) {

                    const item =
                        document.createElement(
                            "p"
                        );


                    const date =
                        event.created_at
                            ? new Date(
                                event.created_at
                            ).toLocaleString()
                            : "Unknown date";


                    item.textContent =
                        `${date} — ${event.event_type}${event.mood ? " — " + event.mood : ""}`;


                    history.appendChild(
                        item
                    );

                });

        }

    } catch (error) {

        console.error(
            "Insights error:",
            error
        );

    }

}


/* =========================================
   HTML ESCAPE
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
