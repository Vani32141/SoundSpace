/* =========================================================
   SOUNDSPACE
   FUNCTIONALITY + SUPABASE ANALYTICS
   DEVELOPER ACTIVITY EXCLUDED
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


/* Optional way to turn it OFF:
   Add ?developer=off to the URL
*/

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

  /* NEVER TRACK DEVELOPER */

  if (IS_DEVELOPER) {

    console.log(
      "Developer activity not tracked:",
      eventType
    );

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
        artist: "HUNTR/X, EJAE, Audrey Nuna & REI AMI",
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

    title: "😢 Sadness",

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
let shuffleQueue = [];
let currentSongIndex = 0;


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

  const pages =
    document.querySelectorAll(".page");


  pages.forEach(function(page) {

    page.classList.remove(
      "active-page"
    );

  });


  const target =
    document.getElementById(pageId);


  if (target) {

    target.classList.add(
      "active-page"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

}


/* =========================================================
   EMOTION DISPLAY
   ========================================================= */

function displayEmotion(emotion) {

  if (!moodData[emotion]) {
    return;
  }


  currentEmotion = emotion;


  const data =
    moodData[emotion];


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
   SONG LIST
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
          ${String(index + 1).padStart(2, "0")}
        </span>

        <span class="song-details">
          <strong>${song.title}</strong>

          <small>${song.artist}</small>

          <span class="song-why">
            <b>✨ Why this song fits:</b>
            ${song.why}
          </span>
        </span>

        <span class="song-arrow">→</span>
      `;


      card.addEventListener(
        "click",
        function() {

          startSongSession(song);

        }
      );


      songList.appendChild(card);

    }
  );

}


/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffleSongs(array) {

  const shuffled = [...array];


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
   START SONG
   ========================================================= */

function startSongSession(song) {

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
   PLAYER
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

  const spotify =
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


  if (emoji && currentEmotion) {

    emoji.textContent =
      moodData[currentEmotion].emoji;

  }


  if (position) {

    position.textContent =
      `${currentSongIndex + 1} / ${shuffleQueue.length}`;

  }


  if (spotify) {

    const query =
      encodeURIComponent(
        `${currentSong.title} ${currentSong.artist}`
      );


    spotify.href =
      "https://open.spotify.com/search/" +
      query;

  }


  displayQueue();

}


/* =========================================================
   QUEUE
   ========================================================= */

function displayQueue() {

  const queue =
    document.getElementById(
      "queue-list"
    );


  if (!queue) {
    return;
  }


  queue.innerHTML = "";


  shuffleQueue.forEach(
    function(song, index) {

      const item =
        document.createElement(
          "button"
        );


      item.type = "button";

      item.className =
        "queue-item";


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
          <strong>${song.title}</strong>
          <small>${song.artist}</small>
        </span>
      `;


      item.addEventListener(
        "click",
        function() {

          currentSongIndex = index;

          displayPlayer();

        }
      );


      queue.appendChild(item);

    }
  );

}


/* =========================================================
   NEXT SONG
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
   RESHUFFLE
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
   INSIGHTS
   ========================================================= */

async function displayInsights() {

  if (IS_DEVELOPER) {
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
      return;
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


    const total =
      document.getElementById(
        "insight-total"
      );


    if (total) {
      total.textContent =
        sessions.size;
    }


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
        counts[event.mood] !== undefined
      ) {

        counts[event.mood]++;

      }

    });


    Object.keys(counts).forEach(
      function(emotion) {

        const element =
          document.getElementById(
            "stat-" + emotion
          );


        if (element) {
          element.textContent =
            counts[emotion];
        }

      }
    );


    let yes = 0;
    let no = 0;


    events.forEach(function(event) {

      if (
        event.event_type ===
        "feedback"
      ) {

        if (event.helpful === "Yes") {
          yes++;
        }

        if (event.helpful === "No") {
          no++;
        }

      }

    });


    const yesElement =
      document.getElementById(
        "insight-yes"
      );

    const noElement =
      document.getElementById(
        "insight-no"
      );


    if (yesElement) {
      yesElement.textContent = yes;
    }

    if (noElement) {
      noElement.textContent = no;
    }


  } catch (error) {

    console.error(
      "Could not load insights:",
      error
    );

  }

}


/* =========================================================
   FEEDBACK
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
        );


      const selectedAnswer =
        document.querySelector(
          'input[name="calmer"]:checked'
        );


      const liked =
        document.getElementById("liked");

      const disliked =
        document.getElementById("disliked");

      const additional =
        document.getElementById(
          "additional-feedback"
        );


      const feedbackText = [

        liked ? liked.value.trim() : "",
        disliked ? disliked.value.trim() : "",
        additional ? additional.value.trim() : ""

      ]
        .filter(Boolean)
        .join("\n");


      await trackSoundSpaceEvent(

        "feedback",

        emotion && emotion.value
          ? emotion.value.toLowerCase()
          : currentEmotion,

        currentSong
          ? `${currentSong.title} — ${currentSong.artist}`
          : null,

        selectedAnswer
          ? selectedAnswer.value
          : null,

        feedbackText || null

      );


      const success =
        document.getElementById(
          "feedback-success"
        );


      if (success) {

        success.textContent =
          IS_DEVELOPER
            ? "Developer mode is on. Your feedback was not tracked."
            : "✨ Thank you! Your feedback has been saved.";

        success.hidden = false;

      }


      form.reset();

    }
  );

}


/* =========================================================
   START WEBSITE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    /* NAVIGATION TABS */

    document
      .querySelectorAll("[data-page]")
      .forEach(function(button) {

        button.addEventListener(
          "click",
          function() {

            const page =
              button.dataset.page;


            showPage(page);


            if (
              page === "insights"
            ) {

              displayInsights();

            }

          }
        );

      });


    /* EMOTION CARDS */

    document
      .querySelectorAll(".emotion-card")
      .forEach(function(card) {

        card.addEventListener(
          "click",
          function() {

            const emotion =
              card.dataset.emotion;


            if (!moodData[emotion]) {
              return;
            }


            currentEmotion =
              emotion;


            trackSoundSpaceEvent(
              "emotion_selected",
              emotion
            );


            displayEmotion(emotion);

            showPage(
              "emotion-page"
            );

          }
        );

      });


    /* BACK HOME */

    const backHome =
      document.getElementById(
        "back-home"
      );


    if (backHome) {

      backHome.addEventListener(
        "click",
        function() {

          showPage("home");

        }
      );

    }


    /* BACK TO SONGS */

    const backToEmotion =
      document.getElementById(
        "back-to-emotion"
      );


    if (backToEmotion) {

      backToEmotion.addEventListener(
        "click",
        function() {

          showPage(
            "emotion-page"
          );

        }
      );

    }


    /* NEXT */

    const next =
      document.getElementById(
        "next-button"
      );


    if (next) {

      next.addEventListener(
        "click",
        nextSong
      );

    }


    /* RESHUFFLE */

    const reshuffle =
      document.getElementById(
        "reshuffle-button"
      );


    if (reshuffle) {

      reshuffle.addEventListener(
        "click",
        reshuffleSongs
      );

    }


    /* FEEDBACK */

    setupFeedback();


    /* TRACK REAL VISITORS ONLY */

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
