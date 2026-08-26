# SoundSpace — Replacement `script.js`

/* =========================================================
   SOUNDSPACE — COMPLETE WORKING VERSION
   Matches the current index.html
   ========================================================= */


/* =========================================================
   SUPABASE
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
    return;
  }


  try {

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

          event_type: eventType,

          session_id:
            SOUNDSPACE_SESSION_ID,

          page:
            window.location.pathname,

          mood: mood,

          song: song,

          helpful: helpful,

          feedback_text:
            feedbackText

        })

      }
    );

  } catch (error) {

    console.error(
      "Analytics error:",
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
          "Its upbeat rhythm and positive energy make it a strong match for a happy mood."
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
          "Its energetic production gives the song a playful and uplifting character."
      },

      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        why:
          "Its strong funk groove and energetic tempo make it exciting and highly danceable."
      },

      {
        title: "Good as Hell",
        artist: "Lizzo",
        why:
          "Its upbeat production and encouraging message support confidence and positivity."
      },

      {
        title: "Lush Life",
        artist: "Zara Larsson",
        why:
          "Its bright pop production creates a lively and carefree atmosphere."
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
          "Its energetic production and confident delivery give the song an uplifting direction."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        why:
          "Its confident message and bright production can reinforce feelings of empowerment."
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
          "Its atmospheric sound and nostalgic feeling create a reflective experience."
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
          "Its emotional melody can resonate with longing and reflection."
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        why:
          "Its restrained production creates a vulnerable and reflective atmosphere."
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish",
        why:
          "Its quiet arrangement and introspective tone encourage reflection."
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        why:
          "Its gentle production creates a calm and introspective experience."
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
          "Its resilient message transforms difficulty into strength."
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
          "Its smooth melody provides a gentle and emotionally warm experience."
      },

      {
        title: "Photograph",
        artist: "Ed Sheeran",
        why:
          "Its reflective pacing creates a quieter atmosphere."
      },

      {
        title: "Yellow",
        artist: "Coldplay",
        why:
          "Its warm melody creates a comforting atmosphere."
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
          "Its warm production creates a comfortable listening experience."
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
          "Its warm melody creates a soothing and pleasant emotional tone."
      },

      {
        title: "Sweet Creature",
        artist: "Harry Styles",
        why:
          "Its acoustic sound creates a quiet and low-intensity experience."
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
let currentSongIndex = 0;
let currentQueue = [];


/* =========================================================
   PAGE HELPERS
   ========================================================= */

function hideAllPages() {

  const pages = [
    "home-page",
    "emotion-page",
    "why-page",
    "about-page",
    "feedback-page",
    "insights-page"
  ];

  pages.forEach(function(pageId) {

    const page =
      document.getElementById(pageId);

    if (page) {
      page.style.display = "none";
    }

  });

}


function showPage(pageId) {

  hideAllPages();

  const page =
    document.getElementById(pageId);

  if (page) {
    page.style.display = "block";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function setActiveNav(activeId) {

  document
    .querySelectorAll(".nav-btn")
    .forEach(function(button) {

      button.classList.remove("active");

    });

  const activeButton =
    document.getElementById(activeId);

  if (activeButton) {
    activeButton.classList.add("active");
  }

}


/* =========================================================
   HOME
   ========================================================= */

function showHomePage() {

  showPage("home-page");

  setActiveNav("home-nav");

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


  currentEmotion = emotion;

  currentSongIndex = 0;

  currentQueue =
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


  document.getElementById(
    "player-section"
  ).style.display =
    "none";


  displaySongs();

  showPage("emotion-page");

}


/* =========================================================
   DISPLAY SONGS
   ========================================================= */

function displaySongs() {

  const songList =
    document.getElementById(
      "song-list"
    );


  if (!songList || !currentEmotion) {
    return;
  }


  songList.innerHTML = "";


  currentQueue.forEach(
    function(song, index) {

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
          class="listen-song-button"
          type="button"
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
        function() {

          currentSongIndex = index;

          playCurrentSong();

        }
      );


      songList.appendChild(card);

    }
  );

}


/* =========================================================
   PLAY CURRENT SONG
   ========================================================= */

function playCurrentSong() {

  if (!currentQueue.length) {
    return;
  }


  const song =
    currentQueue[currentSongIndex];


  trackSoundSpaceEvent(
    "song_selected",
    currentEmotion,
    `${song.title} — ${song.artist}`
  );


  const player =
    document.getElementById(
      "player-section"
    );


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


  const searchQuery =
    encodeURIComponent(
      `${song.title} ${song.artist}`
    );


  const listenLink =
    document.getElementById(
      "listen-link"
    );


  listenLink.href =
    "https://www.youtube.com/results?search_query=" +
    searchQuery;


  player.style.display =
    "block";


  player.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


/* =========================================================
   NEXT / PREVIOUS
   ========================================================= */

function nextSong() {

  if (!currentQueue.length) {
    return;
  }


  currentSongIndex =
    (currentSongIndex + 1) %
    currentQueue.length;


  playCurrentSong();

}


function previousSong() {

  if (!currentQueue.length) {
    return;
  }


  currentSongIndex =
    (
      currentSongIndex - 1 +
      currentQueue.length
    ) %
    currentQueue.length;


  playCurrentSong();

}


/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffleArray(array) {

  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );


    [
      array[i],
      array[j]
    ] =
    [
      array[j],
      array[i]
    ];

  }

}


function shuffleSongs() {

  shuffleArray(currentQueue);

  currentSongIndex = 0;

  displaySongs();

}


function reshuffleSongs() {

  currentQueue =
    [...moodData[currentEmotion].songs];

  shuffleArray(currentQueue);

  currentSongIndex = 0;

  displaySongs();

}


/* =========================================================
   SURPRISE ME
   ========================================================= */

function surpriseMe() {

  if (!currentQueue.length) {
    return;
  }


  currentSongIndex =
    Math.floor(
      Math.random() *
      currentQueue.length
    );


  playCurrentSong();

}


/* =========================================================
   FEEDBACK
   ========================================================= */

function setupFeedback() {

  let fitAnswer = "";
  let helpfulAnswer = "";


  document
    .querySelectorAll(".choice-button")
    .forEach(function(button) {

      button.addEventListener(
        "click",
        function() {

          document
            .querySelectorAll(".choice-button")
            .forEach(function(other) {

              other.classList.remove("selected");

            });


          button.classList.add("selected");

          fitAnswer =
            button.dataset.value;


          document.getElementById(
            "feedback-fit"
          ).value =
            fitAnswer;

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
            .querySelectorAll(".helpful-choice")
            .forEach(function(other) {

              other.classList.remove("selected");

            });


          button.classList.add("selected");

          helpfulAnswer =
            button.dataset.value;


          document.getElementById(
            "feedback-helpful"
          ).value =
            helpfulAnswer;

        }
      );

    });


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


      const feedbackText =
        `Fit: ${fitAnswer || "Not answered"} | ` +
        `Liked: ${liked} | ` +
        `Improvement: ${improvement}`;


      trackSoundSpaceEvent(
        "feedback",
        emotion || null,
        null,
        helpfulAnswer || null,
        feedbackText
      );


      const message =
        document.getElementById(
          "full-feedback-message"
        );


      if (message) {

        message.textContent =
          IS_DEVELOPER
            ? "Developer mode is on, so this feedback was not tracked."
            : "✨ Thank you! Your feedback has been sent.";

      }


      form.reset();

      fitAnswer = "";
      helpfulAnswer = "";


      document
        .querySelectorAll(
          ".choice-button, .helpful-choice"
        )
        .forEach(function(button) {

          button.classList.remove(
            "selected"
          );

        });

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

    totalUses.textContent = "—";

    helpfulCount.textContent = "—";

    mostUsedEmotion.textContent =
      "Developer Mode";

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
        "Could not load insights"
      );
    }


    const events =
      await response.json();


    const sessions =
      new Set();


    events.forEach(function(event) {

      if (event.session_id) {

        sessions.add(
          event.session_id
        );

      }

    });


    totalUses.textContent =
      sessions.size;


    const helpfulResponses =
      events.filter(function(event) {

        return (
          event.event_type ===
            "feedback" &&
          event.helpful ===
            "yes"
        );

      });


    helpfulCount.textContent =
      helpfulResponses.length;


    const counts = {

      happiness: 0,
      sadness: 0,
      anger: 0,
      anxiety: 0,
      irritation: 0

    };


    events.forEach(function(event) {

      if (
        event.event_type ===
          "emotion_selected" &&
        counts[event.mood] !==
          undefined
      ) {

        counts[event.mood]++;

      }

    });


    let mostUsed = null;
    let highestCount = 0;


    Object.keys(counts)
      .forEach(function(emotion) {

        if (
          counts[emotion] >
          highestCount
        ) {

          highestCount =
            counts[emotion];

          mostUsed =
            emotion;

        }

      });


    mostUsedEmotion.textContent =
      mostUsed
        ? moodData[mostUsed].emoji +
          " " +
          moodData[mostUsed].title
        : "—";


    emotionList.innerHTML = "";


    Object.keys(counts)
      .forEach(function(emotion) {

        const row =
          document.createElement("div");


        row.className =
          "emotion-stat-row";


        row.innerHTML = `
          <strong>
            ${moodData[emotion].emoji}
            ${moodData[emotion].title}
          </strong>

          <span>
            ${counts[emotion]}
          </span>
        `;


        emotionList.appendChild(row);

      });


    historyList.innerHTML = "";


    const pageViews =
      events
        .filter(function(event) {

          return (
            event.event_type ===
            "page_view"
          );

        })
        .slice()
        .reverse()
        .slice(0, 20);


    if (!pageViews.length) {

      historyList.innerHTML =
        "<p>No visitor activity yet.</p>";

    } else {

      pageViews.forEach(
        function(event) {

          const row =
            document.createElement("div");


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

  } catch (error) {

    console.error(
      "Insights error:",
      error
    );

    totalUses.textContent = "—";
    helpfulCount.textContent = "—";
    mostUsedEmotion.textContent = "—";

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
      .querySelectorAll(".emotion-card")
      .forEach(function(card) {

        card.addEventListener(
          "click",
          function() {

            const emotion =
              card.dataset.emotion
                .toLowerCase();


            if (!moodData[emotion]) {
              return;
            }


            trackSoundSpaceEvent(
              "emotion_selected",
              emotion
            );


            displayEmotion(emotion);

          }
        );

      });


    /* BACK */

    document
      .getElementById("back-button")
      ?.addEventListener(
        "click",
        showHomePage
      );


    /* NAVIGATION */

    document
      .getElementById("home-nav")
      ?.addEventListener(
        "click",
        showHomePage
      );


    document
      .getElementById("why-nav")
      ?.addEventListener(
        "click",
        function() {

          showPage("why-page");
          setActiveNav("why-nav");

        }
      );


    document
      .getElementById("about-nav")
      ?.addEventListener(
        "click",
        function() {

          showPage("about-page");
          setActiveNav("about-nav");

        }
      );


    document
      .getElementById("feedback-nav")
      ?.addEventListener(
        "click",
        function() {

          showPage("feedback-page");
          setActiveNav("feedback-nav");

        }
      );


    document
      .getElementById("insights-nav")
      ?.addEventListener(
        "click",
        function() {

          showPage("insights-page");
          setActiveNav("insights-nav");

          displayInsights();

        }
      );


    /* SURPRISE */

    document
      .getElementById("surprise-button")
      ?.addEventListener(
        "click",
        surpriseMe
      );


    /* QUEUE BUTTONS */

    document
      .getElementById("previous-song")
      ?.addEventListener(
        "click",
        previousSong
      );


    document
      .getElementById("next-song")
      ?.addEventListener(
        "click",
        nextSong
      );


    document
      .getElementById("shuffle-button")
      ?.addEventListener(
        "click",
        shuffleSongs
      );


    document
      .getElementById("reshuffle-button")
      ?.addEventListener(
        "click",
        reshuffleSongs
      );


    /* PLAYER BUTTONS */

    document
      .getElementById("player-previous")
      ?.addEventListener(
        "click",
        previousSong
      );


    document
      .getElementById("player-next")
      ?.addEventListener(
        "click",
        nextSong
      );


    /* FEEDBACK */

    setupFeedback();


    /* TRACK VISIT */

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

  }
);
