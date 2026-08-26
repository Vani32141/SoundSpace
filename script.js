/* =========================================================
   SOUNDSPACE
   50 SONG VERSION
   5 EMOTIONS × 10 SONGS
   ========================================================= */


/* =========================================================
   SUPABASE
   ========================================================= */

const SUPABASE_URL =
    "https://YOUR-PROJECT.supabase.co";

const SUPABASE_KEY =
    "YOUR-PUBLISHABLE-KEY";


/*
   If your previous Supabase URL and publishable key are already
   in your old script, KEEP THOSE TWO VALUES.

   Do NOT use the placeholder values above if you already have
   your real Supabase details.
*/


async function sendAnalytics(eventType, emotion = null, feedback = null) {

    try {

        if (
            SUPABASE_URL.includes("YOUR-PROJECT") ||
            SUPABASE_KEY.includes("YOUR-PUBLISHABLE")
        ) {
            return;
        }

        await fetch(
            `${SUPABASE_URL}/rest/v1/usage_events`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Prefer": "return=minimal"
                },

                body: JSON.stringify({
                    event_type: eventType,
                    emotion: emotion,
                    feedback: feedback
                })
            }
        );

    } catch (error) {

        console.log(
            "Analytics error:",
            error
        );

    }
}


/* =========================================================
   SOUND DATA
   ========================================================= */

const moodData = {

    Happiness: {

        icon: "😊",

        description:
            "Bright, energetic and joyful music for moments when you feel happy.",

        songs: [

            {
                title: "Happy",
                artist: "Pharrell Williams",
                reason:
                    "Its upbeat tempo, major-key sound and positive lyrical message create a strong feeling of joy and celebration."
            },

            {
                title: "Can't Stop the Feeling!",
                artist: "Justin Timberlake",
                reason:
                    "Its energetic rhythm, dance-focused production and positive tone make it strongly associated with excitement and happiness."
            },

            {
                title: "Levitating",
                artist: "Dua Lipa",
                reason:
                    "The song uses a highly danceable groove and bright pop production that can support an energetic, positive mood."
            },

            {
                title: "Uptown Funk",
                artist: "Mark Ronson ft. Bruno Mars",
                reason:
                    "Its strong rhythmic groove, energetic vocals and playful production make it well suited to an upbeat mood."
            },

            {
                title: "Good as Hell",
                artist: "Lizzo",
                reason:
                    "The confident lyrics and energetic production encourage a positive, self-affirming feeling."
            },

            {
                title: "Lush Life",
                artist: "Zara Larsson",
                reason:
                    "Its lively beat and bright pop production give it an energetic and carefree character."
            },

            {
                title: "APT.",
                artist: "ROSÉ & Bruno Mars",
                reason:
                    "Its catchy rhythm, playful vocals and energetic pop-rock production create an exciting atmosphere."
            },

            {
                title: "Golden",
                artist: "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
                reason:
                    "Its energetic pop sound and uplifting vocal performance make it suitable for an energized, positive mood."
            },

            {
                title: "Flowers",
                artist: "Miley Cyrus",
                reason:
                    "Its empowering message and accessible pop production can support feelings of confidence and positivity."
            },

            {
                title: "Roar",
                artist: "Katy Perry",
                reason:
                    "Its powerful vocals and motivational lyrics create an energetic, confident and uplifting feeling."
            }

        ]

    },


    Sadness: {

        icon: "😔",

        description:
            "Reflective, emotional and comforting music for difficult moments.",

        songs: [

            {
                title: "Someone Like You",
                artist: "Adele",
                reason:
                    "Its slow tempo, restrained arrangement and emotional vocal delivery create a reflective atmosphere."
            },

            {
                title: "When I Was Your Man",
                artist: "Bruno Mars",
                reason:
                    "The piano-led arrangement and regretful lyrics give the song a strongly reflective emotional character."
            },

            {
                title: "drivers license",
                artist: "Olivia Rodrigo",
                reason:
                    "Its intimate vocals, slower pacing and themes of heartbreak make it particularly suited to reflective moods."
            },

            {
                title: "Lovely",
                artist: "Billie Eilish & Khalid",
                reason:
                    "Its subdued production and melancholic vocal performance create a quiet, introspective atmosphere."
            },

            {
                title: "All I Want",
                artist: "Kodaline",
                reason:
                    "The emotional vocals and gradual musical build support feelings of longing and reflection."
            },

            {
                title: "The Night We Met",
                artist: "Lord Huron",
                reason:
                    "Its atmospheric arrangement and nostalgic lyrics create a strong sense of longing and remembrance."
            },

            {
                title: "Fix You",
                artist: "Coldplay",
                reason:
                    "The restrained beginning and gradual emotional build create a reflective and comforting musical experience."
            },

            {
                title: "Let Her Go",
                artist: "Passenger",
                reason:
                    "Its acoustic sound and reflective lyrics focus on loss, memory and realizing someone's importance."
            },

            {
                title: "traitor",
                artist: "Olivia Rodrigo",
                reason:
                    "Its intimate delivery and emotionally heavy subject matter make it suited to a reflective mood."
            },

            {
                title: "Before You Go",
                artist: "Lewis Capaldi",
                reason:
                    "The emotional vocal performance and slow-building arrangement create a deeply reflective atmosphere."
            }

        ]

    },


    Anger: {

        icon: "😡",

        description:
            "Intense, powerful music that matches high-energy emotions.",

        songs: [

            {
                title: "Believer",
                artist: "Imagine Dragons",
                reason:
                    "Its heavy percussion, forceful vocals and intense dynamic build create a powerful high-energy sound."
            },

            {
                title: "Centuries",
                artist: "Fall Out Boy",
                reason:
                    "The strong drums and dramatic arrangement create an intense, powerful atmosphere."
            },

            {
                title: "Natural",
                artist: "Imagine Dragons",
                reason:
                    "Its aggressive percussion and forceful vocal delivery give the song a high-intensity character."
            },

            {
                title: "Numb",
                artist: "Linkin Park",
                reason:
                    "Its powerful rock instrumentation and emotionally intense vocals make it suitable for expressing frustration."
            },

            {
                title: "Warriors",
                artist: "Imagine Dragons",
                reason:
                    "Its dramatic percussion and escalating arrangement create a feeling of strength and intensity."
            },

            {
                title: "Radioactive",
                artist: "Imagine Dragons",
                reason:
                    "The heavy electronic-rock production and dramatic rhythm create an intense atmosphere."
            },

            {
                title: "Monster",
                artist: "Skillet",
                reason:
                    "Its heavy rock instrumentation and forceful vocal delivery produce a strongly energetic sound."
            },

            {
                title: "My Songs Know What You Did in the Dark",
                artist: "Fall Out Boy",
                reason:
                    "Its driving drums and energetic rock production create a fast-moving, high-intensity mood."
            },

            {
                title: "Whatever It Takes",
                artist: "Imagine Dragons",
                reason:
                    "Its energetic percussion and determined vocal performance create a strong sense of intensity and drive."
            },

            {
                title: "In the End",
                artist: "Linkin Park",
                reason:
                    "Its contrast between restrained sections and powerful choruses creates an emotionally intense listening experience."
            }

        ]

    },


    Anxiety: {

        icon: "😰",

        description:
            "Calming and grounding music for moments when your thoughts feel overwhelming.",

        songs: [

            {
                title: "Weightless",
                artist: "Marconi Union",
                reason:
                    "This track was specifically created with relaxation in mind and has been associated with reduced subjective stress in research."
            },

            {
                title: "Lovely",
                artist: "Billie Eilish & Khalid",
                reason:
                    "Its slower pace and restrained production create a quiet atmosphere that can work well for reflective listening."
            },

            {
                title: "ocean eyes",
                artist: "Billie Eilish",
                reason:
                    "Its soft vocals and spacious production create a gentle, low-intensity listening experience."
            },

            {
                title: "Until I Found You",
                artist: "Stephen Sanchez",
                reason:
                    "Its slower tempo and warm acoustic arrangement create a calmer, nostalgic atmosphere."
            },

            {
                title: "Yellow",
                artist: "Coldplay",
                reason:
                    "Its steady pacing and gradual arrangement can provide a predictable and soothing listening experience."
            },

            {
                title: "Perfect",
                artist: "Ed Sheeran",
                reason:
                    "Its gentle acoustic instrumentation and steady rhythm create a relaxed musical environment."
            },

            {
                title: "Photograph",
                artist: "Ed Sheeran",
                reason:
                    "Its acoustic arrangement and moderate pace give it a calm, intimate quality."
            },

            {
                title: "All of Me",
                artist: "John Legend",
                reason:
                    "The piano-led arrangement and smooth vocal delivery create a relatively gentle listening atmosphere."
            },

            {
                title: "A Thousand Years",
                artist: "Christina Perri",
                reason:
                    "Its slow pacing and soft orchestral arrangement create a peaceful and reflective sound."
            },

            {
                title: "Someone You Loved",
                artist: "Lewis Capaldi",
                reason:
                    "Its piano-centered arrangement starts relatively quietly and gives space for emotional reflection."
            }

        ]

    },


    Irritation: {

        icon: "😤",

        description:
            "Energetic music to help acknowledge tension and shift your mood.",

        songs: [

            {
                title: "Shake It Off",
                artist: "Taylor Swift",
                reason:
                    "Its upbeat rhythm and message about moving past negativity make it a natural choice for shifting an irritated mood."
            },

            {
                title: "Stronger",
                artist: "Kelly Clarkson",
                reason:
                    "Its energetic production and resilience-focused lyrics create a sense of confidence and forward movement."
            },

            {
                title: "Since U Been Gone",
                artist: "Kelly Clarkson",
                reason:
                    "Its energetic pop-rock production provides a strong musical outlet for frustration."
            },

            {
                title: "Don't Start Now",
                artist: "Dua Lipa",
                reason:
                    "Its steady dance groove provides energetic movement that can help redirect attention."
            },

            {
                title: "Good 4 U",
                artist: "Olivia Rodrigo",
                reason:
                    "Its energetic pop-rock production strongly expresses frustration and emotional intensity."
            },

            {
                title: "So What",
                artist: "P!nk",
                reason:
                    "Its energetic arrangement and assertive vocal delivery create a powerful outlet for irritation."
            },

            {
                title: "Confident",
                artist: "Demi Lovato",
                reason:
                    "Its strong beat and assertive lyrics create an energetic and self-assured atmosphere."
            },

            {
                title: "Break My Soul",
                artist: "Beyoncé",
                reason:
                    "Its dance-oriented rhythm and theme of releasing pressure can support a transition away from frustration."
            },

            {
                title: "Unstoppable",
                artist: "Sia",
                reason:
                    "Its strong beat and empowering vocal performance create an energetic sense of determination."
            },

            {
                title: "Firework",
                artist: "Katy Perry",
                reason:
                    "Its uplifting build and powerful chorus create an energetic shift toward confidence and positivity."
            }

        ]

    }

};


/* =========================================================
   APP STATE
   ========================================================= */

let currentEmotion = null;


/* =========================================================
   PAGE ELEMENTS
   ========================================================= */

const homePage =
    document.getElementById("home-page");

const emotionPage =
    document.getElementById("emotion-page");

const insightsPage =
    document.getElementById("insights-page");

const songList =
    document.getElementById("song-list");

const selectedEmotionIcon =
    document.getElementById("selected-emotion-icon");

const selectedEmotionTitle =
    document.getElementById("selected-emotion-title");

const selectedEmotionDescription =
    document.getElementById("selected-emotion-description");

const playerSection =
    document.getElementById("player-section");

const playerSongTitle =
    document.getElementById("player-song-title");

const playerSongArtist =
    document.getElementById("player-song-artist");

const listenLink =
    document.getElementById("listen-link");


/* =========================================================
   OPEN EMOTION
   ========================================================= */

function openEmotion(emotion) {

    const data = moodData[emotion];

    if (!data) {
        console.error(
            "SoundSpace could not find this emotion:",
            emotion
        );

        return;
    }

    currentEmotion = emotion;


    /* Change page */

    homePage.style.display = "none";

    insightsPage.style.display = "none";

    emotionPage.style.display = "block";


    /* Update heading */

    selectedEmotionIcon.textContent =
        data.icon;

    selectedEmotionTitle.textContent =
        emotion;

    selectedEmotionDescription.textContent =
        data.description;


    /* Clear old songs */

    songList.innerHTML = "";


    /* Create all 10 songs */

    data.songs.forEach(
        (song, index) => {

            const songCard =
                document.createElement("article");

            songCard.className =
                "song-card";


            songCard.innerHTML = `

                <div class="song-number">
                    ${index + 1}
                </div>

                <div class="song-information">

                    <h3>
                        ${song.title}
                    </h3>

                    <p class="song-artist">
                        ${song.artist}
                    </p>

                    <div class="why-section">

                        <strong>
                            Why it fits:
                        </strong>

                        <p>
                            ${song.reason}
                        </p>

                    </div>

                    <button
                        class="song-listen-button"
                        data-title="${escapeAttribute(song.title)}"
                        data-artist="${escapeAttribute(song.artist)}"
                    >
                        🎵 Listen
                    </button>

                </div>
            `;


            songList.appendChild(
                songCard
            );

        }
    );


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /* Analytics */

    sendAnalytics(
        "emotion_selected",
        emotion,
        null
    );

    saveLocalUsage(
        emotion
    );
}


/* =========================================================
   ATTRIBUTE SAFETY
   ========================================================= */

function escapeAttribute(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}


/* =========================================================
   LISTEN BUTTON
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".song-listen-button"
            );

        if (!button) {
            return;
        }


        const title =
            button.dataset.title;

        const artist =
            button.dataset.artist;


        playerSongTitle.textContent =
            title;

        playerSongArtist.textContent =
            artist;


        /*
           SoundSpace does not embed copyrighted
           full songs. The button opens a search
           for the song so the user can listen.
        */

        const search =
            encodeURIComponent(
                `${title} ${artist}`
            );


        listenLink.href =
            `https://www.youtube.com/results?search_query=${search}`;


        playerSection.style.display =
            "block";


        playerSection.scrollIntoView({
            behavior: "smooth"
        });


        sendAnalytics(
            "song_selected",
            currentEmotion,
            null
        );

    }
);


/* =========================================================
   EMOTION BUTTONS
   ========================================================= */

document
    .querySelectorAll(".emotion-card")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                function() {

                    const emotion =
                        this.dataset.emotion;

                    openEmotion(
                        emotion
                    );

                }
            );

        }
    );


/* =========================================================
   BACK BUTTON
   ========================================================= */

document
    .getElementById("back-button")
    .addEventListener(
        "click",
        function() {

            emotionPage.style.display =
                "none";

            insightsPage.style.display =
                "none";

            homePage.style.display =
                "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =========================================================
   SURPRISE ME
   ========================================================= */

document
    .getElementById("surprise-button")
    .addEventListener(
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

            const song =
                songs[randomIndex];


            const buttons =
                document.querySelectorAll(
                    ".song-listen-button"
                );


            if (buttons[randomIndex]) {

                buttons[randomIndex].click();

            }

        }
    );


/* =========================================================
   FEEDBACK
   ========================================================= */

document
    .querySelectorAll(".feedback-button")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                function() {

                    const feedback =
                        this.dataset.feedback;

                    const message =
                        document.getElementById(
                            "feedback-message"
                        );


                    if (feedback === "yes") {

                        message.textContent =
                            "Thank you! We're glad SoundSpace helped.";

                    } else {

                        message.textContent =
                            "Thank you for the feedback. We'll keep improving SoundSpace.";

                    }


                    sendAnalytics(
                        "feedback",
                        currentEmotion,
                        feedback
                    );


                    saveFeedback(
                        feedback
                    );

                }
            );

        }
    );


/* =========================================================
   HOME NAVIGATION
   ========================================================= */

document
    .getElementById("home-nav")
    .addEventListener(
        "click",
        function() {

            emotionPage.style.display =
                "none";

            insightsPage.style.display =
                "none";

            homePage.style.display =
                "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =========================================================
   INSIGHTS NAVIGATION
   ========================================================= */

document
    .getElementById("insights-nav")
    .addEventListener(
        "click",
        function() {

            homePage.style.display =
                "none";

            emotionPage.style.display =
                "none";

            insightsPage.style.display =
                "block";


            loadInsights();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =========================================================
   INSIGHTS BACK
   ========================================================= */

document
    .getElementById(
        "insights-back-button"
    )
    .addEventListener(
        "click",
        function() {

            insightsPage.style.display =
                "none";

            homePage.style.display =
                "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =========================================================
   LOCAL ANALYTICS
   ========================================================= */

function getUsageData() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "soundspace_usage"
            )
        ) || [];

    } catch {

        return [];

    }

}


function saveLocalUsage(emotion) {

    const data =
        getUsageData();


    data.push({

        emotion: emotion,

        date:
            new Date().toISOString()

    });


    localStorage.setItem(
        "soundspace_usage",
        JSON.stringify(data)
    );

}


function saveFeedback(feedback) {

    const feedbackData =
        JSON.parse(
            localStorage.getItem(
                "soundspace_feedback"
            )
        ) || [];


    feedbackData.push({

        feedback: feedback,

        emotion: currentEmotion,

        date:
            new Date().toISOString()

    });


    localStorage.setItem(
        "soundspace_feedback",
        JSON.stringify(
            feedbackData
        )
    );

}


/* =========================================================
   LOAD INSIGHTS
   ========================================================= */

function loadInsights() {

    const usage =
        getUsageData();


    const feedback =
        JSON.parse(
            localStorage.getItem(
                "soundspace_feedback"
            )
        ) || [];


    document.getElementById(
        "total-uses"
    ).textContent =
        usage.length;


    const helpful =
        feedback.filter(
            item =>
                item.feedback === "yes"
        ).length;


    document.getElementById(
        "helpful-count"
    ).textContent =
        helpful;


    /* Count emotions */

    const emotionCounts = {

        Happiness: 0,
        Sadness: 0,
        Anger: 0,
        Anxiety: 0,
        Irritation: 0

    };


    usage.forEach(
        item => {

            if (
                emotionCounts[
                    item.emotion
                ] !== undefined
            ) {

                emotionCounts[
                    item.emotion
                ]++;

            }

        }
    );


    let mostUsed =
        "—";

    let highest =
        0;


    Object.keys(
        emotionCounts
    ).forEach(
        emotion => {

            if (
                emotionCounts[
                    emotion
                ] > highest
            ) {

                highest =
                    emotionCounts[
                        emotion
                    ];

                mostUsed =
                    emotion;

            }

        }
    );


    document.getElementById(
        "most-used-emotion"
    ).textContent =
        mostUsed;


    /* Emotion statistics */

    const statistics =
        document.getElementById(
            "emotion-statistics-list"
        );


    statistics.innerHTML = "";


    Object.keys(
        emotionCounts
    ).forEach(
        emotion => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "emotion-stat";


            item.innerHTML = `

                <span>
                    ${moodData[emotion].icon}
                    ${emotion}
                </span>

                <strong>
                    ${emotionCounts[emotion]}
                </strong>

            `;


            statistics.appendChild(
                item
            );

        }
    );


    /* Usage history */

    const history =
        document.getElementById(
            "usage-history-list"
        );


    history.innerHTML = "";


    if (usage.length === 0) {

        history.innerHTML =
            "<p>No usage recorded yet.</p>";

        return;

    }


    /*
       Show newest first and group
       entries by date.
    */

    const grouped = {};


    usage
        .slice()
        .reverse()
        .forEach(
            item => {

                const date =
                    new Date(
                        item.date
                    );


                const dateKey =
                    date.toLocaleDateString(
                        undefined,
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        }
                    );


                if (!grouped[dateKey]) {

                    grouped[dateKey] =
                        [];

                }


                grouped[
                    dateKey
                ].push(item);

            }
        );


    Object.keys(
        grouped
    ).forEach(
        date => {

            const day =
                document.createElement(
                    "div"
                );


            day.className =
                "history-day";


            const heading =
                document.createElement(
                    "h3"
                );


            heading.textContent =
                date;


            day.appendChild(
                heading
            );


            grouped[date].forEach(
                item => {

                    const row =
                        document.createElement(
                            "p"
                        );


                    row.textContent =
                        `${moodData[item.emotion]?.icon || ""} ${item.emotion}`;


                    day.appendChild(
                        row
                    );

                }
            );


            history.appendChild(
                day
            );

        }
    );

}


/* =========================================================
   STARTUP
   ========================================================= */

homePage.style.display =
    "block";

emotionPage.style.display =
    "none";

insightsPage.style.display =
    "none";


console.log(
    "SoundSpace loaded successfully."
);
