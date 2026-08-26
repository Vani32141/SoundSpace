# script.js

/* =========================================================
   SOUNDSPACE
   WORKING VERSION FOR CURRENT index.html
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
   TRACK EVENT
   ========================================================= */

async function trackSoundSpaceEvent(
  eventType,
  mood = null,
  song = null,
  helpful = null,
  feedbackText = null
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

    const response = await fetch(
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
          "Its fast, upbeat rhythm, bright production and strongly positive message make it well suited to maintaining an already positive emotional state."
      },

      {
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        why:
          "The lively tempo, danceable rhythm and joyful lyrics create an energetic listening experience."
      },

      {
        title: "Levitating",
        artist: "Dua Lipa",
        why:
          "Its disco-inspired beat and energetic production give the song a playful and uplifting character."
      },

      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        why:
          "The strong funk groove and energetic tempo make it highly danceable and stimulating."
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
          "Its catchy rhythm and high-energy production make it suitable for an upbeat mood."
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
          "Its confident message and bright pop production can reinforce feelings of empowerment."
      },

      {
        title: "Roar",
        artist: "Katy Perry",
        why:
          "The energetic chorus and message of finding one's voice make it uplifting and motivating."
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
          "Its dramatic build and confident lyrics can shift frustration toward determination."
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
          "Its upbeat rhythm encourages emotional release and moving on from irritation."
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
          "Its message of overcoming hardship transforms negative experiences into resilience."
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


/* =========================================================
   APP STATE
   ========================================================= */

let currentEmotion = "";
let currentSong = null;


/* =========================================================
   PAGE SWITCHING
   Matches your exact HTML
   ========================================================= */

function showHomePage() {

  document.getElementById(
    "home-page"
  ).style.display = "block";

  document.getElementById(
    "emotion-page"
  ).style.display = "none";

  document.getElementById(
    "insights-page"
  ).style.display = "none";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function showEmotionPage() {

  document.getElementById(
    "home-page"
  ).style.display = "none";

  document.getElementById(
    "emotion-page"
  ).style.display = "block";

  document.getElementById(
    "insights-page"
  ).style.display = "none";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function showInsightsPage() {

  document.getElementById(
    "home-page"
  ).style.display = "none";

  document.getElementById(
    "emotion-page"
  ).style.display = "none";

  document.getElementById(
    "insights-page"
  ).style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

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


  if (
    !songList ||
    !currentEmotion
  ) {
    return;
  }


  songList.innerHTML = "";


  const songs =
    moodData[currentEmotion].songs;


  songs.forEach(
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

          playSong(song);

        }
      );


      songList.appendChild(card);

    }
  );

}


/* =========================================================
   PLAY SONG
   ========================================================= */

function playSong(song) {

  currentSong = song;


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


  const listenLink =
    document.getElementById(
      "listen-link"
    );


  title.textContent =
    song.title;


  artist.textContent =
    song.artist;


  const searchQuery =
    encodeURIComponent(
      `${song.title} ${song.artist}`
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
   SURPRISE ME
   ========================================================= */

function surpriseMe() {

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


  const randomSong =
    songs[randomIndex];


  playSong(randomSong);

}


/* =========================================================
   FEEDBACK
   ========================================================= */

function setupFeedback() {

  const feedbackButtons =
    document.querySelectorAll(
      ".feedback-button"
    );


  const feedbackMessage =
    document.getElementById(
      "feedback-message"
    );


  feedbackButtons.forEach(
    function(button) {

      button.addEventListener(
        "click",
        function() {

          const answer =
            button.dataset.feedback;


          trackSoundSpaceEvent(
            "feedback",
            currentEmotion || null,
            currentSong
              ? `${currentSong.title} — ${currentSong.artist}`
              : null,
            answer
          );


          if (
            feedbackMessage
          ) {

            if (
              IS_DEVELOPER
            ) {

              feedbackMessage.textContent =
                "Developer mode is on, so your activity was not tracked.";

            } else {

              feedbackMessage.textContent =
                "✨ Thank you for your feedback!";

            }

          }


          feedbackButtons.forEach(
            function(otherButton) {

              otherButton.disabled =
                true;

            }
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
      totalUses.textContent = "—";
    }

    if (helpfulCount) {
      helpfulCount.textContent = "—";
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


    /* Count unique sessions */

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


    /* Helpful responses */

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


    /* Emotion counts */

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


    /* Most used emotion */

    let mostUsed =
      null;

    let highestCount =
      0;


    Object.keys(counts).forEach(
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
          ? mostUsed.charAt(0)
              .toUpperCase() +
            mostUsed.slice(1)
          : "—";

    }


    /* Display emotion statistics */

    if (emotionList) {

      emotionList.innerHTML =
        "";


      Object.keys(counts).forEach(
        function(emotion) {

          const row =
            document.createElement(
              "div"
            );


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

    }


    /* Usage history */

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

              /*
               Convert Happiness
               into happiness
              */

              const emotion =
                card.dataset.emotion
                  .toLowerCase();


              if (
                !moodData[emotion]
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
        function() {

          showHomePage();

        }
      );

    }


    /* HOME NAVIGATION */

    const homeNav =
      document.getElementById(
        "home-nav"
      );


    if (homeNav) {

      homeNav.addEventListener(
        "click",
        showHomePage
      );

    }


    /* INSIGHTS NAVIGATION */

    const insightsNav =
      document.getElementById(
        "insights-nav"
      );


    if (insightsNav) {

      insightsNav.addEventListener(
        "click",
        function() {

          showInsightsPage();

          displayInsights();

        }
      );

    }


    /* INSIGHTS BACK */

    const insightsBack =
      document.getElementById(
        "insights-back-button"
      );


    if (insightsBack) {

      insightsBack.addEventListener(
        "click",
        showHomePage
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


    /* FEEDBACK */

    setupFeedback();


    /* TRACK REAL VISITORS */

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
