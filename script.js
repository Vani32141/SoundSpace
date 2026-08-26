# SoundSpace — Replacement `script.js`


/* =========================================================
   SOUNDSPACE — FIXED SCRIPT
   Tabs • Emotions • Songs • Player • Analytics
   ========================================================= */


/* =========================================================
   1. SUPABASE
   ========================================================= */

const SUPABASE_URL =
  "https://bjfmlknorxlztxkxlebd.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_NDHWFaIHfs6IqvmbZiHrCg_0H2ZXZbU";


/* =========================================================
   2. DEVELOPER MODE
   ========================================================= */

const DEVELOPER_MODE_KEY =
  "soundspace_developer_mode";

const urlParameters =
  new URLSearchParams(window.location.search);

if (urlParameters.get("developer") === "on") {

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

const IS_DEVELOPER =
  localStorage.getItem(DEVELOPER_MODE_KEY) === "true";


/* =========================================================
   3. SESSION
   ========================================================= */

let SOUNDSPACE_SESSION_ID =
  sessionStorage.getItem("soundspace_session_id");

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
   4. ANALYTICS
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
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Prefer": "return=minimal"
        },

        body: JSON.stringify({

          event_type: eventType,

          session_id: SOUNDSPACE_SESSION_ID,

          page: window.location.pathname,

          mood: mood,

          song: song,

          helpful: helpful,

          feedback_text: feedbackText

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
   5. SONG DATA
   IMPORTANT:
   Keep your COMPLETE moodData object here.
   Copy your existing moodData object exactly as it is.
   ========================================================= */


/* =========================================================
   PASTE YOUR CURRENT moodData HERE
   ========================================================= */

const moodData = {

  happiness: {
    title: "😊 Happiness",
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
          "The lively tempo, danceable rhythm and joyful lyrics create an energetic listening experience associated with positive and high-energy emotions."
      },
      {
        title: "Levitating",
        artist: "Dua Lipa",
        why:
          "Its disco-inspired beat, steady rhythm and energetic production give the song a playful and uplifting character."
      }
    ]
  },

  sadness: {
    title: "😢 Sadness",
    emoji: "😢",
    description:
      "Find comfort, emotional connection and gentle warmth through reflective music.",

    songs: [
      {
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        why:
          "The slow pace, emotional vocals and lyrics about loss and longing can help listeners connect with and process feelings of sadness."
      }
    ]
  },

  anger: {
    title: "😡 Anger",
    emoji: "😡",
    description:
      "Use powerful music as a structured way to release energy and shift your emotional direction.",

    songs: [
      {
        title: "Believer",
        artist: "Imagine Dragons",
        why:
          "Its intense percussion and powerful vocals provide an energetic outlet for strong emotions."
      }
    ]
  },

  anxiety: {
    title: "😟 Anxiety",
    emoji: "😟",
    description:
      "Explore slower, familiar and emotionally gentle songs that may help create a calmer atmosphere.",

    songs: [
      {
        title: "A Thousand Years",
        artist: "Christina Perri",
        why:
          "Its slow tempo and gentle arrangement create a softer listening environment."
      }
    ]
  },

  irritation: {
    title: "😤 Irritation",
    emoji: "😤",
    description:
      "Take a musical reset with lighter, warmer and more relaxed songs.",

    songs: [
      {
        title: "Sunday Best",
        artist: "Surfaces",
        why:
          "Its relaxed rhythm and optimistic tone create an easy-going atmosphere."
      }
    ]
  }

};


/* =========================================================
   6. APP STATE
   ========================================================= */

let currentEmotion = "";
let currentSong = null;
let shuffleQueue = [];
let currentSongIndex = 0;


/* =========================================================
   7. PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

  const pages =
    document.querySelectorAll(".page");

  pages.forEach(function(page) {

    page.classList.remove(
      "active-page"
    );

  });

  const targetPage =
    document.getElementById(pageId);

  if (!targetPage) {

    console.error(
      "Page not found:",
      pageId
    );

    return;

  }

  targetPage.classList.add(
    "active-page"
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   8. DISPLAY EMOTION
   ========================================================= */

function displayEmotion(emotion) {

  const data =
    moodData[emotion];

  if (!data) {
    return;
  }

  currentEmotion = emotion;

  const title =
    document.getElementById(
      "emotion-title"
    );

  const description =
    document.getElementById(
      "emotion-description"
    );

  const emoji =
    document.getElementById(
      "emotion-emoji"
    );

  if (title) {
    title.textContent = data.title;
  }

  if (description) {
    description.textContent =
      data.description;
  }

  if (emoji) {
    emoji.textContent = data.emoji;
  }

  displaySongs();

}


/* =========================================================
   9. DISPLAY SONGS
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

  if (
    !currentEmotion ||
    !moodData[currentEmotion]
  ) {
    return;
  }

  const songs =
    moodData[currentEmotion].songs;

  songs.forEach(function(song, index) {

    const card =
      document.createElement("button");

    card.type = "button";

    card.className =
      "song-card";

    card.dataset.songIndex =
      index;

    card.innerHTML = `

      <span class="song-number">
        ${String(index + 1).padStart(2, "0")}
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

    songList.appendChild(card);

  });

}


/* =========================================================
   10. SHUFFLE
   ========================================================= */

function shuffleSongs(array) {

  const shuffled =
    [...array];

  for (
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      shuffled[i],
      shuffled[j]
    ] =
    [
      shuffled[j],
      shuffled[i]
    ];

  }

  return shuffled;

}


/* =========================================================
   11. START SONG
   ========================================================= */

function startSongSession(song) {

  if (!song) {
    return;
  }

  currentSong = song;

  trackSoundSpaceEvent(
    "song_selected",
    currentEmotion,
    `${song.title} — ${song.artist}`
  );

  const otherSongs =
    moodData[currentEmotion]
      .songs
      .filter(function(item) {

        return !(
          item.title === song.title &&
          item.artist === song.artist
        );

      });

  shuffleQueue = [
    song,
    ...shuffleSongs(otherSongs)
  ];

  currentSongIndex = 0;

  displayPlayer();

  showPage("player-page");

}


/* =========================================================
   12. DISPLAY PLAYER
   ========================================================= */

function displayPlayer() {

  if (!shuffleQueue.length) {
    return;
  }

  currentSong =
    shuffleQueue[currentSongIndex];

  const title =
    document.getElementById(
      "player-title"
    );

  const artist =
    document.getElementById(
      "player-artist"
    );

  const reason =
    document.getElementById(
      "player-reason"
    );

  const emoji =
    document.getElementById(
      "player-emoji"
    );

  const position =
    document.getElementById(
      "song-position"
    );

  const spotifyLink =
    document.getElementById(
      "spotify-link"
    );

  if (title) {
    title.textContent =
      currentSong.title;
  }

  if (artist) {
    artist.textContent =
      currentSong.artist;
  }

  if (reason) {
    reason.textContent =
      currentSong.why;
  }

  if (
    emoji &&
    moodData[currentEmotion]
  ) {
    emoji.textContent =
      moodData[currentEmotion].emoji;
  }

  if (position) {

    position.textContent =
      `${currentSongIndex + 1} / ${shuffleQueue.length}`;

  }

  if (spotifyLink) {

    const search =
      encodeURIComponent(
        `${currentSong.title} ${currentSong.artist}`
      );

    spotifyLink.href =
      `https://open.spotify.com/search/${search}`;

  }

  displayQueue();

}


/* =========================================================
   13. DISPLAY QUEUE
   ========================================================= */

function displayQueue() {

  const queueList =
    document.getElementById(
      "queue-list"
    );

  if (!queueList) {
    return;
  }

  queueList.innerHTML = "";

  shuffleQueue.forEach(
    function(song, index) {

      const item =
        document.createElement("button");

      item.type = "button";

      item.className =
        "queue-item";

      item.dataset.queueIndex =
        index;

      if (
        index === currentSongIndex
      ) {

        item.classList.add(
          "current-song"
        );

      }

      item.innerHTML = `

        <span class="queue-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <span class="queue-info">

          <strong>
            ${song.title}
          </strong>

          <small>
            ${song.artist}
          </small>

        </span>

      `;

      queueList.appendChild(item);

    }
  );

}


/* =========================================================
   14. NEXT SONG
   ========================================================= */

function nextSong() {

  if (!shuffleQueue.length) {
    return;
  }

  currentSongIndex++;

  if (
    currentSongIndex >=
    shuffleQueue.length
  ) {

    currentSongIndex = 0;

    shuffleQueue =
      shuffleSongs(shuffleQueue);

  }

  displayPlayer();

}


/* =========================================================
   15. RESHUFFLE
   ========================================================= */

function reshuffleSongs() {

  if (!currentEmotion) {
    return;
  }

  shuffleQueue =
    shuffleSongs(
      moodData[currentEmotion].songs
    );

  currentSongIndex = 0;

  displayPlayer();

}


/* =========================================================
   16. ONE CLICK SYSTEM
   THIS FIXES THE TABS AND EMOTIONS
   ========================================================= */

document.addEventListener(
  "click",
  function(event) {

    /* NAVIGATION */

    const pageButton =
      event.target.closest(
        "[data-page]"
      );

    if (pageButton) {

      const page =
        pageButton.dataset.page;

      showPage(page);

      if (page === "insights") {
        displayInsights();
      }

      return;

    }


    /* EMOTION CARDS */

    const emotionCard =
      event.target.closest(
        ".emotion-card"
      );

    if (emotionCard) {

      const emotion =
        emotionCard.dataset.emotion;

      if (!moodData[emotion]) {
        return;
      }

      currentEmotion = emotion;

      trackSoundSpaceEvent(
        "emotion_selected",
        emotion
      );

      displayEmotion(emotion);

      showPage("emotion-page");

      return;

    }


    /* SONG CARDS */

    const songCard =
      event.target.closest(
        ".song-card"
      );

    if (songCard) {

      const index =
        Number(
          songCard.dataset.songIndex
        );

      const song =
        moodData[currentEmotion]
          .songs[index];

      startSongSession(song);

      return;

    }


    /* QUEUE */

    const queueItem =
      event.target.closest(
        ".queue-item"
      );

    if (queueItem) {

      currentSongIndex =
        Number(
          queueItem.dataset.queueIndex
        );

      displayPlayer();

      return;

    }


    /* BACK HOME */

    if (
      event.target.closest(
        "#back-home"
      )
    ) {

      showPage("home");

      return;

    }


    /* BACK TO SONGS */

    if (
      event.target.closest(
        "#back-to-emotion"
      )
    ) {

      displayEmotion(
        currentEmotion
      );

      showPage(
        "emotion-page"
      );

      return;

    }


    /* NEXT */

    if (
      event.target.closest(
        "#next-button"
      )
    ) {

      nextSong();

      return;

    }


    /* RESHUFFLE */

    if (
      event.target.closest(
        "#reshuffle-button"
      )
    ) {

      reshuffleSongs();

      return;

    }

  }
);


/* =========================================================
   17. INSIGHTS
   ========================================================= */

async function getSharedInsights() {

  try {

    const response =
      await fetch(
        `${SUPABASE_URL}/rest/v1/usage_events?select=*`,
        {
          headers: {
            "apikey": SUPABASE_KEY,
            "Authorization":
              `Bearer ${SUPABASE_KEY}`
          }
        }
      );

    if (!response.ok) {
      return [];
    }

    return await response.json();

  } catch (error) {

    console.error(error);

    return [];

  }

}


async function displayInsights() {

  const events =
    await getSharedInsights();

  const sessions =
    new Set();

  events.forEach(function(event) {

    if (event.session_id) {

      sessions.add(
        event.session_id
      );

    }

  });

  const total =
    document.getElementById(
      "insight-total"
    );

  if (total) {
    total.textContent =
      sessions.size;
  }

  const emotions = [
    "happiness",
    "sadness",
    "anger",
    "anxiety",
    "irritation"
  ];

  emotions.forEach(function(emotion) {

    const count =
      events.filter(function(event) {

        return (
          event.event_type ===
            "emotion_selected" &&
          event.mood === emotion
        );

      }).length;

    const element =
      document.getElementById(
        `stat-${emotion}`
      );

    if (element) {
      element.textContent = count;
    }

  });

}


/* =========================================================
   18. FEEDBACK
   ========================================================= */

function setupFeedback() {

  const form =
    document.getElementById(
      "feedback-form"
    );

  if (!form) {
    return;
  }

  form.addEventListener(
    "submit",
    async function(event) {

      event.preventDefault();

      const emotion =
        document.getElementById(
          "feedback-emotion"
        ).value;

      const helpful =
        document.querySelector(
          'input[name="calmer"]:checked'
        );

      const liked =
        document.getElementById(
          "liked"
        ).value;

      const disliked =
        document.getElementById(
          "disliked"
        ).value;

      const additional =
        document.getElementById(
          "additional-feedback"
        ).value;

      const feedbackText = [
        liked,
        disliked,
        additional
      ]
        .filter(Boolean)
        .join("\n");

      await trackSoundSpaceEvent(
        "feedback",
        emotion || currentEmotion,
        currentSong
          ? `${currentSong.title} — ${currentSong.artist}`
          : null,
        helpful
          ? helpful.value
          : null,
        feedbackText
      );

      const success =
        document.getElementById(
          "feedback-success"
        );

      if (success) {

        success.textContent =
          IS_DEVELOPER
            ? "Developer mode is on. This feedback was not saved."
            : "✨ Thank you! Your feedback has been saved.";

        success.hidden = false;

      }

      form.reset();

    }
  );

}


/* =========================================================
   19. START
   ========================================================= */

function startSoundSpace() {

  console.log(
    "SoundSpace is running!"
  );

  setupFeedback();

  if (!IS_DEVELOPER) {

    trackSoundSpaceEvent(
      "page_view"
    );

  } else {

    console.log(
      "Developer mode is ON."
    );

  }

}


if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startSoundSpace
  );

} else {

  startSoundSpace();

}

