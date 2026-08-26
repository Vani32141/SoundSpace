# SoundSpace `script.js`


/* =========================================================
   SOUNDSPACE — COMPLETE WORKING VERSION
   Matches your current index.html
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
          "Content-Type": "application/json",

          "apikey": SUPABASE_KEY,

          "Authorization":
            `Bearer ${SUPABASE_KEY}`,

          "Prefer": "return=minimal"
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
          "Its upbeat rhythm and positive energy make it suitable for maintaining a joyful mood."
      },

      {
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        why:
          "Its lively tempo and danceable rhythm create an energetic listening experience."
      },

      {
        title: "Levitating",
        artist: "Dua Lipa",
        why:
          "Its energetic disco-inspired production gives it a playful and uplifting character."
      },

      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        why:
          "Its strong groove and energetic tempo make it highly stimulating and danceable."
      },

      {
        title: "Good as Hell",
        artist: "Lizzo",
        why:
          "Its confident message and upbeat production encourage positivity."
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
          "Its catchy rhythm and energetic production suit an upbeat mood."
      },

      {
        title: "Golden",
        artist:
          "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
        why:
          "Its energetic production and confident delivery give it an uplifting direction."
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus",
        why:
          "Its confident message can reinforce feelings of empowerment."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        why:
          "Its energetic chorus and empowering message make it motivating."
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
        artist: "Benson Boone"
      },

      {
        title: "Someone You Loved",
        artist: "Lewis Capaldi"
      },

      {
        title: "The Night We Met",
        artist: "Lord Huron"
      },

      {
        title: "When We Were Young",
        artist: "Adele"
      },

      {
        title: "Iris",
        artist: "Goo Goo Dolls"
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid"
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish"
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish"
      },

      {
        title: "Die With A Smile",
        artist: "Lady Gaga & Bruno Mars"
      },

      {
        title: "Back To Friends",
        artist: "sombr"
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
        artist: "Imagine Dragons"
      },

      {
        title: "Stronger",
        artist: "Kelly Clarkson"
      },

      {
        title: "Titanium",
        artist: "David Guetta ft. Sia"
      },

      {
        title: "Unstoppable",
        artist: "Sia"
      },

      {
        title: "Roar",
        artist: "Katy Perry"
      },

      {
        title: "Shake It Off",
        artist: "Taylor Swift"
      },

      {
        title: "Flowers",
        artist: "Miley Cyrus"
      },

      {
        title: "I Will Survive",
        artist: "Gloria Gaynor"
      },

      {
        title: "Since U Been Gone",
        artist: "Kelly Clarkson"
      },

      {
        title: "The Man",
        artist: "The Killers"
      }

    ]

  },


  anxiety: {

    title: "Anxiety",

    emoji: "😰",

    description:
      "Explore slower, familiar and emotionally gentle songs that may help create a calmer atmosphere.",

    songs: [

      {
        title: "A Thousand Years",
        artist: "Christina Perri"
      },

      {
        title: "Perfect",
        artist: "Ed Sheeran"
      },

      {
        title: "Photograph",
        artist: "Ed Sheeran"
      },

      {
        title: "Yellow",
        artist: "Coldplay"
      },

      {
        title: "Ocean Eyes",
        artist: "Billie Eilish"
      },

      {
        title: "Lovely",
        artist: "Billie Eilish & Khalid"
      },

      {
        title: "Until I Found You",
        artist: "Stephen Sanchez"
      },

      {
        title: "Adore You",
        artist: "Harry Styles"
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee"
      },

      {
        title: "What Was I Made For?",
        artist: "Billie Eilish"
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
        artist: "Surfaces"
      },

      {
        title: "Put Your Records On",
        artist: "Corinne Bailey Rae"
      },

      {
        title: "Lovely Day",
        artist: "Bill Withers"
      },

      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee"
      },

      {
        title: "Adore You",
        artist: "Harry Styles"
      },

      {
        title: "Best Part",
        artist: "Daniel Caesar ft. H.E.R."
      },

      {
        title: "Location",
        artist: "Khalid"
      },

      {
        title: "Golden Hour",
        artist: "JVKE"
      },

      {
        title: "Sweet Creature",
        artist: "Harry Styles"
      },

      {
        title: "So Easy (To Fall in Love)",
        artist: "Olivia Dean"
      }

    ]

  }

};


/* =========================================================
   APP STATE
   ========================================================= */

let currentEmotion = "";

let currentSongIndex = -1;

let currentQueue = [];


/* =========================================================
   PAGE SWITCHING
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

  pages.forEach(
    function(pageId) {

      const page =
        document.getElementById(pageId);

      if (page) {
        page.style.display = "none";
      }

    }
  );

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


/* =========================================================
   EMOTION
   ========================================================= */

function displayEmotion(emotion) {

  const data =
    moodData[emotion];

  if (!data) {
    return;
  }

  currentEmotion = emotion;

  currentQueue =
    [...data.songs];

  currentSongIndex = -1;


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

  if (!songList) {
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

        </div>

        <button
          type="button"
          class="listen-song-button"
        >
          🎵 Listen
        </button>

      `;


      card.addEventListener(
        "click",
        function(event) {

          if (
            event.target.tagName !==
            "BUTTON"
          ) {

            playSongAtIndex(index);

          }

        }
      );


      const listenButton =
        card.querySelector(
          ".listen-song-button"
        );


      listenButton.addEventListener(
        "click",
        function() {

          playSongAtIndex(index);

        }
      );


      songList.appendChild(card);

    }
  );

}


/* =========================================================
   PLAY SONG
   ========================================================= */

function playSongAtIndex(index) {

  if (
    index < 0 ||
    index >= currentQueue.length
  ) {
    return;
  }

  currentSongIndex = index;

  const song =
    currentQueue[index];


  trackSoundSpaceEvent(
    "song_selected",
    currentEmotion,
    `${song.title} — ${song.artist}`
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
    song.why ||
    "Selected to match the emotional atmosphere you chose.";


  const searchQuery =
    encodeURIComponent(
      `${song.title} ${song.artist}`
    );


  document.getElementById(
    "listen-link"
  ).href =
    "https://open.spotify.com/search/" +
    searchQuery;


  document.getElementById(
    "player-section"
  ).style.display =
    "block";


  document.getElementById(
    "player-section"
  ).scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


/* =========================================================
   NEXT SONG
   ========================================================= */

function nextSong() {

  if (!currentQueue.length) {
    return;
  }

  if (
    currentSongIndex === -1
  ) {

    playSongAtIndex(0);

    return;

  }

  currentSongIndex =
    (currentSongIndex + 1) %
    currentQueue.length;


  playSongAtIndex(
    currentSongIndex
  );

}


/* =========================================================
   PREVIOUS SONG
   ========================================================= */

function previousSong() {

  if (!currentQueue.length) {
    return;
  }

  if (
    currentSongIndex === -1
  ) {

    playSongAtIndex(
      currentQueue.length - 1
    );

    return;

  }

  currentSongIndex =
    (
      currentSongIndex - 1 +
      currentQueue.length
    ) %
    currentQueue.length;


  playSongAtIndex(
    currentSongIndex
  );

}


/* =========================================================
   SHUFFLE
   Plays a random next song
   ========================================================= */

function shuffleSong() {

  if (!currentQueue.length) {
    return;
  }

  let randomIndex =
    Math.floor(
      Math.random() *
      currentQueue.length
    );


  if (
    currentQueue.length > 1 &&
    randomIndex === currentSongIndex
  ) {

    randomIndex =
      (
        randomIndex + 1
      ) %
      currentQueue.length;

  }


  playSongAtIndex(
    randomIndex
  );

}


/* =========================================================
   RESHUFFLE
   Rearranges the entire queue
   ========================================================= */

function reshuffleQueue() {

  if (!currentQueue.length) {
    return;
  }

  for (
    let i =
      currentQueue.length - 1;

    i > 0;

    i--
  ) {

    const randomIndex =
      Math.floor(
        Math.random() *
        (i + 1)
      );


    [
      currentQueue[i],
      currentQueue[randomIndex]

    ] = [

      currentQueue[randomIndex],
      currentQueue[i]

    ];

  }


  currentSongIndex = -1;

  displaySongs();

}


/* =========================================================
   SURPRISE ME
   ========================================================= */

function surpriseMe() {

  shuffleSong();

}


/* =========================================================
   FEEDBACK
   ========================================================= */

function setupFeedback() {

  let selectedFit = "";
  let selectedHelpful = "";


  document
    .querySelectorAll(
      ".choice-button"
    )
    .forEach(
      function(button) {

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


  document
    .querySelectorAll(
      ".helpful-choice"
    )
    .forEach(
      function(button) {

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


      trackSoundSpaceEvent(
        "feedback",
        emotion || null,
        null,
        selectedHelpful || null,
        `Fit: ${selectedFit}. Improvement: ${improvement}. Liked: ${liked}`
      );


      const message =
        document.getElementById(
          "full-feedback-message"
        );


      if (message) {

        message.textContent =
          "✨ Thank you! Your feedback has been received.";

      }


      form.reset();


      selectedFit = "";
      selectedHelpful = "";


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


    totalUses.textContent =
      sessions.size;


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


    helpfulCount.textContent =
      helpfulResponses.length;


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
          counts[event.mood] !==
            undefined
        ) {

          counts[event.mood]++;

        }

      }
    );


    let mostUsed = null;
    let highestCount = 0;


    Object.keys(counts)
      .forEach(
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


    mostUsedEmotion.textContent =
      mostUsed
        ? mostUsed.charAt(0)
            .toUpperCase() +
          mostUsed.slice(1)
        : "—";


    emotionList.innerHTML = "";


    Object.keys(counts)
      .forEach(
        function(emotion) {

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


          emotionList.appendChild(
            row
          );

        }
      );


    const pageViews =
      events.filter(
        function(event) {

          return (
            event.event_type ===
            "page_view"
          );

        }
      );


    historyList.innerHTML = "";


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


            row.textContent =
              new Date(
                event.created_at
              ).toLocaleString();


            historyList.appendChild(
              row
            );

          }
        );

    }

  } catch (error) {

    console.error(
      "Could not load insights:",
      error
    );

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


    /* HOME */

    document
      .getElementById(
        "home-nav"
      )
      ?.addEventListener(
        "click",
        function() {

          showPage(
            "home-page"
          );

        }
      );


    /* WHY IT WORKS */

    document
      .getElementById(
        "why-nav"
      )
      ?.addEventListener(
        "click",
        function() {

          showPage(
            "why-page"
          );

        }
      );


    /* ABOUT */

    document
      .getElementById(
        "about-nav"
      )
      ?.addEventListener(
        "click",
        function() {

          showPage(
            "about-page"
          );

        }
      );


    /* FEEDBACK */

    document
      .getElementById(
        "feedback-nav"
      )
      ?.addEventListener(
        "click",
        function() {

          showPage(
            "feedback-page"
          );

        }
      );


    /* INSIGHTS */

    document
      .getElementById(
        "insights-nav"
      )
      ?.addEventListener(
        "click",
        function() {

          showPage(
            "insights-page"
          );

          displayInsights();

        }
      );


    /* BACK */

    document
      .getElementById(
        "back-button"
      )
      ?.addEventListener(
        "click",
        function() {

          showPage(
            "home-page"
          );

        }
      );


    /* SURPRISE */

    document
      .getElementById(
        "surprise-button"
      )
      ?.addEventListener(
        "click",
        surpriseMe
      );


    /* QUEUE CONTROLS */

    document
      .getElementById(
        "next-song"
      )
      ?.addEventListener(
        "click",
        nextSong
      );


    document
      .getElementById(
        "previous-song"
      )
      ?.addEventListener(
        "click",
        previousSong
      );


    document
      .getElementById(
        "shuffle-button"
      )
      ?.addEventListener(
        "click",
        shuffleSong
      );


    document
      .getElementById(
        "reshuffle-button"
      )
      ?.addEventListener(
        "click",
        reshuffleQueue
      );


    /* PLAYER CONTROLS */

    document
      .getElementById(
        "player-next"
      )
      ?.addEventListener(
        "click",
        nextSong
      );


    document
      .getElementById(
        "player-previous"
      )
      ?.addEventListener(
        "click",
        previousSong
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
      "SoundSpace loaded successfully!"
    );

  }
);
